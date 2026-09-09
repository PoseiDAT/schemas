import { BaseEntry } from './base-entry';
import { IEntryDeviceMeasurement } from './schema-types';
import { deviceMeasurementSchema } from './zod/entry/device-measurement';

export class DeviceMeasurementEntry extends BaseEntry {
  constructor(
    public data: IEntryDeviceMeasurement,
  ) {
    super(data, deviceMeasurementSchema, 'device-measurement');
  }
}
