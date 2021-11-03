/** A street address */
export interface ICoreAddress {
  /** The street and number */ street_address: string;
  /** An optional street and number extension */ street_address_extension?: string;
  /** The postal or ZIP code of the city */ postal_code: string;
  /** The city or town */ city: string;
  /** The region or province */ region?: string;
  /** The country */ country: string;
}

/** The shared properties for all entries */
export interface ICoreBaseEntry {
  /** The unique identifier of the journal (UUID v4) this entry belongs to */ journal_id: string;
  /** The unique identifier for the entry (UUID v4) */ entry_id: string;
  /** The journal entry type identifer */ entry_type: string;
  /** The date and time the entry was logged in UTC in RFC3339 format */ entry_datetime?: string;
  /** The revision timestamp of this entry. Should be the time it was created. */ revision: string;
  /** Indicates this entry cannot be replaced with future revisions (default) */ immutable: boolean;
  /** Free form remarks that are to be added to this journal entry */ remarks?: string;
}

/** Contact information for persona */
export interface ICoreContactDetails {
  /** The phone number of the contact */ phone?: string;
  /** The email address of the contact */ email?: string;
}

/** Details of caught fish after it has been processed */
export interface ICoreFishingCatchProcessed {
  /** The fish presentation code. Known as PR. Examples: WHL, GUT, FIL */ fish_presentation: IEnumFishPresentation;
  /** The fish preservation state. NLD: PS. Examples: FRO, ALI, SMO. */ fish_state: IEnumFishState;
  /** The package type code. NLD: TY */ package_type?: IEnumFishPackageType;
  /** The number of packages. NLD: NN */ number_of_packages?: number;
  /** Average product weight, measured in Kg. NLD: AW */ average_package_weight?: number;
  /** The fish freshness category. NLD: FF. Examples: A, E, V */ fish_freshness?: IEnumFishFreshness;
  /** The conversion factor (ratio) from dead weight to live weight. Depends on combination of fish species, presentation and state. NLD: CF */ conversion_factor?: number;
}

export type ICoreFishingCatchMeansOfMeasuring = "EST" | "WGH";
/** Details of caught fish */
export interface ICoreFishingCatch {
  /** The fish species code. NLD: SN, GBR: SN */ code: string;
  /** Weight of fish in kg (see context) Depending on context this item will be either (1): Total weight of fish (in kilograms) in catch period. (2): Total weight of fish (in kilograms) on board (aggregate) or (3): Total weight of fish (in kilograms) landed (4): Total weight of fish discarded or used as a live bait. NLD: WT, GBR: WT */ weight?: number;
  /** The number of fish. NLD: NF, GBR: NF */ number_of_fish?: number;
  /** Weight of fish kept in nets outside the hold. NLD: NQ, EU3: NQ  */ weight_in_nets?: number;
  /** The number of fish held in nets outside the hold. NLD: NV, EU3: NB */ number_of_fish_in_nets?: number;
  /** Estimate live weight, in kilograms, of fish to be landed or transshipped. If no catches being landed then 0 should be reported. NLD: WT, GBR: GBRLWT, EU3: WL */ landing_weight?: number;
  /** Total number of fish to be landed or transshipped. NLD: NF, GBR: LNF, EU3: FL */ landing_number?: number;
  /** Indicates the catch is considered a juvenile. NLD3.3+: MV, GBR: GBRJUV */ juvenile?: boolean;
  /** Indicator for farmed fish (Dutch: kweekvis). NLD: KV */ fish_farming?: boolean;
  /** Means of weight measuring: estimation (EST), weighing on board (WGH). EU3: MM */ means_of_measuring?: ICoreFishingCatchMeansOfMeasuring;
  /** The weighed or measured weight. Type depends on means_of_measuring value. NLD3.3: MM */ measured_weight?: string;
  /** Fish size category (1-8; one size or kg, g, cm, mm or number of fish per kg as appropriate). NLD3.3: SF */ fish_size?: string;
  /** Details of the fish after processing. NL: NLPRO, GBR: PRO (also contains SPE) */ processed?: ICoreFishingCatchProcessed;
}

