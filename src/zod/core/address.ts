import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

const string = (description: string) => z.string().meta({ description });

export const addressSchema = registerSchema(
  z.strictObject({
    street_address: string('The street and number'),
    street_address_extension: string('An optional street and number extension').optional(),
    postal_code: string('The postal or ZIP code of the city'),
    city: string('The city or town'),
    region: string('The region or province').optional(),
    country: string('The country'),
  }),
  { id: poseidatId('core/address.json'), title: 'Address', description: 'A street address' },
);

export type ICoreAddress = z.infer<typeof addressSchema>;
