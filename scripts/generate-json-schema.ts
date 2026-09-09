import { mkdirSync, writeFileSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import * as z from 'zod';
import { poseidatDate, poseidatDateTime, poseidatRegistry } from '../src/zod';
import '../src/zod';

const ORIGIN = 'https://poseidat.org/schema/';
const ROOT = join(process.cwd(), 'generated', 'json-schema');

const dialects = [
  { dir: 'draft-07', target: 'draft-07' as const },
  { dir: '2020-12', target: 'draft-2020-12' as const },
];

const pathFromId = (id: string): string => {
  if (!id.startsWith(ORIGIN)) {
    throw new Error(`Refusing to write schema with unexpected $id: ${id}`);
  }
  return id.slice(ORIGIN.length);
};

export const generateJsonSchema = (): void => {
  for (const dialect of dialects) {
    const outRoot = join(ROOT, dialect.dir);
    rmSync(outRoot, { recursive: true, force: true });

    const result = z.toJSONSchema(poseidatRegistry, {
      target: dialect.target,
      uri: (id) => id,
      override: (ctx) => {
        if (ctx.zodSchema === poseidatDateTime) {
          ctx.jsonSchema.type = 'string';
          ctx.jsonSchema.format = 'date-time';
          delete (ctx.jsonSchema as { pattern?: string }).pattern;
        }
        if (ctx.zodSchema === poseidatDate) {
          ctx.jsonSchema.type = 'string';
          ctx.jsonSchema.format = 'date';
          delete (ctx.jsonSchema as { pattern?: string }).pattern;
        }
      },
    });

    const schemas = result.schemas as Record<string, { $id?: string }>;
    for (const [key, schema] of Object.entries(schemas)) {
      if (key === '__shared') continue;
      const id = schema.$id ?? key;
      const rel = pathFromId(id);
      const file = join(outRoot, rel);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, `${JSON.stringify(schema, null, 2)}\n`, 'utf8');
    }
  }
};

if (require.main === module) {
  generateJsonSchema();
}
