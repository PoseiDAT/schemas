/** The shared properties for all entries */
export interface ICoreBaseEntry {
  /** The unique identifier of the journal (UUID v4) this entry belongs to */ journal_id: string;
  /** The unique identifier for the entry (UUID v4) */ entry_id: string;
  /** The revision timestamp of this entry. Should be the time it was created. */ revision: string;
  /** Indicates this entry cannot be replaced with future revisions (default) */ immutable: boolean;
}

/** A trip journal */
export interface ICoreJournal {
  /** The unique identifier for the journal (UUID v4) */ journal_id: string;
  /** The vessel this journal belongs to */ vessel: ICoreVessel;
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

export type TLogbookDepartureAnticipatedActivity = "STE" | "FIS" | "GUD" | "OTH" | "SCR" | "TST";
/** A departure journal entry */
export interface ILogbookDeparture extends ICoreBaseEntry {
  /** The date and time of departure in UTC in RFC3339 format */ activity_date?: string;
  /** The code of the port of departure. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR */ port?: string;
  /** The anticipated activity for the fishing trip. Please check the wiki for the meaning of these codes. */ anticipated_activity?: TLogbookDepartureAnticipatedActivity;
  /** The location of the vessel at the time of departure */ position?: INavigationPosition;
}

/** A navigational position journal entry */
export interface INavigationPosition extends ICoreBaseEntry {
  /** The latitude of the geographical location */ latitude: number;
  /** The longitude of the geographical location */ longitude: number;
  /** The compass heading of the vessel in degrees */ heading?: number;
  /** The velocity of the vessel in meters per second (m/s) */ velocity?: number;
}

/** A sensor measurement journal entry */
export interface ISensorMeasurement extends ICoreBaseEntry {
  /** The unique identifier for the sensor */ sensor_id: string;
  /** The registered measurement for the sensor */ value: number;
  /** The date and time the sensor value was recorded at in UTC in RFC3339 format */ timestamp?: string;
}

/** A sensor state journal entry */
export interface ISensorState extends ICoreBaseEntry {
  /** The unique identifier for the sensor */ sensor_id: string;
  /** The registered state for the sensor */ value: string;
  /** The date and time the sensor value was recorded at in UTC in RFC3339 format */ timestamp?: string;
}
