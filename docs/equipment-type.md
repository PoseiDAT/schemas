# Equipment type Schema

```txt
https://poseidat.org/schema/enum/equipment-type.json
```

The types of supported technical vessel equipment.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [equipment-type.json](schemas/enum/equipment-type.json "open original schema") |

## Equipment type Type

`string` ([Equipment type](equipment-type.md))

## Equipment type Constraints

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
