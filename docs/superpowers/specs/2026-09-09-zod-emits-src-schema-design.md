# Zod emits `src/schema` (2020-12 publish path)

Date: 2026-09-09
Status: approved (grilled)
Package: `@poseidat/schemas`

## Goal

Make Zod under `src/validators/` the sole authoring source for JSON Schema. Normal `npm run build` regenerates committed `src/schema` as **JSON Schema 2020-12**, publishes that tree as flat `lib/schema`, and keeps a shared emit path so CI/CD can still produce multiple dialects under `generated/` without developers committing or freshness-checking those trees.

## Decisions

| Topic | Choice |
|---|---|
| Published package JSON | Flat `lib/schema` = **2020-12 only** (breaking for draft-07-only AJV loaders) |
| `src/schema` in git | **Committed**; never hand-edited; `npm test` fails if stale after regenerate |
| Build regenerate scope | **Only** wipe+write `src/schema` (2020-12) |
| `generate:json-schema` | Emits `generated/json-schema/{draft-07,2020-12}` for **CI/CD release artefacts**; not committed; not part of local developer freshness |
| `src/schema` vs `generated/2020-12` | Same emit module; **no** required byte-equality until release CI exists |
| Default test gate | Zod ↔ AJV(`src/schema` as 2020-12) boolean parity on fixtures + `src/schema` freshness |
| Draft-07 parity | Deferred (optional later CI job) |
| Mismatch authority | **Zod is source of truth.** Historical handwritten disagreements are already encoded in Zod. If Zod `safeParse` and AJV on emitted JSON disagree, change Zod and/or shared emit overrides (part of the Zod→JSON pipeline), then re-emit, until they agree. Never hand-patch `src/schema`; do not weaken fixtures to paper over splits. |
| Leap seconds | **In scope:** tighten `POSEIDAT_DATE_TIME_PATTERN` seconds to `[0-5]\d` (and Zod if needed) so both reject `…T23:59:60Z`; add parity + formats fixtures |
| Layout | Approach 1: shared emit + overrides; thin CLIs for build vs multi-dialect |
| `prepare` | **Remove** (holdover from JSON-as-source) |
| Publish hook | **`prepublishOnly`: `npm run build`** |
| Package version | Document the publish-path break as **0.2.0** in README; **do not bump** `package.json` in this change (versioning / `@next` / CI later) |
| Docs | Regenerate with `build:docs`, **commit** churn; delete orphans; keep only `docs/README.md`, `docs/_coverpage.md`, `docs/_media/**` |
| Contributors | Clone → `npm install`; run `npm run build` when you need `lib/`; `npm test` is enough for Zod/schema work |

## Architecture

```
src/validators/  ──z.toJSONSchema + shared overrides──►  emitJsonSchema({ target, outDir })
                                                              │
                         ┌────────────────────────────────────┼────────────────────────────┐
                         ▼                                    ▼                            │
              npm run build                          generate:json-schema                  │
         wipe src/schema                             wipe generated/json-schema/*          │
         write 2020-12                               write draft-07 + 2020-12              │
         → compile → lib/schema                      (CI/CD only; gitignored)              │
         → docs from src/schema                                                            │
```

- **Source of truth:** Zod modules registered in `poseidatRegistry` (plus shared emit overrides).
- **Published JSON:** `src/schema` (generated 2020-12) copied to `lib/schema`. No dialect folders under `lib/`.
- **Overrides** (single module used by every emit): date-time keep `format` + `POSEIDAT_DATE_TIME_PATTERN` (seconds `[0-5]\d`); date strip pattern keep `format: date`; uuid strip pattern keep `format: uuid`; fishing-catch inject XOR `oneOf` for `weight` / `number_of_fish`.

## Components

| Path | Responsibility |
|---|---|
| `scripts/json-schema-overrides.ts` | Shared `override` callback for `z.toJSONSchema` |
| `scripts/emit-json-schema.ts` | `emitJsonSchema({ target, outDir })`: wipe `outDir`, emit registry, write one file per `$id` under `https://poseidat.org/schema/` |
| Build generate step (script or npm script) | `emitJsonSchema({ target: 'draft-2020-12', outDir: 'src/schema' })` |
| `scripts/generate-json-schema.ts` | CLI: emit both dialects into `generated/json-schema/{draft-07,2020-12}` |
| `package.json` `build` | clean → generate `src/schema` → compile → `build:copy-schema` → `build:docs` |
| `package.json` | Remove `prepare`; add `prepublishOnly`: `npm run build` |
| `.gitignore` | Ignore `generated/` |
| README | Zod under `src/validators/`; generated `src/schema`; 2020-12 `lib/schema`; contributor build note; 0.2.0 breaking notes (no version bump); CI role of `generate:json-schema` |

Exact script filenames may vary as long as the split (overrides / emit / two CLIs) remains.

## Build & test flow

**`npm run build`**
1. `build:clean` (existing `lib/schema` wipe as today)
2. Wipe `src/schema` and emit 2020-12 from Zod
3. `build:compile`
4. `build:copy-schema` (`src/schema` → `lib/schema`)
5. `build:docs` (still `-d src/schema`); then delete schema-doc orphans (preserve keep-list above)

**`npm test`**
1. Emit 2020-12 into `src/schema`
2. `git diff --exit-code -- src/schema` (replaces `test:generated-fresh` on `generated/`)
3. typecheck
4. Jest, including parity: AJV 2020-12 on `src/schema` vs `Zod.safeParse` vs `fixture.valid` (includes leap-second invalid case)

**`npm run generate:json-schema`**
- Multi-dialect trees under `generated/` for release pipelines. Developers are not expected to keep these locally or commit them.

**`npm publish`**
- `prepublishOnly` runs full `build` so `lib/` is fresh.

## Migration (this change)

1. Tighten date-time pattern for leap seconds; add fixtures.
2. Refactor generate into shared overrides + emit; wire build and multi-dialect CLIs.
3. Remove `prepare`; add `prepublishOnly`.
4. Run emit into `src/schema` so the tree becomes Zod’s 2020-12 output (replaces hand-authored draft-07 JSON).
5. Stop tracking `generated/json-schema/**`; add `generated/` to `.gitignore`.
6. Narrow `test/schema-parity` to Zod ↔ AJV(`src/schema`); remove default generated-dialect columns.
7. Regenerate docs; delete orphans outside the keep-list; commit docs churn.
8. Update README (validators path, generate/test/build, 0.2.0 breaking: 2020-12 publish, shape/composition, leap seconds). Leave `package.json` version at `0.1.0`.

## Out of scope

- Bumping `package.json` / lockfile version / `@next` dist-tag
- Wiring the GitHub release pipeline that calls `generate:json-schema`
- Asserting byte-equality of `generated/2020-12` vs `src/schema` in CI
- Publishing `lib/schema/draft-07` or other dialect folders
- Draft-07 boolean parity CI job
- Changing `build:copy-schema` destination layout

## Success criteria

- After `npm run build`, `lib/schema` is 2020-12 JSON Schema produced from Zod with shared overrides.
- Committed `src/schema` matches a fresh emit; stale tree fails `npm test`.
- Fixture boolean parity holds for Zod and AJV(`src/schema`), including leap-second rejection.
- `generate:json-schema` still produces both dialects under `generated/` for CI/CD.
- `generated/` is gitignored and not part of the default developer gate.
- No `prepare`; `prepublishOnly` builds before publish.
- Docs keep-list preserved; schema-doc orphans removed; README describes 0.2.0 breaks without bumping the package version.
