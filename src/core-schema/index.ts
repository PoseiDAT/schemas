// This file will combine and export all the JSON schemas
// The schema-validator will pre-load these
// This file will need to be updated with all schemas that are ready for consumption
//
// Base schemas
//
import * as journal from './journal.json';
import * as baseEntry from './base-entry.json';
import * as vessel from './vessel.json';

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
  journal,
  baseEntry,
  vessel,

  logbookDeparture,

  navigationPosition,

  sensorMeasurement,
  sensorState,
}
