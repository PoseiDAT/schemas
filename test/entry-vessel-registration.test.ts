import { v4 } from 'uuid';
import { VesselRegistrationEntry } from '../src/index';
import { IEntryVesselRegistration } from '../src/schema-types';

describe('VesselRegistrationEntry', () => {

  test('VesselRegistrationEntry needs to be defined', () => {
    expect(VesselRegistrationEntry).toBeDefined();
  });

  test('Create an empty VesselRegistrationEntry', () => {
    const baseEntry = new VesselRegistrationEntry({} as IEntryVesselRegistration);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty VesselRegistrationEntry should fail', () => {
    const baseEntry = new VesselRegistrationEntry({} as IEntryVesselRegistration);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });

  test('Validating a minimal VesselRegistrationEntry should succeed', () => {
    const data: IEntryVesselRegistration =
      {
        journal_id: v4(),
        entry_id: v4(),
        entry_type: "vessel-registration",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        vessel: {
          name: 'SeaDragon',
          cfr: 'NLD000000042',
          flag_state: 'NLD',
          hull_number: 'Q-42'
        }
    };

    const entry = new VesselRegistrationEntry(data);

    const validationErrors = entry.validate();
    console.log(validationErrors);
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
