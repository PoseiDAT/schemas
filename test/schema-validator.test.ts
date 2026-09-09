import * as z from 'zod';
import { validateSchema } from '../src/index';

const minimalSchema = z.object({ test: z.string() });

describe('Schema-validator', () => {
  test('Validate function needs to be defined', () => {
    expect(validateSchema).toBeDefined();
  });

  test('Validate a minimal schema with valid data', () => {
    const errors = validateSchema({ object: { test: 'yes' }, schema: minimalSchema });
    expect(errors.length).toEqual(0);
  });

  test('Validate a minimal schema with invalid data', () => {
    const errors = validateSchema({ object: { test: 0 }, schema: minimalSchema });
    expect(errors.length).toBeGreaterThan(0);
    expect(errors.some((issue) => issue.path.join('/') === 'test')).toBe(true);
  });
});
