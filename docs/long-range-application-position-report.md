# Long range position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/long-range-application-position-report.json
```

A long range position report message for the AIS.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [long-range-application-position-report.json](schemas/core/ais-message/long-range-application-position-report.json "open original schema") |

## Long range position report AIS Type

`object` ([Long range position report AIS](long-range-application-position-report.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Long range position report AIS Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                      |
| :-------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ais_message_type](#ais_message_type)   | `string` | Required | cannot be null | [Long range position report AIS](long-range-application-position-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/long-range-application-position-report.json#/properties/ais_message_type") |
| [nav_status](#nav_status)               | `string` | Required | cannot be null | [Long range position report AIS](long-range-application-position-report-properties-ais-navigation-status.md "https://poseidat.org/schema/enum/ais-nav-status.json#/properties/nav_status")                                      |
| [position](#position)                   | `object` | Required | cannot be null | [Long range position report AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                                           |
| [position_accuracy](#position_accuracy) | `string` | Required | cannot be null | [Long range position report AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")                                   |
| [position_latency](#position_latency)   | `string` | Required | cannot be null | [Long range position report AIS](long-range-application-position-report-properties-position_latency.md "https://poseidat.org/schema/core/ais-message/long-range-application-position-report.json#/properties/position_latency") |
| [raim_flag](#raim_flag)                 | `string` | Required | cannot be null | [Long range position report AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")                                                        |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Long range position report AIS](long-range-application-position-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/long-range-application-position-report.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                      | Explanation |
| :----------------------------------------- | :---------- |
| `"LONG_RANGE_APPLICATION_POSITION_REPORT"` |             |

### ais_message_type Default Value

The default value is:

```json
"LONG_RANGE_APPLICATION_POSITION_REPORT"
```

## nav_status

The converted nav status given by an AIS measerement.

`nav_status`

*   is required

*   Type: `string` ([AIS navigation status](long-range-application-position-report-properties-ais-navigation-status.md))

*   cannot be null

*   defined in: [Long range position report AIS](long-range-application-position-report-properties-ais-navigation-status.md "https://poseidat.org/schema/enum/ais-nav-status.json#/properties/nav_status")

### nav_status Type

`string` ([AIS navigation status](long-range-application-position-report-properties-ais-navigation-status.md))

### nav_status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                               | Explanation |
| :-------------------------------------------------- | :---------- |
| `"UNDER_WAY_USING_ENGINE"`                          |             |
| `"AT_ANCHOR"`                                       |             |
| `"NOT_UNDER_COMMAND"`                               |             |
| `"RESTRICTED_MANOEUVERABILITY"`                     |             |
| `"CONSTRAINED_BY_HER_DRAUGHT"`                      |             |
| `"MOORED"`                                          |             |
| `"AGROUND"`                                         |             |
| `"ENGAGED_IN_FISHING"`                              |             |
| `"UNDER_WAY_SAILING"`                               |             |
| `"RESERVED_FOR_FUTURE_AMENDMENT_OF_NAV_STATUS_HSC"` |             |
| `"RESERVED_FOR_FUTURE_AMENDMENT_OF_NAV_STATUS_WIG"` |             |
| `"RESERVED_FOR_FUTURE_USE"`                         |             |
| `"AIS_SART_ACTIVE"`                                 |             |
| `"UNDEFINED"`                                       |             |

### nav_status Default Value

The default value is:

```json
"UNDEFINED"
```

## position

A navigational position that can be used in an entry

`position`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Long range position report AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is required

*   Type: `string` ([Position accuracy types](aids-to-navigation-report-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [Long range position report AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

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

## position_latency

The latency of which the position was send

`position_latency`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Long range position report AIS](long-range-application-position-report-properties-position_latency.md "https://poseidat.org/schema/core/ais-message/long-range-application-position-report.json#/properties/position_latency")

### position_latency Type

`string`

### position_latency Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"LESS_THAN_5_SECONDS"`    |             |
| `"GREATER_THAN_5_SECONDS"` |             |

### position_latency Default Value

The default value is:

```json
"GREATER_THAN_5_SECONDS"
```

## raim_flag

Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device.

`raim_flag`

*   is required

*   Type: `string` ([AIS RAIM flag flag](aids-to-navigation-report-properties-ais-raim-flag-flag.md))

*   cannot be null

*   defined in: [Long range position report AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")

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
