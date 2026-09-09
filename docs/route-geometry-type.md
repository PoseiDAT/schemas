# Geometry Type Schema

```txt
https://poseidat.org/schema/enum/route-geometry-type.json
```

The types of geometry used to calculate the distance between two positions.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [route-geometry-type.json](schemas/enum/route-geometry-type.json "open original schema") |

## Geometry Type Type

`string` ([Geometry Type](route-geometry-type.md))

## Geometry Type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                       | Explanation |
| :-------------------------- | :---------- |
| `"RHUMB_LINE_LOXODROME"`    |             |
| `"GREAT_CICRLE_ORTHODROME"` |             |
