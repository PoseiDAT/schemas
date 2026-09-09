import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';
import { fishingGearGillNetSchema } from './fishing-gear-gill-net';
import { fishingGearLossSchema } from './fishing-gear-loss';
import { fishingGearRetrieveSchema } from './fishing-gear-retrieve';
import { fishingGearShotSchema } from './fishing-gear-shot';
import { vesselPartnerSchema } from './vessel-partner';

export const fishingGearDeploymentSchema = registerSchema(
  z.looseObject({
    duration: z.number().meta({ description: 'Number of minutes the gear was deployed. Known as DU' }).optional(),
    unit_of_time: z.string().meta({ description: 'The unit of time for measuring gear deployment. NLD: ET' }).optional(),
    fishing_operations: z.number().meta({ description: 'Number of fishing operations per 24 hour period: number of times gear is shot - does not apply to hooks, lines and pots. If no fishing operations took place then report 0. Known as FO' }).optional(),
    fishing_depth: z.number().meta({ description: 'Fishing depth. The distance from the water surface to the lowest part of the fishing gear, measured in meters. Applies to vessels working under deep sea permit and using towed gear, long lines or fixed nets. Known as FD' }).optional(),
    gear_component_count: z.number().meta({ description: 'Additional information relating to certain gear types e.g. liners = hooks, dredger = number of dredges. GBR: GBRFOX' }).optional(),
    gear_specification: z.union([z.literal(1), z.literal(2), z.literal(3)]).meta({ description: 'Norwegian requirement - gear specification (trawls: 1=single, 2=double, 3=triple). GBR: GBRGS' }).optional(),
    gear_problems: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4), z.literal(5), z.literal(6)]).meta({ description: 'Norwegian requirement - gear problems (1=empty net, 2=net burst, 3=net split, 4=broken meshes, 5=lost gear, 6=other). GBR: GBRGP' }).optional(),
    gill_net: fishingGearGillNetSchema.meta({ description: 'Deep Sea Permit requirements when using gill nets' }).optional(),
    gear_capacity: z.string().meta({ description: 'The capacity or dimensions of the deployed gear. NLD: GC' }).optional(),
    gear_hook_count: z.number().meta({ description: 'Additional information relating to certain gear types: liners = hooks. NLD: NH' }).optional(),
    gear_dredger_count: z.number().meta({ description: 'Additional information relating to certain gear types: dredger = number of dredges. NLD: NN' }).optional(),
    gear_shot: z.array(fishingGearShotSchema).meta({ title: 'Gear shot details', description: 'All gear shot event details. NLD: GES, GBR: GES' }).optional(),
    gear_retrieve: z.array(fishingGearRetrieveSchema).meta({ title: 'Gear retrieve details', description: 'All gear retrieve even details. NLD: GER, GBR: GER' }).optional(),
    gear_loss: z.array(fishingGearLossSchema).meta({ title: 'Gear loss details', description: 'All gear loss even details. NLD: GLS, GBR: GLS' }).optional(),
    partnered_fishing_vessel: z.array(vesselPartnerSchema).meta({ title: 'Partnered fishing vessels', description: 'Details of partner vessels for pair fishing. BR: PFP, NLD: NLSPN' }).optional(),
  }),
  {
    id: poseidatId('core/fishing-gear-deployment.json'),
    title: 'Fishing gear deployment',
    description: 'Fishing gear deployment details',
  },
);

export type ICoreFishingGearDeployment = z.infer<typeof fishingGearDeploymentSchema>;
