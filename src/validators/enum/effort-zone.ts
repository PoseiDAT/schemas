import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const effortZoneSchema = registerSchema(
  z.enum([
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
  ]),
  {
    id: poseidatId('enum/effort-zone.json'),
    title: 'Effort zone',
    description: 'The fishing effort zone. Example: A (ICES V-VI)',
  },
);

export type IEnumEffortZone = z.infer<typeof effortZoneSchema>;
