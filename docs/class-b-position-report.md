# Class B position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/class-b-position-report.json
```

A position report message for the AIS for a class b ship.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [class-b-position-report.json](schemas/core/ais-message/class-b-position-report.json "open original schema") |

## Class B position report AIS Type

`object` ([Class B position report AIS](class-b-position-report.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Class B position report AIS Properties

| Property                                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                               |
| :------------------------------------------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)                         | `string`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/ais_message_type")                           |
| [position](#position)                                         | `object`  | Required | cannot be null | [Class B position report AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                                       |
| [position_accuracy](#position_accuracy)                       | `string`  | Required | cannot be null | [Class B position report AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")                               |
| [true_heading](#true_heading)                                 | `number`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-true_heading.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/true_heading")                                   |
| [date](#date)                                                 | `string`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-date.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/date")                                                   |
| [unit_flag](#unit_flag)                                       | `string`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-unit_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/unit_flag")                                         |
| [display_flag](#display_flag)                                 | `string`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-display_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/display_flag")                                   |
| [dsc_flag](#dsc_flag)                                         | `string`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-dsc_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/dsc_flag")                                           |
| [band_flag](#band_flag)                                       | `string`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-band_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/band_flag")                                         |
| [message_flag](#message_flag)                                 | `string`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-message_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/message_flag")                                   |
| [assigned_mode_flag](#assigned_mode_flag)                     | `string`  | Required | cannot be null | [Class B position report AIS](aids-to-navigation-report-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")                                  |
| [raim_flag](#raim_flag)                                       | `string`  | Required | cannot be null | [Class B position report AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")                                                    |
| [communication_state_selected](#communication_state_selected) | `string`  | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-type-communication-state-selected.md "https://poseidat.org/schema/enum/ais-communication-state-selected.json#/properties/communication_state_selected") |
| [communication_state](#communication_state)                   | `integer` | Required | cannot be null | [Class B position report AIS](class-b-position-report-properties-communication_state.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/communication_state")                     |
| Additional Properties                                         | Any       | Optional | can be null    |                                                                                                                                                                                                                          |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Class B position report AIS](class-b-position-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                 | Explanation |
| :------------------------------------ | :---------- |
| `"CLASS_B_EQUIPMENT_POSITION_REPORT"` |             |

### ais_message_type Default Value

The default value is:

```json
"CLASS_B_EQUIPMENT_POSITION_REPORT"
```

## position

A navigational position that can be used in an entry

`position`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Class B position report AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is required

*   Type: `string` ([Position accuracy types](aids-to-navigation-report-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [Class B position report AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

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

## true_heading

Degrees (0-359) (511 indicates not available = default)

`true_heading`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Class B position report AIS](class-b-position-report-properties-true_heading.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/true_heading")

### true_heading Type

`number`

### true_heading Constraints

**maximum**: the value of this number must smaller than or equal to: `511`

**minimum**: the value of this number must greater than or equal to: `0`

### true_heading Default Value

The default value is:

```json
511
```

## date

The date and time when the AIS message was created.

`date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Class B position report AIS](class-b-position-report-properties-date.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/date")

### date Type

`string`

### date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## unit_flag

Type class B unit flag

`unit_flag`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Class B position report AIS](class-b-position-report-properties-unit_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/unit_flag")

### unit_flag Type

`string`

### unit_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"SOTDMA"` |             |
| `"CS"`     |             |

### unit_flag Default Value

The default value is:

```json
"CS"
```

## display_flag

Flag to indicate if display is integrated for messages 12 and 14

`display_flag`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Class B position report AIS](class-b-position-report-properties-display_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/display_flag")

### display_flag Type

`string`

### display_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"NO_DISPLAY"`       |             |
| `"DISPLAY_EQUIPPED"` |             |

### display_flag Default Value

The default value is:

```json
"NO_DISPLAY"
```

## dsc_flag

Indicates whether ship is equipped with DSC function

`dsc_flag`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Class B position report AIS](class-b-position-report-properties-dsc_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/dsc_flag")

### dsc_flag Type

`string`

### dsc_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"NO_DSC_FUNCTION"`       |             |
| `"DSC_FUNCTION_EQUIPPED"` |             |

### dsc_flag Default Value

The default value is:

```json
"NO_DSC_FUNCTION"
```

## band_flag

Capable of operating over the upper 525 kHz band of the marine band or the whole marine band

`band_flag`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Class B position report AIS](class-b-position-report-properties-band_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/band_flag")

### band_flag Type

`string`

### band_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"CAPABLE_OPERATING_525_OVER_KHZ"`     |             |
| `"CAPABLE_OPERATING_OVER_MARINE_BAND"` |             |

### band_flag Default Value

The default value is:

```json
"CAPABLE_OPERATING_525_OVER_KHZ"
```

## message_flag

Indicates if frequencycan be managed via message 22

`message_flag`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Class B position report AIS](class-b-position-report-properties-message_flag.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/message_flag")

### message_flag Type

`string`

### message_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                   | Explanation |
| :-------------------------------------- | :---------- |
| `"NO_FREQUENCY_VIA_MESSAGE_22"`         |             |
| `"FREQUENCY_MANAGEMENT_VIA_MESSAGE_22"` |             |

### message_flag Default Value

The default value is:

```json
"NO_FREQUENCY_VIA_MESSAGE_22"
```

## assigned_mode_flag

State of station if it is operating in autonomous or assigned mode; 0 is default.

`assigned_mode_flag`

*   is required

*   Type: `string` ([Assigned mode flag](aids-to-navigation-report-properties-assigned-mode-flag.md))

*   cannot be null

*   defined in: [Class B position report AIS](aids-to-navigation-report-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")

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

*   defined in: [Class B position report AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")

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

*   defined in: [Class B position report AIS](class-b-position-report-properties-type-communication-state-selected.md "https://poseidat.org/schema/enum/ais-communication-state-selected.json#/properties/communication_state_selected")

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

*   defined in: [Class B position report AIS](class-b-position-report-properties-communication_state.md "https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/communication_state")

### communication_state Type

`integer`

### communication_state Constraints

**minimum**: the value of this number must greater than or equal to: `0`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
