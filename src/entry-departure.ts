import { BaseEntry } from './base-entry';
import { IEntryDeparture } from './schema-types';
import { departureSchema } from './zod/entry/departure';

export class DepartureEntry extends BaseEntry {
  constructor(
    public data: IEntryDeparture,
  ) {
    super(data, departureSchema, 'departure');
  }
}
