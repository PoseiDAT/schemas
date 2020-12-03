import { BaseEntry } from './base-entry';
import { schemas } from './schema';
import { IEntryZoneEnter } from './schema/types';

export class ZoneEnterEntry extends BaseEntry {
  constructor(
    public data: IEntryZoneEnter,
  ) {
    super(data, schemas.entry.zoneEnter, 'zone-enter');
  }
}
