# Equipment type Schema

```txt
https://poseidat.org/schema/enum/equipment-type.json#/properties/type
```

The types of supported technical vessel equipment.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [equipment.json*](schemas/core/equipment/equipment.json "open original schema") |

## type Type

`string` ([Equipment type](equipment-properties-equipment-type.md))

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"ENGINE"`           |             |
| `"GNSS"`             |             |
| `"ECHO_SOUNDER"`     |             |
| `"FISH_FINDER"`      |             |
| `"AIS"`              |             |
| `"TANK_LEVEL_METER"` |             |
| `"TENSIOMETER"`      |             |
| `"CHARGER"`          |             |
| `"SEPARATOR"`        |             |
| `"COMPASS"`          |             |
| `"V_SAT"`            |             |
| `"REFRIGERATOR"`     |             |
| `"ICE_MAKER"`        |             |
| `"WINCH"`            |             |
| `"RUDDER"`           |             |
| `"PROPELLER"`        |             |
| `"PUMP"`             |             |
| `"SENSOR"`           |             |
| `"SCALE"`            |             |
| `"ECDIS"`            |             |
| `"ECS"`              |             |
