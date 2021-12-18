// This file will combine and export all the JSON schemas
// The schema-validator will pre-load these
// This file will need to be manually updated with all schemas that are ready for consumption
//
import { JSONSchema7 } from "json-schema";

// Core schemas
//
import * as baseAddress from "./schema/core/address.json";
import * as baseAidsToNavigationReport from "./schema/core/ais-message/aids-to-navigation-report.json";
import * as baseAisMessage from "./schema/core/ais-message/base-ais-message.json";
import * as baseBinaryOrSafetyBroadcast from "./schema/core/ais-message/binary-or-safety-broadcast.json";
import * as baseBinaryOrSafetyMessage from "./schema/core/ais-message/binary-or-safety-message.json";
import * as baseChannelManagement from "./schema/core/ais-message/channel-management.json";
import * as baseClassBPositionReport from "./schema/core/ais-message/class-b-position-report.json";
import * as baseCompany from "./schema/core/persona/company.json";
import * as baseContactDetails from "./schema/core/contact-details.json";
import * as baseDateInquiry from "./schema/core/ais-message/date-inquiry.json";
import * as baseDateResponse from "./schema/core/ais-message/date-response.json";
import * as baseDgnssBroadcastMessage from "./schema/core/ais-message/dgnss-broadcast-message.json";
import * as baseExtendedClassBReport from "./schema/core/ais-message/extended-class-b-report.json";
import * as baseGroupAssignmentCommand from "./schema/core/ais-message/group-assignment-command.json";
import * as baseDevice from "./schema/core/equipment/device.json";
import * as baseEntry from "./schema/core/base-entry.json";
import * as baseEquipment from "./schema/core/equipment/equipment.json";
import * as baseFishingCatch from "./schema/core/fishing-catch.json";
import * as baseFishingCatchProcessed from "./schema/core/fishing-catch-processed.json";
import * as baseFishingGear from "./schema/core/fishing-gear.json";
import * as baseFishingGearDeployment from "./schema/core/fishing-gear-deployment.json";
import * as baseFishingGearGillNet from "./schema/core/fishing-gear-gill-net.json";
import * as baseFishingGearLoss from "./schema/core/fishing-gear-loss.json";
import * as baseFishingGearRetrieve from "./schema/core/fishing-gear-retrieve.json";
import * as baseFishingGearShot from "./schema/core/fishing-gear-shot.json";
import * as baseFishingTow from "./schema/core/fishing-tow.json";
import * as baseFishingZone from "./schema/core/fishing-zone.json";
import * as baseInterrogation from "./schema/core/ais-message/interrogation.json";
import * as baseJournal from "./schema/core/journal.json";
import * as baseFuelConsumption from "./schema/core/measurement/fuel-consumption.json";
import * as baseLongRangePositionReport from "./schema/core/ais-message/long-range-application-position-report.json";
import * as baseMeasurementValue from "./schema/core/measurement/measurement-value.json";
import * as baseNumeric from "./schema/core/measurement/numeric.json";
import * as basePort from "./schema/core/port.json";
import * as basePosition from "./schema/core/measurement/position.json";
import * as basePositionReport from "./schema/core/ais-message/position-report.json";
import * as baseStaticDataReport from "./schema/core/ais-message/static-data-report.json";
import * as baseStaticVoyageData from "./schema/core/ais-message/static-voyage-data.json";
import * as baseStationReport from "./schema/core/ais-message/base-station-report.json";
import * as baseTextPayloadMessage from "./schema/core/ais-message/text-payload-message.json";
import * as baseTrawlTension from "./schema/core/measurement/trawl-tension.json";
import * as baseSarAircraftPositionReport from "./schema/core/ais-message/sar-aircraft-position-report.json";
import * as baseScale from "./schema/core/measurement/scale.json";
import * as baseSpatialAxes from "./schema/core/measurement/spatial-axes.json";
import * as baseTripEntry from "./schema/core/trip-entry.json";
import * as baseVessel from "./schema/core/vessel.json";
import * as baseVesselInspection from "./schema/core/vessel-inspection.json";
import * as baseVesselMaster from "./schema/core/vessel-master.json";
import * as baseVesselPartner from "./schema/core/vessel-partner.json";
import * as baseVesselSection from "./schema/core/vessel-section.json";
import * as baseRouteWaypoint from "./schema/core/route-waypoint.json";

