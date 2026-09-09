import { BaseEntry } from './base-entry';
import { IEntryZoneEnter } from './schema-types';
import { zoneEnterSchema } from './zod/entry/zone-enter';

export class ZoneEnterEntry extends BaseEntry {
  constructor(
    public data: IEntryZoneEnter,
  ) {
    super(data, zoneEnterSchema, 'zone-enter');
  }
}
