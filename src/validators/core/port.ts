import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';
import { positionSchema } from './measurement/position';

export const portSchema = registerSchema(
  z.looseObject({
    code: z
      .string()
      .min(5)
      .max(5)
      .meta({
        description:
          'The international port code. Format is 2 letter country code and 3 letter port code. Example: NLURK, BEANR, GBHUL',
      }),
    location: positionSchema
      .meta({ description: 'The geographical location of the port' })
      .optional(),
  }),
  {
    id: poseidatId('core/port.json'),
    title: 'Port',
    description: 'Fishing port details',
  },
);

export type ICorePort = z.infer<typeof portSchema>;
