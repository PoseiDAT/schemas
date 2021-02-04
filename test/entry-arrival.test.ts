import { IEntryArrival } from '../src/schema/types';
import { ArrivalEntry } from '../src/index';
import { v4 } from 'uuid';

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

  test('Validating an minimal Arrival Entry should succeed', () => {
    const data: IEntryArrival =
      {
        entry_id: v4(),
        journal_id: v4(),
        entry_type: "arrival",
        entry_datetime: "2021-02-02T09:58:32z",
        remarks: "This is a test",
        trip : {
            date: "2021-02-02T09:58:32z",
            trip_nr: "NLD",
            record_nr: "NLD"
        },
        activity_date: "2021-02-02T09:58:32z",
        port: {
            code: "NLURK"
        },
        revision: "2021-02-02T09:58:32z",
        immutable: false,
        reason_arrival: 'ECY',
    };

    const entry = new ArrivalEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
