import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const scaleCategorySchema = registerSchema(
  z.enum(['FISH']),
  {
    id: poseidatId('enum/scale-category.json'),
    title: 'Scale category',
    description: 'The types of supported product categories to weigh',
  },
);

export type IEnumScaleCategory = z.infer<typeof scaleCategorySchema>;
