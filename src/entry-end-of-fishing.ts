import { BaseEntry } from './base-entry';
import { schemas } from './schemas';
import { IEntryEndOfFishing } from './schema-types';

export class EndOfFishingEntry extends BaseEntry {
  constructor(
    public data: IEntryEndOfFishing,
  ) {
    super(data, schemas.entry.endOfFishing, 'end-of-fishing');
  }
}
