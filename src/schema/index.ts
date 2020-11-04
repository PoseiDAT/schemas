// This file will combine and export all the JSON schemas
// The schema-validator will pre-load these
// This file will need to be updated with all schemas that are ready for consumption
//
import { JSONSchema7 } from 'json-schema';

// Core schemas
//
import * as baseEntry from './core/base-entry.json';
import * as journal from './core/journal.json';
import * as position from './core/position.json';
import * as vessel from './core/vessel.json';

// Entry schemas
//
import * as entryDeparture from './entry/departure.json';
import * as entryDeviceMeasurement from './entry/device-measurement.json';
import * as entryEquipmentInventory from './entry/equipment-inventory.json';

export const schemas = {

  // Base schemas
  //
  core: {
    journal: journal as JSONSchema7,
    baseEntry: baseEntry as JSONSchema7,
    position: position as JSONSchema7,
    vessel: vessel as JSONSchema7,
  },

  // Entry schemas
  //
  entry: {
    departure: entryDeparture as JSONSchema7,
    deviceMeasurement: entryDeviceMeasurement as JSONSchema7,
    equipmentInventory: entryEquipmentInventory as JSONSchema7,
  }
}
