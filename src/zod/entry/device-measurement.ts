import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { measurementValueSchema } from '../core/measurement/measurement-value';
import { poseidatId, registerSchema } from '../registry';

export const deviceMeasurementSchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('device-measurement'),
      device_id: z.string(),
      value: measurementValueSchema,
    })
    .loose(),
  {
    id: poseidatId('entry/device-measurement.json'),
    title: 'Device measurement',
    description: 'A device measurement journal entry',
  },
);

export type IEntryDeviceMeasurement = z.infer<typeof deviceMeasurementSchema>;
export type IEntryDeviceMeasurementEntryType =
  IEntryDeviceMeasurement['entry_type'];
