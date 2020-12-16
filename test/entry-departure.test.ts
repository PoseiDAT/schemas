import { IEntryDeparture } from '../src/schema/types';
import { DepartureEntry } from '../src/index';

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
});
