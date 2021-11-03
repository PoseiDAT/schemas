# AIS measurement type Schema

```txt
https://poseidat.org/schema/enum/ais-measurement-type.json
```

The measurement types for the AIS

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-measurement-type.json](schemas/enum/ais-measurement-type.json "open original schema") |

## AIS measurement type Type

`string` ([AIS measurement type](ais-measurement-type.md))

## AIS measurement type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"POSITION"`                   |             |
| `"DTE"`                        |             |
| `"ETA"`                        |             |
| `"DESTINATION"`                |             |
| `"SOG"`                        |             |
| `"ROT"`                        |             |
| `"COG"`                        |             |
| `"TRUE_HEADING"`               |             |
| `"SPECIAL_MANEUVRE_INDICATOR"` |             |
