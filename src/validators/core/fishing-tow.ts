import * as z from 'zod';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';
import { fishingCatchSchema } from './fishing-catch';
import { fishingGearSchema } from './fishing-gear';
import { fishingGearDeploymentSchema } from './fishing-gear-deployment';
import { fishingZoneSchema } from './fishing-zone';
import { positionSchema } from './measurement/position';

export const fishingTowSchema = registerSchema(
  z.looseObject({
    activity_date_start: poseidatDateTime.meta({ description: 'The datetime the tow started in UTC' }),
    activity_date_end: poseidatDateTime.meta({ description: 'The datetime the tow ended in UTC' }).optional(),
    location_start: positionSchema.meta({ description: 'The geographical location where the tow started (if applicable)' }).optional(),
    location_end: positionSchema.meta({ description: 'The geographical location where the tow ended (if applicable)' }).optional(),
    waypoints: z.array(positionSchema).meta({ title: 'Waypoints', description: 'The collection of geographical locations logged during the tow' }).optional(),
    zone: fishingZoneSchema.meta({ description: 'The zone the tow took place in' }),
    fishing_gear: fishingGearSchema.meta({ description: 'The fishing gear used for this tow' }).optional(),
    gear_deployment: fishingGearDeploymentSchema.meta({ description: 'The details of how the gear was used for the tow' }).optional(),
    catches: z.array(fishingCatchSchema).meta({ title: 'Caught fish', description: 'The fish caught in this tow' }).optional(),
  }),
  {
    id: poseidatId('core/fishing-tow.json'),
    title: 'Fishing tow',
    description: 'Fishing tow details',
  },
);

export type ICoreFishingTow = z.infer<typeof fishingTowSchema>;
