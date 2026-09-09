import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const gnssFixTypeSchema = registerSchema(
  z.enum(['NOT_AVAILABLE', '2D_FIX', '3D_FIX']),
  {
    id: poseidatId('enum/gnss-fix-type.json'),
    title: 'GNSS fix type',
    description: "The type of a GNSS receiver's fix.",
  },
);

export type IEnumGnssFixType = z.infer<typeof gnssFixTypeSchema>;
