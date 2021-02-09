import { BaseEntry } from './base-entry';
import { schemas } from './schemas';
import { IEntryArrival } from './schema-types';

export class ArrivalEntry extends BaseEntry {
  constructor(
    public data: IEntryArrival,
  ) {
    super(data, schemas.entry.arrival, 'arrival');
  }
}
