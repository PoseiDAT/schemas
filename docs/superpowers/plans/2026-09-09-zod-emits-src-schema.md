# Zod Emits `src/schema` (2020-12) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Zod under `src/validators/` emits committed 2020-12 JSON into `src/schema` on normal build; publish flat `lib/schema` from that tree; keep multi-dialect `generate:json-schema` for CI/CD only (gitignored).

**Architecture:** Shared `jsonSchemaOverride` + `emitJsonSchema({ target, outDir })`. Build emits only 2020-12 → `src/schema`. Multi-dialect CLI writes `generated/json-schema/{draft-07,2020-12}`. Default gate is Zod ↔ AJV(`src/schema`) plus `src/schema` freshness. Zod is source of truth; never hand-edit `src/schema`.

**Tech Stack:** Zod 4 `z.toJSONSchema`, AJV 8 (2020), TypeScript 6, Jest 30, `tsx`, `jsonschema2md`.

## Global Constraints

- Live Zod source is `src/validators/` (generate/build import it). Do not author in leftover `src/zod/`.
- **Zod is source of truth.** If `safeParse` and AJV on emitted JSON disagree, change Zod and/or shared emit overrides, then re-emit, until they agree. Never hand-patch `src/schema`. Do not weaken fixtures to paper over splits.
- Published JSON: flat `lib/schema` = **2020-12 only**. No dialect folders under `lib/`.
- `src/schema` is **committed**, generated, never hand-edited. `npm test` fails if stale after emit.
- `npm run build` regenerates **only** `src/schema` (2020-12). `generate:json-schema` writes both dialects under `generated/` for CI/CD; **not committed**; not part of local freshness.
- No required byte-equality between `src/schema` and `generated/2020-12` until release CI exists.
- Default parity: Zod ↔ AJV(`src/schema` as 2020-12) on `test/schema-parity/fixtures.ts`. Draft-07 parity deferred.
- Leap seconds: `POSEIDAT_DATE_TIME_PATTERN` seconds must be `[0-5]\d` so AJV and Zod reject `2021-01-01T23:59:60Z`; add formats + parity fixtures.
- Remove `prepare`. Add `prepublishOnly`: `npm run build`.
- Document publish-path breaks as **0.2.0** in README; **do not bump** `package.json` version (leave `0.1.0`).
- Docs: regenerate, commit churn; delete orphans; keep only `docs/README.md`, `docs/_coverpage.md`, `docs/_media/**`.
- Do not `git push`. Do not skip hooks. Do not change `build:copy-schema` destination layout.
- Stay on branch `feature/zod-json-schema-parity-suite` in this workspace (no worktree unless asked).

## File map

| Path | Role |
|---|---|
| `src/validators/formats.ts` | Tighten `POSEIDAT_DATE_TIME_PATTERN` seconds to `[0-5]\d` |
| `scripts/json-schema-overrides.ts` | Shared `jsonSchemaOverride` callback |
| `scripts/emit-json-schema.ts` | `emitJsonSchema({ target, outDir })` |
| `scripts/generate-src-schema.ts` | CLI: 2020-12 → `src/schema` |
| `scripts/generate-json-schema.ts` | CLI: both dialects → `generated/json-schema/` |
| `package.json` | build/test scripts; remove `prepare`; add `prepublishOnly` |
| `.gitignore` | Ignore `generated/` |
| `src/schema/**` | Replaced by Zod 2020-12 emit (committed) |
| `generated/json-schema/**` | Stop tracking |
| `test/schema-parity/*` | Narrow to Zod ↔ AJV(`src/schema` 2020-12) |
| `test/validators/formats.test.ts` | Leap-second pattern + parse cases |
| `test/schema-parity/fixtures.ts` | Leap-second invalid arrival |
| `docs/**` | Regenerate; prune orphans |
| `README.md` | Contributor + Validation API + 0.2.0 breaking notes |

---

### Task 1: Reject leap seconds in the shared date-time pattern

**Files:**
- Modify: `src/validators/formats.ts`
- Modify: `test/validators/formats.test.ts`
- Modify: `test/schema-parity/fixtures.ts` (fixture only; AJV may still accept until Task 4 regenerates `src/schema` — mark concern in report if you add it early; preferred: add the formats tests here and the parity fixture in Task 4)

