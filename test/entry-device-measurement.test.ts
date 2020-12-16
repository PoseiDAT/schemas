import { IEntryDeviceMeasurement } from '../src/schema/types';
import { DeviceMeasurementEntry } from '../src/index';

describe('DeviceMeasurementEntry', () => {

  test('DeviceMeasurementEntry needs to be defined', () => {
    expect(DeviceMeasurementEntry).toBeDefined();
  });

  test('Create an empty DeviceMeasurementEntry', () => {
    const baseEntry = new DeviceMeasurementEntry({} as IEntryDeviceMeasurement);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty DeviceMeasurementEntry should fail', () => {
    const baseEntry = new DeviceMeasurementEntry({} as IEntryDeviceMeasurement);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });
});
