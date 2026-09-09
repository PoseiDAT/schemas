import * as z from 'zod';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';
import { positionSchema } from './measurement/position';

export const fishingGearLossSchema = registerSchema(
  z.looseObject({
    date: poseidatDateTime.meta({ description: 'The datetime the gear loss took place' }).optional(),
    data: z.unknown().refine((value) => value !== undefined),
    location: positionSchema.meta({ description: 'The geographical location where the gear loss took place' }),
    identifier: z.string().meta({ description: 'The identification tag attached to the lost gear. NLD: NI, GBR: GBRGNFN' }),
    remarks: z.string().meta({ description: 'Free form text to describe the reason of the gear loss. NLD: VT, GBR: GBRCOM' }).optional(),
    amount_lost: z.number().meta({ description: 'The amount of gear items lost, GBR: NN' }).optional(),
  }),
  {
    id: poseidatId('core/fishing-gear-loss.json'),
    title: 'Fishing gear loss',
    description: 'A gear loss event details',
  },
);

export type ICoreFishingGearLoss = z.infer<typeof fishingGearLossSchema>;
