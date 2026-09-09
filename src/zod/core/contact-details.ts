import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const contactDetailsSchema = registerSchema(
  z.strictObject({
    phone: z.string().meta({ description: 'The phone number of the contact' }).optional(),
    email: z.string().meta({ description: 'The email address of the contact' }).optional(),
  }),
  {
    id: poseidatId('core/contact-details.json'),
    title: 'ContactDetails',
    description: 'Contact information for persona',
  },
);

export type ICoreContactDetails = z.infer<typeof contactDetailsSchema>;
