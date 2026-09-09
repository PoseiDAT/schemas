import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const reasonArrivalSchema = registerSchema(
  z.enum(['ECY', 'GRD', 'LAN', 'OTH', 'REF', 'REP', 'RES', 'SCR', 'SHE', 'TRA']),
  {
    id: poseidatId('enum/reason-arrival.json'),
    title: 'Reason arrival',
    description: 'The reason for the vessel to return to port. Please check the wiki for the meaning of these codes.',
  },
);

export type IEnumReasonArrival = z.infer<typeof reasonArrivalSchema>;
