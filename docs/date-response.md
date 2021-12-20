# Date response AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/date-response.json
```

This message contains the position and date requested by another ship.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [date-response.json](schemas/core/ais-message/date-response.json "open original schema") |

## Date response AIS Type

`object` ([Date response AIS](date-response.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Date response AIS Properties

| Property                                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                         |
| :-------------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)                     | `string` | Required | cannot be null | [Date response AIS](date-response-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/date-response.json#/properties/ais_message_type")                                   |
| [date_time_response](#date_time_response)                 | `string` | Required | cannot be null | [Date response AIS](date-response-properties-date_time_response.md "https://poseidat.org/schema/core/ais-message/date-response.json#/properties/date_time_response")                               |
| [position](#position)                                     | `object` | Required | cannot be null | [Date response AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                           |
| [position_accuracy](#position_accuracy)                   | `string` | Required | cannot be null | [Date response AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")                   |
| [position_device_type](#position_device_type)             | `string` | Required | cannot be null | [Date response AIS](aids-to-navigation-report-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type")            |
| [control_long_range_message](#control_long_range_message) | `string` | Required | cannot be null | [Date response AIS](base-station-report-properties-control-long-range-message-types.md "https://poseidat.org/schema/enum/ais-long-range-control-type.json#/properties/control_long_range_message") |
| [raim_flag](#raim_flag)                                   | `string` | Required | cannot be null | [Date response AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")                                        |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Date response AIS](date-response-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/date-response.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"UTC_DATE_RESPONSE"` |             |

### ais_message_type Default Value

The default value is:

```json
"UTC_DATE_RESPONSE"
```

## date_time_response

The send UTC date time response from the destination ship

`date_time_response`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Date response AIS](date-response-properties-date_time_response.md "https://poseidat.org/schema/core/ais-message/date-response.json#/properties/date_time_response")

### date_time_response Type

`string`

### date_time_response Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## position

A navigational position that can be used in an entry

`position`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Date response AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is required

*   Type: `string` ([Position accuracy types](aids-to-navigation-report-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [Date response AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

### position_accuracy Type

`string` ([Position accuracy types](aids-to-navigation-report-properties-position-accuracy-types.md))

### position_accuracy Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"LOW"`  |             |
| `"HIGH"` |             |

### position_accuracy Default Value

The default value is:

```json
"LOW"
```

## position_device_type

The converted type of the position device used on the AIS entity.

`position_device_type`

*   is required

*   Type: `string` ([AIS position device type](aids-to-navigation-report-properties-ais-position-device-type.md))

*   cannot be null

*   defined in: [Date response AIS](aids-to-navigation-report-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type")

### position_device_type Type

`string` ([AIS position device type](aids-to-navigation-report-properties-ais-position-device-type.md))

### position_device_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"UNDEFINED"`                    |             |
| `"GPS"`                          |             |
| `"GLONASS"`                      |             |
| `"COMBINED_GPS_GLONASS"`         |             |
| `"LORAN_C"`                      |             |
| `"CHAYKA"`                       |             |
| `"INTEGRATED_NAVIGATION_SYSTEM"` |             |
| `"SURVEYED"`                     |             |
| `"GALILEO"`                      |             |
| `"NOT_USED"`                     |             |
| `"INTERNAL_GNSS"`                |             |

### position_device_type Default Value

The default value is:

```json
"SURVEYED"
```

## control_long_range_message

Transmission control for long-range broadcast message

`control_long_range_message`

*   is required

*   Type: `string` ([Control long range message types](base-station-report-properties-control-long-range-message-types.md))

*   cannot be null

*   defined in: [Date response AIS](base-station-report-properties-control-long-range-message-types.md "https://poseidat.org/schema/enum/ais-long-range-control-type.json#/properties/control_long_range_message")

### control_long_range_message Type

`string` ([Control long range message types](base-station-report-properties-control-long-range-message-types.md))

### control_long_range_message Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                               | Explanation |
| :---------------------------------- | :---------- |
| `"STOP_TRANSMISSION_MESSAGE_27"`    |             |
| `"REQUEST_TRANSMISSION_MESSAGE_27"` |             |

### control_long_range_message Default Value

The default value is:

```json
"STOP_TRANSMISSION_MESSAGE_27"
```

## raim_flag

Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device.

`raim_flag`

*   is required

*   Type: `string` ([AIS RAIM flag flag](aids-to-navigation-report-properties-ais-raim-flag-flag.md))

*   cannot be null

*   defined in: [Date response AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")

### raim_flag Type

`string` ([AIS RAIM flag flag](aids-to-navigation-report-properties-ais-raim-flag-flag.md))

### raim_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"RAIM_NOT_IN_USE"` |             |
| `"RAIM_IN_USE"`     |             |

### raim_flag Default Value

The default value is:

```json
"RAIM_NOT_IN_USE"
```
