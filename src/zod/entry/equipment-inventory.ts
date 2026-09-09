import * as z from 'zod';
import { baseEntrySchema } from '../core/base-entry';
import { equipmentSchema } from '../core/equipment/equipment';
import { poseidatId, registerSchema } from '../registry';

export const equipmentInventorySchema = registerSchema(
  baseEntrySchema
    .extend({
      entry_type: z.literal('equipment-inventory'),
      equipment: z.array(equipmentSchema).min(1),
    })
    .loose(),
  {
    id: poseidatId('entry/equipment-inventory.json'),
    title: 'Equipment inventory',
    description:
      'An entry detailing the equipment installed on a vessel. Only 1 should exist per journal',
  },
);

export type IEntryEquipmentInventory = z.infer<
  typeof equipmentInventorySchema
>;
export type IEntryEquipmentInventoryEntryType =
  IEntryEquipmentInventory['entry_type'];
