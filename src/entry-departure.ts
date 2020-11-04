import { BaseEntry } from './base-entry';
import { schemas } from './schema';
import { IEntryDeparture } from './schema/types';

export class DepartureEntry extends BaseEntry {
  constructor(
    public data: IEntryDeparture,
  ) {
    super(data, schemas.entry.departure);
  }
}