**Interfaces:**
- Consumes: existing `poseidatDateTime`
- Produces: `POSEIDAT_DATE_TIME_PATTERN` with seconds `[0-5]\d`

- [ ] **Step 1: Write failing pattern / formats tests**

Append to `test/validators/formats.test.ts` inside the `poseidatDateTime` describe:

```ts
  test("pattern rejects a leap second", () => {
    expect(
      new RegExp(POSEIDAT_DATE_TIME_PATTERN).test("2021-01-01T23:59:60Z"),
    ).toBe(false);
  });

  test("rejects a leap second timestamp", () => {
    expect(poseidatDateTime.safeParse("2021-01-01T23:59:60Z").success).toBe(false);
  });
```

Import `POSEIDAT_DATE_TIME_PATTERN` from `../../src/validators/formats` (alongside existing imports).

- [ ] **Step 2: Run tests to verify the pattern case fails**

Run: `npx jest test/validators/formats.test.ts --coverage=false`

Expected: FAIL — `pattern rejects a leap second` (current pattern uses `\\d{2}` for seconds). The `rejects a leap second timestamp` case may already pass via `z.iso.datetime`; that is fine.

- [ ] **Step 3: Tighten the pattern**

In `src/validators/formats.ts` replace the pattern constant with:

```ts
export const POSEIDAT_DATE_TIME_PATTERN =
  '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:[0-5]\\d(?:\\.\\d+)?(?:Z|[+-]\\d{2}:\\d{2})$';
```

Do not change calendar refine or uuid/date helpers.

- [ ] **Step 4: Re-run formats tests**

Run: `npx jest test/validators/formats.test.ts --coverage=false`

Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/validators/formats.ts test/validators/formats.test.ts
git commit -m "$(cat <<'EOF'
fix: reject leap-second timestamps in PoseiDAT date-times

EOF
)"
```

---

### Task 2: Shared overrides + `emitJsonSchema`

**Files:**
- Create: `scripts/json-schema-overrides.ts`
- Create: `scripts/emit-json-schema.ts`
- Modify: `scripts/generate-json-schema.ts` (thin multi-dialect CLI)
- Create: `scripts/generate-src-schema.ts` (2020-12 → `src/schema`)

**Interfaces:**
- Consumes: `poseidatRegistry`, `POSEIDAT_DATE_TIME_PATTERN`, `poseidatDate`, `fishingCatchSchema` from `../src/validators`
- Produces:
  - `jsonSchemaOverride(ctx: z.core.JSONSchema.OverrideContext): void` (or the exact Zod 4 override ctx type used today)
  - `emitJsonSchema(options: { target: 'draft-07' | 'draft-2020-12'; outDir: string }): void`

- [ ] **Step 1: Extract overrides**

Create `scripts/json-schema-overrides.ts`:

```ts
import {
  fishingCatchSchema,
  POSEIDAT_DATE_TIME_PATTERN,
  poseidatDate,
} from '../src/validators';

// Use the same ctx shape Zod's z.toJSONSchema override provides.
export const jsonSchemaOverride = (ctx: {
  zodSchema: unknown;
  jsonSchema: {
    type?: string;
    format?: string;
    pattern?: string;
    oneOf?: unknown;
  };
}): void => {
  if (ctx.jsonSchema.format === 'date-time') {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'date-time';
    ctx.jsonSchema.pattern = POSEIDAT_DATE_TIME_PATTERN;
  }
  if (ctx.zodSchema === poseidatDate) {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'date';
    delete (ctx.jsonSchema as { pattern?: string }).pattern;
  }
  if (ctx.zodSchema === fishingCatchSchema) {
    ctx.jsonSchema.oneOf = [
      { required: ['weight'] },
      { required: ['number_of_fish'] },
    ];
  }
  if (ctx.jsonSchema.format === 'uuid') {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'uuid';
    delete (ctx.jsonSchema as { pattern?: string }).pattern;
  }
};
```

If TypeScript requires importing Zod's override type, use that instead of the inline ctx type — behaviour must match today's `scripts/generate-json-schema.ts` override block.

- [ ] **Step 2: Implement `emitJsonSchema`**

Create `scripts/emit-json-schema.ts`:

```ts
import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import * as z from 'zod';
import { poseidatRegistry } from '../src/validators';
import '../src/validators';
import { jsonSchemaOverride } from './json-schema-overrides';

