import * as z from 'zod';
import { poseidatId, registerSchema } from '../../registry';
import { subsurfaceSampleSchema } from './subsurface-sample';

export const subsurfaceSchema = registerSchema(
  z.strictObject({
    samples: z.array(subsurfaceSampleSchema).meta({
      title: 'Subsurface measurement samples',
      description: 'The collection of subsurface measurement samples',
    }),
    metadata: z.string().meta({ description: 'The sensors technical metadata' }).optional(),
  }),
  {
    id: poseidatId('core/measurement/subsurface.json'),
    title: 'Subsurface measurements',
    description: 'A collection of subsurface samples measurements',
  },
);

export type IMeasurementSubsurface = z.infer<typeof subsurfaceSchema>;
