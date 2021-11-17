# AIS measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ais
```

The value of a certain type of AIS measurement

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## ais Type

`object` ([AIS measurement value](measurement-value-properties-ais-measurement-value.md))

# ais Properties

| Property                                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :-------------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [entity_id](#entity_id)                                   | `number` | Required | cannot be null | [AIS measurement value](ais-measurement-properties-entity_id.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/entity_id")                                        |
| [message_type](#message_type)                             | `string` | Required | cannot be null | [AIS measurement value](ais-measurement-properties-ais-message-types.md "https://poseidat.org/schema/enum/ais/ais-message-type.json#/properties/message_type")                                    |
| [requested_message_type](#requested_message_type)         | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-ais-message-types-1.md "https://poseidat.org/schema/enum/ais/ais-message-type.json#/properties/requested_message_type")                        |
| [nav_status](#nav_status)                                 | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-ais-navigation-status.md "https://poseidat.org/schema/enum/ais/ais-nav-status.json#/properties/nav_status")                                    |
| [position_device_type](#position_device_type)             | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais/ais-position-device-type.json#/properties/position_device_type")             |
| [repeat_indicator](#repeat_indicator)                     | `number` | Required | cannot be null | [AIS measurement value](ais-measurement-properties-repeat_indicator.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/repeat_indicator")                          |
| [callsign](#callsign)                                     | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-callsign.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/callsign")                                          |
| [entity_name](#entity_name)                               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-entity_name.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/entity_name")                                    |
| [entity_type](#entity_type)                               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais/ais-ship-type.json#/properties/entity_type")                                            |
| [ship_dimension](#ship_dimension)                         | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-ship_dimension.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ship_dimension")                              |
| [timestamp](#timestamp)                                   | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-timestamp.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/timestamp")                                        |
| [SOG](#sog)                                               | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-sog.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/SOG")                                                    |
| [ROT](#rot)                                               | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-rot.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ROT")                                                    |
| [true_heading](#true_heading)                             | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-true_heading.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/true_heading")                                  |
| [SOTDMA_communication_state](#sotdma_communication_state) | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-sotdma_communication_state.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/SOTDMA_communication_state")      |
| [RAIM_flag](#raim_flag)                                   | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais/ais-RAIM-flag.json#/properties/RAIM_flag")                                         |
| [position](#position)                                     | `object` | Optional | cannot be null | [AIS measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                      |
| [position_accuracy](#position_accuracy)                   | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais/ais-position-accuracy.json#/properties/position_accuracy")                    |
| [binary_data](#binary_data)                               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-binary_data.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/binary_data")                                    |
| [binary_data_array](#binary_data_array)                   | `array`  | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-binary_data_array.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/binary_data_array")                        |
| [ETA](#eta)                                               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-eta.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ETA")                                                    |
| [IMO_number](#imo_number)                                 | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-imo_number.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/IMO_number")                                      |
| [maximum_draught](#maximum_draught)                       | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-maximum_draught.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/maximum_draught")                            |
| [altitude](#altitude)                                     | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-altitude.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/altitude")                                          |
| [destination](#destination)                               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-destination.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/destination")                                    |
| [special_maneuvre_indicator](#special_maneuvre_indicator) | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-special-maneuvre-indicator-types.md "https://poseidat.org/schema/enum/ais/ais-special-maneuvre.json#/properties/special_maneuvre_indicator")   |
| [DTE](#dte)                                               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-dte-ready-types.md "https://poseidat.org/schema/enum/ais/ais-DTE.json#/properties/DTE")                                                        |
| [COG](#cog)                                               | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-cog.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/COG")                                                    |
| [control_long_range_message](#control_long_range_message) | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-control-long-range-message-types.md "https://poseidat.org/schema/enum/ais/ais-control-long-range.json#/properties/control_long_range_message") |
| [altitude_sensor](#altitude_sensor)                       | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-altitude-sensor-type.md "https://poseidat.org/schema/enum/ais/ais-altitude-sensor-type.json#/properties/altitude_sensor")                      |
| [assigned_mode_flag](#assigned_mode_flag)                 | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")                       |
| [communication_state](#communication_state)               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-communication_state.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/communication_state")                    |
| [destination_id](#destination_id)                         | `number` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-destination_id.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/destination_id")                              |
| [multiple_destination_id](#multiple_destination_id)       | `array`  | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-multiple_destination_id.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/multiple_destination_id")            |
| [safety_related_text](#safety_related_text)               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-safety_related_text.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/safety_related_text")                    |
| [DGNSS_data](#dgnss_data)                                 | `object` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-ais-dgnss-data.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/DGNSS_data")                                               |
| [AtoN_status](#aton_status)                               | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-aton_status.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/AtoN_status")                                    |
| [aid_navigation_extension](#aid_navigation_extension)     | `string` | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-aid_navigation_extension.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/aid_navigation_extension")          |

## entity_id

The mmsi identifier (ais entity) this value is related to

`entity_id`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-entity_id.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/entity_id")

### entity_id Type

`number`

## message_type

The available message types for an ais measurement, starts at 1

`message_type`

*   is required

*   Type: `string` ([AIS message types](ais-measurement-properties-ais-message-types-1.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ais-message-types-1.md "https://poseidat.org/schema/enum/ais/ais-message-type.json#/properties/message_type")

### message_type Type

`string` ([AIS message types](ais-measurement-properties-ais-message-types-1.md))

### message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                      | Explanation |
| :--------------------------------------------------------- | :---------- |
| `"Position report"`                                        |             |
| `"Base station report"`                                    |             |
| `"Static and voyage related data"`                         |             |
| `"Binary addressed message"`                               |             |
| `"Binary acknowledgement"`                                 |             |
| `"Binary broadcast message"`                               |             |
| `"Standard SAR aircraft position report"`                  |             |
| `"UTC/date inquiry"`                                       |             |
| `"UTC/date response"`                                      |             |
| `"Addressed safety related message"`                       |             |
| `"Safety related acknowledgement"`                         |             |
| `"Safety related broadcast message"`                       |             |
| `"Interrogation"`                                          |             |
| `"Assignment mode command"`                                |             |
| `"DGNSS broadcast binary message"`                         |             |
| `"Standard Class B equipment position report"`             |             |
| `"Extended Class B equipment position report"`             |             |
| `"Data link management message"`                           |             |
| `"Aids-to-navigation report"`                              |             |
| `"Channel management"`                                     |             |
| `"Group assignment command"`                               |             |
| `"Static data report"`                                     |             |
| `"Single slot binary message"`                             |             |
| `"Multiple slot binary message with Communications State"` |             |
| `"Position report for long range applications"`            |             |
| `"Undefined; Reserved for future use"`                     |             |

**maximum**: the value of this number must smaller than or equal to: `2`

## requested_message_type

The available message types for an ais measurement, starts at 1

`requested_message_type`

*   is optional

*   Type: `string` ([AIS message types](ais-measurement-properties-ais-message-types-1.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ais-message-types-1.md "https://poseidat.org/schema/enum/ais/ais-message-type.json#/properties/requested_message_type")

### requested_message_type Type

`string` ([AIS message types](ais-measurement-properties-ais-message-types-1.md))

### requested_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                      | Explanation |
| :--------------------------------------------------------- | :---------- |
| `"Position report"`                                        |             |
| `"Base station report"`                                    |             |
| `"Static and voyage related data"`                         |             |
| `"Binary addressed message"`                               |             |
| `"Binary acknowledgement"`                                 |             |
| `"Binary broadcast message"`                               |             |
| `"Standard SAR aircraft position report"`                  |             |
| `"UTC/date inquiry"`                                       |             |
| `"UTC/date response"`                                      |             |
| `"Addressed safety related message"`                       |             |
| `"Safety related acknowledgement"`                         |             |
| `"Safety related broadcast message"`                       |             |
| `"Interrogation"`                                          |             |
| `"Assignment mode command"`                                |             |
| `"DGNSS broadcast binary message"`                         |             |
| `"Standard Class B equipment position report"`             |             |
| `"Extended Class B equipment position report"`             |             |
| `"Data link management message"`                           |             |
| `"Aids-to-navigation report"`                              |             |
| `"Channel management"`                                     |             |
| `"Group assignment command"`                               |             |
| `"Static data report"`                                     |             |
| `"Single slot binary message"`                             |             |
| `"Multiple slot binary message with Communications State"` |             |
| `"Position report for long range applications"`            |             |
| `"Undefined; Reserved for future use"`                     |             |

**maximum**: the value of this number must smaller than or equal to: `2`

## nav_status

The converted nav status given by an AIS measerement.

`nav_status`

*   is optional

*   Type: `string` ([AIS navigation status](ais-measurement-properties-ais-navigation-status.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ais-navigation-status.md "https://poseidat.org/schema/enum/ais/ais-nav-status.json#/properties/nav_status")

### nav_status Type

`string` ([AIS navigation status](ais-measurement-properties-ais-navigation-status.md))

### nav_status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                            | Explanation |
| :--------------------------------------------------------------- | :---------- |
| `"Under way using engine"`                                       |             |
| `"At anchor"`                                                    |             |
| `"Not under command"`                                            |             |
| `"Restricted manoeuverability"`                                  |             |
| `"Constrained by her draught"`                                   |             |
| `"Moored"`                                                       |             |
| `"Aground"`                                                      |             |
| `"Engaged in Fishing"`                                           |             |
| `"Under way sailing"`                                            |             |
| `"Reserved for future amendment of Navigational Status for HSC"` |             |
| `"Reserved for future amendment of Navigational Status for WIG"` |             |
| `"Reserved for future use"`                                      |             |
| `"AIS-SART is active"`                                           |             |
| `"Not defined (default)"`                                        |             |

## position_device_type

The converted type of the position device used on the AIS entity.

`position_device_type`

*   is optional

*   Type: `string` ([AIS position device type](ais-measurement-properties-ais-position-device-type.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais/ais-position-device-type.json#/properties/position_device_type")

### position_device_type Type

`string` ([AIS position device type](ais-measurement-properties-ais-position-device-type.md))

### position_device_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"undefined (default)"`          |             |
| `"GPS"`                          |             |
| `"GLONASS"`                      |             |
| `"combined GPS/GLONASS"`         |             |
| `"Loran-C"`                      |             |
| `"Chayka"`                       |             |
| `"integrated navigation system"` |             |
| `"surveyed"`                     |             |
| `"Galileo"`                      |             |
| `"not used"`                     |             |
| `"internal GNSS"`                |             |

