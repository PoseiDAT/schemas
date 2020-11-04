import { BaseEntry } from './base-entry';
import { schemas } from './schema';
import { IEntryDeviceMeasurement } from './schema/types';

export class DeviceMeasurementEntry extends BaseEntry {
  constructor(
    public data: IEntryDeviceMeasurement,
  ) {
    super(data, schemas.entry.departure);
  }
}
