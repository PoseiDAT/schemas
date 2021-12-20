# Untitled string in Long range position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/long-range-application-position-report.json#/properties/position_latency
```

The latency of which the position was send

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                  |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [long-range-application-position-report.json*](schemas/core/ais-message/long-range-application-position-report.json "open original schema") |

## position_latency Type

`string`

## position_latency Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"LESS_THAN_5_SECONDS"`    |             |
| `"GREATER_THAN_5_SECONDS"` |             |

## position_latency Default Value

The default value is:

```json
"GREATER_THAN_5_SECONDS"
```
