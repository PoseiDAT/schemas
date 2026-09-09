import './enum/device-type';
import './enum/effort-zone';
import './enum/equipment-type';
import './enum/fish-freshness';
import './enum/fish-package-type';
import './enum/fish-presentation';
import './enum/fish-state';
import './enum/fishing-gear-type';
import './enum/gnss-fix-quality';
import './enum/gnss-fix-type';
import './enum/measurement-type';
import './enum/reason-arrival';
import './enum/reason-departure';
import './enum/reason-discard';
import './enum/route-geometry-type';
import './enum/scale-category';
import './enum/vessel-compartment';
import './core/measurement/position';
import './core/measurement/numeric';
import './core/measurement/fuel-consumption';
import './core/measurement/trawl-tension';
import './core/measurement/scale';
import './core/measurement/spatial-axes';
import './core/measurement/subsurface-sample';
import './core/measurement/subsurface';
import './core/measurement/speedlog';
import './core/measurement/weather';
import './core/measurement/measurement-value';
import './core/vessel';
import './core/port';
import './core/journal';
import './core/trip-entry';
import './core/base-entry';
import './core/address';
import './core/contact-details';
import './core/persona/company';
import './core/equipment/device';
import './core/equipment/equipment';
import './core/fishing-catch-processed';
import './core/fishing-catch';
import './core/fishing-gear';
import './core/fishing-gear-gill-net';
import './core/fishing-gear-loss';
import './core/fishing-gear-retrieve';
import './core/fishing-gear-shot';
import './core/vessel-master';
import './core/vessel-partner';
import './core/fishing-gear-deployment';
import './core/fishing-zone';
import './core/fishing-tow';
import './core/route-waypoint';
import './core/vessel-inspection';
import './core/vessel-section';
import './entry/arrival';
import './entry/departure';
import './entry/device-measurement';
import './entry/end-of-fishing';
import './entry/equipment-inventory';
import './entry/fishing-activity';
import './entry/route';
import './entry/vessel-registration';
import './entry/zone-enter';
import './entry/zone-exit';
import './entry';

