import * as z from 'zod';
import { poseidatId, registerSchema } from '../../registry';

export const spatialAxesSchema = registerSchema(
  z.strictObject({
    x: z.number().meta({ description: 'The easting coordinate range' }),
    y: z.number().meta({ description: 'The northing coordinate range' }),
    z: z.number().meta({ description: 'The elevation of the coordinate range' }),
  }),
  {
    id: poseidatId('core/measurement/spatial-axes.json'),
    title: 'Spatial axes',
    description: 'The spatial axes for a given sensor',
  },
);

export type IMeasurementSpatialAxes = z.infer<typeof spatialAxesSchema>;
