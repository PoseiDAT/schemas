import { BaseEntry } from './base-entry';
import { IEntryEndOfFishing } from './schema-types';
import { endOfFishingSchema } from './zod/entry/end-of-fishing';

export class EndOfFishingEntry extends BaseEntry {
  constructor(
    public data: IEntryEndOfFishing,
  ) {
    super(data, endOfFishingSchema, 'end-of-fishing');
  }
}
