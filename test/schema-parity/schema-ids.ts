export const SchemaId = {
  journal: 'https://poseidat.org/schema/core/journal.json',
  arrival: 'https://poseidat.org/schema/entry/arrival.json',
  departure: 'https://poseidat.org/schema/entry/departure.json',
  deviceMeasurement: 'https://poseidat.org/schema/entry/device-measurement.json',
  endOfFishing: 'https://poseidat.org/schema/entry/end-of-fishing.json',
  equipmentInventory: 'https://poseidat.org/schema/entry/equipment-inventory.json',
  fishingActivity: 'https://poseidat.org/schema/entry/fishing-activity.json',
  route: 'https://poseidat.org/schema/entry/route.json',
  vesselRegistration: 'https://poseidat.org/schema/entry/vessel-registration.json',
  zoneEnter: 'https://poseidat.org/schema/entry/zone-enter.json',
  zoneExit: 'https://poseidat.org/schema/entry/zone-exit.json',
} as const;

export type SchemaIdValue = typeof SchemaId[keyof typeof SchemaId];
