import { v4 } from 'uuid';
import { ICoreBaseEntry } from '../src/schema-types';
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
    expect(validationErrors.length).toBeGreaterThan(0);
    expect(validationErrors.some((issue) => issue.path.join('/') === 'journal_id')).toBe(true);
    expect(validationErrors.some((issue) => issue.path.join('/') === 'entry_id')).toBe(true);
    expect(validationErrors.some((issue) => issue.path.join('/') === 'revision')).toBe(true);
    expect(validationErrors.some((issue) => issue.path.join('/') === 'immutable')).toBe(true);
  });

  test('Validating a minimal BaseEntry should succeed', () => {
    const data: ICoreBaseEntry = {
      journal_id: v4(),
      entry_id: v4(),
      revision: '2020-01-01T00:00:00Z',
      immutable: false,
      entry_type: 'test',
    }

    const baseEntry = new BaseEntry(data);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
