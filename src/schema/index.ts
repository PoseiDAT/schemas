// This file will combine and export all the JSON schemas
// The schema-validator will pre-load these
// This file will need to be updated with all schemas that are ready for consumption
//
import { JSONSchema7 } from 'json-schema';

// Core schemas
//
import * as baseEntry from './core/base-entry.json';
import * as baseFishingGear from './core/fishing-gear.json';
import * as baseFishingZone from './core/fishing-zone.json';
import * as baseJournal from './core/journal.json';
import * as basePort from './core/port.json';
import * as basePosition from './core/position.json';
import * as baseTripEntry from './core/trip-entry.json';
import * as baseVessel from './core/vessel.json';
import * as baseVesselInspection from './core/vessel-inspection.json';

// Entry schemas
//
import * as entryArrival from './entry/arrival.json';
import * as entryDeparture from './entry/departure.json';
import * as entryDeviceMeasurement from './entry/device-measurement.json';
import * as entryEndOfFishing from './entry/end-of-fishing.json';
import * as entryEquipmentInventory from './entry/equipment-inventory.json';
import * as entryEquipmentInventoryDevice from './entry/equipment-inventory/device.json';
import * as entryEquipmentInventoryEquipment from './entry/equipment-inventory/equipment.json';
import * as entryZoneEntry from './entry/zone-entry.json';
import * as entryZoneExit from './entry/zone-exit.json';

// Enum schemas
//
import * as enumAnticipatedActivity from './enum/anticipated-activity.json';
import * as enumEffortZone from './enum/effort-zone.json';
import * as enumReasonArrival from './enum/reason-arrival.json';

export const schemas = {

  // Base schemas
  //
  core: {
    baseEntry: baseEntry as JSONSchema7,
    fishingGear: baseFishingGear as JSONSchema7,
    fishingZone: baseFishingZone as JSONSchema7,
    journal: baseJournal as JSONSchema7,
    port: basePort as JSONSchema7,
    position: basePosition as JSONSchema7,
    tripEntry: baseTripEntry as JSONSchema7,
    vessel: baseVessel as JSONSchema7,
    vesselInspection: baseVesselInspection as JSONSchema7,
  },

  // Entry schemas
  //
  entry: {
    arrival: entryArrival as JSONSchema7,
    departure: entryDeparture as JSONSchema7,
    deviceMeasurement: entryDeviceMeasurement as JSONSchema7,
    endOfFishing: entryEndOfFishing as JSONSchema7,
    equipmentInventory: entryEquipmentInventory as JSONSchema7,
    zoneEntry: entryZoneEntry as JSONSchema7,
    zoneExit: entryZoneExit as JSONSchema7,
  },

  // Enum schemas
  //
  enum:
  {
    anticipatedActivity: enumAnticipatedActivity as JSONSchema7,
    effortZone: enumEffortZone as JSONSchema7,
    reasonArrival: enumReasonArrival as JSONSchema7,
  },

  // Supporting schemas: EquipmentInventory
  //
  equipment_list: {
    device: entryEquipmentInventoryDevice as JSONSchema7,
    equipment: entryEquipmentInventoryEquipment as JSONSchema7,
  }
}
