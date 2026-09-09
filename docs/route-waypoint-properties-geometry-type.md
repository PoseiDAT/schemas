# Geometry Type Schema

```txt
https://poseidat.org/schema/enum/route-geometry-type.json#/properties/geometry_type
```

The types of geometry used to calculate the distance between two positions.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [route-waypoint.json*](schemas/core/route-waypoint.json "open original schema") |

## geometry_type Type

`string` ([Geometry Type](route-waypoint-properties-geometry-type.md))

## geometry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                       | Explanation |
| :-------------------------- | :---------- |
| `"RHUMB_LINE_LOXODROME"`    |             |
| `"GREAT_CICRLE_ORTHODROME"` |             |
