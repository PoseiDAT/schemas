import { v4 } from 'uuid';
import { FishingActivityEntry } from '../src/index';
import { IEntryFishingActivity } from '../src/schema-types';

describe('FishingActivityEntry', () => {

  test('FishingActivityEntry needs to be defined', () => {
    expect(FishingActivityEntry).toBeDefined();
  });

  test('Create an empty FishingActivityEntry', () => {
    const baseEntry = new FishingActivityEntry({} as IEntryFishingActivity);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty FishingActivityEntry should fail', () => {
    const baseEntry = new FishingActivityEntry({} as IEntryFishingActivity);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });

  test('Validating a minimal FishingActivityEntry should succeed', () => {
    const data: IEntryFishingActivity =
      {
        journal_id: v4(),
        entry_id: v4(),
        entry_type: "fishing-activity",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        trip : {
            date: "2021-01-01T01:00:00z",
            trip_nr: "NLD",
            record_nr: "NLD"
        },
        tow: {
          activity_date_start: "2021-01-01T01:00:00z",
          zone: {}
        }
    };

    const entry = new FishingActivityEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

});
