import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { fishingTowSchema } from '../core/fishing-tow';
import { tripEntrySchema } from '../core/trip-entry';
import { poseidatId, registerSchema } from '../registry';

export const fishingActivitySchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('fishing-activity'),
      trip: tripEntrySchema,
      tow: fishingTowSchema,
    })
    .loose(),
  {
    id: poseidatId('entry/fishing-activity.json'),
    title: 'Fishing activity',
    description: 'Notification of intent to cease all fishing activity for the trip',
  },
);

export type IEntryFishingActivity = z.infer<typeof fishingActivitySchema>;
export type IEntryFishingActivityEntryType =
  IEntryFishingActivity['entry_type'];
