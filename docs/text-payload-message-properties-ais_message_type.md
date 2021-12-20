# Untitled string in AIS message with string as payload Schema

```txt
https://poseidat.org/schema/core/ais-message/text-payload-message.json#/properties/ais_message_type
```

The message type of the given AIS measurement

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [text-payload-message.json*](schemas/core/ais-message/text-payload-message.json "open original schema") |

## ais_message_type Type

`string`

## ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"ASSIGNMENT_MODE_COMMAND"`      |             |
| `"SAFETY_ACKNOWLEDGEMENT"`       |             |
| `"BINARY_ACKNOWLEDGEMENT"`       |             |
| `"DATA_LINK_MANAGEMENT_MESSAGE"` |             |

## ais_message_type Default Value

The default value is:

```json
"ASSIGNMENT_MODE_COMMAND"
```
