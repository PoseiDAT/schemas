import { v4 } from 'uuid';
import { ZoneExitEntry } from '../src/index';
import { IEntryZoneExit } from '../src/schema-types';

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

  test('Validating an minimal ZoneExitEntry should succeed', () => {
    const data: IEntryZoneExit =
      {
        entry_id: v4(),
        journal_id: v4(),
        entry_type: "zone-exit",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        activity_date: "2021-01-01T01:00:00z",
        location: {
          latitude: 1,
          longitude: 2
        },
        zone: {}
    };

    const entry = new ZoneExitEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
