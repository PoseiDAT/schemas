# Untitled string in Position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/position-report.json#/properties/special_maneuvre_indicator
```

Indicates whether an special maneuver is ongoing

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [position-report.json*](schemas/core/ais-message/position-report.json "open original schema") |

## special_maneuvre_indicator Type

`string`

## special_maneuvre_indicator Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                               | Explanation |
| :---------------------------------- | :---------- |
| `"NOT_AVAILABLE"`                   |             |
| `"NOT_ENGAGED_IN_SPECIAL_MANEUVER"` |             |
| `"ENGAGED_IN_SPECIAL_MANEUVER"`     |             |

## special_maneuvre_indicator Default Value

The default value is:

```json
"NOT_AVAILABLE"
```
