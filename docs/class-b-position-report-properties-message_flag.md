# Untitled string in Class B position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/message_flag
```

Indicates if frequencycan be managed via message 22

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [class-b-position-report.json*](schemas/core/ais-message/class-b-position-report.json "open original schema") |

## message_flag Type

`string`

## message_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                   | Explanation |
| :-------------------------------------- | :---------- |
| `"NO_FREQUENCY_VIA_MESSAGE_22"`         |             |
| `"FREQUENCY_MANAGEMENT_VIA_MESSAGE_22"` |             |

## message_flag Default Value

The default value is:

```json
"NO_FREQUENCY_VIA_MESSAGE_22"
```