/** Fishing gear deployment details */
export interface ICoreFishingGearDeployment {
  /** Number of minutes the gear was deployed. Known as DU */ duration?: number;
  /** The unit of time for measuring gear deployment. NLD: ET */ unit_of_time?: string;
  /** Number of fishing operations per 24 hour period: number of times gear is shot - does not apply to hooks, lines and pots. If no fishing operations took place then report 0. Known as FO */ fishing_operations?: number;
  /** Fishing depth. The distance from the water surface to the lowest part of the fishing gear, measured in meters. Applies to vessels working under deep sea permit and using towed gear, long lines or fixed nets. Known as FD */ fishing_depth?: number;
  /** Additional information relating to certain gear types e.g. liners = hooks, dredger = number of dredges. GBR: GBRFOX */ gear_component_count?: number;
  /** Norwegian requirement - gear specification (trawls: 1=single, 2=double, 3=triple). GBR: GBRGS */ gear_specification?: number;
  /** Norwegian requirement - gear problems (1=empty net, 2=net burst, 3=net split, 4=broken meshes, 5=lost gear, 6=other). GBR: GBRGP */ gear_problems?: number;
  /** Deep Sea Permit requirements when using gill nets */ gill_net?: ICoreFishingGearGillNet;
  /** The capacity or dimensions of the deployed gear. NLD: GC */ gear_capacity?: string;
  /** Additional information relating to certain gear types: liners = hooks. NLD: NH */ gear_hook_count?: number;
  /** Additional information relating to certain gear types: dredger = number of dredges. NLD: NN */ gear_dredger_count?: number;
  /** All gear shot event details. NLD: GES, GBR: GES */ gear_shot?: ICoreFishingGearShot[];
  /** All gear retrieve even details. NLD: GER, GBR: GER */ gear_retrieve?: ICoreFishingGearRetrieve[];
  /** All gear loss even details. NLD: GLS, GBR: GLS */ gear_loss?: ICoreFishingGearLoss[];
  /** Details of partner vessels for pair fishing. BR: PFP, NLD: NLSPN */ partnered_fishing_vessel?: ICoreVesselPartner[];
}

/** Deep Sea Permit requirements when using gill nets */
export interface ICoreFishingGearGillNet {
  /** Average length of fishing nets in meters. NLD: GL, GBR: GNGL */ average_gear_length: number;
  /** Average height of fishing nets in meters. NLD: GD, GBR: GNGD */ average_gear_height: number;
  /** The nominal length of one fishing net in meters. GBR: GNNL */ nominal_gear_length?: number;
  /** Number of nets present in the fleet. NLD: VN, GBR: GNNN */ number_of_nets: number;
}

/** A gear loss event details */
export interface ICoreFishingGearLoss {
  /** The datetime the gear loss took place */ date?: string;
  /** The geographical location where the gear loss took place */ location: IMeasurementPosition;
  /** The identification tag attached to the lost gear. NLD: NI, GBR: GBRGNFN */ identifier: string;
  /** Free form text to describe the reason of the gear loss. NLD: VT, GBR: GBRCOM */ remarks?: string;
  /** The amount of gear items lost, GBR: NN */ amount_lost?: number;
}

/** A gear retrieve event details */
export interface ICoreFishingGearRetrieve {
  /** The datetime the gear retrieve took place. GBR: DATI, NLD2: DA + TI, NLD3: DA */ date?: string;
  /** The geographical location where the gear retrieve took place */ location: IMeasurementPosition;
  /** The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN */ identifier: string;
}

/** A gear shot event details */
export interface ICoreFishingGearShot {
  /** The datetime the gear shot took place. GBR: DATI, NLD2: DA + TI, NLD3: DA */ date?: string;
  /** The geographical location where the gear shot took place */ location: IMeasurementPosition;
  /** The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN */ identifier?: string;
  /** Indicator of where zone fishing will be commencing. Data recorded in accordance with Norwegian requirements. Known as GBRZO */ country_zones?: string;
}

/** Fishing gear details */
export interface ICoreFishingGear {
  /** Gear code corresponding to the FAO’s International Standard Statistical Classification of the Fishing Gear. NLD: GE, GBR: GE */ code: IEnumFishingGearType;
  /** The fishing gear mesh size measured in millimeters. NLD: ME, GBR: ME */ mesh_size?: number;
  /** The number of fishing gear items. NLD: NN, GBR: GBRGNL */ amount?: number;
  /** The total length of the fishing gear in meters. NLD: TL, GBR: GBRGNT */ length?: number;
}

