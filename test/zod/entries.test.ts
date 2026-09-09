import {
  schemaFixtures,
  validArrival,
  validDeviceMeasurementPosition,
} from '../schema-parity/fixtures';
import { zodBySchemaId } from '../../src/zod/by-id';
import { entryUnionSchema } from '../../src/zod/entry';

test.each(schemaFixtures)('zod $name', (fixture) => {
  const schema = zodBySchemaId[fixture.schemaId];
  expect(schema.safeParse(fixture.data).success).toBe(fixture.valid);
});

test('entry union accepts arrival and rejects unknown type', () => {
  expect(entryUnionSchema.safeParse(validArrival).success).toBe(true);
  expect(
    entryUnionSchema.safeParse({
      ...validDeviceMeasurementPosition,
      entry_type: 'not-an-entry-type',
    }).success,
  ).toBe(false);
});
