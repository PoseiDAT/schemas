import { measurementValueSchema } from '../../src/validators';

test('POSITION + position payload is valid', () => {
  expect(measurementValueSchema.safeParse({
    type: 'POSITION',
    position: { latitude: 1, longitude: 1 },
  }).success).toBe(true);
});

test('TEMPERATURE + numeric payload is valid', () => {
  expect(measurementValueSchema.safeParse({
    type: 'TEMPERATURE',
    numeric: { value: 1 },
  }).success).toBe(true);
});

test('POSITION + numeric payload is invalid', () => {
  expect(measurementValueSchema.safeParse({
    type: 'POSITION',
    numeric: { value: 1 },
  }).success).toBe(false);
});

test('POSITION with no payload is invalid', () => {
  expect(measurementValueSchema.safeParse({ type: 'POSITION' }).success).toBe(false);
});
