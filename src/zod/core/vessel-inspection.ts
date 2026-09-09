import * as z from 'zod';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';
import { positionSchema } from './measurement/position';

export const vesselInspectionSchema = registerSchema(
  z.looseObject({
    date: poseidatDateTime.meta({ description: 'The datetime the inspection took place' }),
    location: positionSchema.meta({ description: 'The geographical location of the inspection' }),
    country: z.string().meta({ description: 'The country performing the inspection as a 3 letter ISO code. Example: NLD, BEL, GBR. NLD: IC' }).optional(),
    identifier: z.string().meta({ description: 'The identification of the inspecting official. NLD: IA' }),
  }),
  {
    id: poseidatId('core/vessel-inspection.json'),
    title: 'Vessel inspection',
    description: 'Vessel inspection details',
  },
);

export type ICoreVesselInspection = z.infer<typeof vesselInspectionSchema>;
