import { v4 } from 'uuid';
import { DeviceMeasurementEntry } from '../src/index';
import { IEntryDeviceMeasurement } from '../src/schema-types';

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

  test('Validating a minimal DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement =
      {
        journal_id: v4(),
        entry_id: v4(),
        entry_type: "device-measurement",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        device_id: "DEVICE_ID_STRING",
        value : {
            type: "POSITION",
            position: {
              "latitude": 1,
              "longitude": 1
            }
        }
    };

    const entry = new DeviceMeasurementEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

});
