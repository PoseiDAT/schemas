import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { routeWaypointSchema } from '../core/route-waypoint';
import { poseidatId, registerSchema } from '../registry';

export const routeSchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('route'),
      name: z.string(),
      info: z.string().optional(),
      waypoints: z.array(routeWaypointSchema).min(1),
    })
    .loose(),
  {
    id: poseidatId('entry/route.json'),
    title: 'Route',
    description: 'A route which was planned with an ECS/ECDIS system.',
  },
);

export type IEntryRoute = z.infer<typeof routeSchema>;
export type IEntryRouteEntryType = IEntryRoute['entry_type'];
