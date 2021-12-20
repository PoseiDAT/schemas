# Position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/position-report.json
```

A position report message for the AIS.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [position-report.json](schemas/core/ais-message/position-report.json "open original schema") |

## Position report AIS Type

`object` ([Position report AIS](position-report.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Position report AIS Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                 |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)                     | `string`  | Required | cannot be null | [Position report AIS](position-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/ais_message_type")                     |
| [nav_status](#nav_status)                                 | `string`  | Required | cannot be null | [Position report AIS](long-range-application-position-report-properties-ais-navigation-status.md "https://poseidat.org/schema/enum/ais-nav-status.json#/properties/nav_status")            |
| [position](#position)                                     | `object`  | Required | cannot be null | [Position report AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                 |
| [position_accuracy](#position_accuracy)                   | `string`  | Required | cannot be null | [Position report AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")         |
| [rate_of_turn](#rate_of_turn)                             | `number`  | Required | cannot be null | [Position report AIS](position-report-properties-rate_of_turn.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/rate_of_turn")                             |
| [true_heading](#true_heading)                             | `number`  | Required | cannot be null | [Position report AIS](position-report-properties-true_heading.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/true_heading")                             |
| [raim_flag](#raim_flag)                                   | `string`  | Required | cannot be null | [Position report AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")                              |
| [special_maneuvre_indicator](#special_maneuvre_indicator) | `string`  | Required | cannot be null | [Position report AIS](position-report-properties-special_maneuvre_indicator.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/special_maneuvre_indicator") |
| [communication_state](#communication_state)               | `integer` | Required | cannot be null | [Position report AIS](position-report-properties-communication_state.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/communication_state")               |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Position report AIS](position-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"POSITION_REPORT"` |             |

### ais_message_type Default Value

The default value is:

```json
"POSITION_REPORT"
```

## nav_status

The converted nav status given by an AIS measerement.

`nav_status`

*   is required

*   Type: `string` ([AIS navigation status](long-range-application-position-report-properties-ais-navigation-status.md))

*   cannot be null

*   defined in: [Position report AIS](long-range-application-position-report-properties-ais-navigation-status.md "https://poseidat.org/schema/enum/ais-nav-status.json#/properties/nav_status")

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

*   defined in: [Position report AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is required

*   Type: `string` ([Position accuracy types](aids-to-navigation-report-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [Position report AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

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

## rate_of_turn

The Rate Of Turn of the ship in degrees, minus = turning left; plus = turning right; (-128  no turn information available (default))

`rate_of_turn`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Position report AIS](position-report-properties-rate_of_turn.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/rate_of_turn")

### rate_of_turn Type

`number`

### rate_of_turn Constraints

**maximum**: the value of this number must smaller than or equal to: `127`

**minimum**: the value of this number must greater than or equal to: `-128`

### rate_of_turn Default Value

The default value is:

```json
-128
```

## true_heading

Degrees (0-359) (511 indicates not available = default)

`true_heading`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Position report AIS](position-report-properties-true_heading.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/true_heading")

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

## raim_flag

Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device.

`raim_flag`

*   is required

*   Type: `string` ([AIS RAIM flag flag](aids-to-navigation-report-properties-ais-raim-flag-flag.md))

*   cannot be null

*   defined in: [Position report AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")

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

## special_maneuvre_indicator

Indicates whether an special maneuver is ongoing

`special_maneuvre_indicator`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Position report AIS](position-report-properties-special_maneuvre_indicator.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/special_maneuvre_indicator")

### special_maneuvre_indicator Type

`string`

### special_maneuvre_indicator Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                               | Explanation |
| :---------------------------------- | :---------- |
| `"NOT_AVAILABLE"`                   |             |
| `"NOT_ENGAGED_IN_SPECIAL_MANEUVER"` |             |
| `"ENGAGED_IN_SPECIAL_MANEUVER"`     |             |

### special_maneuvre_indicator Default Value

The default value is:

```json
"NOT_AVAILABLE"
```

## communication_state

Communication state selector flag

`communication_state`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Position report AIS](position-report-properties-communication_state.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/communication_state")

### communication_state Type

`integer`

### communication_state Constraints

**minimum**: the value of this number must greater than or equal to: `0`
