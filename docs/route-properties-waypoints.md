# Waypoints Schema

```txt
https://poseidat.org/schema/entry/route.json#/properties/waypoints
```

The collection of waypoints which make the route.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [route.json*](schemas/entry/route.json "open original schema") |

## waypoints Type

`object[]` ([Route waypoint](route-properties-waypoints-route-waypoint.md))

## waypoints Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
