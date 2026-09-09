import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { tripEntrySchema } from '../core/trip-entry';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';

export const endOfFishingSchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('end-of-fishing'),
      trip: tripEntrySchema,
      activity_date: poseidatDateTime,
    })
    .loose(),
  {
    id: poseidatId('entry/end-of-fishing.json'),
    title: 'End of fishing activity',
    description: 'Notification of intent to cease all fishing activity for the trip',
  },
);

export type IEntryEndOfFishing = z.infer<typeof endOfFishingSchema>;
export type IEntryEndOfFishingEntryType = IEntryEndOfFishing['entry_type'];
