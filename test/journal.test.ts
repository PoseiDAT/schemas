import { v4 } from 'uuid';
import { Journal } from '../src/index';
import { ICoreJournal } from '../src/schema-types';

describe('Journal', () => {

  test('Journal needs to be defined', () => {
    expect(Journal).toBeDefined();
  });

  test('Create an empty Journal', () => {
    const journal = new Journal({} as ICoreJournal);
    expect(journal).toBeDefined();
  });

  test('Validating an empty Journal should fail', () => {
    const journal = new Journal({} as ICoreJournal);

    const validationErrors = journal.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
    expect(validationErrors.some((issue) => issue.path.join('/') === 'journal_id')).toBe(true);
    expect(validationErrors.some((issue) => issue.path.join('/') === 'vessel')).toBe(true);
  });

  test('Validating a minimal Journal should succeed', () => {
    const data: ICoreJournal = {
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
