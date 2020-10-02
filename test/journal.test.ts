import { v4 } from 'uuid';
import { ICoreSchemaJournal } from '../src/core-schema/types';
import { Journal } from '../src/index';

describe('Journal', () => {

  test('Journal needs to be defined', () => {
    expect(Journal).toBeDefined();
  });

  test('Create an empty Journal', () => {
    const journal = new Journal({} as ICoreSchemaJournal);
    expect(journal).toBeDefined();
  });

  test('Validating an empty Journal should fail', () => {
    const journal = new Journal({} as ICoreSchemaJournal);

    const validationErrors = journal.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(2);
    expect(validationErrors[0].message).toEqual('should have required property \'journal_id\'');
    expect(validationErrors[0].schemaPath).toEqual('#/required');
    expect(validationErrors[1].message).toEqual('should have required property \'vessel\'');
    expect(validationErrors[1].schemaPath).toEqual('#/required');
  });

  test('Validating an minimal Journal should succeed', () => {
    const data: ICoreSchemaJournal = {
      journal_id: v4(),
      vessel: {
        name: 'SeaDragon',
        cfr: 'NLD000000042',
        flag_state: 'NLD',
        hull_number: 'Q-42'
      }
    }

    const journal = new Journal(data);

    const validationErrors = journal.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
