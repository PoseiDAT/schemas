import { v4 } from 'uuid';
import { ICoreBaseEntry } from '../src/schema/types';
import { BaseEntry } from '../src/base-entry';

describe('BaseEntry', () => {

  test('BaseEntry needs to be defined', () => {
    expect(BaseEntry).toBeDefined();
  });

  test('Create an empty BaseEntry', () => {
    const baseEntry = new BaseEntry({} as ICoreBaseEntry);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty BaseEntry should fail', () => {
    const baseEntry = new BaseEntry({} as ICoreBaseEntry);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(4);
    expect(validationErrors[0].message).toEqual('should have required property \'journal_id\'');
    expect(validationErrors[0].schemaPath).toEqual('#/required');
    expect(validationErrors[1].message).toEqual('should have required property \'entry_id\'');
    expect(validationErrors[1].schemaPath).toEqual('#/required');
    expect(validationErrors[2].message).toEqual('should have required property \'revision\'');
    expect(validationErrors[2].schemaPath).toEqual('#/required');
    expect(validationErrors[3].message).toEqual('should have required property \'immutable\'');
    expect(validationErrors[3].schemaPath).toEqual('#/required');
  });

  test('Validating a minimal BaseEntry should succeed', () => {
    const data: ICoreBaseEntry = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
    }

    const baseEntry = new BaseEntry(data);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
