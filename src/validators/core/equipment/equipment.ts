import * as z from 'zod';
import { equipmentTypeSchema } from '../../enum/equipment-type';
import { poseidatUuid } from '../../formats';
import { poseidatId, registerSchema } from '../../registry';
import { companySchema } from '../persona/company';
import { deviceSchema } from './device';

export const equipmentSchema = registerSchema(
  z.strictObject({
    equipment_id: poseidatUuid.meta({ description: 'The unique identifier for the equipment (UUID v4)' }),
    name: z.string().meta({ description: 'Name of the equipment' }),
    type: equipmentTypeSchema.meta({ description: 'The type of equipment' }),
    supplier: companySchema.meta({ description: 'The company which supplied the equipment' }).optional(),
    installer: companySchema.meta({ description: 'The company which has installed the equipment' }).optional(),
    maintainer: companySchema.meta({ description: 'The company which maintains the equipment' }).optional(),
    devices: z.array(deviceSchema).min(2).meta({
      title: 'Devices',
      description: 'The collection of devices of which this equipment is composed',
    }),
  }),
  {
    id: poseidatId('core/equipment/equipment.json'),
    title: 'Equipment',
    description: 'A piece of equipment installed on a vessel. Equipment is composed out of different devices',
  },
);

export type ICoreEquipment = z.infer<typeof equipmentSchema>;
