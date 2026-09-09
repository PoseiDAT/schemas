import { BaseEntry } from "./base-entry";
import { IEntryVesselRegistration } from "./schema-types";
import { vesselRegistrationSchema } from "./validators/entry/vessel-registration";

export class VesselRegistrationEntry extends BaseEntry {
  constructor(public data: IEntryVesselRegistration) {
    super(data, vesselRegistrationSchema, "vessel-registration");
  }
}