// Entry schemas
//
import * as entryAisMessage from "./schema/entry/ais-message.json";
import * as entryArrival from "./schema/entry/arrival.json";
import * as entryDeparture from "./schema/entry/departure.json";
import * as entryDeviceMeasurement from "./schema/entry/device-measurement.json";
import * as entryEndOfFishing from "./schema/entry/end-of-fishing.json";
import * as entryEquipmentInventory from "./schema/entry/equipment-inventory.json";
import * as entryFishingActivity from "./schema/entry/fishing-activity.json";
import * as entryZoneEnter from "./schema/entry/zone-enter.json";
import * as entryZoneExit from "./schema/entry/zone-exit.json";
import * as entryRoute from "./schema/entry/route.json";

// Enum schemas
//

import * as enumAisAidType from "./schema/enum/ais-aid-type.json";
import * as enumAisAidVirtualFlag from "./schema/enum/ais-aid-virtual-flag.json";
import * as enumAisAltitudeSensorType from "./schema/enum/ais-altitude-sensor-type.json";
import * as enumAisAssignedModeFlag from "./schema/enum/ais-assigned-mode-flag.json";
import * as enumAisClassBandFlag from "./schema/enum/ais-class-b-band-flag.json";
import * as enumAisClassDisplayFlag from "./schema/enum/ais-class-b-display-flag.json";
import * as enumAisClassDscFlag from "./schema/enum/ais-class-b-dsc-flag.json";
import * as enumAisClassMessageFlag from "./schema/enum/ais-class-b-message-flag.json";
import * as enumAisClassUnitFlag from "./schema/enum/ais-class-b-unit-flag.json";
import * as enumAisCommuncationStateSelected from "./schema/enum/ais-communication-state-selected.json";
import * as enumAisDte from "./schema/enum/ais-DTE.json";
import * as enumAisLongRangeControlType from "./schema/enum/ais-long-range-control-type.json";
import * as enumAisMessageType from "./schema/enum/ais-message-type.json";
import * as enumAisNavStatus from "./schema/enum/ais-nav-status.json";
import * as enumAisOffPositionIndicator from "./schema/enum/ais-off-position-indicator.json";
import * as enumAisPositionAccuracy from "./schema/enum/ais-position-accuracy.json";
import * as enumAisPositionDeviceType from "./schema/enum/ais-position-device-type.json";
import * as enumAisPositionLatency from "./schema/enum/ais-position-latency.json";
import * as enumAisRaimFlag from "./schema/enum/ais-RAIM-flag.json";
import * as enumAisShipTypes from "./schema/enum/ais-ship-type.json";
import * as enumAisSpecialManeuver from "./schema/enum/ais-special-maneuver.json";
import * as enumAisVersionIndicator from "./schema/enum/ais-version-indicator.json";
import * as enumDeviceType from "./schema/enum/device-type.json";
import * as enumEffortZone from "./schema/enum/effort-zone.json";
import * as enumEquipmentType from "./schema/enum/equipment-type.json";
import * as enumFishFreshness from "./schema/enum/fish-freshness.json";
import * as enumFishingGearType from "./schema/enum/fishing-gear-type.json";
import * as enumFishPackageType from "./schema/enum/fish-package-type.json";
import * as enumFishPresentation from "./schema/enum/fish-presentation.json";
import * as enumFishState from "./schema/enum/fish-state.json";
import * as enumGnssFixQuality from "./schema/enum/gnss-fix-quality.json";
import * as enumGnssFixType from "./schema/enum/gnss-fix-type.json";
import * as enumMeasurementType from "./schema/enum/measurement-type.json";
import * as enumReasonArrival from "./schema/enum/reason-arrival.json";
import * as enumReasonDeparture from "./schema/enum/reason-departure.json";
import * as enumReasonDiscard from "./schema/enum/reason-discard.json";
import * as enumScaleCategory from "./schema/enum/scale-category.json";
import * as enumVesselCompartment from "./schema/enum/vessel-compartment.json";
import * as enumRouteGeometryType from "./schema/enum/route-geometry-type.json";

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
      spatialAxes: baseSpatialAxes as JSONSchema7,
    },
    "ais-message": {
      aidsToNavigationReport: baseAidsToNavigationReport as JSONSchema7,
      aisMessage: baseAisMessage as JSONSchema7,
      baseStationReport: baseStationReport as JSONSchema7,
      binaryOrSafetyMessage: baseBinaryOrSafetyMessage as JSONSchema7,
      binaryOrSafetyBroadcastMessage:
        baseBinaryOrSafetyBroadcast as JSONSchema7,
      channelManagement: baseChannelManagement as JSONSchema7,
      classBPositionReport: baseClassBPositionReport as JSONSchema7,
      dateInquiry: baseDateInquiry as JSONSchema7,
      dateResponse: baseDateResponse as JSONSchema7,
      dgnssBroadcastMessage: baseDgnssBroadcastMessage as JSONSchema7,
      extendedClassBReport: baseExtendedClassBReport as JSONSchema7,
      groupAssignmentCommand: baseGroupAssignmentCommand as JSONSchema7,
      interrogation: baseInterrogation as JSONSchema7,
      longRangePositionReport: baseLongRangePositionReport as JSONSchema7,
      positionReport: basePositionReport as JSONSchema7,
      staticDataReport: baseStaticDataReport as JSONSchema7,
      staticVoyageData: baseStaticVoyageData as JSONSchema7,
      sarAircraftPositionReport: baseSarAircraftPositionReport as JSONSchema7,
      textPayloadMessage: baseTextPayloadMessage as JSONSchema7,
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
    routeWaypoint: baseRouteWaypoint as JSONSchema7,
  },

  // Entry schemas
  //
  entry: {
    aisMessage: entryAisMessage as JSONSchema7,
    arrival: entryArrival as JSONSchema7,
    departure: entryDeparture as JSONSchema7,
    deviceMeasurement: entryDeviceMeasurement as JSONSchema7,
    endOfFishing: entryEndOfFishing as JSONSchema7,
    equipmentInventory: entryEquipmentInventory as JSONSchema7,
    fishingActivity: entryFishingActivity as JSONSchema7,
    zoneEnter: entryZoneEnter as JSONSchema7,
    zoneExit: entryZoneExit as JSONSchema7,
    route: entryRoute as JSONSchema7,
  },

  // Enum schemas
  //
  enum: {
    aisAidType: enumAisAidType as JSONSchema7,
    aisAidVirtualFlag: enumAisAidVirtualFlag as JSONSchema7,
    aisAltitudeSensorType: enumAisAltitudeSensorType as JSONSchema7,
    aisAssignedModeFlag: enumAisAssignedModeFlag as JSONSchema7,
    aisClassBandFlag: enumAisClassBandFlag as JSONSchema7,
    aisClassDisplayFlag: enumAisClassDisplayFlag as JSONSchema7,
    aisClassDscFlag: enumAisClassDscFlag as JSONSchema7,
    aisClassMessageFlag: enumAisClassMessageFlag as JSONSchema7,
    aisClassUnitFlag: enumAisClassUnitFlag as JSONSchema7,
    aisCommunicationStateSelected:
      enumAisCommuncationStateSelected as JSONSchema7,
    aisDte: enumAisDte as JSONSchema7,
    aisMessageType: enumAisMessageType as JSONSchema7,
    aisNavStatus: enumAisNavStatus as JSONSchema7,
    aisOffPositionIndicator: enumAisOffPositionIndicator as JSONSchema7,
    aisLongRangeControlType: enumAisLongRangeControlType as JSONSchema7,
    aisPostionAccuracy: enumAisPositionAccuracy as JSONSchema7,
    aisPositionDeviceType: enumAisPositionDeviceType as JSONSchema7,
    aisPositionLatency: enumAisPositionLatency as JSONSchema7,
    aisRaimFlag: enumAisRaimFlag as JSONSchema7,
    aisShipTypes: enumAisShipTypes as JSONSchema7,
    aisSpecialManeuver: enumAisSpecialManeuver as JSONSchema7,
    aisVersionIndicator: enumAisVersionIndicator as JSONSchema7,
    deviceType: enumDeviceType as JSONSchema7,
    effortZone: enumEffortZone as JSONSchema7,
    equipmentType: enumEquipmentType as JSONSchema7,
    fishFreshness: enumFishFreshness as JSONSchema7,
    fishingGearType: enumFishingGearType as JSONSchema7,
    fishPackageType: enumFishPackageType as JSONSchema7,
    fishPresentation: enumFishPresentation as JSONSchema7,
    fishState: enumFishState as JSONSchema7,
    gnssFixQuality: enumGnssFixQuality as JSONSchema7,
    gnssFixType: enumGnssFixType as JSONSchema7,
    measurementType: enumMeasurementType as JSONSchema7,
    reasonArrival: enumReasonArrival as JSONSchema7,
    reasonDeparture: enumReasonDeparture as JSONSchema7,
    reasonDiscard: enumReasonDiscard as JSONSchema7,
    vesselCompartment: enumVesselCompartment as JSONSchema7,
    scaleCategory: enumScaleCategory as JSONSchema7,
    routeGeometryType: enumRouteGeometryType as JSONSchema7,
  },
};
