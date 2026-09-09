import * as z from 'zod';
import { poseidatId, registerSchema } from '../../registry';

export const fuelConsumptionSchema = registerSchema(
  z.strictObject({
    current_consumption: z.number().meta({ description: 'The current fuel consumption in liters per hour' }),
    current_average_consumption: z.number().meta({ description: 'The current averaged fuel consumption in liters per hour' }).optional(),
    current_peak_consumption: z.number().meta({ description: 'The current peak fuel consumption in liters per hour' }).optional(),
    last_hour_consumption: z.number().meta({ description: 'The total number of liters consumed in the last hour' }).optional(),
    last_day_consumption: z.number().meta({ description: 'The total number of liters consumed in the last 24 hours' }).optional(),
  }),
  {
    id: poseidatId('core/measurement/fuel-consumption.json'),
    title: 'Fuel consumption',
    description: 'Fuel consumption of a certain engine.',
  },
);

export type IMeasurementFuelConsumption = z.infer<typeof fuelConsumptionSchema>;
