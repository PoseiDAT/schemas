import * as z from 'zod';
import { poseidatDateTime } from '../../formats';
import { poseidatId, registerSchema } from '../../registry';

export const subsurfaceSampleSchema = registerSchema(
  z.strictObject({
    conductivity: z.number().meta({ description: 'The conductivity of the sample measurement in Siemens per meter' }),
    depth: z.number().meta({ description: 'The depth of the sample measurement in meters' }),
    latitude: z.number().meta({ description: 'The latitude of the sample measurement' }),
    longitude: z.number().meta({ description: 'The longitude of the sample measurement' }),
    salinity: z.number().meta({ description: 'The salinity of the sample measurement in Practical Salinity Units' }),
    temp: z.number().meta({ description: 'The temperature of the sample measurement in degrees celsius' }),
    time: poseidatDateTime.meta({ description: 'The date and time of the sample measurement as an RFC string' }),
  }),
  {
    id: poseidatId('core/measurement/subsurface-sample.json'),
    title: 'Subsurface sample value',
    description: 'A subsurface sample measurement',
  },
);

export type IMeasurementSubsurfaceSample = z.infer<typeof subsurfaceSampleSchema>;
