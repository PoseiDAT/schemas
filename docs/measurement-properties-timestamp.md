# Untitled string in SensorMeasurement Schema

```txt
https://poseidat.org/core-schema/sensor/measurement.json#/properties/timestamp
```

The date and time the sensor value was recorded at in UTC in RFC3339 format


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [measurement.json\*](schemas/entry/sensor/measurement.json "open original schema") |

## timestamp Type

`string`

## timestamp Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
