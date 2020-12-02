/** The shared properties for all entries */
export interface ICoreBaseEntry {
  /** The unique identifier of the journal (UUID v4) this entry belongs to */ journal_id: string;
  /** The unique identifier for the entry (UUID v4) */ entry_id: string;
  /** The date and time the entry was logged in UTC in RFC3339 format */ entry_datetime?: string;
  /** The revision timestamp of this entry. Should be the time it was created. */ revision: string;
  /** Indicates this entry cannot be replaced with future revisions (default) */ immutable: boolean;
  /** Free form remarks that are to be added to this journal entry */ remarks?: string;
}

/** Fishing gear details */
export interface ICoreFishingGear {
  /** Gear code corresponding to the FAO’s International Standard Statistical Classification of the Fishing Gear. NLD: GE, GBR: GE */ code: string;
  /** The fishing gear mesh size measured in millimeters. NLD: ME, GBR: ME */ mesh_size?: number;
  /** The number of fishing gear items. NLD: NN, GBR: GBRGNL */ amount?: number;
  /** The total length of the fishing gear in meters. NLD: TL, GBR: GBRGNT */ length?: number;
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
  /** The geographical location of the port */ location?: ICorePosition;
}

/** A navigational position that can be used in an entry */
export interface ICorePosition {
  /** The latitude of the geographical location */ latitude: number;
  /** The longitude of the geographical location */ longitude: number;
  /** The compass heading of the vessel in degrees */ heading?: number;
  /** The direction in which the vessel is traveling, in degrees */ courseMadeGood?: number;
  /** The velocity of the vessel in meters per second (m/s) over the ground */ speedOverGround?: number;
  /** The velocity of the vessel in meters per second (m/s) through the water */ speedThroughWater?: number;
  /** The number of satellites used to calculate the position */ numberOfSatellites?: number;
}

/** The trip related details of a journal entry */
export interface ICoreTripEntry {
  /** The date the trip entry was created or sent at. All dates and times are UTC. GBR: DATI, NLD: DA */ date: string;
  /** The trip number this entry belongs to. NLD: TN, GBR: GBRLOGNO */ trip_nr: string;
  /** The unique record number for the trip entry. Formats differ between ERS dialects. NLD: RN GBR: GBRLOGNO */ record_nr: string;
  /** The unique sequence number for the  entry. GBR: GBRLOGSEQ */ sequence_nr?: string;
  /** The geographical location where the entry was created (for) */ location?: ICorePosition;
}

/** Vessel inspection details */
export interface ICoreVesselInspection {
  /** The datetime the inspection took place */ date: string;
  /** The geographical location of the inspection */ location: ICorePosition;
  /** The country performing the inspection as a 3 letter ISO code. Example: NLD, BEL, GBR. NLD: IC */ country?: string;
  /** The identification of the inspecting official. NLD: IA */ identifier: string;
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

export type IEnumAnticipatedActivity = "STE" | "FIS" | "GUD" | "OTH" | "SCR" | "TST";

export type IEnumEffortZone = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y";

export type IEnumReasonArrival = "ECY" | "GRD" | "LAN" | "OTH" | "REF" | "REP" | "RES" | "SCR" | "SHE" | "TRA";

/** A return to port event */
export interface IEntryArrival extends ICoreBaseEntry {
  /** Trip related details for this  entry */ trip: ICoreTripEntry;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The code of the port of arrival. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR */ port: ICorePort;
  /** The reason for the vessel to return to port. Please check the wiki for the meaning of these codes. */ reason_arrival: IEnumReasonArrival;
  /** The caught fish present on board the vessel */ catch_on_board?: any[];
}

/** A departure from port event */
export interface IEntryDeparture extends ICoreBaseEntry {
  /** Trip related details for this  entry */ trip: ICoreTripEntry;
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The code of the port of departure. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR */ port: ICorePort;
  /** The anticipated activity for the fishing trip. Please check the wiki for the meaning of these codes. */ anticipated_activity?: IEnumAnticipatedActivity;
  /** The gear present on board the vessel */ gear_on_board?: ICoreFishingGear[];
  /** The previously caught fish present on board the vessel */ catch_on_board?: any[];
}

/** A device measurement journal entry */
export interface IEntryDeviceMeasurement extends ICoreBaseEntry {
  /** The unique identifier for the device */ device_id: string;
  /** The registered measurement for the device */ value: number;
  /** The date and time the value was recorded in UTC in RFC3339 format */ timestamp: string;
}

/** Notification of intent to cease all fishing activity for the trip */
export interface IEntryEndOfFishing extends ICoreBaseEntry {
  /** Trip related details for this  entry */ trip: ICoreTripEntry;
  /** The datetime of end of fishing in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
}

/** An entry detailing the equipment installed on a vessel. One 1 should exist per journal */
export interface IEntryEquipmentInventory extends ICoreBaseEntry {
  /** The collection of equipment for the vessel */ equipment: IEquipmentInventoryEquipment[];
}

/** Enter declaration of a fishing zone */
export interface IEntryZoneEnter extends ICoreBaseEntry {
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The zone being entered */ zone: ICoreFishingZone;
  /** The geographical location where the entry took place */ location: ICorePosition;
  /** The previously caught fish present on the vessel at the time of entry */ catch_on_board?: any[];
  /** An indication of the target species for the fishing activity. NLD: TS, GBR: TS */ target_species?: string;
  /** An indication of the directed species for the fishing activity. GBR: GBRDS */ directed_species?: string;
  /** The fishing effort zone. Example: A (ICES V-VI). GBR: GBRFE */ effort_zone?: IEnumEffortZone;
  /** Indicates the vessel has engaged in trans-zonal fishing: GRB: GBRTRZ */ trans_zonal_fishing?: boolean;
}

/** Exit declaration of a fishing zone */
export interface IEntryZoneExit extends ICoreBaseEntry {
  /** The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA */ activity_date: string;
  /** The zone being entered */ zone: ICoreFishingZone;
  /** The geographical location where the entry took place */ location: ICorePosition;
  /** The previously caught fish present on the vessel at the time of entry */ catch_on_board?: any[];
  /** An indication of the target species for the fishing activity. Only GBR: TS */ target_species?: string;
  /** The fishing effort zone. Example: A (ICES V-VI). GBR: GBRFE */ effort_zone?: IEnumEffortZone;
  /** Indicates the vessel has engaged in trans-zonal fishing: GRB: GBRTRZ */ trans_zonal_fishing?: boolean;
  /** The zones involved in trans-zonal fishing. NLD: NLTRZ */ trans_zonal_fishing_zones?: ICoreFishingZone[];
}

/** A device which is a part of a piece of equipment installed on a vessel */
export interface IEquipmentInventoryDevice {
  /** The unique identifier for the device (UUID v4) */ device_id: string;
}

/** A piece of equipment installed on a vessel */
export interface IEquipmentInventoryEquipment {
  /** The collection of devices that are a part of this piece of equipment */ device: IEquipmentInventoryDevice[];
}
