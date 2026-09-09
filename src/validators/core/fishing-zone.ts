import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

const string = (description: string) => z.string().meta({ description }).optional();

export const fishingZoneSchema = registerSchema(
  z.looseObject({
    economical_zone: string('The economical zone. This is a 3 letter ISO country code'),
    fao_area: string('The FAO area. Example: 27.3.d.28.2. This is the 1st value: 27'),
    fao_subarea: string('The FAO sub-area. Example: 27.3.d.28.2. This is the 2nd value: 3'),
    fao_division: string('The FAO division. Example: 27.3.d.28.2. This is the 3rd value: d'),
    fao_subdivision: string('The FAO subdivision. Example: 27.3.d.28.2. This is the 4th value: 28'),
    fao_unit: string('The FAO unit. Example: 27.3.d.28.2. This is the 5th value: 2'),
    ices_rectangle: string('The ICES statistical rectangle. Example: 26A0'),
    effort_zone: string('The fishing effort zone. Example: A (ICES V-VI)'),
    regional_body: string('The regional fishery body. Example: AIDCP (Agreement on the International Dolphin Conservation Program)'),
  }),
  {
    id: poseidatId('core/fishing-zone.json'),
    title: 'Fishing zone',
    description: 'Geographical zone for fishing activities',
  },
);

export type ICoreFishingZone = z.infer<typeof fishingZoneSchema>;