const ORIGIN = 'https://poseidat.org/schema/';

export type JsonSchemaTarget = 'draft-07' | 'draft-2020-12';

const pathFromId = (id: string): string => {
  if (!id.startsWith(ORIGIN)) {
    throw new Error(`Refusing to write schema with unexpected $id: ${id}`);
  }
  return id.slice(ORIGIN.length);
};

export const emitJsonSchema = ({
  target,
  outDir,
}: {
  target: JsonSchemaTarget;
  outDir: string;
}): void => {
  const result = z.toJSONSchema(poseidatRegistry, {
    target,
    uri: (id) => id,
    override: jsonSchemaOverride,
  });

  const schemas = result.schemas as Record<string, { $id?: string }>;
  const files = Object.entries(schemas)
    .filter(([key]) => key !== '__shared')
    .map(([key, schema]) => ({
      rel: pathFromId(schema.$id ?? key),
      schema,
    }));

  rmSync(outDir, { recursive: true, force: true });

  for (const { rel, schema } of files) {
    const file = join(outDir, rel);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, `${JSON.stringify(schema, null, 2)}\n`, 'utf8');
  }
};
```

- [ ] **Step 3: Thin CLIs**

Replace `scripts/generate-json-schema.ts` with:

```ts
import { join } from 'path';
import { emitJsonSchema } from './emit-json-schema';

const ROOT = join(process.cwd(), 'generated', 'json-schema');

export const generateJsonSchema = (outputRoot = ROOT): void => {
  emitJsonSchema({
    target: 'draft-07',
    outDir: join(outputRoot, 'draft-07'),
  });
  emitJsonSchema({
    target: 'draft-2020-12',
    outDir: join(outputRoot, '2020-12'),
  });
};

if (require.main === module) {
  generateJsonSchema();
}
```

Create `scripts/generate-src-schema.ts`:

```ts
import { join } from 'path';
import { emitJsonSchema } from './emit-json-schema';

const SRC_SCHEMA = join(process.cwd(), 'src', 'schema');

export const generateSrcSchema = (): void => {
  emitJsonSchema({
    target: 'draft-2020-12',
    outDir: SRC_SCHEMA,
  });
};

if (require.main === module) {
  generateSrcSchema();
}
```

- [ ] **Step 4: Smoke the multi-dialect CLI**

Run: `npx tsx scripts/generate-json-schema.ts`

Expected: `generated/json-schema/draft-07` and `generated/json-schema/2020-12` exist; a date-time field (e.g. `generated/json-schema/2020-12/core/base-entry.json` `revision`) contains pattern with `[0-5]\\d` for seconds.

Do **not** run `generate-src-schema` yet (that is Task 4).

- [ ] **Step 5: Commit**

```bash
git add scripts/json-schema-overrides.ts scripts/emit-json-schema.ts scripts/generate-json-schema.ts scripts/generate-src-schema.ts
git commit -m "$(cat <<'EOF'
refactor: share JSON Schema emit overrides between build and dialects

EOF
)"
```

---

### Task 3: Wire `build` / `test` / publish hooks

**Files:**
- Modify: `package.json`
- Modify: `.gitignore`

**Interfaces:**
- Produces npm scripts:
  - `"build:schema": "tsx scripts/generate-src-schema.ts"`
  - `"build": "npm-run-all build:clean build:schema build:compile build:copy-schema build:docs"`
  - `"test:schema-fresh": "git diff --exit-code -- src/schema"`
  - `"test": "npm-run-all build:schema test:schema-fresh typecheck test:jest"`
  - remove `"prepare"`
  - add `"prepublishOnly": "npm run build"`
  - keep `"generate:json-schema": "tsx scripts/generate-json-schema.ts"`

- [ ] **Step 1: Update `package.json` scripts**

Apply exactly:

```json
"build:clean": "rm -rf lib/schema",
"build:schema": "tsx scripts/generate-src-schema.ts",
"build:compile": "tsc -b --verbose",
"build:copy-schema": "cp -r src/schema lib",
"build:docs": "rm -rf docs/schemas && jsonschema2md -x docs/schemas -e json -d src/schema -o docs",
"build": "npm-run-all build:clean build:schema build:compile build:copy-schema build:docs",
"generate:json-schema": "tsx scripts/generate-json-schema.ts",
"prepublishOnly": "npm run build",
"test:schema-fresh": "git diff --exit-code -- src/schema",
"test:jest": "jest --silent --coverage test/",
"test": "npm-run-all build:schema test:schema-fresh typecheck test:jest",
```

Delete the `prepare` script key entirely. Delete `test:generated-fresh` if present. Leave `"version": "0.1.0"`.

- [ ] **Step 2: Ignore `generated/`**

Append to `.gitignore`:

```
# Multi-dialect JSON Schema emit (CI/CD only; not committed)
generated
```

- [ ] **Step 3: Verify script wiring without cutting over `src/schema` yet**

Run: `node -e "const p=require('./package.json'); console.log(p.scripts.build); console.log(p.scripts.test); console.log(p.scripts.prepare); console.log(p.scripts.prepublishOnly)"`

Expected: `build` includes `build:schema`; `test` includes `build:schema` + `test:schema-fresh`; `prepare` is `undefined`; `prepublishOnly` is `npm run build`.

Do **not** run full `npm test` yet (Task 4 replaces `src/schema`).

- [ ] **Step 4: Commit**

```bash
git add package.json .gitignore
git commit -m "$(cat <<'EOF'
chore: emit src/schema on build and drop prepare

