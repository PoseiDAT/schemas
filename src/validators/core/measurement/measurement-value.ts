import * as z from 'zod';
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

const numericMeasurementType = z.enum([
  'ACCELERATION',
  'ANGULAR_VELOCITY',
  'CURRENT',
  'DEPTH',
  'ENERGY_CONSUMPTION',
  'FORCE',
  'HUMIDITY',
  'MAGNETISM',
  'ONOFF',
  'POWER',
  'PRESSURE',
  'ROUTE',
  'RPM',
  'SPEED',
  'TEMPERATURE',
  'VOLTAGE',
]);

export const measurementValueSchema = registerSchema(
  z.discriminatedUnion('type', [
    z.strictObject({ type: z.literal('POSITION'), position: positionSchema }),
    z.strictObject({ type: z.literal('SCALE'), scale: scaleSchema }),
    z.strictObject({ type: z.literal('FUEL_CONSUMPTION'), fuel_consumption: fuelConsumptionSchema }),
    z.strictObject({ type: z.literal('TRAWL_TENSION'), trawl_tension: trawlTensionSchema }),
    z.strictObject({ type: z.literal('SPATIAL_AXES'), spatial_axes: spatialAxesSchema }),
    z.strictObject({ type: z.literal('SUBSURFACE'), subsurface: subsurfaceSchema }),
    z.strictObject({ type: z.literal('SPEEDLOG'), speedlog: speedlogSchema }),
    z.strictObject({ type: z.literal('WEATHER'), weather: weatherSchema }),
    z.strictObject({ type: numericMeasurementType, numeric: numericSchema }),
  ]),
  {
    id: poseidatId('core/measurement/measurement-value.json'),
    title: 'Measurement value',
    description: 'The value of a certain type of measurement',
  },
);

export type IMeasurementValue = z.infer<typeof measurementValueSchema>;
