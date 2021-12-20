# Interrogation send by the AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/interrogation.json
```

Request for a specific message types from multiple stations or ships

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [interrogation.json](schemas/core/ais-message/interrogation.json "open original schema") |

## Interrogation send by the AIS Type

`object` ([Interrogation send by the AIS](interrogation.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Interrogation send by the AIS Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                               |
| :------------------------------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)             | `string` | Required | cannot be null | [Interrogation send by the AIS](interrogation-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/interrogation.json#/properties/ais_message_type")             |
| [requested_message_type](#requested_message_type) | `array`  | Required | cannot be null | [Interrogation send by the AIS](interrogation-properties-requested_message_type.md "https://poseidat.org/schema/core/ais-message/interrogation.json#/properties/requested_message_type") |
| [destination_ids](#destination_ids)               | `array`  | Required | cannot be null | [Interrogation send by the AIS](interrogation-properties-destination_ids.md "https://poseidat.org/schema/core/ais-message/interrogation.json#/properties/destination_ids")               |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Interrogation send by the AIS](interrogation-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/interrogation.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"INTERROGATION"` |             |

### ais_message_type Default Value

The default value is:

```json
"INTERROGATION"
```

## requested_message_type

the requested message type used in message type 15 (interrogation); Can request up to two message types from two stations

`requested_message_type`

*   is required

*   Type: `string[]` ([AIS message types](base-ais-message-properties-ais-message-types.md))

*   cannot be null

*   defined in: [Interrogation send by the AIS](interrogation-properties-requested_message_type.md "https://poseidat.org/schema/core/ais-message/interrogation.json#/properties/requested_message_type")

### requested_message_type Type

`string[]` ([AIS message types](base-ais-message-properties-ais-message-types.md))

### requested_message_type Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

## destination_ids

The MMSI numbers where the ship is sending data to.

`destination_ids`

*   is required

*   Type: `integer[]`

*   cannot be null

*   defined in: [Interrogation send by the AIS](interrogation-properties-destination_ids.md "https://poseidat.org/schema/core/ais-message/interrogation.json#/properties/destination_ids")

### destination_ids Type

`integer[]`

### destination_ids Constraints

**maximum number of items**: the maximum number of items for this array is: `2`
