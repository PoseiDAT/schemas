# Position report message from an AIS device Schema

```txt
https://poseidat.org/schema/core/ais-message/position-report.json#/properties/position_report
```

A position report message for the AIS.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ais-message.json*](schemas/core/ais-message/ais-message.json "open original schema") |

## position_report Type

`object` ([Position report message from an AIS device](ais-message-properties-position-report-message-from-an-ais-device.md))

# position_report Properties

| Property                                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :-------------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [position](#position)                                     | `object` | Required | cannot be null | [Position report message from an AIS device](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                |
| [position_accuracy](#position_accuracy)                   | `string` | Required | cannot be null | [Position report message from an AIS device](position-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")                  |
| [rate_of_turn](#rate_of_turn)                             | `number` | Required | cannot be null | [Position report message from an AIS device](position-report-properties-rate_of_turn.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/rate_of_turn")                            |
| [true_heading](#true_heading)                             | `number` | Required | cannot be null | [Position report message from an AIS device](position-report-properties-true_heading.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/true_heading")                            |
| [raim_flag](#raim_flag)                                   | `string` | Required | cannot be null | [Position report message from an AIS device](position-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")                                       |
| [special_maneuvre_indicator](#special_maneuvre_indicator) | `string` | Required | cannot be null | [Position report message from an AIS device](position-report-properties-special-maneuvre-indicator-types.md "https://poseidat.org/schema/enum/ais-special-maneuver.json#/properties/special_maneuvre_indicator") |

## position

A navigational position that can be used in an entry

`position`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Position report message from an AIS device](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is required

*   Type: `string` ([Position accuracy types](position-report-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [Position report message from an AIS device](position-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

### position_accuracy Type

`string` ([Position accuracy types](position-report-properties-position-accuracy-types.md))

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

*   defined in: [Position report message from an AIS device](position-report-properties-rate_of_turn.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/rate_of_turn")

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

*   defined in: [Position report message from an AIS device](position-report-properties-true_heading.md "https://poseidat.org/schema/core/ais-message/position-report.json#/properties/true_heading")

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

*   Type: `string` ([AIS RAIM flag flag](position-report-properties-ais-raim-flag-flag.md))

*   cannot be null

*   defined in: [Position report message from an AIS device](position-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")

### raim_flag Type

`string` ([AIS RAIM flag flag](position-report-properties-ais-raim-flag-flag.md))

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

*   Type: `string` ([Special maneuvre indicator types](position-report-properties-special-maneuvre-indicator-types.md))

*   cannot be null

*   defined in: [Position report message from an AIS device](position-report-properties-special-maneuvre-indicator-types.md "https://poseidat.org/schema/enum/ais-special-maneuver.json#/properties/special_maneuvre_indicator")

### special_maneuvre_indicator Type

`string` ([Special maneuvre indicator types](position-report-properties-special-maneuvre-indicator-types.md))

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
