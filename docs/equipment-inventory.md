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

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                  |
| :------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [EquipmentInventory](equipment-inventory-properties-entry_type.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory.json#/properties/entry_type") |
| [equipment](#equipment)   | `array`  | Required | cannot be null | [EquipmentInventory](equipment-inventory-properties-equipment.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment")   |

## entry_type

The journal entry type identifer


`entry_type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [EquipmentInventory](equipment-inventory-properties-entry_type.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | ----------- |
| `"equipment-inventory"` |             |

### entry_type Default Value

The default value is:

```json
"equipment-inventory"
```

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
