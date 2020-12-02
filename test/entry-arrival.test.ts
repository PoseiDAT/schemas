import { IEntryArrival } from '../src/schema/types';
import { ArrivalEntry } from '../src/index';

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
});
