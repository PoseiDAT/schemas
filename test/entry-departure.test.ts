import { v4 } from 'uuid';
import { DepartureEntry } from '../src/index';
import { IEntryDeparture } from '../src/schema-types';

describe('DepartureEntry', () => {

  test('DepartureEntry needs to be defined', () => {
    expect(DepartureEntry).toBeDefined();
  });

  test('Create an empty DepartureEntry', () => {
    const baseEntry = new DepartureEntry({} as IEntryDeparture);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty DepartureEntry should fail', () => {
    const baseEntry = new DepartureEntry({} as IEntryDeparture);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });

  test('Validating a minimal DepartureEntry should succeed', () => {
    const data: IEntryDeparture =
      {
        journal_id: v4(),
        entry_id: v4(),
        entry_type: "departure",
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
        }
    };

    const entry = new DepartureEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

});
