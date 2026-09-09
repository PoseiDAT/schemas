import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const vesselMasterSchema = registerSchema(
  z.looseObject({
    name: z.string().meta({ description: 'The name of the vessel master' }),
    address: z.string().meta({ description: 'The (abbreviated) address of the vessel master. Required in all but NLD' }).optional(),
    identifier: z.string().meta({ description: 'Can be used to store any (external) identifier of the master' }).optional(),
  }),
  {
    id: poseidatId('core/vessel-master.json'),
    title: 'Vessel master',
    description: 'The vessel master details. Usually one per entry but can differ in a single trip',
  },
);

export type ICoreVesselMaster = z.infer<typeof vesselMasterSchema>;
