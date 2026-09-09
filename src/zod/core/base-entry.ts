import * as z from 'zod';
import { poseidatDateTime, poseidatUuid } from '../formats';
import { poseidatId, registerSchema } from '../registry';

export const baseEntrySchema = registerSchema(
  z.looseObject({
    journal_id: poseidatUuid.meta({
      description:
        'The unique identifier of the journal (UUID v4) this entry belongs to',
    }),
    entry_id: poseidatUuid.meta({
      description: 'The unique identifier for the entry (UUID v4)',
    }),
    entry_type: z
      .string()
      .meta({ description: 'The journal entry type identifier' }),
    entry_datetime: poseidatDateTime
      .meta({
        description:
          'The date and time the entry was logged in UTC in RFC3339 format',
      })
      .optional(),
    revision: poseidatDateTime.meta({
      description:
        'The revision timestamp of this entry. Should be the time it was created.',
    }),
    immutable: z.boolean().meta({
      description:
        'Indicates this entry cannot be replaced with future revisions (default)',
    }),
    remarks: z
      .string()
      .meta({
        description:
          'Free form remarks that are to be added to this journal entry',
      })
      .optional(),
  }),
  {
    id: poseidatId('core/base-entry.json'),
    title: 'Base entry',
    description: 'The shared properties for all entries',
  },
);

export type ICoreBaseEntry = z.infer<typeof baseEntrySchema>;
