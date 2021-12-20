# Untitled string in Aids to navigation report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/off_position_indicator
```

Indicates if the AtoN is on or off position

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [aids-to-navigation-report.json*](schemas/core/ais-message/aids-to-navigation-report.json "open original schema") |

## off_position_indicator Type

`string`

## off_position_indicator Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"ON_POSITION"`  |             |
| `"OFF_POSITION"` |             |

## off_position_indicator Default Value

The default value is:

```json
"ON_POSITION"
```
