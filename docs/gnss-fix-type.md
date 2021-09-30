# GNSS fix type Schema

```txt
https://poseidat.org/schema/enum/gnss-fix-type.json
```

The type of a GNSS receiver's fix.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [gnss-fix-type.json](schemas/enum/gnss-fix-type.json "open original schema") |

## GNSS fix type Type

`string` ([GNSS fix type](gnss-fix-type.md))

## GNSS fix type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"NOT_AVAILABLE"` |             |
| `"2D_FIX"`        |             |
| `"3D_FIX"`        |             |
