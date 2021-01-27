# Vessel compartment Schema

```txt
https://poseidat.org/schema/enum/vessel-compartment.json
```

The different compartments in a vessel.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [vessel-compartment.json](schemas/enum/vessel-compartment.json "open original schema") |

## Vessel compartment Type

`string` ([Vessel compartment](vessel-compartment.md))

## Vessel compartment Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | ----------- |
| `"DECK"`        |             |
| `"BRIDGE"`      |             |
| `"GALLEY"`      |             |
| `"ENGINE_ROOM"` |             |
| `"FISH_HOLD"`   |             |
| `"CABIN"`       |             |
| `"BOW"`         |             |
| `"STERN"`       |             |
