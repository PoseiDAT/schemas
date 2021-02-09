import { BaseEntry } from './base-entry';
import { schemas } from './schemas';
import { IEntryZoneExit } from './schema-types';

export class ZoneExitEntry extends BaseEntry {
  constructor(
    public data: IEntryZoneExit,
  ) {
    super(data, schemas.entry.arrival, 'zone-exit');
  }
}
