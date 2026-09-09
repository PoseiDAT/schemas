import * as z from 'zod';
import { poseidatId, registerSchema } from '../../registry';

const number = (description: string) => z.number().meta({ description });

export const trawlTensionSchema = registerSchema(
  z.strictObject({
    shooted_length_starboard: number('The shooted length at starboard side'),
    shooted_length_port: number('The shooted length at port side'),
    shooted_length_center: number('The shooted length at center side'),
    traction_starboard: number('The traction at starboard side'),
    traction_port: number('The traction at port side'),
    traction_center: number('The traction at center side'),
    speed_starboard: number('The speed at starboard side').optional(),
    speed_port: number('The speed at port side').optional(),
    speed_center: number('The speed at center side').optional(),
    pressure_starboard: number('The pressure at starboard side').optional(),
    pressure_port: number('The pressure at port side').optional(),
    pressure_center: number('The pressure at center side').optional(),
    drum_rotations_starboard: number('The drum rotations at starboard side').optional(),
    drum_rotations_port: number('The drum rotations at port side').optional(),
    drum_rotations_center: number('The drum rotations at center side').optional(),
  }),
  {
    id: poseidatId('core/measurement/trawl-tension.json'),
    title: 'Trawl tension',
    description: 'A combination of sensor measurements for the trawl tension',
  },
);

export type IMeasurementTrawlTension = z.infer<typeof trawlTensionSchema>;
