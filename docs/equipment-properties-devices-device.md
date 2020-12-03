# Device Schema

```txt
https://poseidat.org/schema/entry/equipment-inventory/device.json#/properties/device/items
```

A device which is a part of a piece of equipment installed on a vessel


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                  |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [equipment.json\*](schemas/entry/equipment-inventory/equipment.json "open original schema") |

## items Type

`object` ([Device](equipment-properties-devices-device.md))

# Device Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :---------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [device_id](#device_id) | `string` | Required | cannot be null | [Device](device-properties-device_id.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory/device.json#/properties/device_id") |

## device_id

The unique identifier for the device (UUID v4)


`device_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Device](device-properties-device_id.md "https&#x3A;//poseidat.org/schema/entry/equipment-inventory/device.json#/properties/device_id")

### device_id Type

`string`

### device_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")
