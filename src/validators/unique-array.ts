import * as z from 'zod';

const jsonEqual = (left: unknown, right: unknown): boolean => {
  if (left === right) return true;
  if (
    left === null ||
    right === null ||
    typeof left !== 'object' ||
    typeof right !== 'object'
  ) {
    return false;
  }

  if (Array.isArray(left) || Array.isArray(right)) {
    return (
      Array.isArray(left) &&
      Array.isArray(right) &&
      left.length === right.length &&
      left.every((item, index) => jsonEqual(item, right[index]))
    );
  }

  const leftObject = left as Record<string, unknown>;
  const rightObject = right as Record<string, unknown>;
  const leftKeys = Object.keys(leftObject);
  const rightKeys = Object.keys(rightObject);

  return (
    leftKeys.length === rightKeys.length &&
    leftKeys.every(
      (key) =>
        Object.prototype.hasOwnProperty.call(rightObject, key) &&
        jsonEqual(leftObject[key], rightObject[key]),
    )
  );
};

export const uniqueArray = <T extends z.ZodType>(
  schema: z.ZodArray<T>,
): z.ZodArray<T> =>
  schema
    .refine(
      (items) =>
        items.every((item, index) =>
          items.slice(0, index).every((other) => !jsonEqual(item, other)),
        ),
      { message: 'Array items must be unique' },
    )
    .meta({ uniqueItems: true });
