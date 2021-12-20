# Untitled string in Long range position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/long-range-application-position-report.json#/properties/ais_message_type
```

The message type of the given AIS measurement

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                  |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [long-range-application-position-report.json*](schemas/core/ais-message/long-range-application-position-report.json "open original schema") |

## ais_message_type Type

`string`

## ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                      | Explanation |
| :----------------------------------------- | :---------- |
| `"LONG_RANGE_APPLICATION_POSITION_REPORT"` |             |

## ais_message_type Default Value

The default value is:

```json
"LONG_RANGE_APPLICATION_POSITION_REPORT"
```
