import { isDeepStrictEqual } from 'util';
import * as z from 'zod';

export const uniqueArray = <T extends z.ZodType>(
  schema: z.ZodArray<T>,
): z.ZodArray<T> =>
  schema
    .refine(
      (items) =>
        items.every((item, index) =>
          items.slice(0, index).every((other) => !isDeepStrictEqual(item, other)),
        ),
      { message: 'Array items must be unique' },
    )
    .meta({ uniqueItems: true });
