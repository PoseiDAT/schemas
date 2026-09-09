import * as z from 'zod';
import { poseidatId, registerSchema } from '../../registry';

const number = (description: string) => z.number().meta({ description }).optional();

export const weatherSchema = registerSchema(
  z.strictObject({
    air_pressure: number('The air pressure in bar'),
    air_temperature: number('The air temperature in degrees Celsius'),
    water_temperature: number('The temperature of the surface water in degrees Celsius'),
    relative_humidity: number('The relative air humidity in percent'),
    absolute_humidity: number('The absolute air humidity in percent'),
    dew_point: number('The dew point in degrees Celsius'),
    wind_dir_true: number('The wind direction relative to the true north in degrees'),
    wind_dir_magnetic: number('The wind direction relative to magnetic north in degrees'),
    wind_speed: number('The wind speed in meters per second'),
    relative_wind_chill_temp: number('The relative wind chill temperature in degrees Celsius'),
    theoretical_wind_chill_temp: number('The theoretical wind chill temperature in degrees Celsius'),
    rain_intensity: number('The rain intensity in l/m2 per hour'),
    wave_height: number('The wave height in meters'),
  }),
  {
    id: poseidatId('core/measurement/weather.json'),
    title: 'Weather',
    description: 'A combination of all posible weather station measurements',
  },
);

export type IMeasurementWeather = z.infer<typeof weatherSchema>;
