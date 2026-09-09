import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const reasonDiscardSchema = registerSchema(
  z.enum(['BAI', 'HSV', 'OTH', 'PDM', 'PRO', 'QEX']),
  {
    id: poseidatId('enum/reason-discard.json'),
    title: 'Reason discard',
    description: 'The reason for a vessel to discard caught fish. Please check the wiki for the meaning of these codes.',
  },
);

export type IEnumReasonDiscard = z.infer<typeof reasonDiscardSchema>;
