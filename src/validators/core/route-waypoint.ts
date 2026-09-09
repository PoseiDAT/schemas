import * as z from 'zod';
import { routeGeometryTypeSchema } from '../enum/route-geometry-type';
import { poseidatDateTime } from '../formats';
import { poseidatId, registerSchema } from '../registry';

const number = (description: string) => z.number().meta({ description }).optional();

export const routeWaypointSchema = registerSchema(
  z.looseObject({
    id: z.number().meta({ description: 'The id of the waypoint within a trip.' }),
    name: z.string().meta({ description: 'The name of the waypoint.' }).optional(),
    latitude: z.number().meta({ description: 'The latitude of the waypoint.' }),
    longitude: z.number().meta({ description: 'The longitude of the waypoint.' }),
    turn_radius: number('The turn radius of the waypoint in nautical miles.'),
    portside_xtd: number('The Cross-Track Distance at the port side in nautical miles on the route leg between the previous and this waypoint.'),
    starboard_xtd: number('The Cross-Track Distance at the starboard side in nautical miles on the route leg between the previous and this waypoint.'),
    safety_contour: number('The safety contour in metres on the route leg between the previous and this waypoint.'),
    safety_depth: number('The safety depth in metres on the route leg between the previous and this waypoint.'),
    geometry_type: routeGeometryTypeSchema.meta({ description: 'The geometry type of the route leg between the previous and this waypoint.' }).optional(),
    speed_min: number('The lowest cruising speed in knots on the route leg between the previous and this waypoint.'),
    speed_max: number('The highest allowed cruising speed in knots on the route leg between the previous and this waypoint.'),
    draught_forward: number('The static draught forward (bow) in metres on the route leg between the previous and this waypoint.'),
    draught_aft: number('The static draught aft (stern) in metres on the route leg between the previous and this waypoint.'),
    static_ukc: number('The minimum static Under Keel Clearance on the route leg between the previous and this waypoint.'),
    dynamic_ukc: number('The minimum dynamic Under Keel Clearance on the route leg between the previous and this waypoint.'),
    masthead_height: number('The height of the masthead on the route leg between the previous and this waypoint.'),
    etd: poseidatDateTime.meta({ description: 'The Estimated Time of Departure from this waypoint.' }).optional(),
    eta: poseidatDateTime.meta({ description: 'The Estimated Time of Arrival at this waypoint.' }).optional(),
  }),
  {
    id: poseidatId('core/route-waypoint.json'),
    title: 'Route waypoint',
    description: 'A waypoint which is part of a route.',
  },
);

export type ICoreRouteWaypoint = z.infer<typeof routeWaypointSchema>;
