# Untitled string in Binary or safety message send by the AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/ais_message_type
```

The message type of the given AIS measurement

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [binary-or-safety-message.json*](schemas/core/ais-message/binary-or-safety-message.json "open original schema") |

## ais_message_type Type

`string`

## ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"BINARY_OR_SAFETY_MESSAGE"` |             |

## ais_message_type Default Value

The default value is:

```json
"BINARY_OR_SAFETY_MESSAGE"
```
