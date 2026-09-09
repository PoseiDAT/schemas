import * as z from 'zod';
import { poseidatDate } from '../formats';
import { poseidatId, registerSchema } from '../registry';

export const vesselSchema = registerSchema(
  z.strictObject({
    name: z.string().meta({ description: 'The display name for the vessel' }),
    flag_state: z.string().meta({
      description:
        'The vessels flag state and country to report ERS messages to. Should be a 3 letter ISO code.',
    }),
    cfr: z
      .string()
      .meta({
        description:
          'The vessel\'s Community Fleet Registration number. Fixed format defined by the pattern: "AAAXXXXXXXXX" (AAA = Fully capitalised country code of the vessel\'s first registration within the EU, XXXXXXXXX = 9 character alphanumeric code.). Known as CFR or IR',
      })
      .optional(),
    call_sign: z
      .string()
      .meta({
        description: 'The vessels international radio call sign (RC)',
      })
      .optional(),
    hull_number: z.string().meta({
      description:
        "The vessel's side (hull) registration number. Also known as XR or PLN. May contain dots or dashes",
    }),
    gbr_rss: z
      .string()
      .meta({
        description:
          "GBR ONLY: The vessel's unique identity number as recorded by the UK Registrar of Seamen and Shipping",
      })
      .optional(),
    iccat: z
      .string()
      .meta({
        description:
          'International Commission for the Conservation of Atlantic Tuna identifier',
      })
      .optional(),
    gfcm: z
      .string()
      .meta({
        description:
          'Global Fisheries Council of the Mediterranean identifier',
      })
      .optional(),
    uvi: z
      .string()
      .meta({
        description:
          'Unique Vessel Identifier (IMO number). A number issued by the tuna RFMOs or by ISSF.',
      })
      .optional(),
    imo_code: z
      .string()
      .meta({
        description:
          'The unique identification of a vessel according to Lloyds register',
      })
      .optional(),
    net_tonnage: z
      .number()
      .meta({
        description:
          'The net loading capacity of the vessel, expressed in tons',
      })
      .optional(),
    gross_tonnage: z
      .number()
      .meta({
        description:
          'The gross loading capacity of the vessel, expressed in tons',
      })
      .optional(),
    registration_date: poseidatDate
      .meta({ description: 'The date the vessel was registered' })
      .optional(),
    full_length: z
      .number()
      .meta({ description: 'The full length of the vessel in meters' })
      .optional(),
  }),
  {
    id: poseidatId('core/vessel.json'),
    title: 'Vessel',
    description: 'The vessel information',
  },
);

export type ICoreVessel = z.infer<typeof vesselSchema>;
