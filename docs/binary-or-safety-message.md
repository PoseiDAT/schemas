# Binary or safety message send by the AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json
```

This message type is used to send binary data or safety related text to another AIS device

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [binary-or-safety-message.json](schemas/core/ais-message/binary-or-safety-message.json "open original schema") |

## Binary or safety message send by the AIS Type

`object` ([Binary or safety message send by the AIS](binary-or-safety-message.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Binary or safety message send by the AIS Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                    |
| :------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ais_message_type](#ais_message_type) | `string`  | Required | cannot be null | [Binary or safety message send by the AIS](binary-or-safety-message-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/ais_message_type") |
| [sequence_number](#sequence_number)   | `integer` | Required | cannot be null | [Binary or safety message send by the AIS](binary-or-safety-message-properties-sequence_number.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/sequence_number")   |
| [destination_id](#destination_id)     | `integer` | Required | cannot be null | [Binary or safety message send by the AIS](binary-or-safety-message-properties-destination_id.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/destination_id")     |
| [message_text](#message_text)         | `string`  | Required | cannot be null | [Binary or safety message send by the AIS](binary-or-safety-message-properties-message_text.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/message_text")         |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Binary or safety message send by the AIS](binary-or-safety-message-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"BINARY_OR_SAFETY_MESSAGE"` |             |

### ais_message_type Default Value

The default value is:

```json
"BINARY_OR_SAFETY_MESSAGE"
```

## sequence_number



`sequence_number`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Binary or safety message send by the AIS](binary-or-safety-message-properties-sequence_number.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/sequence_number")

### sequence_number Type

`integer`

### sequence_number Constraints

**maximum**: the value of this number must smaller than or equal to: `3`

**minimum**: the value of this number must greater than or equal to: `0`

## destination_id

The MMSI number where the ship is sending data to.

`destination_id`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Binary or safety message send by the AIS](binary-or-safety-message-properties-destination_id.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/destination_id")

### destination_id Type

`integer`

## message_text

Message send in text or in binary

`message_text`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Binary or safety message send by the AIS](binary-or-safety-message-properties-message_text.md "https://poseidat.org/schema/core/ais-message/binary-or-safety-message.json#/properties/message_text")

### message_text Type

`string`
