import { v4 } from 'uuid';
import { ZoneEnterEntry } from '../src/index';
import { IEntryZoneEnter } from '../src/schema-types';

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

  test('Validating a minimal ZoneEnterEntry should succeed', () => {
    const data: IEntryZoneEnter =
      {
        entry_id: v4(),
        journal_id: v4(),
        entry_type: "zone-enter",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        activity_date: "2021-01-01T01:00:00z",
        location: {
          latitude: 1,
          longitude: 2
        },
        zone: {
          economical_zone: 'NLD',
          fao_area: '27.4.c',
          fao_subarea: '4',
          fao_division: 'c',
          ices_rectangle: '35F6',
          effort_zone: 'A',
          regional_body: 'NEAFC'
        }
    };

    const entry = new ZoneEnterEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

});
