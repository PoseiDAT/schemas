# Untitled string in Position report for an Search and Rescue Aircraft AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/altitude_sensor
```

The type of altitude sensore used on the ship

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [sar-aircraft-position-report.json*](schemas/core/ais-message/sar-aircraft-position-report.json "open original schema") |

## altitude_sensor Type

`string`

## altitude_sensor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"GNSS"`              |             |
| `"BAROMETRIC_SOURCE"` |             |

## altitude_sensor Default Value

The default value is:

```json
"GNSS"
```
