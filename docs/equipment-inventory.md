# EquipmentInventory Schema

```txt
https://poseidat.org/schema/entry/equipment-inventory.json
```

An entry detailing the equipment installed on a vessel. One 1 should exist per journal


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [equipment-inventory.json](schemas/entry/equipment-inventory.json "open original schema") |

## EquipmentInventory Type

`object` ([EquipmentInventory](equipment-inventory.md))

all of

-   [BaseEntry](arrival-allof-baseentry.md "check type definition")

# EquipmentInventory Properties

| Property                | Type    | Required | Nullable       | Defined by                                                                                                                                                |
| :---------------------- | ------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [equipment](#equipment) | `array` | Required | cannot be null | [EquipmentInventory](equipment-inventory-properties-equipment.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment") |

## equipment

The collection of equipment for the vessel


`equipment`

-   is required
-   Type: `object[]` ([Equipment](equipment-inventory-properties-equipment-equipment.md))
-   cannot be null
-   defined in: [EquipmentInventory](equipment-inventory-properties-equipment.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment")

### equipment Type

`object[]` ([Equipment](equipment-inventory-properties-equipment-equipment.md))

### equipment Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
