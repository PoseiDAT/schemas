// This file will combine and export all the JSON schemas
// The schema-validator will pre-load these
// This file will need to be manually updated with all schemas that are ready for consumption
//
import { JSONSchema7 } from 'json-schema';

// Core schemas
//
import * as baseAddress from './schema/core/address.json';
import * as baseCompany from './schema/core/persona/company.json';
import * as baseContactDetails from './schema/core/contact-details.json';
import * as baseDevice from './schema/core/equipment/device.json';
import * as baseEntry from './schema/core/base-entry.json';
import * as baseEquipment from './schema/core/equipment/equipment.json';
import * as baseFishingCatch from './schema/core/fishing-catch.json';
import * as baseFishingCatchProcessed from './schema/core/fishing-catch-processed.json';
import * as baseFishingGear from './schema/core/fishing-gear.json';
import * as baseFishingGearDeployment from './schema/core/fishing-gear-deployment.json';
import * as baseFishingGearGillNet from './schema/core/fishing-gear-gill-net.json';
import * as baseFishingGearLoss from './schema/core/fishing-gear-loss.json';
import * as baseFishingGearRetrieve from './schema/core/fishing-gear-retrieve.json';
import * as baseFishingGearShot from './schema/core/fishing-gear-shot.json';
import * as baseFishingTow from './schema/core/fishing-tow.json';
import * as baseFishingZone from './schema/core/fishing-zone.json';
import * as baseJournal from './schema/core/journal.json';
import * as baseFuelConsumption from './schema/core/measurement/fuel-consumption.json';
import * as baseMeasurementValue from './schema/core/measurement/measurement-value.json';
import * as baseNumeric from './schema/core/measurement/numeric.json';
import * as basePort from './schema/core/port.json';
import * as basePosition from './schema/core/measurement/position.json';
import * as baseTrawlTension from './schema/core/measurement/trawl-tension.json';
import * as baseScale from './schema/core/measurement/scale.json';
import * as baseTripEntry from './schema/core/trip-entry.json';
import * as baseVessel from './schema/core/vessel.json';
import * as baseVesselInspection from './schema/core/vessel-inspection.json';
import * as baseVesselMaster from './schema/core/vessel-master.json';
import * as baseVesselPartner from './schema/core/vessel-partner.json';
import * as baseVesselSection from './schema/core/vessel-section.json';

// Entry schemas
//
import * as entryArrival from './schema/entry/arrival.json';
import * as entryDeparture from './schema/entry/departure.json';
import * as entryDeviceMeasurement from './schema/entry/device-measurement.json';
import * as entryEndOfFishing from './schema/entry/end-of-fishing.json';
import * as entryEquipmentInventory from './schema/entry/equipment-inventory.json';
import * as entryFishingActivity from './schema/entry/fishing-activity.json';
import * as entryZoneEnter from './schema/entry/zone-enter.json';
import * as entryZoneExit from './schema/entry/zone-exit.json';

// Enum schemas
//
import * as enumDeviceType from './schema/enum/device-type.json'
import * as enumEffortZone from './schema/enum/effort-zone.json';
import * as enumEquipmentType from './schema/enum/equipment-type.json'
import * as enumFishFreshness from './schema/enum/fish-freshness.json';
import * as enumFishingGearType from './schema/enum/fishing-gear-type.json';
import * as enumFishPackageType from './schema/enum/fish-package-type.json';
import * as enumFishPresentation from './schema/enum/fish-presentation.json';
import * as enumFishState from './schema/enum/fish-state.json';
import * as enumFishType from './schema/enum/fish-type.json';
import * as enumGnssFixQuality from './schema/enum/gnss-fix-quality.json';
import * as enumGnssFixType from './schema/enum/gnss-fix-type.json';
import * as enumMeasurementType from './schema/enum/measurement-type.json';
import * as enumReasonArrival from './schema/enum/reason-arrival.json';
import * as enumReasonDeparture from './schema/enum/reason-departure.json';
import * as enumReasonDiscard from './schema/enum/reason-discard.json';
import * as enumScaleCategory from './schema/enum/scale-category.json';
import * as enumVesselCompartment from './schema/enum/vessel-compartment.json';

export const schemas = {

  // Base schemas
  //
  core: {
    equipment: {
      device: baseDevice as JSONSchema7,
      equipment: baseEquipment as JSONSchema7,
    },
    measurement: {
      fuelConsumption: baseFuelConsumption as JSONSchema7,
      measurementValue: baseMeasurementValue as JSONSchema7,
      numeric: baseNumeric as JSONSchema7,
      position: basePosition as JSONSchema7,
      trawlTension: baseTrawlTension as JSONSchema7,
      scale: baseScale as JSONSchema7,
    },
    persona: {
      company: baseCompany as JSONSchema7,
    },
    address: baseAddress as JSONSchema7,
    baseEntry: baseEntry as JSONSchema7,
    contactDetails: baseContactDetails as JSONSchema7,
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
    vesselMaster: baseVesselMaster as JSONSchema7,
    vesselPartner: baseVesselPartner as JSONSchema7,
    vesselSection: baseVesselSection as JSONSchema7,
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
    fishingGearType: enumFishingGearType as JSONSchema7,
    fishPackageType: enumFishPackageType as JSONSchema7,
    fishPresentation: enumFishPresentation as JSONSchema7,
    fishState: enumFishState as JSONSchema7,
    fishType: enumFishType as JSONSchema7,
    gnssFixQuality: enumGnssFixQuality as JSONSchema7,
    gnssFixType: enumGnssFixType as JSONSchema7,
    measurementType: enumMeasurementType as JSONSchema7,
    reasonArrival: enumReasonArrival as JSONSchema7,
    reasonDeparture: enumReasonDeparture as JSONSchema7,
    reasonDiscard: enumReasonDiscard as JSONSchema7,
    vesselCompartment: enumVesselCompartment as JSONSchema7,
    scaleCategory: enumScaleCategory as JSONSchema7,
  }
}
