import { journalSchema, baseEntrySchema } from '../../src/zod';
import { validJournal } from '../schema-parity/fixtures';

test('minimal journal is valid', () => {
  expect(journalSchema.safeParse(validJournal).success).toBe(true);
});

test('journal extra property is invalid', () => {
  expect(
    journalSchema.safeParse({ ...validJournal, unexpected: 'nope' }).success,
  ).toBe(false);
});

test('empty journal is invalid', () => {
  expect(journalSchema.safeParse({}).success).toBe(false);
});

test('lowercase z revision is valid on base entry', () => {
  expect(
    baseEntrySchema.safeParse({
      journal_id: '11111111-1111-4111-8111-111111111111',
      entry_id: '22222222-2222-4222-8222-222222222222',
      entry_type: 'arrival',
      revision: '2021-01-01T01:00:00z',
      immutable: false,
    }).success,
  ).toBe(true);
});
