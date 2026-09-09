import { v4 } from 'uuid';
import { DeviceMeasurementEntry, validateEntry } from '../src/index';
import { IEntryArrival, IEntryDeviceMeasurement } from '../src/schema-types';

const header = () => ({
  journal_id: v4(),
  entry_id: v4(),
  revision: '2021-01-01T01:00:00Z',
  immutable: false,
});

const minimalArrival = (): IEntryArrival => ({
  ...header(),
  entry_type: 'arrival',
  activity_date: '2021-01-01T01:00:00Z',
  trip: {
    date: '2021-01-01T01:00:00Z',
    trip_nr: 'NLD',
    record_nr: 'NLD',
  },
  port: {
    code: 'NLURK',
  },
  reason_arrival: 'ECY',
});

const minimalDeviceMeasurement = (): IEntryDeviceMeasurement => ({
  ...header(),
  entry_type: 'device-measurement',
  device_id: 'DEVICE_ID_STRING',
  value: {
    type: 'POSITION',
    position: {
      latitude: 1,
      longitude: 1,
    },
  },
});

describe('validateEntry', () => {
  test('validateEntry needs to be defined', () => {
    expect(validateEntry).toBeDefined();
  });

  test('A valid arrival passes the entry union', () => {
    const errors = validateEntry(minimalArrival());
    expect(errors).toBeDefined();
    expect(errors.length).toEqual(0);
  });

  test('A valid device-measurement passes the entry union', () => {
    const errors = validateEntry(minimalDeviceMeasurement());
    expect(errors.length).toEqual(0);
  });

  test('An unknown entry_type fails the entry union', () => {
    const data = {
      ...minimalArrival(),
      entry_type: 'not-an-entry-type',
    };

    const errors = validateEntry(data);
    expect(errors.length).toBeGreaterThan(0);
  });

  test('A device-measurement with entry_type arrival fails the entry union', () => {
    const data = {
      ...minimalDeviceMeasurement(),
      entry_type: 'arrival' as IEntryDeviceMeasurement['entry_type'],
    };

    const errors = validateEntry(data);
    expect(errors.length).toBeGreaterThan(0);
  });

  test('A device-measurement still requires journal_id from the base schema', () => {
    const data = { ...minimalDeviceMeasurement() };
    delete (data as { journal_id?: string }).journal_id;

    const errors = validateEntry(data);
    expect(errors.length).toBeGreaterThan(0);
  });

  test('Extra properties on a device-measurement are still allowed', () => {
    const data = {
      ...minimalDeviceMeasurement(),
      extra_field: 'still-accepted',
    };

    const entry = new DeviceMeasurementEntry(data as IEntryDeviceMeasurement);
    const errors = entry.validate();
    expect(errors.length).toEqual(0);

    expect(validateEntry(data).length).toEqual(0);
  });
});