/** Fishing tow details */
export interface ICoreFishingTow {
  /** The datetime the tow started in UTC */ activity_date_start: string;
  /** The datetime the tow ended in UTC */ activity_date_end?: string;
  /** The geographical location where the tow started (if applicable) */ location_start?: IMeasurementPosition;
  /** The geographical location where the tow ended (if applicable) */ location_end?: IMeasurementPosition;
  /** The collection of geographical locations logged during the tow */ waypoints?: IMeasurementPosition[];
  /** The zone the tow took place in */ zone: ICoreFishingZone;
  /** The fishing gear used for this tow */ fishing_gear?: ICoreFishingGear;
  /** The details of how the gear was used for the tow */ gear_deployment?: ICoreFishingGearDeployment;
  /** The fish caught in this tow */ catches?: ICoreFishingCatch[];
}

/** Geographical zone for fishing activities */
export interface ICoreFishingZone {
  /** The economical zone. This is a 3 letter ISO country code */ economical_zone?: string;
  /** The FAO area. Example: 27.3.d.28.2. This is the 1st value: 27 */ fao_area?: string;
  /** The FAO sub-area. Example: 27.3.d.28.2. This is the 2nd value: 3 */ fao_subarea?: string;
  /** The FAO division. Example: 27.3.d.28.2. This is the 3rd value: d */ fao_division?: string;
  /** The FAO subdivision. Example: 27.3.d.28.2. This is the 4th value: 28 */ fao_subdivision?: string;
  /** The FAO unit. Example: 27.3.d.28.2. This is the 5th value: 2 */ fao_unit?: string;
  /** The ICES statistical rectangle. Example: 26A0 */ ices_rectangle?: string;
  /** The fishing effort zone. Example: A (ICES V-VI) */ effort_zone?: string;
  /** The regional fishery body. Example: AIDCP (Agreement on the International Dolphin Conservation Program) */ regional_body?: string;
}

/** A trip journal */
export interface ICoreJournal {
  /** The unique identifier for the journal (UUID v4) */ journal_id: string;
  /** The identification details of the vessel this journal belongs to */ vessel: ICoreVessel;
}

/** Fishing port details */
export interface ICorePort {
  /** The international port code. Format is 2 letter country code and 3 letter port code. Example: NLURK, BEANR, GBHUL */ code: string;
  /** The geographical location of the port */ location?: IMeasurementPosition;
}

/** A waypoint which is part of a route. */
export interface ICoreRouteWaypoint {
  /** The id of the waypoint within a trip. */ id: number;
  /** The name of the waypoint. */ name?: string;
  /** The latitude of the waypoint. */ latitude: number;
  /** The longitude of the waypoint. */ longitude: number;
  /** The turn radius of the waypoint in nautical miles. */ turn_radius?: number;
  /** The Cross-Track Distance at the port side in nautical miles on the route leg between the previous and this waypoint. */ portside_xtd?: number;
  /** The Cross-Track Distance at the starboard side in nautical miles on the route leg between the previous and this waypoint. */ starboard_xtd?: number;
  /** The safety contour in metres on the route leg between the previous and this waypoint. */ safety_contour?: number;
  /** The safety depth in metres on the route leg between the previous and this waypoint. */ safety_depth?: number;
  /** The geometry type of the route leg between the previous and this waypoint. */ geometry_type?: IEnumRouteGeometryType;
  /** The lowest cruising speed in knots on the route leg between the previous and this waypoint. */ speed_min?: number;
  /** The highest allowed cruising speed in knots on the route leg between the previous and this waypoint. */ speed_max?: number;
  /** The static draught forward (bow) in metres on the route leg between the previous and this waypoint. */ draught_forward?: number;
  /** The static draught aft (stern) in metres on the route leg between the previous and this waypoint. */ draught_aft?: number;
  /** The minimum static Under Keel Clearance on the route leg between the previous and this waypoint. */ static_ukc?: number;
  /** The minimum dynamic Under Keel Clearance on the route leg between the previous and this waypoint. */ dynamic_ukc?: number;
  /** The height of the masthead on the route leg between the previous and this waypoint. */ masthead_height?: number;
  /** The Estimated Time of Departure from this waypoint. */ etd?: string;
  /** The Estimated Time of Arrival at this waypoint. */ eta?: string;
}

