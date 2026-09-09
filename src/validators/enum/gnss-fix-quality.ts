import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const gnssFixQualitySchema = registerSchema(
  z.enum(['INVALID', 'GPS_FIX', 'DGPS_FIX']),
  {
    id: poseidatId('enum/gnss-fix-quality.json'),
    title: 'GNSS fix quality',
    description: "The quality of a GNSS receiver's fix.",
  },
);

export type IEnumGnssFixQuality = z.infer<typeof gnssFixQualitySchema>;
