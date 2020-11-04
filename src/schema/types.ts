/** The shared properties for all entries */
export interface ICoreBaseEntry {
  /** The unique identifier of the journal (UUID v4) this entry belongs to */ journal_id: string;
  /** The unique identifier for the entry (UUID v4) */ entry_id: string;
  /** The date and time the entry was logged in UTC in RFC3339 format */ entry_datetime?: string;
  /** The revision timestamp of this entry. Should be the time it was created. */ revision: string;
  /** Indicates this entry cannot be replaced with future revisions (default) */ immutable: boolean;
}

/** A trip journal */
export interface ICoreJournal {
  /** The unique identifier for the journal (UUID v4) */ journal_id: string;
  /** The identification details of the vessel this journal belongs to */ vessel: ICoreVessel;
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

export type TEntryDepartureAnticipatedActivity = "STE" | "FIS" | "GUD" | "OTH" | "SCR" | "TST";
/** A departure from port event */
export interface IEntryDeparture extends ICoreBaseEntry {
  /** The date and time of departure in UTC in RFC3339 format */ departure_date: string;
  /** The code of the port of departure. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR */ port: string;
  /** The anticipated activity for the fishing trip. Please check the wiki for the meaning of these codes. */ anticipated_activity?: TEntryDepartureAnticipatedActivity;
  /** The location of the vessel at the time of departure */ position?: ICorePosition;
}

/** A device measurement journal entry */
export interface IEntryDeviceMeasurement extends ICoreBaseEntry {
  /** The unique identifier for the device */ device_id: string;
  /** The registered measurement for the device */ value: number;
  /** The date and time the value was recorded in UTC in RFC3339 format */ timestamp: string;
}

/** An entry detailing the equipment installed on a vessel. One 1 should exist per journal */
export interface IEntryEquipmentInventory extends ICoreBaseEntry {
  /** The collection of equipment for the vessel */ equipment: IEquipmentInventoryEquipment[];
}

/** A device which is a part of a piece of equipment installed on a vessel */
export interface IEquipmentInventoryDevice {
  /** The unique identifier for the device (UUID v4) */ device_id: string;
}

/** A piece of equipment installed on a vessel */
export interface IEquipmentInventoryEquipment {
  /** The collection of devices that are a part of this piece of equipment */ device: IEquipmentInventoryDevice[];
}
