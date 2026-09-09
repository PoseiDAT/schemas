import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const fishingGearTypeSchema = registerSchema(
  z.enum([
    'DRB', 'FIX', 'FPO', 'GEN', 'GN', 'GNC', 'GND', 'GNF', 'GNS', 'GTN',
    'GTR', 'HMD', 'KRK', 'LA', 'LHM', 'LHP', 'LL', 'LLD', 'LLS', 'LTL',
    'LX', 'MIS', 'NK', 'OTB', 'OTM', 'OTT', 'PS', 'PS1', 'PS2', 'PTB',
    'PTM', 'PUL', 'RG', 'SDN', 'SPR', 'SSC', 'SV', 'SX', 'TB', 'TBB',
    'TBN', 'TBS',
  ]),
  {
    id: poseidatId('enum/fishing-gear-type.json'),
    title: 'Fishing gear type',
    description: 'Fishing gear type codes. Example: TBB, PS',
  },
);

export type IEnumFishingGearType = z.infer<typeof fishingGearTypeSchema>;
