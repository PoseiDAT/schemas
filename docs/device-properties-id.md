# Untitled string in Device Schema

```txt
https://poseidat.org/schema/core/equipment/device.json#/properties/id
```

The unique identifier for the device (UUID v4)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.json*](schemas/core/equipment/device.json "open original schema") |

## id Type

`string`

## id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")
