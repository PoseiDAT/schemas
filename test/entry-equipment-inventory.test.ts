import { v4 } from 'uuid';
import { EquipmentInventoryEntry } from '../src/index';
import { IEntryEquipmentInventory } from '../src/schema-types';

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

  test('Validating a minimal EquipmentInventoryEntry should succeed', () => {
    const data: IEntryEquipmentInventory =
      {
        journal_id: v4(),
        entry_id: v4(),
        entry_type: "equipment-inventory",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        equipment : [
          {
            equipment_id: v4(),
            name: 'Test equipment',
            type: 'SENSOR',
            devices: [
              {
                device_id: v4(),
                name: 'Test switch',
                type: 'SWITCH'
              },
              {
                device_id: v4(),
                name: 'Test modem',
                type: 'MODEM'
              }
            ]
          }
        ]
    };

    const entry = new EquipmentInventoryEntry(data);

    const validationErrors = entry.validate();
    console.log(validationErrors);
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
