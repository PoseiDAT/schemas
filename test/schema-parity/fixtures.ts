import { SchemaId, SchemaIdValue } from './schema-ids';

export type SchemaFixture = {
  name: string;
  schemaId: SchemaIdValue;
  data: Record<string, unknown>;
  valid: boolean;
};

const JOURNAL_ID = '11111111-1111-4111-8111-111111111111';
const ENTRY_ID = '22222222-2222-4222-8222-222222222222';
const EQUIPMENT_ID = '33333333-3333-4333-8333-333333333333';
const DEVICE_ID = '44444444-4444-4444-8444-444444444444';
const DATETIME = '2021-01-01T01:00:00Z';

const vessel = {
  name: 'SeaDragon',
  cfr: 'NLD000000042',
  flag_state: 'NLD',
  hull_number: 'Q-42',
};

const trip = {
  date: DATETIME,
  trip_nr: 'NLD',
  record_nr: 'NLD',
};

const header = (entryType: string) => ({
  journal_id: JOURNAL_ID,
  entry_id: ENTRY_ID,
  entry_type: entryType,
  revision: DATETIME,
  immutable: false,
});

const clone = <T>(value: T): T => JSON.parse(JSON.stringify(value)) as T;

const omit = (value: object, key: string): Record<string, unknown> => {
  const next = { ...value } as Record<string, unknown>;
  delete next[key];
  return next;
};

export const validJournal = {
  journal_id: JOURNAL_ID,
  vessel,
};

export const validArrival = {
  ...header('arrival'),
  activity_date: DATETIME,
  trip,
  port: { code: 'NLURK' },
  reason_arrival: 'ECY',
};

export const validDeparture = {
  ...header('departure'),
  activity_date: DATETIME,
  trip,
  port: { code: 'NLURK' },
};

export const validDeviceMeasurementPosition = {
  ...header('device-measurement'),
  device_id: 'DEVICE_ID_STRING',
  value: {
    type: 'POSITION',
    position: {
      latitude: 1,
      longitude: 1,
    },
  },
};

export const validDeviceMeasurementScale = {
  ...header('device-measurement'),
  entry_datetime: '2025-04-15T00:00:00Z',
  revision: '2025-04-15T00:00:00Z',
  device_id: 'DEVICE_ID_STRING',
  value: {
    type: 'SCALE',
    scale: {
      haul_number: 1,
      haul_date_start: '2025-04-15T15:00:00Z',
      haul_date_end: '2025-04-15T15:00:00Z',
      category: 'FISH',
      product: 'COD',
      processed: {
        fish_presentation: 'WHL',
        fish_state: 'FRO',
        package_type: 'CT',
        number_of_packages: 4,
        average_package_weight: 250,
        package_labels: ['LABEL1', 'LABEL2'],
        fish_freshness: 'A',
        conversion_factor: 1.0,
      },
      weight: 1000,
    },
  },
};

export const validEndOfFishing = {
  ...header('end-of-fishing'),
  activity_date: DATETIME,
  trip,
};

export const validEquipmentInventory = {
  ...header('equipment-inventory'),
  equipment: [
    {
      equipment_id: EQUIPMENT_ID,
      name: 'Test equipment',
      type: 'SENSOR',
      devices: [
        {
          device_id: DEVICE_ID,
          name: 'Test switch',
          type: 'SWITCH',
        },
        {
          device_id: '55555555-5555-4555-8555-555555555555',
          name: 'Test modem',
          type: 'MODEM',
        },
      ],
    },
  ],
};

export const validFishingActivity = {
  ...header('fishing-activity'),
  trip,
  tow: {
    activity_date_start: DATETIME,
    zone: {},
  },
};