/** The trip related details of a journal entry */
export interface ICoreTripEntry {
  /** The date the trip entry was created or sent at. All dates and times are UTC. GBR: DATI, NLD: DA */ date: string;
  /** The trip number this entry belongs to. NLD: TN, GBR: GBRLOGNO */ trip_nr: string;
  /** The unique record number for the trip entry. Formats differ between ERS dialects. NLD: RN GBR: GBRLOGNO */ record_nr: string;
  /** The unique sequence number for the  entry. GBR: GBRLOGSEQ */ sequence_nr?: string;
  /** The geographical location where the entry was created (for) */ location?: IMeasurementPosition;
}

/** Vessel inspection details */
export interface ICoreVesselInspection {
  /** The datetime the inspection took place */ date: string;
  /** The geographical location of the inspection */ location: IMeasurementPosition;
  /** The country performing the inspection as a 3 letter ISO code. Example: NLD, BEL, GBR. NLD: IC */ country?: string;
  /** The identification of the inspecting official. NLD: IA */ identifier: string;
}

/** The vessel master details. Usually one per entry but can differ in a single trip */
export interface ICoreVesselMaster {
  /** The name of the vessel master */ name: string;
  /** The (abbreviated) address of the vessel master. Required in all but NLD */ address?: string;
  /** Can be used to store any (external) identifier of the master */ identifier?: string;
}

/** Fishing vessel details for partnered fishing */
export interface ICoreVesselPartner {
  /** The external markings of the vessel. NLD2+: XR, GBR: PXR */ hull_number: string;
  /** The RSS identification code for the vessel. GBR: GBRPRSSNO */ rss?: string;
  /** The code of federal regulation for the vessel. GBR: PIR */ cfr?: string;
  /** The international radio call sign for the vessel. GBR: PRC */ call_sign?: string;
  /** Flag state of vessel registration. NLD2+: FS, GBR: PFS */ flag_state: string;
  /** The name of the vessel. NLD3+: NA, GBR: PNA */ name?: string;
  /** The vessel master (captain) */ master?: ICoreVesselMaster;
}

/** A section off a vessel, used to detail where objects are on the vessel */
export interface ICoreVesselSection {
  /** The unique identifier for the section (UUID v4) */ vessel_section_id: string;
  /** The compartment this section is in */ compartment: IEnumVesselCompartment;
  /** The name of this section */ name?: string;
  /** The description of this section in the compartment */ description?: string;
  /** The x position in cm, the position which is closest to the port side is 0cm */ pos_x?: number;
  /** The y position in cm, the position which is closest to the stern is 0cm */ pos_y?: number;
  /** The z position in cm, the position which is closest to the keel is 0cm */ pos_z?: number;
}

/** The vessel information */
export interface ICoreVessel {
  /** The display name for the vessel */ name: string;
  /** The vessels flag state and country to report ERS messages to. Should be a 3 letter ISO code. */ flag_state: string;
  /** The vessel's Community Fleet Registration number. Fixed format defined by the pattern: "AAAXXXXXXXXX" (AAA = Fully capitalised country code of the vessel's first registration within the EU, XXXXXXXXX = 9 character alphanumeric code.). Known as CFR or IR */ cfr: string;
  /** The vessels international radio call sign (RC) */ call_sign?: string;
  /** The vessel's side (hull) registration number. Also known as XR or PLN. May contain dots or dashes */ hull_number: string;
  /** GBR ONLY: The vessel's unique identity number as recorded by the UK Registrar of Seamen and Shipping */ gbr_rss?: string;
  /** International Commission for the Conservation of Atlantic Tuna identifier */ iccat?: string;
  /** Global Fisheries Council of the Mediterranean identifier */ gfcm?: string;
  /** Unique Vessel Identifier (IMO number). A number issued by the tuna RFMOs or by ISSF. */ uvi?: string;
  /** The unique identification of a vessel according to Lloyds register */ imo_code?: string;
  /** The net loading capacity of the vessel, expressed in tons */ net_tonnage?: number;
  /** The gross loading capacity of the vessel, expressed in tons */ gross_tonnage?: number;
  /** The date the vessel was registered */ registration_date?: string;
  /** The full length of the vessel in meters */ full_length?: number;
}