EOF
)"
```

---

### Task 4: Cut over `src/schema`, drop `generated/` from git, narrow parity

**Files:**
- Regenerate: `src/schema/**`
- Delete from git: `generated/json-schema/**`
- Modify: `test/schema-parity/schema-behavior.test.ts`
- Modify: `test/schema-parity/ajv-suite.ts` (optional cleanup of unused exports)
- Modify: `test/schema-parity/fixtures.ts` (leap-second fixture)

**Interfaces:**
- Consumes: `emitJsonSchema` via `npm run build:schema`
- Produces: committed 2020-12 `src/schema`; parity suite with one AJV column on `src/schema` dialect `2020-12`

- [ ] **Step 1: Add leap-second parity fixture**

In `test/schema-parity/fixtures.ts`, append to the invalid cases (near the other arrival date-time cases):

```ts
  {
    name: 'arrival / leap second activity_date',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), activity_date: '2021-01-01T23:59:60Z' },
    valid: false,
  },
```

- [ ] **Step 2: Narrow `schema-behavior.test.ts`**

Replace the file contents with:

```ts
import { SchemaId } from "./schema-ids";
import { schemaFixtures } from "./fixtures";
import * as zodSchemas from "../../src/validators";
import { zodBySchemaId } from "../../src/validators/by-id";
import {
  CURRENT_SCHEMA_DIR,
  createSchemaSuite,
} from "./ajv-suite";

describe("Published JSON Schema behaviour (AJV 2020-12 on src/schema)", () => {
  const published = createSchemaSuite({
    name: "src-schema",
    schemaDir: CURRENT_SCHEMA_DIR,
    dialect: "2020-12",
  });

  test("loads every published schema id used by the fixtures", () => {
    for (const schemaId of Object.values(SchemaId)) {
      expect(published.hasSchema(schemaId)).toBe(true);
    }
  });

  test.each(schemaFixtures)("$name", (fixture) => {
    const result = published.validate(fixture.schemaId, fixture.data);
    expect({
      name: fixture.name,
      valid: result.valid,
    }).toEqual({
      name: fixture.name,
      valid: fixture.valid,
      errors: result.valid === fixture.valid ? undefined : result.errors,
    });
  });
});

describe("Zod and published JSON Schema agree", () => {
  const published = createSchemaSuite({
    name: "src-schema",
    schemaDir: CURRENT_SCHEMA_DIR,
    dialect: "2020-12",
  });

  test("loads the public Zod schema barrel", () => {
    expect(Object.values(zodSchemas)).toEqual(
      expect.arrayContaining(Object.values(zodBySchemaId)),
    );
  });

  test.each(schemaFixtures)("$name", (fixture) => {
    const ajvOk = published.validate(fixture.schemaId, fixture.data).valid;
    const zodOk = zodBySchemaId[fixture.schemaId].safeParse(
      fixture.data,
    ).success;

    expect({
      name: fixture.name,
      ajv: ajvOk,
      zod: zodOk,
    }).toEqual({
      name: fixture.name,
      ajv: fixture.valid,
      zod: fixture.valid,
    });
  });
});
```

Fix the first `test.each` expectation if the `errors` field makes asymmetric expects awkward — the required behaviour is: AJV result boolean equals `fixture.valid`, and in the second describe AJV and Zod both equal `fixture.valid`. Prefer the second describe's shape for both if simpler:

```ts
    expect({
      name: fixture.name,
      valid: result.valid,
    }).toEqual({
      name: fixture.name,
      valid: fixture.valid,
    });
```

Remove unused imports of `GENERATED_*` dirs. You may leave the constants in `ajv-suite.ts` or delete them — if unused, delete to avoid lint noise.

- [ ] **Step 3: Emit `src/schema` and drop `generated/` from git**

Run:

```bash
npm run build:schema
git rm -r --cached generated/json-schema
```

Confirm `src/schema/core/base-entry.json` (or equivalent) has `"$schema": "https://json-schema.org/draft/2020-12/schema"` and date-time `pattern` uses `[0-5]\\d`.

- [ ] **Step 4: Run parity + formats**

Run: `npx jest test/schema-parity/schema-behavior.test.ts test/validators/formats.test.ts --coverage=false`

Expected: PASS. If AJV and Zod disagree on any fixture, **change Zod or shared overrides**, re-run `npm run build:schema`, and re-test. Do not hand-edit `src/schema`. Do not weaken fixtures.

- [ ] **Step 5: Commit**

```bash
git add src/schema test/schema-parity package.json .gitignore
# include deletion of generated/json-schema from the index
git add -u generated/json-schema
git commit -m "$(cat <<'EOF'
feat: publish Zod-generated 2020-12 schemas from src/schema

EOF
)"
```

---

### Task 5: Regenerate docs and prune orphans

**Files:**
- Regenerate under `docs/`
- Keep: `docs/README.md`, `docs/_coverpage.md`, `docs/_media/**`
- Delete: every other path under `docs/` that is not reproduced by `jsonschema2md` after regen (including `*allof*` / stale composition pages)

**Interfaces:**
- Consumes: current `src/schema` (2020-12)
- Produces: committed docs matching new schemas

- [ ] **Step 1: Snapshot keep-list**

```bash
mkdir -p /tmp/poseidat-docs-keep
cp docs/README.md docs/_coverpage.md /tmp/poseidat-docs-keep/
cp -R docs/_media /tmp/poseidat-docs-keep/
```

- [ ] **Step 2: Regenerate docs**

Run: `npm run build:docs`

If `jsonschema2md` writes an unwanted top-level `out/` or similar, delete it.

- [ ] **Step 3: Restore keep-list and delete orphans**

```bash
cp /tmp/poseidat-docs-keep/README.md docs/README.md
cp /tmp/poseidat-docs-keep/_coverpage.md docs/_coverpage.md
rm -rf docs/_media
cp -R /tmp/poseidat-docs-keep/_media docs/_media
```

Then delete schema-doc orphans: any file under `docs/` that is **not** in the keep-list and was **not** written/updated by this regen in a way that is still referenced. Practical approach:

```bash
# After regen, list files that still look like old composition docs
ls docs | rg -i 'allof|all-of' || true
```

Delete those. Also remove any other stale schema markdown that `jsonschema2md` no longer emits: compare `git status docs` — files that remain unmodified from the pre-cutover tree and are not keep-list should be `git rm`'d if they are obsolete schema pages (e.g. old `arrival-allof-*.md`). When unsure, prefer deleting schema property pages that are unreferenced by the new `docs/README.md` sidebar/index that jsonschema2md wrote (after restoring the hand `docs/README.md`, use the tool's generated index if it wrote a different readme name — if jsonschema2md overwrote `docs/README.md`, restore the hand keep-list README and keep the generated schema pages).

Hand `docs/README.md` is Docsify entry — restore it from the keep snapshot after regen so Pages navigation stays intentional. Schema markdown files from jsonschema2md stay.

- [ ] **Step 4: Sanity check keep-list**

```bash
test -f docs/README.md && test -f docs/_coverpage.md && test -d docs/_media
test -f docs/_media/logo.svg || test -f docs/_media/logo.png
```

Expected: all succeed.

- [ ] **Step 5: Commit**

```bash
git add docs
git commit -m "$(cat <<'EOF'
docs: regenerate schema docs from Zod 2020-12 emit

EOF
)"
```

---

### Task 6: README (0.2.0 notes, no version bump)

**Files:**
- Modify: `README.md`

**Interfaces:**
- Consumes: behaviours from Tasks 1–5
- Produces: contributor + Validation API + breaking notes; `package.json` version stays `0.1.0`

- [ ] **Step 1: Replace the contributor / authoring paragraph**

Replace the block that mentions `src/zod/` and committed `generated/` with:

```markdown
Author Zod modules under `src/validators/`. `I*` TypeScript types are inferred from those Zod schemas. `src/schema` is generated JSON Schema **2020-12** from Zod — do not hand-edit it. `npm test` regenerates `src/schema` and fails if the committed copy is stale. After clone, `npm install` does not build `lib/`; run `npm run build` when you need the compiled package or local `lib/schema`. `npm run generate:json-schema` emits draft-07 and 2020-12 trees under `generated/json-schema/` for CI/CD release artefacts (gitignored; not part of the local test gate).
```

- [ ] **Step 2: Fix Validation API JSON Schema sentence**

Replace the sentence that says `lib/schema` is the hand-authored draft-07 copy with:

```markdown
JSON Schema consumers should bring their own validator (for example AJV with the 2020-12 dialect) and load schemas from the published `lib/schema` tree (JSON Schema 2020-12 generated from Zod).
```

- [ ] **Step 3: Add Breaking changes (0.2.0) section**

Insert **after** the existing `## Breaking changes (0.1.0)` section (do not remove 0.1.0 notes):

```markdown
## Breaking changes (0.2.0)

Package JSON Schema publish path (documenting the upcoming 0.2.0 line; package version may still read 0.1.0 until release tagging):

- Published `lib/schema` is JSON Schema **2020-12** generated from Zod, not hand-authored draft-07. Loaders that only understand draft-07 meta-schemas must upgrade.
- Entry schema documents no longer compose via `allOf` base-entry; base fields are inlined in the emitted entry schemas. Boolean validation for complete entries remains, but schema structure and docs pages change.
- Leap-second timestamps such as `2021-01-01T23:59:60Z` are invalid in both Zod and JSON Schema.
```

Confirm `package.json` `"version"` is still `"0.1.0"`.

- [ ] **Step 4: Commit**

```bash
git add README.md
git commit -m "$(cat <<'EOF'
docs: describe Zod-generated 2020-12 publish path

EOF
)"
```

---

### Task 7: Full gate

**Files:**
- None planned (fixes only if the gate fails)

- [ ] **Step 1: Run full test**

Run: `npm test`

Expected: `build:schema` rewrites `src/schema`; `test:schema-fresh` exits 0; typecheck passes; Jest passes (including leap-second parity).

- [ ] **Step 2: Run full build**

Run: `npm run build`

Expected: `lib/schema` exists; a file under `lib/schema` has 2020-12 `$schema`; docs keep-list intact.

- [ ] **Step 3: Confirm version untouched**

Run: `node -e "console.log(require('./package.json').version)"`

Expected: `0.1.0`

- [ ] **Step 4: Commit any gate fixes**

If Step 1–2 required Zod/override/test fixes, commit them with a conventional message (no version bump). If the tree is already clean, no commit.

- [ ] **Step 5: Final status**

Working tree clean except intentional untracked `generated/` after a local multi-dialect smoke (optional). Do not commit `generated/`.

---

## Self-review

**Spec coverage**

| Spec item | Task |
|---|---|
| Leap-second pattern + fixtures | 1, 4, 7 |
| Shared overrides + emit | 2 |
| Build only → `src/schema`; multi-dialect CLI | 2–3 |
| Remove `prepare`; `prepublishOnly` | 3 |
| Cut over `src/schema`; gitignore `generated/` | 4 |
| Parity Zod ↔ AJV(`src/schema` 2020-12) | 4, 7 |
| Docs regen + orphan prune + keep-list | 5 |
| README 0.2.0 notes; no version bump | 6, 7 |
| Zod SoT / no hand-edit `src/schema` | Global + 4 |

**Placeholders:** none.

**Type consistency:** `emitJsonSchema({ target, outDir })` and `JsonSchemaTarget` are defined in Task 2 and reused by both CLIs and `build:schema`.
