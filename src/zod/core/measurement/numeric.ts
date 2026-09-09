import * as z from 'zod';
import { poseidatId, registerSchema } from '../../registry';

export const numericSchema = registerSchema(
  z.strictObject({
    value: z.number().meta({ description: 'The absolute measured value' }),
  }),
  {
    id: poseidatId('core/measurement/numeric.json'),
    title: 'Numeric',
    description: 'A number representing a measurement from a sensor',
  },
);

export type IMeasurementNumeric = z.infer<typeof numericSchema>;
