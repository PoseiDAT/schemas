import { BaseEntry } from './base-entry';
import { schemas } from './schema';
import { ILogbookDeparture } from './schema/types';

export class LogbookDeparture extends BaseEntry {
  constructor(
    public data: ILogbookDeparture,
  ) {
    super(data, schemas.logbookDeparture);
  }
}
