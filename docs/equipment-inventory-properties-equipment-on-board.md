# Equipment on board Schema

```txt
https://poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment
```

The collection of equipment for the vessel


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [equipment-inventory.json\*](schemas/entry/equipment-inventory.json "open original schema") |

## equipment Type

`object[]` ([Equipment](equipment-inventory-properties-equipment-on-board-equipment.md))

## equipment Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
