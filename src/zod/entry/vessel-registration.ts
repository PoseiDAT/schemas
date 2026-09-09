import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { vesselSchema } from '../core/vessel';
import { poseidatId, registerSchema } from '../registry';

export const vesselRegistrationSchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('vessel-registration'),
      vessel: vesselSchema,
    })
    .loose(),
  {
    id: poseidatId('entry/vessel-registration.json'),
    title: 'Vessel registration',
    description:
      'An entry detailing the registered details of a vessel like hull number, flag state, etc. Only 1 should exist per journal',
  },
);

export type IEntryVesselRegistration = z.infer<
  typeof vesselRegistrationSchema
>;
export type IEntryVesselRegistrationEntryType =
  IEntryVesselRegistration['entry_type'];
