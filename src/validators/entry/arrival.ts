import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { fishingCatchSchema } from '../core/fishing-catch';
import { portSchema } from '../core/port';
import { tripEntrySchema } from '../core/trip-entry';
import { reasonArrivalSchema } from '../enum/reason-arrival';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';

export const arrivalSchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('arrival'),
      trip: tripEntrySchema,
      activity_date: poseidatDateTime,
      port: portSchema,
      reason_arrival: reasonArrivalSchema,
      catch_on_board: z.array(fishingCatchSchema).optional(),
    })
    .loose(),
  {
    id: poseidatId('entry/arrival.json'),
    title: 'Arrival',
    description: 'A return to port event',
  },
);

export type IEntryArrival = z.infer<typeof arrivalSchema>;
export type IEntryArrivalEntryType = IEntryArrival['entry_type'];
