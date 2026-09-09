import * as z from 'zod';
import { poseidatId, registerSchema } from '../../registry';

const number = (description: string) => z.number().meta({ description });

export const speedlogSchema = registerSchema(
  z.strictObject({
    longitudinal_water_speed: number('The longitudinal water speed'),
    transverse_water_speed: number('The transverse water speed').optional(),
    longitudinal_ground_speed: number('The longitudinal ground speed').optional(),
    transverse_ground_speed: number('The transverse ground speed').optional(),
    stern_transverse_water_speed: number('The stern transverse water speed').optional(),
    stern_transverse_ground_speed: number('The stern transverse ground speed').optional(),
    total_cumulative_water_distance: number('The total cumulative water distance').optional(),
    total_cumulative_ground_distance: number('The total cumulative ground distance').optional(),
  }),
  {
    id: poseidatId('core/measurement/speedlog.json'),
    title: 'Speedlog',
    description: 'A combination of all posible speedlog measurements',
  },
);

export type IMeasurementSpeedlog = z.infer<typeof speedlogSchema>;
