import * as z from 'zod';
import { vesselCompartmentSchema } from '../enum/vessel-compartment';
import { poseidatUuid } from '../formats';
import { poseidatId, registerSchema } from '../registry';

export const vesselSectionSchema = registerSchema(
  z.looseObject({
    vessel_section_id: poseidatUuid.meta({ description: 'The unique identifier for the section (UUID v4)' }),
    compartment: vesselCompartmentSchema.meta({ description: 'The compartment this section is in' }),
    name: z.string().meta({ description: 'The name of this section' }).optional(),
    description: z.string().meta({ description: 'The description of this section in the compartment' }).optional(),
    pos_x: z.number().meta({ description: 'The x position in cm, the position which is closest to the port side is 0cm' }).optional(),
    pos_y: z.number().meta({ description: 'The y position in cm, the position which is closest to the stern is 0cm' }).optional(),
    pos_z: z.number().meta({ description: 'The z position in cm, the position which is closest to the keel is 0cm' }).optional(),
  }),
  {
    id: poseidatId('core/vessel-section.json'),
    title: 'Vessel section',
    description: 'A section off a vessel, used to detail where objects are on the vessel',
  },
);

export type ICoreVesselSection = z.infer<typeof vesselSectionSchema>;
