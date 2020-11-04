# EquipmentInventoryEntry Schema

```txt
https://poseidat.org/schema/entry/equipment-inventory.json
```

An entry detailing the equipment installed on a vessel. One 1 should exist per journal


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [equipment-inventory.json](schemas/entry/equipment-inventory.json "open original schema") |

## EquipmentInventoryEntry Type

`object` ([EquipmentInventoryEntry](equipment-inventory.md))

all of

-   [BaseEntry](position-allof-baseentry.md "check type definition")

# EquipmentInventoryEntry Properties

| Property                | Type    | Required | Nullable       | Defined by                                                                                                                                                     |
| :---------------------- | ------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [equipment](#equipment) | `array` | Required | cannot be null | [EquipmentInventoryEntry](equipment-inventory-properties-equipment.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment") |

## equipment

The collection of equipment for the vessel


`equipment`

-   is required
-   Type: `object[]` ([Equipment](equipment-inventory-properties-equipment-equipment.md))
-   cannot be null
-   defined in: [EquipmentInventoryEntry](equipment-inventory-properties-equipment.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment")

### equipment Type

`object[]` ([Equipment](equipment-inventory-properties-equipment-equipment.md))

### equipment Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
