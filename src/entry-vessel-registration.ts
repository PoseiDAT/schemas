import { BaseEntry } from './base-entry';
import { schemas } from './schemas';
import { IEntryVesselRegistration } from './schema-types';

export class VesselRegistrationEntry extends BaseEntry {
  constructor(
    public data: IEntryVesselRegistration,
  ) {
    super(data, schemas.entry.vesselRegistration, 'vessel-registration');
  }
}