/** A device which is a part of a piece of equipment installed on a vessel */
export interface IEquipmentDevice {
  /** The unique identifier for the device (UUID v4) */ device_id: string;
  /** Name of the device */ name: string;
  /** The type of device */ type: IEnumDeviceType;
  /** The brand of the device */ brand?: string;
  /** The product number of the device */ product_no?: string;
  /** The serial number of the device */ serial_no?: string;
  /** The company which supplied the device */ supplier?: IPersonaCompany;
  /** The company which has installed the device */ installer?: IPersonaCompany;
  /** The company which maintains the device */ maintainer?: IPersonaCompany;
}

/** A piece of equipment installed on a vessel. Equipment is composed out of different devices */
export interface IEquipmentEquipment {
  /** The unique identifier for the equipment (UUID v4) */ equipment_id: string;
  /** Name of the equipment */ name: string;
  /** The type of equipment */ type: IEnumEquipmentType;
  /** The company which supplied the equipment */ supplier?: IPersonaCompany;
  /** The company which has installed the equipment */ installer?: IPersonaCompany;
  /** The company which maintains the equipment */ maintainer?: IPersonaCompany;
  /** The collection of devices of which this equipment is composed */ devices: IEquipmentDevice[];
}

/** Fuel consumption of a certain engine. */
export interface IMeasurementFuelConsumption {
  /** The current fuel consumption in liters per hour */ current_consumption: number;
  /** The current averaged fuel consumption in liters per hour */ current_average_consumption?: number;
  /** The current peak fuel consumption in liters per hour */ current_peak_consumption?: number;
  /** The total number of liters consumed in the last hour */ last_hour_consumption?: number;
  /** The total number of liters consumed in the last 24 hours */ last_day_consumption?: number;
}

/** The value of a certain type of measurement */
export interface IMeasurementMeasurementValue {
  /** The type of measurement */ type?: IEnumMeasurementType;
  /** A positional measurement */ position?: IMeasurementPosition;
  /** A numerical measurement */ numeric?: IMeasurementNumeric;
  /** A trawl tension measurement */ trawl_tension?: IMeasurementTrawlTension;
  /** A scale measurement */ scale?: IMeasurementScale;
  /** A fuel consumption measurement */ fuel_consumption?: IMeasurementFuelConsumption;
}

/** A number representing a measurement from a sensor */
export interface IMeasurementNumeric {
  /** The absolute measured value */ value: number;
}

/** A navigational position that can be used in an entry */
export interface IMeasurementPosition {
  /** The latitude of the geographical location */ latitude: number;
  /** The longitude of the geographical location */ longitude: number;
  /** The direction in which the vessel is traveling, in degrees */ course_made_good?: number;
  /** The velocity of the vessel in meters per second (m/s) over the ground */ speed_over_ground?: number;
  /** The number of satellites used to calculate the position */ number_of_satellites?: number;
  /** The fix quality as reported by an NMEA receiver (0 = invalid, 1 = GPS fix, 2 = DGPS fix) */ fix_quality?: IEnumGnssFixQuality;
  /** The type of GPS fix. */ fix_type?: IEnumGnssFixType;
  /** Relative accuracy of horizontal position */ hdop?: number;
  /** The number of meters above mean sea level of the receiver antenna */ antenna_altitude?: number;
  /** Height of geoid above WGS84 ellipsoid in meters */ geoidal_separation?: number;
  /** The age of the DGPS data in seconds */ dgps_data_age?: number;
  /** The station id of the used DGPS reference station */ dgps_station_id?: number;
}

/** A scale measurement that can be used in an entry */
export interface IMeasurementScale {
  /** The number of the haul the product was caught in */ haul_number: number;
  /** The weight of the product */ weight: number;
  /** The category of the scaled product */ category: IEnumScaleCategory;
  /** The type of the product, e.g. a type of fish */ product: string;
}

