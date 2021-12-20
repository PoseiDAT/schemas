# Binary or safety broadcast message send by the AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/binary-or-safety-broadcast.json
```

This message type is used to send and array of binary data or text as a broadcast

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [binary-or-safety-broadcast.json](schemas/core/ais-message/binary-or-safety-broadcast.json "open original schema") |

## Binary or safety broadcast message send by the AIS Type

`object` ([Binary or safety broadcast message send by the AIS](binary-or-safety-broadcast.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Binary or safety broadcast message send by the AIS Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                      |
| :---------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ais_message_type](#ais_message_type)     | `string` | Required | cannot be null | [Binary or safety broadcast message send by the AIS](binary-or-safety-broadcast-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-broadcast.json#/properties/ais_message_type")     |
| [message_text_array](#message_text_array) | `array`  | Required | cannot be null | [Binary or safety broadcast message send by the AIS](binary-or-safety-broadcast-properties-message_text_array.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-broadcast.json#/properties/message_text_array") |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Binary or safety broadcast message send by the AIS](binary-or-safety-broadcast-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-broadcast.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"BINARY_OR_SAFETY_BROADCAST"`   |             |
| `"SINGLE_SLOT_BINARY_MESSAGE"`   |             |
| `"MULTIPLE_SLOT_BINARY_MESSAGE"` |             |

### ais_message_type Default Value

The default value is:

```json
"BINARY_OR_SAFETY_BROADCAST"
```

## message_text_array

Multiple messages send in binary or text contained in an array

`message_text_array`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Binary or safety broadcast message send by the AIS](binary-or-safety-broadcast-properties-message_text_array.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-broadcast.json#/properties/message_text_array")

### message_text_array Type

`string[]`

### message_text_array Constraints

**minimum number of items**: the minimum number of items for this array is: `1`
