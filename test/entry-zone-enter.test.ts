import { IEntryZoneEnter } from '../src/schema/types';
import { ZoneEnterEntry } from '../src/index';

describe('ZoneEnterEntry', () => {

  test('ZoneEnterEntry needs to be defined', () => {
    expect(ZoneEnterEntry).toBeDefined();
  });

  test('Create an empty ZoneEnterEntry', () => {
    const baseEntry = new ZoneEnterEntry({} as IEntryZoneEnter);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty ZoneEnterEntry should fail', () => {
    const baseEntry = new ZoneEnterEntry({} as IEntryZoneEnter);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });
});
