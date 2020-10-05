import { BaseEntry } from './base-entry';
import { schemas } from './schema';
import { ISensorMeasurement, ISensorState } from './schema/types';

export class SensorMeasurement extends BaseEntry {
  constructor(
    public data: ISensorMeasurement,
  ) {
    super(data, schemas.sensorMeasurement);
  }
}

export class SensorState extends BaseEntry {
  constructor(
    public data: ISensorState,
  ) {
    super(data, schemas.sensorState);
  }
}
