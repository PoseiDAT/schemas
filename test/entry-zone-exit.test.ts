import { IEntryZoneExit } from '../src/schema/types';
import { ZoneExitEntry } from '../src/index';

describe('ZoneExitEntry', () => {

  test('ZoneExitEntry needs to be defined', () => {
    expect(ZoneExitEntry).toBeDefined();
  });

  test('Create an empty ZoneExitEntry', () => {
    const baseEntry = new ZoneExitEntry({} as IEntryZoneExit);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty ZoneExitEntry should fail', () => {
    const baseEntry = new ZoneExitEntry({} as IEntryZoneExit);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });
});
