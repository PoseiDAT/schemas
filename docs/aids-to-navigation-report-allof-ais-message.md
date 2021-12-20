# Ais message Schema

```txt
https://poseidat.org/schema/core/ais-message/base-ais-message.json#/allOf/0
```

The message that gets send by an AIS device

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [aids-to-navigation-report.json*](schemas/core/ais-message/aids-to-navigation-report.json "open original schema") |

## 0 Type

`object` ([Ais message](aids-to-navigation-report-allof-ais-message.md))

all of

*   [Untitled undefined type in Ais message](base-ais-message-allof-0.md "check type definition")

# 0 Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [entity_id](#entity_id)               | `integer` | Required | cannot be null | [Ais message](base-ais-message-properties-entity_id.md "https://poseidat.org/schema/core/ais-message/base-ais-message.json#/properties/entity_id")               |
| [ais_message_type](#ais_message_type) | `string`  | Required | cannot be null | [Ais message](base-ais-message-properties-ais-message-types.md "https://poseidat.org/schema/enum/ais-message-type.json#/properties/ais_message_type")            |
| [repeat_indicator](#repeat_indicator) | `integer` | Required | cannot be null | [Ais message](base-ais-message-properties-repeat_indicator.md "https://poseidat.org/schema/core/ais-message/base-ais-message.json#/properties/repeat_indicator") |
| [priority](#priority)                 | `integer` | Required | cannot be null | [Ais message](base-ais-message-properties-priority.md "https://poseidat.org/schema/core/ais-message/base-ais-message.json#/properties/priority")                 |
| Additional Properties                 | Any       | Optional | can be null    |                                                                                                                                                                  |

## entity_id

The mmsi identifier (ais entity) this value is related to

`entity_id`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Ais message](base-ais-message-properties-entity_id.md "https://poseidat.org/schema/core/ais-message/base-ais-message.json#/properties/entity_id")

### entity_id Type

`integer`

## ais_message_type

The available message types for an ais message

`ais_message_type`

*   is required

*   Type: `string` ([AIS message types](base-ais-message-properties-ais-message-types.md))

*   cannot be null

*   defined in: [Ais message](base-ais-message-properties-ais-message-types.md "https://poseidat.org/schema/enum/ais-message-type.json#/properties/ais_message_type")

### ais_message_type Type

`string` ([AIS message types](base-ais-message-properties-ais-message-types.md))

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                          | Explanation |
| :--------------------------------------------- | :---------- |
| `"POSITION_REPORT"`                            |             |
| `"BASE_STATION_REPORT"`                        |             |
| `"STATIC_AND_VOYAGE_DATA"`                     |             |
| `"BINARY_OR_SAFETY_MESSAGE"`                   |             |
| `"BINARY_ACKNOWLEDGEMENT"`                     |             |
| `"SAFETY_ACKNOWLEDGEMENT"`                     |             |
| `"BINARY_OR_SAFETY_BROADCAST"`                 |             |
| `"SAR_AIRCRAFT_POSITION_REPORT"`               |             |
| `"UTC_DATE_INQUIRY"`                           |             |
| `"UTC_DATE_RESPONSE"`                          |             |
| `"INTERROGATION"`                              |             |
| `"ASSIGNMENT_MODE_COMMAND"`                    |             |
| `"DGNSS_BROADCAST_MESSAGE"`                    |             |
| `"CLASS_B_EQUIPMENT_POSITION_REPORT"`          |             |
| `"EXTENDED_CLASS_B_EQUIPMENT_POSITION_REPORT"` |             |
| `"DATA_LINK_MANAGEMENT_MESSAGE"`               |             |
| `"AIDS_TO_NAVIGATION_REPORT"`                  |             |
| `"CHANNEL_MANAGEMENT"`                         |             |
| `"GROUP_ASSIGNMENT_COMMAND"`                   |             |
| `"STATIC_DATA_REPORT"`                         |             |
| `"SINGLE_SLOT_BINARY_MESSAGE"`                 |             |
| `"MULTIPLE_SLOT_BINARY_MESSAGE"`               |             |
| `"LONG_RANGE_APPLICATION_POSITION_REPORT"`     |             |
| `"RESERVED_FOR_FUTURE_USE"`                    |             |

## repeat_indicator

The amount of times the message has been repeated (3 is do not repeat anymore)

`repeat_indicator`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Ais message](base-ais-message-properties-repeat_indicator.md "https://poseidat.org/schema/core/ais-message/base-ais-message.json#/properties/repeat_indicator")

### repeat_indicator Type

`integer`

### repeat_indicator Default Value

The default value is:

```json
3
```

## priority

The priority of the send AIS message

`priority`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Ais message](base-ais-message-properties-priority.md "https://poseidat.org/schema/core/ais-message/base-ais-message.json#/properties/priority")

### priority Type

`integer`

### priority Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### priority Default Value

The default value is:

```json
1
```

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
