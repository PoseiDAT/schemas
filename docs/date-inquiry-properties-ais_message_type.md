# Untitled string in Request for an UTC date from another ship or station Schema

```txt
https://poseidat.org/schema/core/ais-message/date-inquiry.json#/properties/ais_message_type
```

The message type of the given AIS measurement

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [date-inquiry.json*](schemas/core/ais-message/date-inquiry.json "open original schema") |

## ais_message_type Type

`string`

## ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"UTC_DATE_INQUIRY"` |             |

## ais_message_type Default Value

The default value is:

```json
"UTC_DATE_INQUIRY"
```