export const validFishingActivityGearEvents = {
  ...clone(validFishingActivity),
  tow: {
    ...clone(validFishingActivity.tow),
    gear_deployment: {
      gear_shot: [
        {
          data: null,
          location: { latitude: 1, longitude: 2 },
        },
      ],
      gear_retrieve: [
        {
          data: null,
          location: { latitude: 1, longitude: 2 },
          identifier: 'retrieve-1',
        },
      ],
      gear_loss: [
        {
          data: null,
          location: { latitude: 1, longitude: 2 },
          identifier: 'loss-1',
        },
      ],
    },
  },
};

export const validRoute = {
  ...header('route'),
  name: 'testroute',
  waypoints: [
    { id: 1, latitude: 52.468733, longitude: 4.582467 },
    { id: 2, latitude: 52.46445, longitude: 4.55755 },
  ],
};

export const validVesselRegistration = {
  ...header('vessel-registration'),
  vessel,
};

export const validZoneEnter = {
  ...header('zone-enter'),
  activity_date: DATETIME,
  location: { latitude: 1, longitude: 2 },
  zone: {},
};

export const validZoneExit = {
  ...header('zone-exit'),
  activity_date: DATETIME,
  location: { latitude: 1, longitude: 2 },
  zone: {},
};

const validCases: SchemaFixture[] = [
  { name: 'journal / minimal', schemaId: SchemaId.journal, data: validJournal, valid: true },
  { name: 'arrival / minimal', schemaId: SchemaId.arrival, data: validArrival, valid: true },
  { name: 'departure / minimal', schemaId: SchemaId.departure, data: validDeparture, valid: true },
  { name: 'device-measurement / position', schemaId: SchemaId.deviceMeasurement, data: validDeviceMeasurementPosition, valid: true },
  { name: 'device-measurement / scale', schemaId: SchemaId.deviceMeasurement, data: validDeviceMeasurementScale, valid: true },
  { name: 'end-of-fishing / minimal', schemaId: SchemaId.endOfFishing, data: validEndOfFishing, valid: true },
  { name: 'equipment-inventory / minimal', schemaId: SchemaId.equipmentInventory, data: validEquipmentInventory, valid: true },
  { name: 'fishing-activity / minimal', schemaId: SchemaId.fishingActivity, data: validFishingActivity, valid: true },
  { name: 'fishing-activity / gear events', schemaId: SchemaId.fishingActivity, data: validFishingActivityGearEvents, valid: true },
  { name: 'route / minimal', schemaId: SchemaId.route, data: validRoute, valid: true },
  { name: 'vessel-registration / minimal', schemaId: SchemaId.vesselRegistration, data: validVesselRegistration, valid: true },
  { name: 'zone-enter / minimal', schemaId: SchemaId.zoneEnter, data: validZoneEnter, valid: true },
  { name: 'zone-exit / minimal', schemaId: SchemaId.zoneExit, data: validZoneExit, valid: true },
  {
    name: 'arrival / offset with colon',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), activity_date: '2021-01-01T01:00:00+01:00' },
    valid: true,
  },
  {
    name: 'arrival / catch number_of_fish only',
    schemaId: SchemaId.arrival,
    data: {
      ...clone(validArrival),
      catch_on_board: [{ code: 'COD', number_of_fish: 12 }],
    },
    valid: true,
  },
  {
    name: 'device-measurement / type TEMPERATURE with numeric payload',
    schemaId: SchemaId.deviceMeasurement,
    data: {
      ...clone(validDeviceMeasurementPosition),
      value: {
        type: 'TEMPERATURE',
        numeric: { value: 1 },
      },
    },
    valid: true,
  },
];

const emptyObjectCases: SchemaFixture[] = Object.values(SchemaId).map((schemaId) => ({
  name: `${schemaId.split('/').pop()} / empty object`,
  schemaId,
  data: {},
  valid: false,
}));

