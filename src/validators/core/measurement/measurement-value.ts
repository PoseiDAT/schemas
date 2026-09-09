import * as z from 'zod';
import { measurementTypeSchema } from '../../enum/measurement-type';
import { poseidatId, registerSchema } from '../../registry';
import { fuelConsumptionSchema } from './fuel-consumption';
import { numericSchema } from './numeric';
import { positionSchema } from './position';
import { scaleSchema } from './scale';
import { spatialAxesSchema } from './spatial-axes';
import { speedlogSchema } from './speedlog';
import { subsurfaceSchema } from './subsurface';
import { trawlTensionSchema } from './trawl-tension';
import { weatherSchema } from './weather';

const payload = z.strictObject({
  type: measurementTypeSchema,
  position: positionSchema.optional(),
  numeric: numericSchema.optional(),
  trawl_tension: trawlTensionSchema.optional(),
  scale: scaleSchema.optional(),
  fuel_consumption: fuelConsumptionSchema.optional(),
  spatial_axes: spatialAxesSchema.optional(),
  subsurface: subsurfaceSchema.optional(),
  speedlog: speedlogSchema.optional(),
  weather: weatherSchema.optional(),
});

export const measurementValueSchema = registerSchema(
  z.union([
    payload.required({ type: true, numeric: true }),
    payload.required({ type: true, position: true }),
    payload.required({ type: true, trawl_tension: true }),
    payload.required({ type: true, scale: true }),
    payload.required({ type: true, fuel_consumption: true }),
    payload.required({ type: true, spatial_axes: true }),
    payload.required({ type: true, subsurface: true }),
    payload.required({ type: true, speedlog: true }),
    payload.required({ type: true, weather: true }),
  ]),
  {
    id: poseidatId('core/measurement/measurement-value.json'),
    title: 'Measurement value',
    description: 'The value of a certain type of measurement',
  },
);

export type IMeasurementValue = z.infer<typeof measurementValueSchema>;
