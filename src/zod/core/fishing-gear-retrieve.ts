import * as z from 'zod';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';
import { positionSchema } from './measurement/position';

export const fishingGearRetrieveSchema = registerSchema(
  z.looseObject({
    date: poseidatDateTime.meta({ description: 'The datetime the gear retrieve took place. GBR: DATI, NLD2: DA + TI, NLD3: DA' }).optional(),
    data: z.unknown().refine((value) => value !== undefined),
    location: positionSchema.meta({ description: 'The geographical location where the gear retrieve took place' }),
    identifier: z.string().meta({ description: 'The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN' }),
  }),
  {
    id: poseidatId('core/fishing-gear-retrieve.json'),
    title: 'Fishing gear retrieve',
    description: 'A gear retrieve event details',
  },
);

export type ICoreFishingGearRetrieve = z.infer<typeof fishingGearRetrieveSchema>;
