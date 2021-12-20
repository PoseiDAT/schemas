# Aids to navigation report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json
```

Position and status report for aids-to-navigation

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [aids-to-navigation-report.json](schemas/core/ais-message/aids-to-navigation-report.json "open original schema") |

## Aids to navigation report AIS Type

`object` ([Aids to navigation report AIS](aids-to-navigation-report.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Aids to navigation report AIS Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :------------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)             | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/ais_message_type")             |
| [entity_name](#entity_name)                       | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-entity_name.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/entity_name")                       |
| [position](#position)                             | `object`  | Required | cannot be null | [Aids to navigation report AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                             |
| [position_accuracy](#position_accuracy)           | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")                     |
| [aid_type](#aid_type)                             | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-aid-type.md "https://poseidat.org/schema/enum/ais-aid-type.json#/properties/aid_type")                                                      |
| [aid_name_extension](#aid_name_extension)         | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-aid_name_extension.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/aid_name_extension")         |
| [aton_status](#aton_status)                       | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-aton_status.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/aton_status")                       |
| [off_position_indicator](#off_position_indicator) | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-off_position_indicator.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/off_position_indicator") |
| [virtual_aton_flag](#virtual_aton_flag)           | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-virtual_aton_flag.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/virtual_aton_flag")           |
| [dimension_to_bow](#dimension_to_bow)             | `integer` | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-dimension_to_bow.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/dimension_to_bow")             |
| [dimension_to_stern](#dimension_to_stern)         | `integer` | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-dimension_to_stern.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/dimension_to_stern")         |
| [dimension_to_port](#dimension_to_port)           | `integer` | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-dimension_to_port.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/dimension_to_port")           |
| [dimension_to_starboard](#dimension_to_starboard) | `integer` | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-dimension_to_starboard.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/dimension_to_starboard") |
| [position_device_type](#position_device_type)     | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type")              |
| [raim_flag](#raim_flag)                           | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")                                          |
| [assigned_mode_flag](#assigned_mode_flag)         | `string`  | Required | cannot be null | [Aids to navigation report AIS](aids-to-navigation-report-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")                        |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                         | Explanation |
| :---------------------------- | :---------- |
| `"AIDS_TO_NAVIGATION_REPORT"` |             |

### ais_message_type Default Value

The default value is:

```json
"AIDS_TO_NAVIGATION_REPORT"
```

## entity_name

The name of the AIS entity

`entity_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-entity_name.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/entity_name")

### entity_name Type

`string`

### entity_name Constraints

**maximum**: the value of this number must smaller than or equal to: `20`

### entity_name Default Value

The default value is:

```json
"@@@@@@@@@@@@@@@@@@@@"
```

## position

A navigational position that can be used in an entry

