# Equipment inventory Schema

```txt
https://poseidat.org/schema/entry/equipment-inventory.json
```

An entry detailing the equipment installed on a vessel. One 1 should exist per journal

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [equipment-inventory.json](schemas/entry/equipment-inventory.json "open original schema") |

## Equipment inventory Type

`object` ([Equipment inventory](equipment-inventory.md))

all of

*   [Base entry](arrival-allof-base-entry.md "check type definition")

# Equipment inventory Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [Equipment inventory](equipment-inventory-properties-entry_type.md "https://poseidat.org/schema/entry/equipment-inventory.json#/properties/entry_type")        |
| [equipment](#equipment)   | `array`  | Required | cannot be null | [Equipment inventory](equipment-inventory-properties-equipment-on-board.md "https://poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment") |
| Additional Properties     | Any      | Optional | can be null    |                                                                                                                                                                |

## entry_type

The journal entry type identifier

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Equipment inventory](equipment-inventory-properties-entry_type.md "https://poseidat.org/schema/entry/equipment-inventory.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"equipment-inventory"` |             |

### entry_type Default Value

The default value is:

```json
"equipment-inventory"
```

## equipment

The collection of equipment for the vessel

`equipment`

*   is required

*   Type: `object[]` ([Equipment](equipment-inventory-properties-equipment-on-board-equipment.md))

*   cannot be null

*   defined in: [Equipment inventory](equipment-inventory-properties-equipment-on-board.md "https://poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment")

### equipment Type

`object[]` ([Equipment](equipment-inventory-properties-equipment-on-board-equipment.md))

### equipment Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
