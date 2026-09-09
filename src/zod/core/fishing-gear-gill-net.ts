import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const fishingGearGillNetSchema = registerSchema(
  z.looseObject({
    average_gear_length: z.number().meta({ description: 'Average length of fishing nets in meters. NLD: GL, GBR: GNGL' }),
    average_gear_height: z.number().meta({ description: 'Average height of fishing nets in meters. NLD: GD, GBR: GNGD' }),
    nominal_gear_length: z.number().meta({ description: 'The nominal length of one fishing net in meters. GBR: GNNL' }).optional(),
    number_of_nets: z.number().meta({ description: 'Number of nets present in the fleet. NLD: VN, GBR: GNNN' }),
  }),
  {
    id: poseidatId('core/fishing-gear-gill-net.json'),
    title: 'Fishing gear gill net',
    description: 'Deep Sea Permit requirements when using gill nets',
  },
);

export type ICoreFishingGearGillNet = z.infer<typeof fishingGearGillNetSchema>;
