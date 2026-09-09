import * as z from 'zod';
import { poseidatUuid } from '../formats';
import { poseidatId, registerSchema } from '../registry';
import { vesselSchema } from './vessel';

export const journalSchema = registerSchema(
  z.strictObject({
    journal_id: poseidatUuid.meta({
      description: 'The unique identifier for the journal (UUID v4)',
    }),
    vessel: vesselSchema.meta({
      description:
        'The identification details of the vessel this journal belongs to',
    }),
  }),
  {
    id: poseidatId('core/journal.json'),
    title: 'Journal',
    description: 'A trip journal',
  },
);

export type ICoreJournal = z.infer<typeof journalSchema>;
