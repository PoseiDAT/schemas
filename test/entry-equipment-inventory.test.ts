import { IEntryEquipmentInventory } from '../src/schema/types';
import { EquipmentInventoryEntry } from '../src/index';

describe('EquipmentInventoryEntry', () => {

  test('EquipmentInventoryEntry needs to be defined', () => {
    expect(EquipmentInventoryEntry).toBeDefined();
  });

  test('Create an empty EquipmentInventoryEntry', () => {
    const baseEntry = new EquipmentInventoryEntry({} as IEntryEquipmentInventory);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty EquipmentInventoryEntry should fail', () => {
    const baseEntry = new EquipmentInventoryEntry({} as IEntryEquipmentInventory);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });
});
