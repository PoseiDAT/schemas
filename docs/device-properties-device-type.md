# Device type Schema

```txt
https://poseidat.org/schema/enum/device-type.json#/properties/type
```

The types of supported technical vessel devices.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [device.json*](schemas/core/equipment/device.json "open original schema") |

## type Type

`string` ([Device type](device-properties-device-type.md))

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"PUMP"`            |             |
| `"PROCESSOR"`       |             |
| `"DISPLAY"`         |             |
| `"HID"`             |             |
| `"ROUTER"`          |             |
| `"SWITCH"`          |             |
| `"MODEM"`           |             |
| `"SENSOR"`          |             |
| `"BRAKE"`           |             |
| `"ACTUATOR"`        |             |
| `"CABLE"`           |             |
| `"ENCLOSURE"`       |             |
| `"CIRCUIT_BREAKER"` |             |
| `"ECONOMETER"`      |             |
| `"SCALE"`           |             |
| `"RECEIVER"`        |             |
| `"TRANSMITTER"`     |             |
| `"TRANSCEIVER"`     |             |
