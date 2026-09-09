import { BaseEntry } from './base-entry';
import { IEntryEquipmentInventory } from './schema-types';
import { equipmentInventorySchema } from './zod/entry/equipment-inventory';

export class EquipmentInventoryEntry extends BaseEntry {
  constructor(
    public data: IEntryEquipmentInventory,
  ) {
    super(data, equipmentInventorySchema, 'equipment-inventory');
  }
}