## repeat_indicator

The amount of times the message has been repeated (3 is do not repeat anymore)

`repeat_indicator`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-repeat_indicator.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/repeat_indicator")

### repeat_indicator Type

`number`

### repeat_indicator Default Value

The default value is:

```json
3
```

## callsign

The call sign of the given AIS entity, '@@@@@@@' is default

`callsign`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-callsign.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/callsign")

### callsign Type

`string`

### callsign Default Value

The default value is:

```json
"@@@@@@@"
```

## entity_name

The name of the AIS entity

`entity_name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-entity_name.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/entity_name")

### entity_name Type

`string`

### entity_name Constraints

**maximum**: the value of this number must smaller than or equal to: `20`

### entity_name Default Value

The default value is:

```json
"@@@@@@@@@@@@@@@@@@@@"
```

## entity_type

The converted names of the ais ship types.

`entity_type`

*   is optional

*   Type: `string` ([AIS ship type](ais-measurement-properties-ais-ship-type.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais/ais-ship-type.json#/properties/entity_type")

### entity_type Type

`string` ([AIS ship type](ais-measurement-properties-ais-ship-type.md))

### entity_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                   | Explanation |
| :------------------------------------------------------ | :---------- |
| `"Not available (default)"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Wing in ground (WIG), all ships of this type"`        |             |
| `"Fishing"`                                             |             |
| `"Towing"`                                              |             |
| `"Towing: length exceeds 200m or breadth exceeds 25m"`  |             |
| `"Dredging or underwater ops"`                          |             |
| `"Diving ops"`                                          |             |
| `"Military ops"`                                        |             |
| `"Sailing"`                                             |             |
| `"Pleasure Craft"`                                      |             |
| `"Reserved"`                                            |             |
| `"High speed craft (HSC), all ships of this type"`      |             |
| `"High speed craft (HSC), Hazardous category A"`        |             |
| `"High speed craft (HSC), Hazardous category B"`        |             |
| `"High speed craft (HSC), Hazardous category C"`        |             |
| `"High speed craft (HSC), Hazardous category D"`        |             |
| `"High speed craft (HSC), Reserved for future use"`     |             |
| `"High speed craft (HSC), No additional information"`   |             |
| `"Pilot Vessel"`                                        |             |
| `"Search and Rescue vessel"`                            |             |
| `"Tug"`                                                 |             |
| `"Port Tender"`                                         |             |
| `"Anti-pollution equipment"`                            |             |
| `"Law Enforcement"`                                     |             |
| `"Spare - Local Vessel"`                                |             |
| `"Medical Transport"`                                   |             |
| `"Noncombatant ship according to RR Resolution No. 18"` |             |
| `"Passenger, all ships of this type"`                   |             |
| `"Passenger, Hazardous category A"`                     |             |
| `"Passenger, Hazardous category B"`                     |             |
| `"Passenger, Hazardous category C"`                     |             |
| `"Passenger, Hazardous category D"`                     |             |
| `"Passenger, Reserved for future use"`                  |             |
| `"Passenger, No additional information"`                |             |
| `"Cargo, all ships of this type"`                       |             |
| `"Cargo, Hazardous category A"`                         |             |
| `"Cargo, Hazardous category B"`                         |             |
| `"Cargo, Hazardous category C"`                         |             |
| `"Cargo, Hazardous category D"`                         |             |
| `"Cargo, Reserved for future use"`                      |             |
| `"Cargo, No additional information"`                    |             |
| `"Tanker, all ships of this type"`                      |             |
| `"Tanker, Hazardous category A"`                        |             |
| `"Tanker, Hazardous category B"`                        |             |
| `"Tanker, Hazardous category C"`                        |             |
| `"Tanker, Hazardous category D"`                        |             |
| `"Tanker, Reserved for future use"`                     |             |
| `"Tanker, No additional information"`                   |             |
| `"Other Type, all ships of this type"`                  |             |
| `"Other Type, Hazardous category A"`                    |             |
| `"Other Type, Hazardous category B"`                    |             |
| `"Other Type, Hazardous category C"`                    |             |
| `"Other Type, Hazardous category D"`                    |             |
| `"Other Type, Reserved for future use"`                 |             |
| `"Other Type, no additional information"`               |             |

