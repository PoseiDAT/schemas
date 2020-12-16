# Devices Schema

```txt
https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device
```

The collection of devices that are a part of this piece of equipment


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [equipment.json\*](schemas/entry/equipment-inventory/equipment.json "open original schema") |

## device Type

`object[]` ([Device](equipment-properties-devices-device.md))

## device Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
