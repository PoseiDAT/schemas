import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const vesselCompartmentSchema = registerSchema(
  z.enum([
    'DECK', 'BRIDGE', 'GALLEY', 'ENGINE_ROOM', 'FISH_HOLD', 'CABIN', 'BOW',
    'STERN',
  ]),
  {
    id: poseidatId('enum/vessel-compartment.json'),
    title: 'Vessel compartment',
    description: 'The different compartments in a vessel.',
  },
);

export type IEnumVesselCompartment = z.infer<typeof vesselCompartmentSchema>;
