import { v4 } from 'uuid';
import { EndOfFishingEntry } from '../src/index';
import { IEntryEndOfFishing } from '../src/schema-types';

describe('EndOfFishingEntry', () => {

  test('EndOfFishingEntry needs to be defined', () => {
    expect(EndOfFishingEntry).toBeDefined();
  });

  test('Create an empty EndOfFishingEntry', () => {
    const baseEntry = new EndOfFishingEntry({} as IEntryEndOfFishing);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty EndOfFishingEntry should fail', () => {
    const baseEntry = new EndOfFishingEntry({} as IEntryEndOfFishing);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });

  test('Validating an minimal EndOfFishingEntry should succeed', () => {
    const data: IEntryEndOfFishing =
      {
        journal_id: v4(),
        entry_id: v4(),
        entry_type: "end-of-fishing",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        activity_date: "2021-01-01T01:00:00z",
        trip : {
          date: "2021-01-01T01:00:00z",
          trip_nr: "NLD",
          record_nr: "NLD"
      },
    };

    const entry = new EndOfFishingEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
