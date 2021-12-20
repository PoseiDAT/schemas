# Request for an UTC date from another ship or station Schema

```txt
https://poseidat.org/schema/core/ais-message/date-inquiry.json
```

This message type is used to send and array of binary data as a broadcast

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [date-inquiry.json](schemas/core/ais-message/date-inquiry.json "open original schema") |

## Request for an UTC date from another ship or station Type

`object` ([Request for an UTC date from another ship or station](date-inquiry.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Request for an UTC date from another ship or station Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ais_message_type](#ais_message_type) | `string`  | Required | cannot be null | [Request for an UTC date from another ship or station](date-inquiry-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/date-inquiry.json#/properties/ais_message_type") |
| [destination_id](#destination_id)     | `integer` | Required | cannot be null | [Request for an UTC date from another ship or station](date-inquiry-properties-destination_id.md "https://poseidat.org/schema/core/ais-message/date-inquiry.json#/properties/destination_id")     |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Request for an UTC date from another ship or station](date-inquiry-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/date-inquiry.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"UTC_DATE_INQUIRY"` |             |

### ais_message_type Default Value

The default value is:

```json
"UTC_DATE_INQUIRY"
```

## destination_id

The MMSI number where the ship is requisting a date response from.

`destination_id`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Request for an UTC date from another ship or station](date-inquiry-properties-destination_id.md "https://poseidat.org/schema/core/ais-message/date-inquiry.json#/properties/destination_id")

### destination_id Type

`integer`
