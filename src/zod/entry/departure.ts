import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { fishingCatchSchema } from '../core/fishing-catch';
import { fishingGearSchema } from '../core/fishing-gear';
import { portSchema } from '../core/port';
import { tripEntrySchema } from '../core/trip-entry';
import { reasonDepartureSchema } from '../enum/reason-departure';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';

export const departureSchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('departure'),
      trip: tripEntrySchema,
      activity_date: poseidatDateTime,
      port: portSchema,
      anticipated_activity: reasonDepartureSchema.optional(),
      gear_on_board: z.array(fishingGearSchema).optional(),
      catch_on_board: z.array(fishingCatchSchema).optional(),
    })
    .loose(),
  {
    id: poseidatId('entry/departure.json'),
    title: 'Departure',
    description: 'A departure from port event',
  },
);

export type IEntryDeparture = z.infer<typeof departureSchema>;
export type IEntryDepartureEntryType = IEntryDeparture['entry_type'];
