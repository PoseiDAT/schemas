import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const reasonDepartureSchema = registerSchema(
  z.enum(['FIS', 'GUD', 'OTH', 'SCR', 'STE', 'TST']),
  {
    id: poseidatId('enum/reason-departure.json'),
    title: 'Reason departure',
    description: 'The reason for the vessel to depart from port. Please check the wiki for the meaning of these codes.',
  },
);

export type IEnumReasonDeparture = z.infer<typeof reasonDepartureSchema>;
