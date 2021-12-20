# Extended class B report for the AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/extended-class-b-report.json
```

A position report message for the AIS for a class b ship combined with static data of the ship.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [extended-class-b-report.json](schemas/core/ais-message/extended-class-b-report.json "open original schema") |

## Extended class B report for the AIS Type

`object` ([Extended class B report for the AIS](extended-class-b-report.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Extended class B report for the AIS Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                         |
| :------------------------------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)             | `string`  | Required | cannot be null | [Extended class B report for the AIS](extended-class-b-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/ais_message_type")             |
| [position](#position)                             | `object`  | Required | cannot be null | [Extended class B report for the AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                         |
| [position_accuracy](#position_accuracy)           | `string`  | Required | cannot be null | [Extended class B report for the AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")                 |
| [true_heading](#true_heading)                     | `number`  | Required | cannot be null | [Extended class B report for the AIS](extended-class-b-report-properties-true_heading.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/true_heading")                     |
| [entity_name](#entity_name)                       | `string`  | Required | cannot be null | [Extended class B report for the AIS](extended-class-b-report-properties-entity_name.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/entity_name")                       |
| [ship_type](#ship_type)                           | `string`  | Required | cannot be null | [Extended class B report for the AIS](extended-class-b-report-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/ship_type")                                             |
| [dimension_to_bow](#dimension_to_bow)             | `integer` | Required | cannot be null | [Extended class B report for the AIS](extended-class-b-report-properties-dimension_to_bow.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/dimension_to_bow")             |
| [dimension_to_stern](#dimension_to_stern)         | `integer` | Required | cannot be null | [Extended class B report for the AIS](extended-class-b-report-properties-dimension_to_stern.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/dimension_to_stern")         |
| [dimension_to_port](#dimension_to_port)           | `integer` | Required | cannot be null | [Extended class B report for the AIS](extended-class-b-report-properties-dimension_to_port.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/dimension_to_port")           |
| [dimension_to_starboard](#dimension_to_starboard) | `integer` | Required | cannot be null | [Extended class B report for the AIS](extended-class-b-report-properties-dimension_to_starboard.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/dimension_to_starboard") |
| [position_device_type](#position_device_type)     | `string`  | Required | cannot be null | [Extended class B report for the AIS](aids-to-navigation-report-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type")          |
| [assigned_mode_flag](#assigned_mode_flag)         | `string`  | Required | cannot be null | [Extended class B report for the AIS](aids-to-navigation-report-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")                    |
| [raim_flag](#raim_flag)                           | `string`  | Required | cannot be null | [Extended class B report for the AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")                                      |
| Additional Properties                             | Any       | Optional | can be null    |                                                                                                                                                                                                                    |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Extended class B report for the AIS](extended-class-b-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/ais_message_type")

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

*   defined in: [Extended class B report for the AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is required

*   Type: `string` ([Position accuracy types](aids-to-navigation-report-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [Extended class B report for the AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

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

*   defined in: [Extended class B report for the AIS](extended-class-b-report-properties-true_heading.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/true_heading")

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

## entity_name

The name of the AIS entity

`entity_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Extended class B report for the AIS](extended-class-b-report-properties-entity_name.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/entity_name")

### entity_name Type

`string`

### entity_name Constraints

**maximum**: the value of this number must smaller than or equal to: `20`

### entity_name Default Value

The default value is:

```json
"@@@@@@@@@@@@@@@@@@@@"
```

## ship_type

The converted names of the ais ship types.

`ship_type`

*   is required

*   Type: `string` ([AIS ship type](extended-class-b-report-properties-ais-ship-type.md))

*   cannot be null

*   defined in: [Extended class B report for the AIS](extended-class-b-report-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/ship_type")

### ship_type Type

`string` ([AIS ship type](extended-class-b-report-properties-ais-ship-type.md))

### ship_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                 | Explanation |
| :---------------------------------------------------- | :---------- |
| `"NOT_AVAILABLE"`                                     |             |
| `"RESERVED_FOR_FUTURE_USE"`                           |             |
| `"WING_IN_GROUND_ALL_SHIPS_OF_THIS_TYPE"`             |             |
| `"WING_IN_GROUND_HAZARDOUS_CATEGORY_A"`               |             |
| `"WING_IN_GROUND_HAZARDOUS_CATEGORY_B"`               |             |
| `"WING_IN_GROUND_HAZARDOUS_CATEGORY_C"`               |             |
| `"WING_IN_GROUND_HAZARDOUS_CATEGORY_D"`               |             |
| `"WING_IN_GROUND_RESERVED_FOR_FUTURE_USE"`            |             |
| `"FISHING"`                                           |             |
| `"TOWING"`                                            |             |
| `"TOWING_LENGTH_EXCEEDS_200M_OR_BREADTH_EXCEEDS_25M"` |             |
| `"DREDGING_OR_UNDERWATER_OPS"`                        |             |
| `"DIVING_OPS"`                                        |             |
| `"MILITARY_OPS"`                                      |             |
| `"SAILING"`                                           |             |
| `"PLEASURE_CRAFT"`                                    |             |
| `"RESERVED"`                                          |             |
| `"HIGH_SPEED_CRAFT_ALL_SHIPS_OF_THIS_TYPE"`           |             |
| `"HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_A"`             |             |
| `"HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_B"`             |             |
| `"HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_C"`             |             |
| `"HIGH_SPEED_CRAFT_HAZARDOUS_CATEGORY_D"`             |             |
| `"HIGH_SPEED_CRAFT_RESERVED_FOR_FUTURE_USE"`          |             |
| `"HIGH_SPEED_CRAFT_NO_ADDITIONAL_INFORMATION"`        |             |
| `"PILOT_VESSEL"`                                      |             |
| `"SEARCH_AND_RESCUE_VESSEL"`                          |             |
| `"TUG"`                                               |             |
| `"PORT_TENDER"`                                       |             |
| `"ANTI_POLLUTION_EQUIPMENT"`                          |             |
| `"LAW_ENFORCEMENT"`                                   |             |
| `"SPARE_LOCAL_VESSEL"`                                |             |
| `"MEDICAL_TRANSPORT"`                                 |             |
| `"NON_COMBATANT_SHIP"`                                |             |
| `"PASSENGER_ALL_SHIPS_OF_THIS_TYPE"`                  |             |
| `"PASSENGER_HAZARDOUS_CATEGORY_A"`                    |             |
| `"PASSENGER_HAZARDOUS_CATEGORY_B"`                    |             |
| `"PASSENGER_HAZARDOUS_CATEGORY_C"`                    |             |
| `"PASSENGER_HAZARDOUS_CATEGORY_D"`                    |             |
| `"PASSENGER_RESERVED_FOR_FUTURE_USE"`                 |             |
| `"PASSENGER_NO_ADDITIONAL_INFORMATION"`               |             |
| `"CARGO_ALL_SHIPS_OF_THIS_TYPE"`                      |             |
| `"CARGO_HAZARDOUS_CATEGORY_A"`                        |             |
| `"CARGO_HAZARDOUS_CATEGORY_B"`                        |             |
| `"CARGO_HAZARDOUS_CATEGORY_C"`                        |             |
| `"CARGO_HAZARDOUS_CATEGORY_D"`                        |             |
| `"CARGO_RESERVED_FOR_FUTURE_USE"`                     |             |
| `"CARGO_NO_ADDITIONAL_INFORMATION"`                   |             |
| `"TANKER_ALL_SHIPS_OF_THIS_TYPE"`                     |             |
| `"TANKER_HAZARDOUS_CATEGORY_A"`                       |             |
| `"TANKER_HAZARDOUS_CATEGORY_B"`                       |             |
| `"TANKER_HAZARDOUS_CATEGORY_C"`                       |             |
| `"TANKER_HAZARDOUS_CATEGORY_D"`                       |             |
| `"TANKER_RESERVED_FOR_FUTURE_USE"`                    |             |
| `"TANKER_NO_ADDITIONAL_INFORMATION"`                  |             |
| `"OTHER_TYPE_ALL_SHIPS_OF_THIS_TYPE"`                 |             |
| `"OTHER_TYPE_HAZARDOUS_CATEGORY_A"`                   |             |
| `"OTHER_TYPE_HAZARDOUS_CATEGORY_B"`                   |             |
| `"OTHER_TYPE_HAZARDOUS_CATEGORY_C"`                   |             |
| `"OTHER_TYPE_HAZARDOUS_CATEGORY_D"`                   |             |
| `"OTHER_TYPE_RESERVED_FOR_FUTURE_USE"`                |             |
| `"OTHER_TYPE_NO_ADDITIONAL_INFORMATION"`              |             |

### ship_type Default Value

The default value is:

```json
"NOT_AVAILABLE"
```

## dimension_to_bow

Indicates the dimension of ship

`dimension_to_bow`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Extended class B report for the AIS](extended-class-b-report-properties-dimension_to_bow.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/dimension_to_bow")

### dimension_to_bow Type

`integer`

## dimension_to_stern

Indicates the dimension of ship

`dimension_to_stern`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Extended class B report for the AIS](extended-class-b-report-properties-dimension_to_stern.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/dimension_to_stern")

### dimension_to_stern Type

`integer`

## dimension_to_port

Indicates the dimension of ship

`dimension_to_port`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Extended class B report for the AIS](extended-class-b-report-properties-dimension_to_port.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/dimension_to_port")

### dimension_to_port Type

`integer`

## dimension_to_starboard

Indicates the dimension of ship

`dimension_to_starboard`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Extended class B report for the AIS](extended-class-b-report-properties-dimension_to_starboard.md "https://poseidat.org/schema/core/ais-message/extended-class-b-report.json#/properties/dimension_to_starboard")

### dimension_to_starboard Type

`integer`

## position_device_type

The converted type of the position device used on the AIS entity.

`position_device_type`

*   is required

*   Type: `string` ([AIS position device type](aids-to-navigation-report-properties-ais-position-device-type.md))

*   cannot be null

*   defined in: [Extended class B report for the AIS](aids-to-navigation-report-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type")

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

## assigned_mode_flag

State of station if it is operating in autonomous or assigned mode; 0 is default.

`assigned_mode_flag`

*   is required

*   Type: `string` ([Assigned mode flag](aids-to-navigation-report-properties-assigned-mode-flag.md))

*   cannot be null

*   defined in: [Extended class B report for the AIS](aids-to-navigation-report-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")

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

*   defined in: [Extended class B report for the AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")

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

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
