// This file will combine and export all the JSON schemas
// The schema-validator will pre-load these
// This file will need to be updated with all schemas that are ready for consumption
//
import { JSONSchema7 } from 'json-schema';

// Base schemas
//
import * as journal from './core/journal.json';
import * as baseEntry from './core/base-entry.json';
import * as vessel from './core/vessel.json';

// Logbook entry schemas
//
import * as logbookDeparture from './entry/logbook/departure.json';

// Navigation entry schemas
//
import * as navigationPosition from './entry/navigation/position.json';

// Sensor entry schemas
//
import * as sensorMeasurement from './entry/sensor/measurement.json';
import * as sensorState from './entry/sensor/state.json';


export const schemas = {

  // Base schemas
  //
  journal: journal as JSONSchema7,
  baseEntry: baseEntry as JSONSchema7,
  vessel: vessel as JSONSchema7,

  // Logbook entry schemas
  //
  logbookDeparture: logbookDeparture as JSONSchema7,

  // Navigation entry schemas
  //
  navigationPosition: navigationPosition as JSONSchema7,

  // Sensor entry schemas
  //
  sensorMeasurement: sensorMeasurement as JSONSchema7,
  sensorState: sensorState as JSONSchema7,
}