const extraPropertyCases: SchemaFixture[] = [
  {
    name: 'journal / extra property rejected',
    schemaId: SchemaId.journal,
    data: { ...clone(validJournal), unexpected: 'nope' },
    valid: false,
  },
  {
    name: 'arrival / extra property allowed',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), unexpected: 'still-ok' },
    valid: true,
  },
  {
    name: 'device-measurement / extra property allowed',
    schemaId: SchemaId.deviceMeasurement,
    data: { ...clone(validDeviceMeasurementPosition), unexpected: 'still-ok' },
    valid: true,
  },
];

const invalidCases: SchemaFixture[] = [
  {
    name: 'journal / missing vessel',
    schemaId: SchemaId.journal,
    data: { journal_id: JOURNAL_ID },
    valid: false,
  },
  {
    name: 'journal / invalid journal_id',
    schemaId: SchemaId.journal,
    data: { ...clone(validJournal), journal_id: 'not-a-uuid' },
    valid: false,
  },
  {
    name: 'journal / hex uuid without RFC version nibble',
    schemaId: SchemaId.journal,
    data: { ...clone(validJournal), journal_id: '11111111-1111-1111-1111-111111111111' },
    valid: true,
  },
  {
    name: 'arrival / trip.date is a date not a date-time',
    schemaId: SchemaId.arrival,
    data: {
      ...clone(validArrival),
      trip: { ...trip, date: '2021-01-01' },
    },
    valid: false,
  },
  {
    name: 'arrival / unknown entry_type',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), entry_type: 'not-an-entry-type' },
    valid: false,
  },
  {
    name: 'arrival / entry_type from another entry',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), entry_type: 'departure' },
    valid: false,
  },
  {
    name: 'device-measurement / missing journal_id',
    schemaId: SchemaId.deviceMeasurement,
    data: omit(validDeviceMeasurementPosition, 'journal_id'),
    valid: false,
  },
  {
    name: 'device-measurement / type POSITION with numeric payload',
    schemaId: SchemaId.deviceMeasurement,
    data: {
      ...clone(validDeviceMeasurementPosition),
      value: {
        type: 'POSITION',
        numeric: { value: 1 },
      },
    },
    valid: false,
  },
  {
    name: 'device-measurement / value missing payload',
    schemaId: SchemaId.deviceMeasurement,
    data: {
      ...clone(validDeviceMeasurementPosition),
      value: { type: 'POSITION' },
    },
    valid: false,
  },
  {
    name: 'route / no waypoints',
    schemaId: SchemaId.route,
    data: { ...clone(validRoute), waypoints: [] },
    valid: false,
  },
  {
    name: 'arrival / lowercase z activity_date',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), activity_date: '2021-01-01T01:00:00z' },
    valid: false,
  },
  {
    name: 'arrival / lowercase t activity_date',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), activity_date: '2021-01-01t01:00:00Z' },
    valid: false,
  },
  {
    name: 'arrival / offset without colon',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), activity_date: '2021-01-01T01:00:00+0100' },
    valid: false,
  },
  {
    name: 'arrival / impossible calendar date',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), activity_date: '2021-02-30T00:00:00Z' },
    valid: false,
  },
  {
    name: 'arrival / leap second activity_date',
    schemaId: SchemaId.arrival,
    data: { ...clone(validArrival), activity_date: '2021-01-01T23:59:60Z' },
    valid: false,
  },
  {
    name: 'arrival / catch with weight and number_of_fish',
    schemaId: SchemaId.arrival,
    data: {
      ...clone(validArrival),
      catch_on_board: [{ code: 'COD', weight: 100, number_of_fish: 12 }],
    },
    valid: false,
  },
  {
    name: 'arrival / catch with neither quantity',
    schemaId: SchemaId.arrival,
    data: {
      ...clone(validArrival),
      catch_on_board: [{ code: 'COD' }],
    },
    valid: false,
  },
];

export const schemaFixtures: SchemaFixture[] = [
  ...validCases,
  ...emptyObjectCases,
  ...extraPropertyCases,
  ...invalidCases,
];
