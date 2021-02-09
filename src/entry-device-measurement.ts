import { BaseEntry } from './base-entry';
import { schemas } from './schemas';
import { IEntryDeviceMeasurement } from './schema-types';

export class DeviceMeasurementEntry extends BaseEntry {
  constructor(
    public data: IEntryDeviceMeasurement,
  ) {
    super(data, schemas.entry.deviceMeasurement, 'device-measurement');
  }
}