/** A combination of sensor measurements for the trawl tension */
export interface IMeasurementTrawlTension {
  /** The shooted length at starboard side */ shooted_length_starboard: number;
  /** The shooted length at port side */ shooted_length_port: number;
  /** The shooted length at center side */ shooted_length_center: number;
  /** The traction at starboard side */ traction_starboard: number;
  /** The traction at port side */ traction_port: number;
  /** The traction at center side */ traction_center: number;
  /** The speed at starboard side */ speed_starboard?: number;
  /** The speed at port side */ speed_port?: number;
  /** The speed at center side */ speed_center?: number;
  /** The pressure at starboard side */ pressure_starboard?: number;
  /** The pressure at port side */ pressure_port?: number;
  /** The pressure at center side */ pressure_center?: number;
  /** The drum rotations at starboard side */ drum_rotations_starboard?: number;
  /** The drum rotations at port side */ drum_rotations_port?: number;
  /** The drum rotations at center side */ drum_rotations_center?: number;
}

/** The details of a (commercial) company */
export interface IPersonaCompany {
  /** The unique identifier for the company (UUID v4) */ company_id: string;
  /** The name of the company */ name: string;
  /** The address of the company */ address?: ICoreAddress;
  /** The contact details of the company */ contact?: ICoreContactDetails;
}

export type IEnumDeviceType =
  | "PUMP"
  | "PROCESSOR"
  | "DISPLAY"
  | "HID"
  | "ROUTER"
  | "SWITCH"
  | "MODEM"
  | "SENSOR"
  | "BRAKE"
  | "ACTUATOR"
  | "CABLE"
  | "ENCLOSURE"
  | "CIRCUIT_BREAKER"
  | "ECONOMETER"
  | "SCALE"
  | "RECEIVER"
  | "TRANSMITTER"
  | "TRANSCEIVER";

export type IEnumEffortZone =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y";

export type IEnumEquipmentType =
  | "ENGINE"
  | "GNSS"
  | "ECHO_SOUNDER"
  | "FISH_FINDER"
  | "AIS"
  | "TANK_LEVEL_METER"
  | "TENSIOMETER"
  | "CHARGER"
  | "SEPARATOR"
  | "COMPASS"
  | "V_SAT"
  | "REFRIGERATOR"
  | "ICE_MAKER"
  | "WINCH"
  | "RUDDER"
  | "PROPELLER"
  | "PUMP"
  | "SENSOR"
  | "SCALE"
  | "ECDIS"
  | "ECS";

export type IEnumFishFreshness = "A" | "B" | "E" | "SO" | "V";

export type IEnumFishPackageType =
  | "CNT"
  | "EC"
  | "OK"
  | "QS"
  | "CN"
  | "CT"
  | "VO"
  | "4H"
  | "BX"
  | "5H"
  | "QR"
  | "TB"
  | "NF"
  | "NG"
  | "ZB";

export type IEnumFishPresentation =
  | "BMS"
  | "CBF"
  | "CLA"
  | "DWT"
  | "FIL"
  | "FIS"
  | "FSB"
  | "FSP"
  | "GHT"
  | "GTA"
  | "GTF"
  | "GUG"
  | "GUH"
  | "GUL"
  | "GUS"
  | "GUT"
  | "HEA"
  | "HET"
  | "JAP"
  | "JAT"
  | "LAP"
  | "LVR-C"
  | "LVR"
  | "OTH"
  | "ROE-C"
  | "ROE"
  | "SAD"
  | "SAL"
  | "SGH"
  | "SGT"
  | "SKI"
  | "SUR"
  | "TAL"
  | "TLD"
  | "TNG-C"
  | "TNG"
  | "TUB"
  | "WHL"
  | "WNG"
  | "WNG+SKI";

export type IEnumFishState =
  | "ALI"
  | "BOI"
  | "DRI"
  | "FRE"
  | "FRO"
  | "SAL"
  | "SMO";

export type IEnumFishType =
  | "ANF"
  | "BLL"
  | "BIB"
  | "COD"
  | "CRE"
  | "DAB"
  | "GUU"
  | "HAD"
  | "HKE"
  | "JOD"
  | "LEM"
  | "LEZ"
  | "LIN"
  | "MUR"
  | "OCZ"
  | "PLE"
  | "RJH"
  | "RJI"
  | "RJM"
  | "RSC"
  | "SCE"
  | "SOL"
  | "SYC"
  | "SYT"
  | "TUR"
  | "WHE"
  | "MAC"
  | "WIT"
  | "OCT"
  | "POL"
  | "CTC"
  | "SOX"
  | "SQU"
  | "COE"
  | "BSS"
  | "CAA"
  | "CRA"
  | "FLE"
  | "POK"
  | "RJC"
  | "RJN"
  | "WEG"
  | "NEP"
  | "IJS"
  | "WHG"
  | "RJB"
  | "SBR"
  | "SKH"
  | "SMD"
  | "SRX"
  | "TSD"
  | "WEX"
  | "GAG"
  | "GUG"
  | "GUR"
  | "HAL"
  | "LBE"
  | "LYY"
  | "MUL"
  | "OCC"
  | "PIL"
  | "BRB"
  | "REG";

