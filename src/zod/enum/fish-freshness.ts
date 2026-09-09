import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const fishFreshnessSchema = registerSchema(
  z.enum(['A', 'B', 'E', 'SO', 'V']),
  {
    id: poseidatId('enum/fish-freshness.json'),
    title: 'Fish freshness',
    description: 'The freshness indication for processed fish species. Please check the wiki for the meaning of these codes.',
  },
);

export type IEnumFishFreshness = z.infer<typeof fishFreshnessSchema>;
