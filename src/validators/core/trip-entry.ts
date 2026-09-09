import * as z from 'zod';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';
import { positionSchema } from './measurement/position';

export const tripEntrySchema = registerSchema(
  z.looseObject({
    date: poseidatDateTime.meta({
      description:
        'The date the trip entry was created or sent at. All dates and times are UTC. GBR: DATI, NLD: DA',
    }),
    trip_nr: z.string().meta({
      description:
        'The trip number this entry belongs to. NLD: TN, GBR: GBRLOGNO',
    }),
    record_nr: z.string().meta({
      description:
        'The unique record number for the trip entry. Formats differ between ERS dialects. NLD: RN GBR: GBRLOGNO',
    }),
    sequence_nr: z
      .string()
      .meta({
        description: 'The unique sequence number for the  entry. GBR: GBRLOGSEQ',
      })
      .optional(),
    location: positionSchema
      .meta({
        description: 'The geographical location where the entry was created (for)',
      })
      .optional(),
  }),
  {
    id: poseidatId('core/trip-entry.json'),
    title: 'Trip entry',
    description: 'The trip related details of a journal entry',
  },
);

export type ICoreTripEntry = z.infer<typeof tripEntrySchema>;