## ship_dimension

Indicates the dimension of ship

`ship_dimension`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ship_dimension.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ship_dimension")

### ship_dimension Type

`number`

## timestamp

UTC timestamp in seconds of the ais message

`timestamp`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-timestamp.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/timestamp")

### timestamp Type

`number`

## SOG

The Speed over ground of the ship

`SOG`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-sog.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/SOG")

### SOG Type

`number`

## ROT

The Rate Of Turn of the ship in degrees, minus = turning left; plus = turning right; (128  no turn information available (default))

`ROT`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-rot.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ROT")

### ROT Type

`number`

### ROT Constraints

**maximum**: the value of this number must smaller than or equal to: `127`

**minimum**: the value of this number must greater than or equal to: `-128`

### ROT Default Value

The default value is:

```json
-128
```

## true_heading

Degrees (0-359) (511 indicates not available = default)

`true_heading`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-true_heading.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/true_heading")

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

## SOTDMA_communication_state

The sotdma communication state

`SOTDMA_communication_state`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-sotdma_communication_state.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/SOTDMA_communication_state")

### SOTDMA_communication_state Type

`number`

## RAIM_flag

Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device; 0 = RAIM not in use = default; 1 = RAIM in use.

`RAIM_flag`

*   is optional

*   Type: `string` ([AIS RAIM flag flag](ais-measurement-properties-ais-raim-flag-flag.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ais-raim-flag-flag.md "https://poseidat.org/schema/enum/ais/ais-RAIM-flag.json#/properties/RAIM_flag")

### RAIM_flag Type

`string` ([AIS RAIM flag flag](ais-measurement-properties-ais-raim-flag-flag.md))

### RAIM_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                         | Explanation |
| :---------------------------- | :---------- |
| `"RAIM not in use (default)"` |             |
| `"RAIM in use"`               |             |

## position

A navigational position that can be used in an entry

`position`

*   is optional

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [AIS measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is optional

*   Type: `string` ([Position accuracy types](ais-measurement-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais/ais-position-accuracy.json#/properties/position_accuracy")

### position_accuracy Type

`string` ([Position accuracy types](ais-measurement-properties-position-accuracy-types.md))

### position_accuracy Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"LOW (> 10 M)"`  |             |
| `"HIGH (< 10 M)"` |             |

## binary_data

Binary data send in string

`binary_data`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-binary_data.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/binary_data")

### binary_data Type

`string`

### binary_data Default Value

The default value is:

```json
"0"
```

## binary_data_array

Multiple binary data send in array

`binary_data_array`

*   is optional

*   Type: `string[]`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-binary_data_array.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/binary_data_array")

### binary_data_array Type

`string[]`

## ETA

Estimated time of arrival

`ETA`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-eta.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ETA")

### ETA Type

`string`

### ETA Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## IMO_number

The International Maritime Organization (IMO) number is a unique identifier for ships

`IMO_number`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-imo_number.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/IMO_number")

### IMO_number Type

`number`

## maximum_draught

Maximum present static draught in meters

`maximum_draught`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-maximum_draught.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/maximum_draught")

### maximum_draught Type

`number`

## altitude

Altitude (derived from GNSS or barometric (see altitude sensor parameter below)) (m) (0-4 094 m) 4 095 = not available

`altitude`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-altitude.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/altitude")

### altitude Type

`number`

### altitude Default Value

The default value is:

```json
4095
```

## destination

Destination of the vessel, Maximum 20 characters

`destination`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-destination.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/destination")

### destination Type

`string`

### destination Constraints

**maximum length**: the maximum number of characters for this string is: `20`

## special_maneuvre_indicator

Indicates whether an special maneuver is ongoing

`special_maneuvre_indicator`

*   is optional

*   Type: `string` ([Special maneuvre indicator types](ais-measurement-properties-special-maneuvre-indicator-types.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-special-maneuvre-indicator-types.md "https://poseidat.org/schema/enum/ais/ais-special-maneuvre.json#/properties/special_maneuvre_indicator")

### special_maneuvre_indicator Type

`string` ([Special maneuvre indicator types](ais-measurement-properties-special-maneuvre-indicator-types.md))

### special_maneuvre_indicator Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                               | Explanation |
| :---------------------------------- | :---------- |
| `"not available"`                   |             |
| `"not engaged in special maneuver"` |             |
| `"engaged in special maneuver"`     |             |

## DTE

Data terminal equipment (DTE) ready (0 = available, 1 = not available = default)

`DTE`

*   is optional

*   Type: `string` ([DTE ready types](ais-measurement-properties-dte-ready-types.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-dte-ready-types.md "https://poseidat.org/schema/enum/ais/ais-DTE.json#/properties/DTE")

### DTE Type

`string` ([DTE ready types](ais-measurement-properties-dte-ready-types.md))

### DTE Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"available"`     |             |
| `"not available"` |             |

### DTE Default Value

The default value is:

```json
1
```

## COG

The course over ground (COG) of the vessel 0-3599

`COG`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-cog.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/COG")

### COG Type

`number`

### COG Constraints

**maximum**: the value of this number must smaller than or equal to: `3599`

**minimum**: the value of this number must greater than or equal to: `1`

## control_long_range_message

Transmission control for long-range broadcast message

`control_long_range_message`

*   is optional

*   Type: `string` ([Control long range message types](ais-measurement-properties-control-long-range-message-types.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-control-long-range-message-types.md "https://poseidat.org/schema/enum/ais/ais-control-long-range.json#/properties/control_long_range_message")

### control_long_range_message Type

`string` ([Control long range message types](ais-measurement-properties-control-long-range-message-types.md))

### control_long_range_message Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                                                             | Explanation |
| :------------------------------------------------------------------------------------------------ | :---------- |
| `"Class-A AIS station stops transmission of Message 27 within an AIS base station coverage area"` |             |
| `"Request Class-A station to transmit Message 27 within an AIS base station coverage area"`       |             |

## altitude_sensor

The type altitude sensor used on the ship

`altitude_sensor`

*   is optional

*   Type: `string` ([Altitude sensor type](ais-measurement-properties-altitude-sensor-type.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-altitude-sensor-type.md "https://poseidat.org/schema/enum/ais/ais-altitude-sensor-type.json#/properties/altitude_sensor")

### altitude_sensor Type

`string` ([Altitude sensor type](ais-measurement-properties-altitude-sensor-type.md))

### altitude_sensor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"GNSS"`              |             |
| `"Barometric source"` |             |

## assigned_mode_flag

State of station if it is operating in autonomous or assigned mode; 0 is default.

`assigned_mode_flag`

*   is optional

*   Type: `string` ([Assigned mode flag](ais-measurement-properties-assigned-mode-flag.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-assigned-mode-flag.md "https://poseidat.org/schema/enum/ais/ais-assigned-mode-flag.json#/properties/assigned_mode_flag")

### assigned_mode_flag Type

`string` ([Assigned mode flag](ais-measurement-properties-assigned-mode-flag.md))

### assigned_mode_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                   | Explanation |
| :------------------------------------------------------ | :---------- |
| `"Station operating in autonomous and continuous mode"` |             |
| `"Station operating in assigned mode"`                  |             |

## communication_state

Communication state selector flag

`communication_state`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-communication_state.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/communication_state")

### communication_state Type

`string`

## destination_id

The MMSI number where the ship is sending data to.

`destination_id`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-destination_id.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/destination_id")

### destination_id Type

`number`

## multiple_destination_id

The MMSI numbers where the ship is sending data to.

`multiple_destination_id`

*   is optional

*   Type: `number[]`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-multiple_destination_id.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/multiple_destination_id")

### multiple_destination_id Type

`number[]`

## safety_related_text

The addressed safety related message send by the ship

`safety_related_text`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-safety_related_text.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/safety_related_text")

### safety_related_text Type

`string`

## DGNSS_data

AIS DGNSS data send with an AIS message

`DGNSS_data`

*   is optional

*   Type: `object` ([AIS DGNSS data](ais-measurement-properties-ais-dgnss-data.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ais-dgnss-data.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/DGNSS_data")

### DGNSS_data Type

`object` ([AIS DGNSS data](ais-measurement-properties-ais-dgnss-data.md))

## AtoN_status



`AtoN_status`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-aton_status.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/AtoN_status")

### AtoN_status Type

`string`

### AtoN_status Default Value

The default value is:

```json
"00000000"
```

## aid_navigation_extension

Name of the Aid to navigation extension

`aid_navigation_extension`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-aid_navigation_extension.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/aid_navigation_extension")

### aid_navigation_extension Type

`string`

### aid_navigation_extension Constraints

**maximum**: the value of this number must smaller than or equal to: `20`
