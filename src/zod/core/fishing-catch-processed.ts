import * as z from 'zod';
import { fishFreshnessSchema } from '../enum/fish-freshness';
import { fishPackageTypeSchema } from '../enum/fish-package-type';
import { fishPresentationSchema } from '../enum/fish-presentation';
import { fishStateSchema } from '../enum/fish-state';
import { poseidatId, registerSchema } from '../registry';

export const fishingCatchProcessedSchema = registerSchema(
  z.looseObject({
    fish_presentation: fishPresentationSchema.meta({ description: 'The fish presentation code. Known as PR. Examples: WHL, GUT, FIL' }),
    fish_state: fishStateSchema.meta({ description: 'The fish preservation state. NLD: PS. Examples: FRO, ALI, SMO.' }),
    package_type: fishPackageTypeSchema.meta({ description: 'The package type code. NLD: TY' }).optional(),
    number_of_packages: z.number().meta({ description: 'The number of packages. NLD: NN' }).optional(),
    average_package_weight: z.number().meta({ description: 'Average product weight, measured in Kg. NLD: AW' }).optional(),
    package_labels: z.array(z.string()).meta({ description: 'An array of strings with the package labels for each package' }).optional(),
    fish_freshness: fishFreshnessSchema.meta({ description: 'The fish freshness category. NLD: FF. Examples: A, E, V' }).optional(),
    conversion_factor: z.number().meta({ description: 'The conversion factor (ratio) from dead weight to live weight. Depends on combination of fish species, presentation and state. NLD: CF' }).optional(),
  }),
  {
    id: poseidatId('core/fishing-catch-processed.json'),
    title: 'Fishing catch processed',
    description: 'Details of caught fish after it has been processed',
  },
);

export type ICoreFishingCatchProcessed = z.infer<typeof fishingCatchProcessedSchema>;
