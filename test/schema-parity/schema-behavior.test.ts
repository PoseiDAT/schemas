import { SchemaId } from './schema-ids';
import { schemaFixtures } from './fixtures';
import * as zodSchemas from '../../src/zod';
import { zodBySchemaId } from '../../src/zod/by-id';
import {
  CURRENT_SCHEMA_DIR,
  GENERATED_DRAFT_07_DIR,
  GENERATED_2020_12_DIR,
  createSchemaSuite,
} from './ajv-suite';

describe('Current JSON Schema behaviour (AJV draft-07)', () => {
  const current = createSchemaSuite({
    name: 'current',
    schemaDir: CURRENT_SCHEMA_DIR,
    dialect: 'draft-07',
  });

  test('loads every published schema id used by the fixtures', () => {
    for (const schemaId of Object.values(SchemaId)) {
      expect(current.hasSchema(schemaId)).toBe(true);
    }
  });

  test.each(schemaFixtures)('$name', (fixture) => {
    const result = current.validate(fixture.schemaId, fixture.data);
    expect({
      name: fixture.name,
      valid: result.valid,
      errors: result.valid === fixture.valid ? [] : result.errors,
    }).toEqual({
      name: fixture.name,
      valid: fixture.valid,
      errors: [],
    });
  });
});

describe('Generated JSON Schema behaviour matches current', () => {
  const current = createSchemaSuite({
    name: 'current',
    schemaDir: CURRENT_SCHEMA_DIR,
    dialect: 'draft-07',
  });
  const generated07 = createSchemaSuite({
    name: 'draft-07',
    schemaDir: GENERATED_DRAFT_07_DIR,
    dialect: 'draft-07',
  });
  const generated2020 = createSchemaSuite({
    name: '2020-12',
    schemaDir: GENERATED_2020_12_DIR,
    dialect: '2020-12',
  });

  test('loads the public Zod schema barrel', () => {
    expect(Object.values(zodSchemas)).toEqual(
      expect.arrayContaining(Object.values(zodBySchemaId)),
    );
  });

  test.each(schemaFixtures)('$name', (fixture) => {
    const baseline = current.validate(fixture.schemaId, fixture.data);
    const draft07 = generated07.validate(fixture.schemaId, fixture.data);
    const draft2020 = generated2020.validate(fixture.schemaId, fixture.data);
    const zodOk = zodBySchemaId[fixture.schemaId].safeParse(fixture.data).success;

    expect({
      name: fixture.name,
      current: baseline.valid,
      draft07: draft07.valid,
      draft2020: draft2020.valid,
      zod: zodOk,
    }).toEqual({
      name: fixture.name,
      current: fixture.valid,
      draft07: fixture.valid,
      draft2020: fixture.valid,
      zod: fixture.valid,
    });
  });
});
