import { BaseEntry } from './base-entry';
import { IEntryVesselRegistration } from './schema-types';
import { vesselRegistrationSchema } from './zod/entry/vessel-registration';

export class VesselRegistrationEntry extends BaseEntry {
  constructor(
    public data: IEntryVesselRegistration,
  ) {
    super(data, vesselRegistrationSchema, 'vessel-registration');
  }
}
