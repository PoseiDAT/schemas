import * as z from 'zod';
import { gnssFixQualitySchema } from '../../enum/gnss-fix-quality';
import { gnssFixTypeSchema } from '../../enum/gnss-fix-type';
import { poseidatId, registerSchema } from '../../registry';

export const positionSchema = registerSchema(
  z.strictObject({
    latitude: z
      .number()
      .meta({ description: 'The latitude of the geographical location' }),
    longitude: z
      .number()
      .meta({ description: 'The longitude of the geographical location' }),
    course_made_good: z
      .number()
      .meta({
        description:
          'The direction in which the vessel is traveling, in degrees',
      })
      .optional(),
    speed_over_ground: z
      .number()
      .meta({
        description:
          'The velocity of the vessel in meters per second (m/s) over the ground',
      })
      .optional(),
    number_of_satellites: z
      .number()
      .meta({
        description:
          'The number of satellites used to calculate the position',
      })
      .optional(),
    fix_quality: gnssFixQualitySchema
      .meta({
        description:
          'The fix quality as reported by an NMEA receiver (0 = invalid, 1 = GPS fix, 2 = DGPS fix)',
      })
      .optional(),
    fix_type: gnssFixTypeSchema
      .meta({ description: 'The type of GPS fix.' })
      .optional(),
    hdop: z
      .number()
      .meta({ description: 'Relative accuracy of horizontal position' })
      .optional(),
    antenna_altitude: z
      .number()
      .meta({
        description:
          'The number of meters above mean sea level of the receiver antenna',
      })
      .optional(),
    geoidal_separation: z
      .number()
      .meta({
        description: 'Height of geoid above WGS84 ellipsoid in meters',
      })
      .optional(),
    dgps_data_age: z
      .number()
      .meta({ description: 'The age of the DGPS data in seconds' })
      .optional(),
    dgps_station_id: z
      .number()
      .meta({
        description: 'The station id of the used DGPS reference station',
      })
      .optional(),
  }),
  {
    id: poseidatId('core/measurement/position.json'),
    title: 'Position',
    description: 'A navigational position that can be used in an entry',
  },
);

export type IMeasurementPosition = z.infer<typeof positionSchema>;
