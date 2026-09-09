import * as z from 'zod';
import { poseidatId, registerSchema } from '../registry';

export const routeGeometryTypeSchema = registerSchema(
  z.enum(['RHUMB_LINE_LOXODROME', 'GREAT_CICRLE_ORTHODROME']),
  {
    id: poseidatId('enum/route-geometry-type.json'),
    title: 'Geometry Type',
    description: 'The types of geometry used to calculate the distance between two positions.',
  },
);

export type IEnumRouteGeometryType = z.infer<typeof routeGeometryTypeSchema>;
