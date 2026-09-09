import * as z from 'zod';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';
import { positionSchema } from './measurement/position';

export const fishingGearShotSchema = registerSchema(
  z.looseObject({
    date: poseidatDateTime.meta({ description: 'The datetime the gear shot took place. GBR: DATI, NLD2: DA + TI, NLD3: DA' }).optional(),
    data: z.unknown().refine((value) => value !== undefined),
    location: positionSchema.meta({ description: 'The geographical location where the gear shot took place' }),
    identifier: z.string().meta({ description: 'The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN' }).optional(),
    country_zones: z.string().meta({ description: 'Indicator of where zone fishing will be commencing. Data recorded in accordance with Norwegian requirements. Known as GBRZO' }).optional(),
  }),
  {
    id: poseidatId('core/fishing-gear-shot.json'),
    title: 'Fishing gear shot',
    description: 'A gear shot event details',
  },
);

export type ICoreFishingGearShot = z.infer<typeof fishingGearShotSchema>;
