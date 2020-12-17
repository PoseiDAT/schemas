# Device type Schema

```txt
https://poseidat.org/schema/enum/device-type.json
```

The types of supported technical vessel devices.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device-type.json](schemas/enum/device-type.json "open original schema") |

## Device type Type

`string` ([Device type](device-type.md))

## Device type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | ----------- |
| `"ANTENNA"`       |             |
| `"PUMP"`          |             |
| `"PROCESSOR"`     |             |
| `"DISPLAY"`       |             |
| `"HID"`           |             |
| `"ROUTER"`        |             |
| `"SWITCH"`        |             |
| `"MODEM"`         |             |
| `"SENSOR"`        |             |
| `"BRAKE"`         |             |
| `"ACTUATOR"`      |             |
| `"CABLE"`         |             |
| `"ENCLOSURE"`     |             |
| `"CIRCUITBRAKER"` |             |