`position`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Aids to navigation report AIS](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is required

*   Type: `string` ([Position accuracy types](aids-to-navigation-report-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

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

## aid_type

0 = not available = default; Type of aids-to-navigation;

`aid_type`

*   is required

*   Type: `string` ([Aid type](aids-to-navigation-report-properties-aid-type.md))

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-aid-type.md "https://poseidat.org/schema/enum/ais-aid-type.json#/properties/aid_type")

### aid_type Type

`string` ([Aid type](aids-to-navigation-report-properties-aid-type.md))

### aid_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                       | Explanation |
| :------------------------------------------ | :---------- |
| `"NOT_AVAILABLE"`                           |             |
| `"REFERENCE_POINT"`                         |             |
| `"RACON"`                                   |             |
| `"FIXED_STRUCTURES_OFF_SHORE"`              |             |
| `"EMERGENCY_WRECK_MARKING_BUOY"`            |             |
| `"LIGHT_WITHOUT_SECTORS"`                   |             |
| `"LIGHT_WITH_SECTORS"`                      |             |
| `"LEADING_LIGHT_FRONT"`                     |             |
| `"LEADING_LIGHT_REAR"`                      |             |
| `"BEACON_CARDINAL_NORTH"`                   |             |
| `"BEACON_CARDINAL_SOUTH"`                   |             |
| `"BEACON_CARDINAL_EAST"`                    |             |
| `"BEACON_CARDINAL_WEST"`                    |             |
| `"BEACON_PORT_HAND"`                        |             |
| `"BEACON_STARBOARD_HAND"`                   |             |
| `"BEACON_PREFERRED_CHANNEL_PORT_HAND"`      |             |
| `"BEACON_PREFERRED_CHANNEL_STARBOARD_HAND"` |             |
| `"BEACON_ISOLATED_DANGER"`                  |             |
| `"BEACON_SAFE_WATER"`                       |             |
| `"BEACON_SPECIAL_MARKER"`                   |             |
| `"CARDINAL_MARK_NORTH"`                     |             |
| `"CARDINAL_MARK_SOUTH"`                     |             |
| `"CARDINAL_MARK_WEST"`                      |             |
| `"CARDINAL_MARK_EAST"`                      |             |
| `"PORT_HAND_MARK"`                          |             |
| `"STARBOARD_HAND_MARK"`                     |             |
| `"PREFERRED_CHANNEL_PORT_HAND"`             |             |
| `"PREFERRED_CHANNEL_STARBOARD_HAND"`        |             |
| `"ISOLATED_DANGER"`                         |             |
| `"SAFE_WATER"`                              |             |
| `"SPECIAL_MARK"`                            |             |
| `"LANBY"`                                   |             |

### aid_type Default Value

The default value is:

```json
"NOT_AVAILABLE"
```

## aid_name_extension

Extends the aids to navigation name of the entity

`aid_name_extension`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-aid_name_extension.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/aid_name_extension")

### aid_name_extension Type

`string`

## aton_status

indication of the AtoN status

`aton_status`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-aton_status.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/aton_status")

### aton_status Type

`string`

### aton_status Default Value

The default value is:

```json
"00000000"
```

## off_position_indicator

Indicates if the AtoN is on or off position

`off_position_indicator`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-off_position_indicator.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/off_position_indicator")

### off_position_indicator Type

`string`

### off_position_indicator Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"ON_POSITION"`  |             |
| `"OFF_POSITION"` |             |

### off_position_indicator Default Value

The default value is:

```json
"ON_POSITION"
```

## virtual_aton_flag

indicates if the AtoN physically exists or if it is simulated

`virtual_aton_flag`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-virtual_aton_flag.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/virtual_aton_flag")

### virtual_aton_flag Type

`string`

### virtual_aton_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"REAL_ATON"`    |             |
| `"VIRTUAL_ATON"` |             |

### virtual_aton_flag Default Value

The default value is:

```json
"REAL_ATON"
```

## dimension_to_bow

Indicates the dimension of ship

`dimension_to_bow`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-dimension_to_bow.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/dimension_to_bow")

### dimension_to_bow Type

`integer`

## dimension_to_stern

Indicates the dimension of ship

`dimension_to_stern`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-dimension_to_stern.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/dimension_to_stern")

### dimension_to_stern Type

`integer`

## dimension_to_port

Indicates the dimension of ship

`dimension_to_port`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-dimension_to_port.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/dimension_to_port")

### dimension_to_port Type

`integer`

## dimension_to_starboard

Indicates the dimension of ship

`dimension_to_starboard`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-dimension_to_starboard.md "https://poseidat.org/schema/core/ais-message/aids-to-navigation report.json#/properties/dimension_to_starboard")

### dimension_to_starboard Type

`integer`

## position_device_type

The converted type of the position device used on the AIS entity.

`position_device_type`

*   is required

*   Type: `string` ([AIS position device type](aids-to-navigation-report-properties-ais-position-device-type.md))

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type")

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

## raim_flag

Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device.

`raim_flag`

*   is required

*   Type: `string` ([AIS RAIM flag flag](aids-to-navigation-report-properties-ais-raim-flag-flag.md))

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais-raim-flag.json#/properties/raim_flag")

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

## assigned_mode_flag

State of station if it is operating in autonomous or assigned mode; 0 is default.

`assigned_mode_flag`

*   is required

*   Type: `string` ([Assigned mode flag](aids-to-navigation-report-properties-assigned-mode-flag.md))

*   cannot be null

*   defined in: [Aids to navigation report AIS](aids-to-navigation-report-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")

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
