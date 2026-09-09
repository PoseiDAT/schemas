import {
  schemaFixtures,
  validArrival,
  validDeparture,
  validDeviceMeasurementPosition,
  validEquipmentInventory,
  validRoute,
} from '../schema-parity/fixtures';
import { SchemaId } from '../schema-parity/schema-ids';
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

test.each([
  {
    name: 'departure gear_on_board',
    schemaId: SchemaId.departure,
    data: {
      ...validDeparture,
      gear_on_board: [{ code: 'TBB' }, { code: 'TBB' }],
    },
  },
  {
    name: 'equipment inventory equipment',
    schemaId: SchemaId.equipmentInventory,
    data: {
      ...validEquipmentInventory,
      equipment: [
        validEquipmentInventory.equipment[0],
        { ...validEquipmentInventory.equipment[0] },
      ],
    },
  },
  {
    name: 'route waypoints',
    schemaId: SchemaId.route,
    data: {
      ...validRoute,
      waypoints: [validRoute.waypoints[0], { ...validRoute.waypoints[0] }],
    },
  },
])('zod rejects deeply equal items in $name', ({ schemaId, data }) => {
  expect(zodBySchemaId[schemaId].safeParse(data).success).toBe(false);
});

test('route waypoints treat 0 and -0 as equal for uniqueItems', () => {
  const result = zodBySchemaId[SchemaId.route].safeParse({
    ...validRoute,
    waypoints: [
      { id: 1, latitude: 0, longitude: 1 },
      { id: 1, latitude: -0, longitude: 1 },
    ],
  });

  expect(result.success).toBe(false);
});
