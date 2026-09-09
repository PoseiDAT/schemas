import { fishingCatchSchema } from '../../src/validators';

test('weight only is valid', () => {
  expect(fishingCatchSchema.safeParse({ code: 'COD', weight: 0 }).success).toBe(true);
});

test('number_of_fish only is valid', () => {
  expect(fishingCatchSchema.safeParse({ code: 'COD', number_of_fish: 12 }).success).toBe(true);
});

test('both weight and number_of_fish is invalid', () => {
  expect(fishingCatchSchema.safeParse({
    code: 'COD',
    weight: 100,
    number_of_fish: 12,
  }).success).toBe(false);
});

test('neither quantity is invalid', () => {
  expect(fishingCatchSchema.safeParse({ code: 'COD' }).success).toBe(false);
});
