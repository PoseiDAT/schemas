# GNSS fix quality Schema

```txt
https://poseidat.org/schema/enum/gnss-fix-quality.json#/properties/fix_quality
```

The quality of a GNSS receiver's fix.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [position.json*](schemas/core/measurement/position.json "open original schema") |

## fix_quality Type

`string` ([GNSS fix quality](position-properties-gnss-fix-quality.md))

## fix_quality Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"INVALID"`  |             |
| `"GPS_FIX"`  |             |
| `"DGPS_FIX"` |             |
