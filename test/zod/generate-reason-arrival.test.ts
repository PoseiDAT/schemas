import { readFileSync } from 'fs';
import { join } from 'path';
import * as z from 'zod';
import { generateJsonSchema } from '../../scripts/generate-json-schema';
import { poseidatRegistry } from '../../src/zod';

describe('generateJsonSchema', () => {
  test('writes draft-07 and 2020-12 reason-arrival schemas with poseidat $id', () => {
    generateJsonSchema();
    for (const dialect of ['draft-07', '2020-12']) {
      const file = join(process.cwd(), 'generated', 'json-schema', dialect, 'enum', 'reason-arrival.json');
      const schema = JSON.parse(readFileSync(file, 'utf8')) as { $id: string; enum: string[] };
      expect(schema.$id).toBe('https://poseidat.org/schema/enum/reason-arrival.json');
      expect(schema.enum).toContain('ECY');
    }
  });

  test('rejects a schema whose $id is outside the Poseidat schema origin', () => {
    const unexpectedSchema = z.string();
    poseidatRegistry.add(unexpectedSchema, {
      id: 'https://example.com/unexpected.json',
      title: 'Unexpected schema',
      description: 'Schema with a non-Poseidat id',
    });

    try {
      expect(() => generateJsonSchema()).toThrow(
        'Refusing to write schema with unexpected $id: https://example.com/unexpected.json',
      );
    } finally {
      poseidatRegistry.remove(unexpectedSchema);
      generateJsonSchema();
    }
  });
});
