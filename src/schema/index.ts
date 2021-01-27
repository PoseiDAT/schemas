// This file will combine and export all the JSON schemas
// The schema-validator will pre-load these
// This file will need to be updated with all schemas that are ready for consumption
//
import { JSONSchema7 } from 'json-schema';

// Core schemas
//
import * as baseDevice from './core/equipment/device.json';
import * as baseEquipment from './core/equipment/equipment.json';
import * as baseMeasurementValue from './core/measurement/measurement-value.json';
import * as baseNumber from './core/measurement/number.json';
import * as basePosition from './core/measurement/position.json';
import * as baseCompany from './core/persona/company.json';
import * as baseAddress from './core/address.json';
import * as baseEntry from './core/base-entry.json';
import * as baseFishingCatch from './core/fishing-catch.json';
import * as baseFishingCatchProcessed from './core/fishing-catch-processed.json';
import * as baseFishingGear from './core/fishing-gear.json';
import * as baseFishingGearDeployment from './core/fishing-gear-deployment.json';
import * as baseFishingGearGillNet from './core/fishing-gear-gill-net.json';
import * as baseFishingGearLoss from './core/fishing-gear-loss.json';
import * as baseFishingGearRetrieve from './core/fishing-gear-retrieve.json';
import * as baseFishingGearShot from './core/fishing-gear-shot.json';
import * as baseFishingTow from './core/fishing-tow.json';
import * as baseFishingZone from './core/fishing-zone.json';
import * as baseJournal from './core/journal.json';
import * as basePort from './core/port.json';
import * as baseTripEntry from './core/trip-entry.json';
import * as baseVessel from './core/vessel.json';
import * as baseVesselInspection from './core/vessel-inspection.json';
import * as baseVesselLocation from './core/vessel-location.json';
import * as baseVesselMaster from './core/vessel-master.json';
import * as baseVesselPartner from './core/vessel-partner.json';

// Entry schemas
//
import * as entryArrival from './entry/arrival.json';
import * as entryDeparture from './entry/departure.json';
import * as entryDeviceMeasurement from './entry/device-measurement.json';
import * as entryEndOfFishing from './entry/end-of-fishing.json';
import * as entryEquipmentInventory from './entry/equipment-inventory.json';
import * as entryFishingActivity from './entry/fishing-activity.json';
import * as entryZoneEnter from './entry/zone-enter.json';
import * as entryZoneExit from './entry/zone-exit.json';

// Enum schemas
//
import * as enumDeviceType from './enum/device-type.json'
import * as enumEquipmentType from './enum/equipment-type.json'
import * as enumEffortZone from './enum/effort-zone.json';
import * as enumFishFreshness from './enum/fish-freshness.json';
import * as enumFishPackageType from './enum/fish-package-type.json';
import * as enumFishPresentation from './enum/fish-presentation.json';
import * as enumFishState from './enum/fish-state.json';
import * as enumFishingGearType from './enum/fishing-gear-type.json';
import * as enumMeasurementType from './enum/measurement-type.json';
import * as enumReasonArrival from './enum/reason-arrival.json';
import * as enumReasonDeparture from './enum/reason-departure.json';
import * as enumReasonDiscard from './enum/reason-discard.json';
import * as enumVesselCompartment from './enum/vessel-compartment.json';

export const schemas = {

  // Base schemas
  //
  core: {
    device: baseDevice as JSONSchema7,
    equipment: baseEquipment as JSONSchema7,
    measurementValue: baseMeasurementValue as JSONSchema7,
    number: baseNumber as JSONSchema7,
    position: basePosition as JSONSchema7,
    company: baseCompany as JSONSchema7,
    address: baseAddress as JSONSchema7,
    baseEntry: baseEntry as JSONSchema7,
    fishingCatch: baseFishingCatch as JSONSchema7,
    fishingCatchProcessed: baseFishingCatchProcessed as JSONSchema7,
    fishingGear: baseFishingGear as JSONSchema7,
    fishingGearDeployment: baseFishingGearDeployment as JSONSchema7,
    fishingGearGillNet: baseFishingGearGillNet as JSONSchema7,
    fishingGearLoss: baseFishingGearLoss as JSONSchema7,
    fishingGearRetrieve: baseFishingGearRetrieve as JSONSchema7,
    fishingGearShot: baseFishingGearShot as JSONSchema7,
    fishingTow: baseFishingTow as JSONSchema7,
    fishingZone: baseFishingZone as JSONSchema7,
    journal: baseJournal as JSONSchema7,
    port: basePort as JSONSchema7,
    tripEntry: baseTripEntry as JSONSchema7,
    vessel: baseVessel as JSONSchema7,
    vesselInspection: baseVesselInspection as JSONSchema7,
    vesselLocation: baseVesselLocation as JSONSchema7,
    vesselMaster: baseVesselMaster as JSONSchema7,
    vessePartner: baseVesselPartner as JSONSchema7,
  },

  // Entry schemas
  //
  entry: {
    arrival: entryArrival as JSONSchema7,
    departure: entryDeparture as JSONSchema7,
    deviceMeasurement: entryDeviceMeasurement as JSONSchema7,
    endOfFishing: entryEndOfFishing as JSONSchema7,
    equipmentInventory: entryEquipmentInventory as JSONSchema7,
    fishingActivity: entryFishingActivity as JSONSchema7,
    zoneEnter: entryZoneEnter as JSONSchema7,
    zoneExit: entryZoneExit as JSONSchema7,
  },

  // Enum schemas
  //
  enum:
  {
    deviceType: enumDeviceType as JSONSchema7,
    effortZone: enumEffortZone as JSONSchema7,
    equipmentType: enumEquipmentType as JSONSchema7,
    fishFreshness: enumFishFreshness as JSONSchema7,
    fishPackageType: enumFishPackageType as JSONSchema7,
    fishPresentation: enumFishPresentation as JSONSchema7,
    fishState: enumFishState as JSONSchema7,
    fishingGearType: enumFishingGearType as JSONSchema7,
    measurementType: enumMeasurementType as JSONSchema7,
    reasonArrival: enumReasonArrival as JSONSchema7,
    reasonDeparture: enumReasonDeparture as JSONSchema7,
    reasonDiscard: enumReasonDiscard as JSONSchema7,
    vesselCompartment: enumVesselCompartment as JSONSchema7,
  }
}
