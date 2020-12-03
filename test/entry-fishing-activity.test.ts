import { IEntryFishingActivity } from '../src/schema/types';
import { FishingActivityEntry } from '../src/index';

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
});
