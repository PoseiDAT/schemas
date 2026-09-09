import * as z from 'zod';
import { poseidatUuid } from '../../formats';
import { poseidatId, registerSchema } from '../../registry';
import { addressSchema } from '../address';
import { contactDetailsSchema } from '../contact-details';

export const companySchema = registerSchema(
  z.strictObject({
    company_id: poseidatUuid.meta({ description: 'The unique identifier for the company (UUID v4)' }),
    name: z.string().meta({ description: 'The name of the company' }),
    address: addressSchema.meta({ description: 'The address of the company' }).optional(),
    contact: contactDetailsSchema.meta({ description: 'The contact details of the company' }).optional(),
  }),
  {
    id: poseidatId('core/persona/company.json'),
    title: 'Company',
    description: 'The details of a (commercial) company',
  },
);

export type ICorePersonaCompany = z.infer<typeof companySchema>;
