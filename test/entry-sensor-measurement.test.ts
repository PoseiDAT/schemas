import { ISensorMeasurement } from '../src/core-schema/types';
import { SensorMeasurement } from '../src/index';

describe('SensorMeasurement', () => {

  test('SensorMeasurement needs to be defined', () => {
    expect(SensorMeasurement).toBeDefined();
  });

  test('Create an empty SensorMeasurement', () => {
    const baseEntry = new SensorMeasurement({} as ISensorMeasurement);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty SensorMeasurement should fail', () => {
    const baseEntry = new SensorMeasurement({} as ISensorMeasurement);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });
});
