import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { fishingCatchSchema } from '../core/fishing-catch';
import { fishingZoneSchema } from '../core/fishing-zone';
import { positionSchema } from '../core/measurement/position';
import { effortZoneSchema } from '../enum/effort-zone';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';

export const zoneExitSchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('zone-exit'),
      activity_date: poseidatDateTime,
      zone: fishingZoneSchema,
      location: positionSchema,
      catch_on_board: z.array(fishingCatchSchema).optional(),
      target_species: z.string().optional(),
      effort_zone: effortZoneSchema.optional(),
      trans_zonal_fishing: z.boolean().optional(),
      trans_zonal_fishing_zones: z.array(fishingZoneSchema).optional(),
    })
    .loose(),
  {
    id: poseidatId('entry/zone-exit.json'),
    title: 'ZoneExit',
    description: 'Exit declaration of a fishing zone',
  },
);

export type IEntryZoneExit = z.infer<typeof zoneExitSchema>;
export type IEntryZoneExitEntryType = IEntryZoneExit['entry_type'];
