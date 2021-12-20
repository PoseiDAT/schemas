# Measurement value Schema

```txt
https://poseidat.org/schema/core/ais-message/ais-message.json#/properties/message
```

The message that gets send by an AIS device. Values that are undefined should be set by the AIS device using the default

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [base-ais-message.json*](schemas/entry/base-ais-message.json "open original schema") |

## message Type

`object` ([Measurement value](base-ais-message-properties-measurement-value.md))

one (and only one) of

*   [Untitled undefined type in Measurement value](ais-message-oneof-0.md "check type definition")

# message Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                |
| :------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [entity_id](#entity_id)               | `number` | Optional | cannot be null | [Measurement value](ais-message-properties-entity_id.md "https://poseidat.org/schema/core/ais-message/ais-message.json#/properties/entity_id")                                            |
| [message_type](#message_type)         | `string` | Optional | cannot be null | [Measurement value](ais-message-properties-ais-message-types.md "https://poseidat.org/schema/enum/ais-message-type.json#/properties/message_type")                                        |
| [repeat_indicator](#repeat_indicator) | `number` | Optional | cannot be null | [Measurement value](ais-message-properties-repeat_indicator.md "https://poseidat.org/schema/core/ais-message/ais-message.json#/properties/repeat_indicator")                              |
| [position_report](#position_report)   | `object` | Optional | cannot be null | [Measurement value](ais-message-properties-position-report-message-from-an-ais-device.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/position_report") |

## entity_id

The mmsi identifier (ais entity) this value is related to

`entity_id`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Measurement value](ais-message-properties-entity_id.md "https://poseidat.org/schema/core/ais-message/ais-message.json#/properties/entity_id")

### entity_id Type

`number`

## message_type

The available message types for an ais message

`message_type`

*   is optional

*   Type: `string` ([AIS message types](ais-message-properties-ais-message-types.md))

*   cannot be null

*   defined in: [Measurement value](ais-message-properties-ais-message-types.md "https://poseidat.org/schema/enum/ais-message-type.json#/properties/message_type")

### message_type Type

`string` ([AIS message types](ais-message-properties-ais-message-types.md))

### message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                          | Explanation |
| :--------------------------------------------- | :---------- |
| `"POSITION_REPORT"`                            |             |
| `"BASE_STATION_REPORT"`                        |             |
| `"STATIC_AND_VOYAGE_DATA"`                     |             |
| `"BINARY_MESSAGE"`                             |             |
| `"BINARY_ACKNOWLEDGEMENT"`                     |             |
| `"BINARY_BROADCAST_MESSAGE"`                   |             |
| `"SAR_AIRCRAFT_POSITION_REPORT"`               |             |
| `"UTC_DATE_INQUIRY"`                           |             |
| `"UTC_DATE_RESPONSE"`                          |             |
| `"ADDRESSED_SAFETY_RELATED_MESSAGE"`           |             |
| `"SAFETY_RELATED_ACKNOWLEDGEMENT"`             |             |
| `"SAFETY_RELATED_BROADCAST_MESSAGE"`           |             |
| `"INTERROGATION"`                              |             |
| `"ASSIGNMENT_MODE_COMMAND"`                    |             |
| `"DGNSS_BROADCAST_BINARY_MESSAGE"`             |             |
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
| `"RESERVER_FOR_FUTURE_USE"`                    |             |

## repeat_indicator

The amount of times the message has been repeated (3 is do not repeat anymore)

`repeat_indicator`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Measurement value](ais-message-properties-repeat_indicator.md "https://poseidat.org/schema/core/ais-message/ais-message.json#/properties/repeat_indicator")

### repeat_indicator Type

`number`

### repeat_indicator Default Value

The default value is:

```json
3
```

## position_report

A position report message for the AIS.

`position_report`

*   is optional

*   Type: `object` ([Position report message from an AIS device](ais-message-properties-position-report-message-from-an-ais-device.md))

*   cannot be null

*   defined in: [Measurement value](ais-message-properties-position-report-message-from-an-ais-device.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/position_report")

### position_report Type

`object` ([Position report message from an AIS device](ais-message-properties-position-report-message-from-an-ais-device.md))
