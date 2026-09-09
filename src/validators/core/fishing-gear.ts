import * as z from 'zod';
import { fishingGearTypeSchema } from '../enum/fishing-gear-type';
import { poseidatId, registerSchema } from '../registry';

export const fishingGearSchema = registerSchema(
  z.looseObject({
    code: fishingGearTypeSchema.meta({ description: 'Gear code corresponding to the FAO’s International Standard Statistical Classification of the Fishing Gear. NLD: GE, GBR: GE' }),
    mesh_size: z.number().meta({ description: 'The fishing gear mesh size measured in millimeters. NLD: ME, GBR: ME' }).optional(),
    amount: z.number().meta({ description: 'The number of fishing gear items. NLD: NN, GBR: GBRGNL' }).optional(),
    length: z.number().meta({ description: 'The total length of the fishing gear in meters. NLD: TL, GBR: GBRGNT' }).optional(),
  }),
  {
    id: poseidatId('core/fishing-gear.json'),
    title: 'Fishing gear',
    description: 'Fishing gear details',
  },
);

export type ICoreFishingGear = z.infer<typeof fishingGearSchema>;
