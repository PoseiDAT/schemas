import { BaseEntry } from './base-entry';
import { IEntryZoneExit } from './schema-types';
import { zoneExitSchema } from './zod/entry/zone-exit';

export class ZoneExitEntry extends BaseEntry {
  constructor(
    public data: IEntryZoneExit,
  ) {
    super(data, zoneExitSchema, 'zone-exit');
  }
}
