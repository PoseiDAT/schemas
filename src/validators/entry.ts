import * as z from 'zod';
import { arrivalSchema } from './entry/arrival';
import { departureSchema } from './entry/departure';
import { deviceMeasurementSchema } from './entry/device-measurement';
import { endOfFishingSchema } from './entry/end-of-fishing';
import { equipmentInventorySchema } from './entry/equipment-inventory';
import { fishingActivitySchema } from './entry/fishing-activity';
import { routeSchema } from './entry/route';
import { vesselRegistrationSchema } from './entry/vessel-registration';
import { zoneEnterSchema } from './entry/zone-enter';
import { zoneExitSchema } from './entry/zone-exit';
import { poseidatId, registerSchema } from './registry';

export const entryUnionSchema = registerSchema(
  z.union([
    arrivalSchema,
    departureSchema,
    deviceMeasurementSchema,
    endOfFishingSchema,
    equipmentInventorySchema,
    fishingActivitySchema,
    routeSchema,
    vesselRegistrationSchema,
    zoneEnterSchema,
    zoneExitSchema,
  ]),
  {
    id: poseidatId('entry.json'),
    title: 'Entry',
    description:
      'Any journal entry. Exactly one of the known entry types must match, discriminated by entry_type.',
  },
);

export type IEntry = z.infer<typeof entryUnionSchema>;
