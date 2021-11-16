# Altitude sensor type Schema

```txt
https://poseidat.org/schema/enum/ais/ais-altitude-sensor-type.json
```

The type altitude sensor used on the ship

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-altitude-sensor-type.json](schemas/enum/ais/ais-altitude-sensor-type.json "open original schema") |

## Altitude sensor type Type

`string` ([Altitude sensor type](ais-altitude-sensor-type.md))

## Altitude sensor type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"GNSS"`              |             |
| `"Barometric source"` |             |