export type IEnumFishingGearType =
  | "DRB"
  | "FIX"
  | "FPO"
  | "GEN"
  | "GN"
  | "GNC"
  | "GND"
  | "GNF"
  | "GNS"
  | "GTN"
  | "GTR"
  | "HMD"
  | "KRK"
  | "LA"
  | "LHM"
  | "LHP"
  | "LL"
  | "LLD"
  | "LLS"
  | "LTL"
  | "LX"
  | "MIS"
  | "NK"
  | "OTB"
  | "OTM"
  | "OTT"
  | "PS"
  | "PS1"
  | "PS2"
  | "PTB"
  | "PTM"
  | "PUL"
  | "RG"
  | "SDN"
  | "SPR"
  | "SSC"
  | "SV"
  | "SX"
  | "TB"
  | "TBB"
  | "TBN"
  | "TBS";

export type IEnumGnssFixQuality = "INVALID" | "GPS_FIX" | "DGPS_FIX";

export type IEnumGnssFixType = "NOT_AVAILABLE" | "2D_FIX" | "3D_FIX";

export type IEnumMeasurementType =
  | "POSITION"
  | "TEMPERATURE"
  | "HUMIDITY"
  | "PRESSURE"
  | "SPEED"
  | "ONOFF"
  | "FORCE"
  | "FUEL_CONSUMPTION"
  | "DEPTH"
  | "ACCELERATION"
  | "MAGNETISM"
  | "ANGULAR_VELOCITY"
  | "VOLTAGE"
  | "CURRENT"
  | "POWER"
  | "ENERGY_CONSUMPTION"
  | "TRAWL_TENSION"
  | "SCALE"
  | "RPM"
  | "ROUTE";

export type IEnumReasonArrival =
  | "ECY"
  | "GRD"
  | "LAN"
  | "OTH"
  | "REF"
  | "REP"
  | "RES"
  | "SCR"
  | "SHE"
  | "TRA";

export type IEnumReasonDeparture =
  | "FIS"
  | "GUD"
  | "OTH"
  | "SCR"
  | "STE"
  | "TST";

export type IEnumReasonDiscard = "BAI" | "HSV" | "OTH" | "PDM" | "PRO" | "QEX";

export type IEnumRouteGeometryType =
  | "RHUMB_LINE_LOXODROME"
  | "GREAT_CICRLE_ORTHODROME";

export type IEnumScaleCategory = "FISH";

export type IEnumVesselCompartment =
  | "DECK"
  | "BRIDGE"
  | "GALLEY"
  | "ENGINE_ROOM"
  | "FISH_HOLD"
  | "CABIN"
  | "BOW"
  | "STERN";

export type IEntryArrivalEntryType = "arrival";
/** A return to port event */
export interface IEntryArrival extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryArrivalEntryType;
  /** Trip related details for this  entry */ trip: ICoreTripEntry;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The code of the port of arrival. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR */ port: ICorePort;
  /** The reason for the vessel to return to port. Please check the wiki for the meaning of these codes. */ reason_arrival: IEnumReasonArrival;
  /** The caught fish present on board the vessel */ catch_on_board?: ICoreFishingCatch[];
}

export type IEntryDepartureEntryType = "departure";
/** A departure from port event */
export interface IEntryDeparture extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryDepartureEntryType;
  /** Trip related details for this  entry */ trip: ICoreTripEntry;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The code of the port of departure. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR */ port: ICorePort;
  /** The anticipated activity for the fishing trip. Please check the wiki for the meaning of these codes. */ anticipated_activity?: IEnumReasonDeparture;
  /** The gear present on board the vessel */ gear_on_board?: ICoreFishingGear[];
  /** The previously caught fish present on board the vessel */ catch_on_board?: ICoreFishingCatch[];
}

