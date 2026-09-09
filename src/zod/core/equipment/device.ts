import * as z from 'zod';
import { deviceTypeSchema } from '../../enum/device-type';
import { poseidatUuid } from '../../formats';
import { poseidatId, registerSchema } from '../../registry';
import { companySchema } from '../persona/company';

export const deviceSchema = registerSchema(
  z.strictObject({
    device_id: poseidatUuid.meta({ description: 'The unique identifier for the device (UUID v4)' }),
    name: z.string().meta({ description: 'Name of the device' }),
    type: deviceTypeSchema.meta({ description: 'The type of device' }),
    brand: z.string().meta({ description: 'The brand of the device' }).optional(),
    product_no: z.string().meta({ description: 'The product number of the device' }).optional(),
    serial_no: z.string().meta({ description: 'The serial number of the device' }).optional(),
    supplier: companySchema.meta({ description: 'The company which supplied the device' }).optional(),
    installer: companySchema.meta({ description: 'The company which has installed the device' }).optional(),
    maintainer: companySchema.meta({ description: 'The company which maintains the device' }).optional(),
  }),
  {
    id: poseidatId('core/equipment/device.json'),
    title: 'Device',
    description: 'A device which is a part of a piece of equipment installed on a vessel',
  },
);

export type ICoreEquipmentDevice = z.infer<typeof deviceSchema>;
