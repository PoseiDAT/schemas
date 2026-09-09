import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const fishPackageTypeSchema = registerSchema(
  z.enum([
    'CNT', 'EC', 'OK', 'QS', 'CN', 'CT', 'VO', '4H', 'BX', '5H', 'QR',
    'TB', 'NF', 'NG', 'ZB',
  ]),
  {
    id: poseidatId('enum/fish-package-type.json'),
    title: 'Fish package type',
    description: 'The package types for processed fish species. Please check the wiki for the meaning of these codes.',
  },
);

export type IEnumFishPackageType = z.infer<typeof fishPackageTypeSchema>;
