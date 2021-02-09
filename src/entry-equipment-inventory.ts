import { BaseEntry } from './base-entry';
import { schemas } from './schemas';
import { IEntryEquipmentInventory } from './schema-types';

export class EquipmentInventoryEntry extends BaseEntry {
  constructor(
    public data: IEntryEquipmentInventory,
  ) {
    super(data, schemas.entry.equipmentInventory, 'equipment-inventory');
  }
}
