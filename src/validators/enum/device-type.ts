import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const deviceTypeSchema = registerSchema(
  z.enum([
    'PUMP',
    'PROCESSOR',
    'DISPLAY',
    'HID',
    'ROUTER',
    'SWITCH',
    'MODEM',
    'SENSOR',
    'BRAKE',
    'ACTUATOR',
    'CABLE',
    'ENCLOSURE',
    'CIRCUIT_BREAKER',
    'ECONOMETER',
    'SCALE',
    'RECEIVER',
    'TRANSMITTER',
    'TRANSCEIVER',
  ]),
  {
    id: poseidatId('enum/device-type.json'),
    title: 'Device type',
    description: 'The types of supported technical vessel devices.',
  },
);

export type IEnumDeviceType = z.infer<typeof deviceTypeSchema>;
