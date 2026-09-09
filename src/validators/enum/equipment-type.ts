import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const equipmentTypeSchema = registerSchema(
  z.enum([
    'ENGINE', 'GNSS', 'ECHO_SOUNDER', 'FISH_FINDER', 'AIS',
    'TANK_LEVEL_METER', 'TENSIOMETER', 'CHARGER', 'SEPARATOR', 'COMPASS',
    'V_SAT', 'REFRIGERATOR', 'ICE_MAKER', 'WINCH', 'RUDDER', 'PROPELLER',
    'PUMP', 'SENSOR', 'SCALE', 'ECDIS', 'ECS',
  ]),
  {
    id: poseidatId('enum/equipment-type.json'),
    title: 'Equipment type',
    description: 'The types of supported technical vessel equipment.',
  },
);

export type IEnumEquipmentType = z.infer<typeof equipmentTypeSchema>;
