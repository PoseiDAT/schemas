import * as z from 'zod';
import { fishingCatchSchema } from '../core/fishing-catch';
import { fishingZoneSchema } from '../core/fishing-zone';
import { baseEntrySchema } from '../core/base-entry';
import { positionSchema } from '../core/measurement/position';
import { effortZoneSchema } from '../enum/effort-zone';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';

export const zoneEnterSchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('zone-enter'),
      activity_date: poseidatDateTime,
      zone: fishingZoneSchema,
      location: positionSchema,
      catch_on_board: z.array(fishingCatchSchema).optional(),
      target_species: z.string().optional(),
      directed_species: z.string().optional(),
      effort_zone: effortZoneSchema.optional(),
      trans_zonal_fishing: z.boolean().optional(),
    })
    .loose(),
  {
    id: poseidatId('entry/zone-enter.json'),
    title: 'ZoneEnter',
    description: 'Enter declaration of a fishing zone',
  },
);

export type IEntryZoneEnter = z.infer<typeof zoneEnterSchema>;
export type IEntryZoneEnterEntryType = IEntryZoneEnter['entry_type'];
