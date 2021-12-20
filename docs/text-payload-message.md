# AIS message with string as payload Schema

```txt
https://poseidat.org/schema/core/ais-message/text-payload-message.json
```

Contains text or binary message as payload.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [text-payload-message.json](schemas/core/ais-message/text-payload-message.json "open original schema") |

## AIS message with string as payload Type

`object` ([AIS message with string as payload](text-payload-message.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# AIS message with string as payload Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type) | `string` | Required | cannot be null | [AIS message with string as payload](text-payload-message-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/text-payload-message.json#/properties/ais_message_type") |
| [payload](#payload)                   | `string` | Required | cannot be null | [AIS message with string as payload](text-payload-message-properties-payload.md "https://poseidat.org/schema/core/ais-message/text-payload-message.json#/properties/payload")                   |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [AIS message with string as payload](text-payload-message-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/text-payload-message.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"ASSIGNMENT_MODE_COMMAND"`      |             |
| `"SAFETY_ACKNOWLEDGEMENT"`       |             |
| `"BINARY_ACKNOWLEDGEMENT"`       |             |
| `"DATA_LINK_MANAGEMENT_MESSAGE"` |             |

### ais_message_type Default Value

The default value is:

```json
"ASSIGNMENT_MODE_COMMAND"
```

## payload

The text or binary data send as payload

`payload`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [AIS message with string as payload](text-payload-message-properties-payload.md "https://poseidat.org/schema/core/ais-message/text-payload-message.json#/properties/payload")

### payload Type

`string`
