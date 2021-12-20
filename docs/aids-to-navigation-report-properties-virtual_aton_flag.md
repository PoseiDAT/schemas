# Untitled string in Aids to navigation report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/virtual_aton_flag
```

indicates if the AtoN physically exists or if it is simulated

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [aids-to-navigation-report.json*](schemas/core/ais-message/aids-to-navigation-report.json "open original schema") |

## virtual_aton_flag Type

`string`

## virtual_aton_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"REAL_ATON"`    |             |
| `"VIRTUAL_ATON"` |             |

## virtual_aton_flag Default Value

The default value is:

```json
"REAL_ATON"
```
