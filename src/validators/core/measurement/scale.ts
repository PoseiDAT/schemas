import * as z from 'zod';
import { fishingCatchProcessedSchema } from '../fishing-catch-processed';
import { scaleCategorySchema } from '../../enum/scale-category';
import { poseidatDateTime } from '../../formats';
import { poseidatId, registerSchema } from '../../registry';

export const scaleSchema = registerSchema(
  z.strictObject({
    haul_date_start: poseidatDateTime.meta({ description: 'The datetime the haul started in UTC' }).optional(),
    haul_date_end: poseidatDateTime.meta({ description: 'The datetime the haul ended in UTC' }).optional(),
    haul_number: z.number().meta({ description: 'The number of the haul the product was caught in' }),
    weight: z.number().meta({ description: 'The weight of the product' }),
    category: scaleCategorySchema.meta({ description: 'The category of the scaled product' }),
    product: z.string().min(3).max(3).regex(/^([A-Z]{3})$/).meta({ description: 'The type of the product, e.g. a type of fish' }),
    processed: fishingCatchProcessedSchema.meta({ description: 'Details of caught fish after it has been processed' }).optional(),
  }),
  {
    id: poseidatId('core/measurement/scale.json'),
    title: 'Scale',
    description: 'A scale measurement that can be used in an entry',
  },
);

export type IMeasurementScale = z.infer<typeof scaleSchema>;
