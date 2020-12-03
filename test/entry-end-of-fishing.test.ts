import { IEntryEndOfFishing } from '../src/schema/types';
import { EndOfFishingEntry } from '../src/index';

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
});
