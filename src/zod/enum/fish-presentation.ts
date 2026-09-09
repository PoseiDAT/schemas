import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const fishPresentationSchema = registerSchema(
  z.enum([
    'BMS', 'CBF', 'CLA', 'DWT', 'FIL', 'FIS', 'FSB', 'FSP', 'GHT', 'GTA',
    'GTF', 'GUG', 'GUH', 'GUL', 'GUS', 'GUT', 'HEA', 'HET', 'JAP', 'JAT',
    'LAP', 'LVR-C', 'LVR', 'OTH', 'ROE-C', 'ROE', 'SAD', 'SAL', 'SGH',
    'SGT', 'SKI', 'SUR', 'TAL', 'TLD', 'TNG-C', 'TNG', 'TUB', 'WHL',
    'WNG', 'WNG+SKI',
  ]),
  {
    id: poseidatId('enum/fish-presentation.json'),
    title: 'Fish presentation',
    description: 'The presentation formats for processed fish species. Please check the wiki for the meaning of these codes.',
  },
);

export type IEnumFishPresentation = z.infer<typeof fishPresentationSchema>;
