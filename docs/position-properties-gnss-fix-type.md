# GNSS fix type Schema

```txt
https://poseidat.org/schema/enum/gnss-fix-type.json#/properties/fix_type
```

The type of a GNSS receiver's fix.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [position.json*](schemas/core/measurement/position.json "open original schema") |

## fix_type Type

`string` ([GNSS fix type](position-properties-gnss-fix-type.md))

## fix_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"NOT_AVAILABLE"` |             |
| `"2D_FIX"`        |             |
| `"3D_FIX"`        |             |
