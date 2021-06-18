import { v4 } from 'uuid';
import { IEntryDeviceMeasurement } from '../src/schema-types';
import { DeviceMeasurementEntry } from '../src/entry-device-measurement';

describe('DeviceMeasurementEntry', () => {

  test('DeviceMeasurementEntry needs to be defined', () => {
    expect(DeviceMeasurementEntry).toBeDefined();
  });

  test('Validating an empty DeviceMeasurementEntry should fail', () => {
    const measurementEntry = new DeviceMeasurementEntry({} as IEntryDeviceMeasurement);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(6);
    expect(validationErrors[ 0 ].message).toEqual('should have required property \'journal_id\'');
    expect(validationErrors[ 0 ].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[ 1 ].message).toEqual('should have required property \'entry_id\'');
    expect(validationErrors[ 1 ].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[ 2 ].message).toEqual('should have required property \'revision\'');
    expect(validationErrors[ 2 ].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[ 3 ].message).toEqual('should have required property \'immutable\'');
    expect(validationErrors[ 3 ].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[ 4 ].message).toEqual('should have required property \'device_id\'');
    expect(validationErrors[ 4 ].schemaPath).toEqual('#/required');
    expect(validationErrors[ 5 ].message).toEqual('should have required property \'value\'');
    expect(validationErrors[ 5 ].schemaPath).toEqual('#/required');
  });

  test('Validating a minimal position DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'device-measurement',
      device_id: v4(),
      value: {
        type: 'POSITION',
        position: {
          latitude: 1.1,
          longitude: 1.1,
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a full position DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'device-measurement',
      device_id: v4(),
      value: {
        type: 'POSITION',
        position: {
          latitude: 1.1,
          longitude: 1.1,
          heading: 1.1,
          courseMadeGood: 1.1,
          speedOverGround: 1.1,
          speedThroughWater: 1.1,
          numberOfSatellites: 1,
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a minimal numeric DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'device-measurement',
      device_id: v4(),
      value: {
        type: 'TEMPERATURE',
        numeric: {
          value: 1.1,
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a full numeric DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'device-measurement',
      device_id: v4(),
      value: {
        type: 'TEMPERATURE',
        numeric: {
          value: 1.1,
          negativeError: 1.1,
          positiveError: 1.1,
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a scale DeviceMeasurementEntry with supported fish species should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'device-measurement',
      device_id: v4(),
      value: {
        type: 'SCALE',
        scale: {
          haul_number:1,
          weight:1.1,
          trip_number:1,
          category: 'FISH',
          product: 'ANF'
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a scale DeviceMeasurementEntry with new fish species should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'device-measurement',
      device_id: v4(),
      value: {
        type: 'SCALE',
        scale: {
          haul_number:1,
          weight:1.1,
          trip_number:1,
          category: 'FISH',
          product: 'AAA'
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });


});
