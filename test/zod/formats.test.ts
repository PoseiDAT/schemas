import { poseidatDateTime, poseidatUuid } from '../../src/zod/formats';

describe('poseidatDateTime', () => {
  test('accepts uppercase Z', () => {
    expect(poseidatDateTime.safeParse('2021-01-01T01:00:00Z').success).toBe(true);
  });

  test('accepts lowercase z (AJV date-time)', () => {
    expect(poseidatDateTime.safeParse('2021-01-01T01:00:00z').success).toBe(true);
  });

  test('rejects a date without a time', () => {
    expect(poseidatDateTime.safeParse('2021-01-01').success).toBe(false);
  });
});

describe('poseidatUuid', () => {
  test('accepts a RFC UUID', () => {
    expect(poseidatUuid.safeParse('11111111-1111-4111-8111-111111111111').success).toBe(true);
  });

  test('rejects a non-uuid', () => {
    expect(poseidatUuid.safeParse('not-a-uuid').success).toBe(false);
  });
});
