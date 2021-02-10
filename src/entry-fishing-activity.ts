import { BaseEntry } from './base-entry';
import { schemas } from './schemas';
import { IEntryFishingActivity } from './schema-types';

export class FishingActivityEntry extends BaseEntry {
  constructor(
    public data: IEntryFishingActivity,
  ) {
    super(data, schemas.entry.fishingActivity, 'fishing-activity');
  }
}
