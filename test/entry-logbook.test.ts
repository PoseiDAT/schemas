import { ILogbookDeparture } from '../src/schema/types';
import { LogbookDeparture } from '../src/index';

describe('LogbookDeparture', () => {

  test('LogbookDeparture needs to be defined', () => {
    expect(LogbookDeparture).toBeDefined();
  });

  test('Create an empty LogbookDeparture', () => {
    const baseEntry = new LogbookDeparture({} as ILogbookDeparture);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty LogbookDeparture should fail', () => {
    const baseEntry = new LogbookDeparture({} as ILogbookDeparture);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });
});
