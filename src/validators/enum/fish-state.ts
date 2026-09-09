import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const fishStateSchema = registerSchema(
  z.enum(['ALI', 'BOI', 'DRI', 'FRE', 'FRO', 'SAL', 'SMO']),
  {
    id: poseidatId('enum/fish-state.json'),
    title: 'Fish state',
    description: 'The preservation states for processed fish species. Please check the wiki for the meaning of these codes.',
  },
);

export type IEnumFishState = z.infer<typeof fishStateSchema>;
