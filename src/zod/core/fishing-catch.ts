import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';
import { fishingCatchProcessedSchema } from './fishing-catch-processed';

const payload = z.looseObject({
  code: z.string().meta({ description: 'The fish species code. NLD: SN, GBR: SN' }),
  weight: z.number().meta({ description: 'Weight of fish in kg (see context) Depending on context this item will be either (1): Total weight of fish (in kilograms) in catch period. (2): Total weight of fish (in kilograms) on board (aggregate) or (3): Total weight of fish (in kilograms) landed (4): Total weight of fish discarded or used as a live bait. NLD: WT, GBR: WT' }).optional(),
  number_of_fish: z.number().meta({ description: 'The number of fish. NLD: NF, GBR: NF' }).optional(),
  weight_in_nets: z.number().meta({ description: 'Weight of fish kept in nets outside the hold. NLD: NQ, EU3: NQ ' }).optional(),
  number_of_fish_in_nets: z.number().meta({ description: 'The number of fish held in nets outside the hold. NLD: NV, EU3: NB' }).optional(),
  landing_weight: z.number().meta({ description: 'Estimate live weight, in kilograms, of fish to be landed or transshipped. If no catches being landed then 0 should be reported. NLD: WT, GBR: GBRLWT, EU3: WL' }).optional(),
  landing_number: z.number().meta({ description: 'Total number of fish to be landed or transshipped. NLD: NF, GBR: LNF, EU3: FL' }).optional(),
  juvenile: z.boolean().default(false).meta({ description: 'Indicates the catch is considered a juvenile. NLD3.3+: MV, GBR: GBRJUV' }).optional(),
  fish_farming: z.boolean().default(false).meta({ description: 'Indicator for farmed fish (Dutch: kweekvis). NLD: KV' }).optional(),
  means_of_measuring: z.enum(['EST', 'WGH']).meta({ description: 'Means of weight measuring: estimation (EST), weighing on board (WGH). EU3: MM' }).optional(),
  measured_weight: z.string().meta({ description: 'The weighed or measured weight. Type depends on means_of_measuring value. NLD3.3: MM' }).optional(),
  fish_size: z.string().meta({ description: 'Fish size category (1-8; one size or kg, g, cm, mm or number of fish per kg as appropriate). NLD3.3: SF' }).optional(),
  processed: fishingCatchProcessedSchema.meta({ description: 'Details of the fish after processing. NL: NLPRO, GBR: PRO (also contains SPE)' }).optional(),
});

export const fishingCatchSchema = registerSchema(
  z.union([
    payload.required({ weight: true }),
    payload.required({ number_of_fish: true }),
  ]),
  {
    id: poseidatId('core/fishing-catch.json'),
    title: 'Fishing catch',
    description: 'Details of caught fish',
  },
);

export type ICoreFishingCatch = z.infer<typeof fishingCatchSchema>;