export { poseidatRegistry, poseidatId, registerSchema } from './registry';
export { poseidatDateTime, poseidatDate, poseidatUuid } from './formats';
export { deviceTypeSchema, type IEnumDeviceType } from './enum/device-type';
export { effortZoneSchema, type IEnumEffortZone } from './enum/effort-zone';
export { equipmentTypeSchema, type IEnumEquipmentType } from './enum/equipment-type';
export { fishFreshnessSchema, type IEnumFishFreshness } from './enum/fish-freshness';
export { fishPackageTypeSchema, type IEnumFishPackageType } from './enum/fish-package-type';
export { fishPresentationSchema, type IEnumFishPresentation } from './enum/fish-presentation';
export { fishStateSchema, type IEnumFishState } from './enum/fish-state';
export { fishingGearTypeSchema, type IEnumFishingGearType } from './enum/fishing-gear-type';
export { gnssFixQualitySchema, type IEnumGnssFixQuality } from './enum/gnss-fix-quality';
export { gnssFixTypeSchema, type IEnumGnssFixType } from './enum/gnss-fix-type';
export { measurementTypeSchema, type IEnumMeasurementType } from './enum/measurement-type';
export { reasonArrivalSchema, type IEnumReasonArrival } from './enum/reason-arrival';
export { reasonDepartureSchema, type IEnumReasonDeparture } from './enum/reason-departure';
export { reasonDiscardSchema, type IEnumReasonDiscard } from './enum/reason-discard';
export { routeGeometryTypeSchema, type IEnumRouteGeometryType } from './enum/route-geometry-type';
export { scaleCategorySchema, type IEnumScaleCategory } from './enum/scale-category';
export { vesselCompartmentSchema, type IEnumVesselCompartment } from './enum/vessel-compartment';
export {
  positionSchema,
  type IMeasurementPosition,
} from './core/measurement/position';
export { numericSchema, type IMeasurementNumeric } from './core/measurement/numeric';
export { fuelConsumptionSchema, type IMeasurementFuelConsumption } from './core/measurement/fuel-consumption';
export { trawlTensionSchema, type IMeasurementTrawlTension } from './core/measurement/trawl-tension';
export { scaleSchema, type IMeasurementScale } from './core/measurement/scale';
export { spatialAxesSchema, type IMeasurementSpatialAxes } from './core/measurement/spatial-axes';
export { subsurfaceSampleSchema, type IMeasurementSubsurfaceSample } from './core/measurement/subsurface-sample';
export { subsurfaceSchema, type IMeasurementSubsurface } from './core/measurement/subsurface';
export { speedlogSchema, type IMeasurementSpeedlog } from './core/measurement/speedlog';
export { weatherSchema, type IMeasurementWeather } from './core/measurement/weather';
export { measurementValueSchema, type IMeasurementValue } from './core/measurement/measurement-value';
export { vesselSchema, type ICoreVessel } from './core/vessel';
export { portSchema, type ICorePort } from './core/port';
export { journalSchema, type ICoreJournal } from './core/journal';
export { tripEntrySchema, type ICoreTripEntry } from './core/trip-entry';
export { baseEntrySchema, type ICoreBaseEntry } from './core/base-entry';
export { addressSchema, type ICoreAddress } from './core/address';
export { contactDetailsSchema, type ICoreContactDetails } from './core/contact-details';
export { companySchema, type ICorePersonaCompany } from './core/persona/company';
export { deviceSchema, type ICoreEquipmentDevice } from './core/equipment/device';
export { equipmentSchema, type ICoreEquipment } from './core/equipment/equipment';
export { fishingCatchProcessedSchema, type ICoreFishingCatchProcessed } from './core/fishing-catch-processed';
export { fishingCatchSchema, type ICoreFishingCatch } from './core/fishing-catch';
export { fishingGearSchema, type ICoreFishingGear } from './core/fishing-gear';
export { fishingGearGillNetSchema, type ICoreFishingGearGillNet } from './core/fishing-gear-gill-net';
export { fishingGearLossSchema, type ICoreFishingGearLoss } from './core/fishing-gear-loss';
export { fishingGearRetrieveSchema, type ICoreFishingGearRetrieve } from './core/fishing-gear-retrieve';
export { fishingGearShotSchema, type ICoreFishingGearShot } from './core/fishing-gear-shot';
export { fishingGearDeploymentSchema, type ICoreFishingGearDeployment } from './core/fishing-gear-deployment';
export { fishingTowSchema, type ICoreFishingTow } from './core/fishing-tow';
export { fishingZoneSchema, type ICoreFishingZone } from './core/fishing-zone';
export { routeWaypointSchema, type ICoreRouteWaypoint } from './core/route-waypoint';
export { vesselInspectionSchema, type ICoreVesselInspection } from './core/vessel-inspection';
export { vesselMasterSchema, type ICoreVesselMaster } from './core/vessel-master';
export { vesselPartnerSchema, type ICoreVesselPartner } from './core/vessel-partner';
export { vesselSectionSchema, type ICoreVesselSection } from './core/vessel-section';
export {
  arrivalSchema,
  type IEntryArrival,
  type IEntryArrivalEntryType,
} from './entry/arrival';
export {
  departureSchema,
  type IEntryDeparture,
  type IEntryDepartureEntryType,
} from './entry/departure';
export {
  deviceMeasurementSchema,
  type IEntryDeviceMeasurement,
  type IEntryDeviceMeasurementEntryType,
} from './entry/device-measurement';
export {
  endOfFishingSchema,
  type IEntryEndOfFishing,
  type IEntryEndOfFishingEntryType,
} from './entry/end-of-fishing';
export {
  equipmentInventorySchema,
  type IEntryEquipmentInventory,
  type IEntryEquipmentInventoryEntryType,
} from './entry/equipment-inventory';
export {
  fishingActivitySchema,
  type IEntryFishingActivity,
  type IEntryFishingActivityEntryType,
} from './entry/fishing-activity';
export {
  routeSchema,
  type IEntryRoute,
  type IEntryRouteEntryType,
} from './entry/route';
export {
  vesselRegistrationSchema,
  type IEntryVesselRegistration,
  type IEntryVesselRegistrationEntryType,
} from './entry/vessel-registration';
export {
  zoneEnterSchema,
  type IEntryZoneEnter,
  type IEntryZoneEnterEntryType,
} from './entry/zone-enter';
export {
  zoneExitSchema,
  type IEntryZoneExit,
  type IEntryZoneExitEntryType,
} from './entry/zone-exit';
export { entryUnionSchema, type IEntry } from './entry';
export { zodBySchemaId } from './by-id';
