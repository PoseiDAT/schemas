# Untitled string in SensorState Schema

```txt
https://poseidat.org/core-schema/sensor/state.json#/properties/timestamp
```

The date and time the sensor value was recorded at in UTC in RFC3339 format


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [state.json\*](schemas/entry/sensor/state.json "open original schema") |

## timestamp Type

`string`

## timestamp Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
