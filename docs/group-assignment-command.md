# Group assignment command Schema

```txt
https://poseidat.org/schema/core/ais-message/group-assignment-command.json
```

Assignment of a specific report behaviour by competent authority using a Base station to a specific group of mobiles

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [group-assignment-command.json](schemas/core/ais-message/group-assignment-command.json "open original schema") |

## Group assignment command Type

`object` ([Group assignment command](group-assignment-command.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Group assignment command Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :---------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [ais_message_type](#ais_message_type)           | `string` | Required | cannot be null | [Group assignment command](group-assignment-command-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/ais_message_type")           |
| [north_east_longtitude](#north_east_longtitude) | `number` | Required | cannot be null | [Group assignment command](group-assignment-command-properties-north_east_longtitude.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/north_east_longtitude") |
| [north_east_latitude](#north_east_latitude)     | `number` | Required | cannot be null | [Group assignment command](group-assignment-command-properties-north_east_latitude.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/north_east_latitude")     |
| [south_west_longtitude](#south_west_longtitude) | `number` | Required | cannot be null | [Group assignment command](group-assignment-command-properties-south_west_longtitude.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/south_west_longtitude") |
| [south_west_latitude](#south_west_latitude)     | `number` | Required | cannot be null | [Group assignment command](group-assignment-command-properties-south_west_latitude.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/south_west_latitude")     |
| [transmit_receive_mode](#transmit_receive_mode) | `string` | Required | cannot be null | [Group assignment command](channel-management-properties-the-mode-the-transmittor-is-using.md "https://poseidat.org/schema/enum/ais-transmit-receive-mode.json#/properties/transmit_receive_mode")      |
| [quiet_time](#quiet_time)                       | `number` | Required | cannot be null | [Group assignment command](group-assignment-command-properties-quiet_time.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/quiet_time")                       |
| [ship_type](#ship_type)                         | `string` | Required | cannot be null | [Group assignment command](extended-class-b-report-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/ship_type")                                             |
| [station_type](#station_type)                   | `string` | Required | cannot be null | [Group assignment command](group-assignment-command-properties-station_type.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/station_type")                   |
| [report_interval](#report_interval)             | `number` | Required | cannot be null | [Group assignment command](group-assignment-command-properties-report_interval.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/report_interval")             |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Group assignment command](group-assignment-command-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"GROUP_ASSIGNMENT_COMMAND"` |             |

### ais_message_type Default Value

The default value is:

```json
"GROUP_ASSIGNMENT_COMMAND"
```

## north_east_longtitude

Region defining latitudes and longitudes

`north_east_longtitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Group assignment command](group-assignment-command-properties-north_east_longtitude.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/north_east_longtitude")

### north_east_longtitude Type

`number`

## north_east_latitude

Region defining latitudes and longitudes

`north_east_latitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Group assignment command](group-assignment-command-properties-north_east_latitude.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/north_east_latitude")

### north_east_latitude Type

`number`

## south_west_longtitude

Region defining latitudes and longitudes

`south_west_longtitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Group assignment command](group-assignment-command-properties-south_west_longtitude.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/south_west_longtitude")

### south_west_longtitude Type

`number`

## south_west_latitude

Region defining latitudes and longitudes

`south_west_latitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Group assignment command](group-assignment-command-properties-south_west_latitude.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/south_west_latitude")

### south_west_latitude Type

`number`

## transmit_receive_mode

The transmit receive mode selected

`transmit_receive_mode`

*   is required

*   Type: `string` ([The mode the transmittor is using](channel-management-properties-the-mode-the-transmittor-is-using.md))

*   cannot be null

*   defined in: [Group assignment command](channel-management-properties-the-mode-the-transmittor-is-using.md "https://poseidat.org/schema/enum/ais-transmit-receive-mode.json#/properties/transmit_receive_mode")

### transmit_receive_mode Type

`string` ([The mode the transmittor is using](channel-management-properties-the-mode-the-transmittor-is-using.md))

### transmit_receive_mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"TXA_AND_TXB_OR_RXA_AND_RXB"` |             |
| `"TXA_OR_RXA_AND_RXB"`         |             |
| `"TXB_OR_RXA_AND_RXB"`         |             |

### transmit_receive_mode Default Value

The default value is:

```json
"TXA_AND_TXB_OR_RXA_AND_RXB"
```

## quiet_time

The amount of minutes quiet commanded

`quiet_time`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Group assignment command](group-assignment-command-properties-quiet_time.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/quiet_time")

### quiet_time Type

`number`

## ship_type

The converted names of the ais ship types.

`ship_type`

*   is required

*   Type: `string` ([AIS ship type](extended-class-b-report-properties-ais-ship-type.md))

*   cannot be null

*   defined in: [Group assignment command](extended-class-b-report-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/ship_type")

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

## station_type



`station_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Group assignment command](group-assignment-command-properties-station_type.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/station_type")

### station_type Type

`string`

## report_interval



`report_interval`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Group assignment command](group-assignment-command-properties-report_interval.md "https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/report_interval")

### report_interval Type

`number`
