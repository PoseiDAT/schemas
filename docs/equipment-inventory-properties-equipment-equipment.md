# Equipment Schema

```txt
https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/equipment/items
```

A piece of equipment installed on a vessel


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [equipment-inventory.json\*](schemas/entry/equipment-inventory.json "open original schema") |

## items Type

`object` ([Equipment](equipment-inventory-properties-equipment-equipment.md))

# Equipment Properties

| Property          | Type    | Required | Nullable       | Defined by                                                                                                                                 |
| :---------------- | ------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [device](#device) | `array` | Required | cannot be null | [Equipment](equipment-properties-device.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device") |

## device

The collection of devices that are a part of this piece of equipment


`device`

-   is required
-   Type: `object[]` ([Device](equipment-properties-device-device.md))
-   cannot be null
-   defined in: [Equipment](equipment-properties-device.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device")

### device Type

`object[]` ([Device](equipment-properties-device-device.md))

### device Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
