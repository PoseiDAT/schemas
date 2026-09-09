import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import * as z from 'zod';
import { poseidatRegistry } from '../src/validators';
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
