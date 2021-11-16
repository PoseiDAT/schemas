# Measurement type Schema

```txt
https://poseidat.org/schema/enum/measurement-type.json
```

The measurement types

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [measurement-type.json](schemas/enum/measurement-type.json "open original schema") |

## Measurement type Type

`string` ([Measurement type](measurement-type.md))

## Measurement type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | :---------- |
| `"POSITION"`           |             |
| `"TEMPERATURE"`        |             |
| `"HUMIDITY"`           |             |
| `"PRESSURE"`           |             |
| `"SPEED"`              |             |
| `"ONOFF"`              |             |
| `"FORCE"`              |             |
| `"FUEL_CONSUMPTION"`   |             |
| `"DEPTH"`              |             |
| `"ACCELERATION"`       |             |
| `"MAGNETISM"`          |             |
| `"ANGULAR_VELOCITY"`   |             |
| `"VOLTAGE"`            |             |
| `"CURRENT"`            |             |
| `"POWER"`              |             |
| `"ENERGY_CONSUMPTION"` |             |
| `"TRAWL_TENSION"`      |             |
| `"SCALE"`              |             |
| `"RPM"`                |             |
| `"ROUTE"`              |             |
| `"AIS"`                |             |
