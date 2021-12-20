# Position report for an Search and Rescue Aircraft AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json
```

A standard Search And Rescue Aircraft position report.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [sar-aircraft-position-report.json](schemas/core/ais-message/sar-aircraft-position-report.json "open original schema") |

## Position report for an Search and Rescue Aircraft AIS Type

`object` ([Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Position report for an Search and Rescue Aircraft AIS Properties

| Property                                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                         |
| :------------------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)                         | `string`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/ais_message_type")                 |
| [position](#position)                                         | `object`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                                       |
| [position_accuracy](#position_accuracy)                       | `string`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")                               |
| [altitude](#altitude)                                         | `integer` | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-altitude.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/altitude")                                 |
| [altitude_sensor](#altitude_sensor)                           | `string`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-altitude_sensor.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/altitude_sensor")                   |
| [data_terminal_equipment](#data_terminal_equipment)           | `string`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-dte-ready-types.md "https://poseidat.org/schema/enum/ais-dte.json#/properties/data_terminal_equipment")                                            |
| [assigned_mode_flag](#assigned_mode_flag)                     | `string`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](aids-to-navigation-report-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")                                  |
| [raim_flag](#raim_flag)                                       | `string`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")                                                    |
| [communication_state_selected](#communication_state_selected) | `string`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](class-b-position-report-properties-type-communication-state-selected.md "https://poseidat.org/schema/enum/ais-communication-state-selected.json#/properties/communication_state_selected") |
| [communication_state](#communication_state)                   | `integer` | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-communication_state.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/communication_state")           |
| [date](#date)                                                 | `string`  | Required | cannot be null | [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-date.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/date")                                         |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"SAR_AIRCRAFT_POSITION_REPORT"` |             |

### ais_message_type Default Value

The default value is:

```json
"SAR_AIRCRAFT_POSITION_REPORT"
```

## position

A navigational position that can be used in an entry

`position`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is required

*   Type: `string` ([Position accuracy types](aids-to-navigation-report-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

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

## altitude

Altitude (derived from GNSS or barometric (see altitude sensor parameter below)) (m) (0-4 094 m) 4 095 = not available

`altitude`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-altitude.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/altitude")

### altitude Type

`integer`

### altitude Default Value

The default value is:

```json
4095
```

## altitude_sensor

The type of altitude sensore used on the ship

`altitude_sensor`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-altitude_sensor.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/altitude_sensor")

### altitude_sensor Type

`string`

### altitude_sensor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"GNSS"`              |             |
| `"BAROMETRIC_SOURCE"` |             |

### altitude_sensor Default Value

The default value is:

```json
"GNSS"
```

## data_terminal_equipment

Data terminal equipment (DTE) ready (0 = available, 1 = not available = default)

`data_terminal_equipment`

*   is required

*   Type: `string` ([DTE ready types](sar-aircraft-position-report-properties-dte-ready-types.md))

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-dte-ready-types.md "https://poseidat.org/schema/enum/ais-dte.json#/properties/data_terminal_equipment")

### data_terminal_equipment Type

`string` ([DTE ready types](sar-aircraft-position-report-properties-dte-ready-types.md))

### data_terminal_equipment Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"AVAILABLE"`     |             |
| `"NOT_AVAILABLE"` |             |

### data_terminal_equipment Default Value

The default value is:

```json
"NOT_AVAILABLE"
```

## assigned_mode_flag

State of station if it is operating in autonomous or assigned mode; 0 is default.

`assigned_mode_flag`

*   is required

*   Type: `string` ([Assigned mode flag](aids-to-navigation-report-properties-assigned-mode-flag.md))

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](aids-to-navigation-report-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")

### assigned_mode_flag Type

`string` ([Assigned mode flag](aids-to-navigation-report-properties-assigned-mode-flag.md))

### assigned_mode_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"AUTONOMOUS_CONTINUOUS_MODE"` |             |
| `"ASSIGNED_MODE"`              |             |

### assigned_mode_flag Default Value

The default value is:

```json
"AUTONOMOUS_CONTINUOUS_MODE"
```

## raim_flag

Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device.

`raim_flag`

*   is required

*   Type: `string` ([AIS RAIM flag flag](aids-to-navigation-report-properties-ais-raim-flag-flag.md))

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")

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

## communication_state_selected

The communication state selected

`communication_state_selected`

*   is required

*   Type: `string` ([Type communication state selected](class-b-position-report-properties-type-communication-state-selected.md))

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](class-b-position-report-properties-type-communication-state-selected.md "https://poseidat.org/schema/enum/ais-communication-state-selected.json#/properties/communication_state_selected")

### communication_state_selected Type

`string` ([Type communication state selected](class-b-position-report-properties-type-communication-state-selected.md))

### communication_state_selected Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"SOTDMA"` |             |
| `"ITDMA"`  |             |

### communication_state_selected Default Value

The default value is:

```json
"SOTDMA"
```

## communication_state

Communication state selector flag

`communication_state`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-communication_state.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/communication_state")

### communication_state Type

`integer`

## date

The date and time when the AIS message was created.

`date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Position report for an Search and Rescue Aircraft AIS](sar-aircraft-position-report-properties-date.md "https://poseidat.org/schema/core/ais-message/sar-aircraft-position-report.json#/properties/date")

### date Type

`string`

### date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
