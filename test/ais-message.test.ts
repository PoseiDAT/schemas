import { AisMessageEntry } from './../src/entry-ais-message';
import { IEntryBaseAisMessage } from './../src/schema-types';
import { v4 } from 'uuid';

describe('AisMessageEntry', () => {
  test('AisMessageEntry needs to be defined', () => {
    expect(AisMessageEntry).toBeDefined();
  });

  test('Validating an empty AisMessageEntry should fail', () => {
    const aisEntry = new AisMessageEntry({} as IEntryBaseAisMessage);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(6);
    expect(validationErrors[0].message).toEqual("must have required property 'journal_id'");
    expect(validationErrors[0].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[1].message).toEqual("must have required property 'entry_id'");
    expect(validationErrors[1].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[2].message).toEqual("must have required property 'revision'");
    expect(validationErrors[2].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[3].message).toEqual("must have required property 'immutable'");
    expect(validationErrors[3].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[4].message).toEqual("must have required property 'device_id'");
    expect(validationErrors[4].schemaPath).toEqual('#/required');
    expect(validationErrors[5].message).toEqual("must have required property 'message'");
    expect(validationErrors[5].schemaPath).toEqual('#/required');
  });

  test('Validating a empty position report AisMessageEntry should succeed', () => {
    const data: IEntryBaseAisMessage = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'ais-message',
      device_id: v4(),
      message: {
        entity_id: 1,
        message_type: 'POSITION_REPORT',
        repeat_indicator: 3,
        position_report: {}
      }
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a full position report AisMessageEntry should succeed', () => {
    const data: IEntryBaseAisMessage = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'ais-message',
      device_id: v4(),
      message: {
        entity_id: 1,
        message_type: 'POSITION_REPORT',
        repeat_indicator: 3,
        position_report: {
          position: {
            latitude: 1.1,
            longitude: 1.1
          },
          position_accuracy: 'LOW',
          speed_over_ground: 3.3,
          course_over_ground: 3,
          rate_of_turn: -128,
          true_heading: 3,
          raim_flag: 'RAIM_IN_USE',
          special_maneuvre_indicator: 'ENGAGED_IN_SPECIAL_MANEUVER'
        }
      }
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    console.log(validationErrors);
    expect(validationErrors.length).toEqual(0);
  });
});
