import * as z from 'zod';
import { measurementTypeSchema, measurementValueSchema } from '../../src/validators';

test('measurement-value type branches exhaust measurement types', () => {
  const measurementValueTypes = measurementValueSchema.options.flatMap(({ shape }) => (
    shape.type instanceof z.ZodEnum ? shape.type.options : [...shape.type.values]
  ));

  expect(measurementValueTypes.sort()).toEqual([...measurementTypeSchema.options].sort());
});

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
