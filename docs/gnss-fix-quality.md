# GNSS fix quality Schema

```txt
https://poseidat.org/schema/enum/gnss-fix-quality.json
```

The quality of a GNSS receiver's fix.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [gnss-fix-quality.json](schemas/enum/gnss-fix-quality.json "open original schema") |

## GNSS fix quality Type

`string` ([GNSS fix quality](gnss-fix-quality.md))

## GNSS fix quality Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"INVALID"`  |             |
| `"GPS_FIX"`  |             |
| `"DGPS_FIX"` |             |