export type IEntryDeviceMeasurementEntryType = "device-measurement";
/** A device measurement journal entry */
export interface IEntryDeviceMeasurement extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryDeviceMeasurementEntryType;
  /** The unique identifier for the device */ device_id: string;
  /** The registered measurement for the device */ value: IMeasurementMeasurementValue;
}

export type IEntryEndOfFishingEntryType = "end-of-fishing";
/** Notification of intent to cease all fishing activity for the trip */
export interface IEntryEndOfFishing extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryEndOfFishingEntryType;
  /** Trip related details for this entry */ trip: ICoreTripEntry;
  /** The datetime of end of fishing in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
}

export type IEntryEquipmentInventoryEntryType = "equipment-inventory";
/** An entry detailing the equipment installed on a vessel. One 1 should exist per journal */
export interface IEntryEquipmentInventory extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryEquipmentInventoryEntryType;
  /** The collection of equipment for the vessel */ equipment: IEquipmentEquipment[];
}

export type IEntryFishingActivityEntryType = "fishing-activity";
/** Notification of intent to cease all fishing activity for the trip */
export interface IEntryFishingActivity extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryFishingActivityEntryType;
  /** Trip related details for this entry */ trip: ICoreTripEntry;
  /** The fishing tow details */ tow: ICoreFishingTow;
}

export type IEntryRouteEntryType = "route";
/** A route which was planned with an ECS/ECDIS system. */
export interface IEntryRoute extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryRouteEntryType;
  /** The name of the route. */ name: string;
  /** Generic route information. */ info?: string;
  /** The collection of waypoints which make the route. */ waypoints: ICoreRouteWaypoint[];
}

export type IEntryZoneEnterEntryType = "zone-enter";
/** Enter declaration of a fishing zone */
export interface IEntryZoneEnter extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryZoneEnterEntryType;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The zone being entered */ zone: ICoreFishingZone;
  /** The geographical location where the entry took place */ location: IMeasurementPosition;
  /** The previously caught fish present on the vessel at the time of entry */ catch_on_board?: ICoreFishingCatch[];
  /** An indication of the target species for the fishing activity. NLD: TS, GBR: TS */ target_species?: string;
  /** An indication of the directed species for the fishing activity. GBR: GBRDS */ directed_species?: string;
  /** The fishing effort zone. Example: A (ICES V-VI). GBR: GBRFE */ effort_zone?: IEnumEffortZone;
  /** Indicates the vessel has engaged in trans-zonal fishing: GRB: GBRTRZ */ trans_zonal_fishing?: boolean;
}

export type IEntryZoneExitEntryType = "zone-exit";
/** Exit declaration of a fishing zone */

export type IEntryAISMeasurementEntryType = "ais-measurement";
/** TODO:
 * In the case an AIS entity extends the base entry then an AIS entity would be only available to the journeal
 * which collected this entry with his AIS.
 *
 * Maybe a journal is not needed and is this a collective dataset of collected AIS entities and measurements
 * Since they share the same AIS identifier and are public available to the ones who can collect them
 *
 * For now I will keep it as an extention of the base entry, but maybe some brain food for the future
 * */
export interface IEntryAISEntity extends ICoreBaseEntry {
  /** The ais measurement entry type identifer */ entry_type: IEntryAISMeasurementEntryType;
}

export interface IEntryZoneExit extends ICoreBaseEntry {
  /** The journal entry type identifer */ entry_type: IEntryZoneExitEntryType;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The zone being entered */ zone: ICoreFishingZone;
  /** The geographical location where the entry took place */ location: IMeasurementPosition;
  /** The previously caught fish present on the vessel at the time of entry */ catch_on_board?: ICoreFishingCatch[];
  /** An indication of the target species for the fishing activity. Only GBR: TS */ target_species?: string;
  /** The fishing effort zone. Example: A (ICES V-VI). GBR: GBRFE */ effort_zone?: IEnumEffortZone;
  /** Indicates the vessel has engaged in trans-zonal fishing: GRB: GBRTRZ */ trans_zonal_fishing?: boolean;
  /** The zones involved in trans-zonal fishing. NLD: NLTRZ */ trans_zonal_fishing_zones?: ICoreFishingZone[];
}
