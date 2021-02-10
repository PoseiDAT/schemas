import { v4 } from 'uuid';
import { ArrivalEntry } from '../src/index';
import { IEntryArrival } from '../src/schema-types';

describe('ArrivalEntry', () => {

  test('ArrivalEntry needs to be defined', () => {
    expect(ArrivalEntry).toBeDefined();
  });

  test('Create an empty ArrivalEntry', () => {
    const baseEntry = new ArrivalEntry({} as IEntryArrival);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty ArrivalEntry should fail', () => {
    const baseEntry = new ArrivalEntry({} as IEntryArrival);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });

  test('Validating an minimal ArrivalEntry should succeed', () => {
    const data: IEntryArrival =
      {
        journal_id: v4(),
        entry_id: v4(),
        entry_type: "arrival",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        activity_date: "2021-01-01T01:00:00z",
        trip : {
            date: "2021-01-01T01:00:00z",
            trip_nr: "NLD",
            record_nr: "NLD"
        },
        port: {
            code: "NLURK"
        },
        reason_arrival: 'ECY'
    };

    const entry = new ArrivalEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating an ArrivalEntry with a wrong date value should fail', () => {
    const data: IEntryArrival =
      {
        entry_id: v4(),
        journal_id: v4(),
        entry_type: "arrival",
        trip : {
            date: "2021-01-01",
            trip_nr: "NLD",
            record_nr: "NLD"
        },
        activity_date: "2021-01-01T01:00:00z",
        port: {
            code: "NLURK"
        },
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        reason_arrival: 'ECY',
    };

    const entry = new ArrivalEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(1);
  });
});
