import { BaseEntry } from './base-entry';
import { schemas } from './core-schema';
import { ILogbookDeparture } from './core-schema/types';

export class LogbookDeparture extends BaseEntry {
  constructor(
    public data: ILogbookDeparture,
  ) {
    super(data, schemas.logbookDeparture);
  }
}
