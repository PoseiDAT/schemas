import { Journal } from '../src/index';

describe('Journal', () => {

  test('Journal needs to be defined', () => {
    expect(Journal).toBeDefined();
  });

  test('Create an empty Journal', () => {
    const journal = new Journal;
    expect(journal).toBeDefined();
  });

  test('Validating an empty Journal should fail', () => {
    const journal = new Journal;

    const validationErrors = journal.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(2);
    expect(validationErrors[0].message).toEqual('should have required property \'journal_id\'');
    expect(validationErrors[0].schemaPath).toEqual('#/required');
    expect(validationErrors[1].message).toEqual('should have required property \'vessel\'');
    expect(validationErrors[1].schemaPath).toEqual('#/required');

    expect(journal).toBeDefined();
  });
});
