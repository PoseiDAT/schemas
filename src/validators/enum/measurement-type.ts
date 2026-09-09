import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const measurementTypeSchema = registerSchema(
  z.enum([
    'ACCELERATION', 'ANGULAR_VELOCITY', 'CURRENT', 'DEPTH',
    'ENERGY_CONSUMPTION', 'FORCE', 'FUEL_CONSUMPTION', 'HUMIDITY',
    'MAGNETISM', 'ONOFF', 'POSITION', 'POWER', 'PRESSURE', 'ROUTE', 'RPM',
    'SCALE', 'SPATIAL_AXES', 'SPEED', 'SUBSURFACE', 'TEMPERATURE',
    'TRAWL_TENSION', 'VOLTAGE', 'SPEEDLOG', 'WEATHER',
  ]),
  {
    id: poseidatId('enum/measurement-type.json'),
    title: 'Measurement type',
    description: 'The measurement types',
  },
);

export type IEnumMeasurementType = z.infer<typeof measurementTypeSchema>;
