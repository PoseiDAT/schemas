import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';
import { vesselMasterSchema } from './vessel-master';

export const vesselPartnerSchema = registerSchema(
  z.looseObject({
    hull_number: z.string().meta({ description: 'The external markings of the vessel. NLD2+: XR, GBR: PXR' }),
    rss: z.string().meta({ description: 'The RSS identification code for the vessel. GBR: GBRPRSSNO' }).optional(),
    cfr: z.string().meta({ description: 'The code of federal regulation for the vessel. GBR: PIR' }).optional(),
    call_sign: z.string().meta({ description: 'The international radio call sign for the vessel. GBR: PRC' }).optional(),
    flag_state: z.string().meta({ description: 'Flag state of vessel registration. NLD2+: FS, GBR: PFS' }),
    name: z.string().meta({ description: 'The name of the vessel. NLD3+: NA, GBR: PNA' }).optional(),
    master: vesselMasterSchema.meta({ description: 'The vessel master (captain)' }).optional(),
  }),
  {
    id: poseidatId('core/vessel-partner.json'),
    title: 'Vessel partner',
    description: 'Fishing vessel details for partnered fishing',
  },
);

export type ICoreVesselPartner = z.infer<typeof vesselPartnerSchema>;
