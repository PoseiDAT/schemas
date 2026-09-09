import { journalSchema } from './core/journal';
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
import { poseidatId } from './registry';

export const zodBySchemaId = {
  [poseidatId('core/journal.json')]: journalSchema,
  [poseidatId('entry/arrival.json')]: arrivalSchema,
  [poseidatId('entry/departure.json')]: departureSchema,
  [poseidatId('entry/device-measurement.json')]: deviceMeasurementSchema,
  [poseidatId('entry/end-of-fishing.json')]: endOfFishingSchema,
  [poseidatId('entry/equipment-inventory.json')]: equipmentInventorySchema,
  [poseidatId('entry/fishing-activity.json')]: fishingActivitySchema,
  [poseidatId('entry/route.json')]: routeSchema,
  [poseidatId('entry/vessel-registration.json')]: vesselRegistrationSchema,
  [poseidatId('entry/zone-enter.json')]: zoneEnterSchema,
  [poseidatId('entry/zone-exit.json')]: zoneExitSchema,
};
