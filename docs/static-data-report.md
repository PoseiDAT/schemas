# Static data report AIS message Schema

```txt
https://poseidat.org/schema/core/ais-message/static-data-report.json
```

Additional data assigned to an MMSI.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [static-data-report.json](schemas/core/ais-message/static-data-report.json "open original schema") |

## Static data report AIS message Type

`object` ([Static data report AIS message](static-data-report.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Static data report AIS message Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                           |
| :------------------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)             | `string`  | Required | cannot be null | [Static data report AIS message](static-data-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/ais_message_type")              |
| [callsign](#callsign)                             | `string`  | Required | cannot be null | [Static data report AIS message](static-data-report-properties-callsign.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/callsign")                              |
| [vendor_id](#vendor_id)                           | `string`  | Required | cannot be null | [Static data report AIS message](static-data-report-properties-vendor_id.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/vendor_id")                            |
| [entity_name](#entity_name)                       | `string`  | Required | cannot be null | [Static data report AIS message](static-data-report-properties-entity_name.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/entity_name")                        |
| [ship_type](#ship_type)                           | `string`  | Required | cannot be null | [Static data report AIS message](extended-class-b-report-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/ship_type")                                    |
| [dimension_to_bow](#dimension_to_bow)             | `integer` | Required | cannot be null | [Static data report AIS message](static-data-report-properties-dimension_to_bow.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/dimension_to_bow")              |
| [dimension_to_stern](#dimension_to_stern)         | `integer` | Required | cannot be null | [Static data report AIS message](static-data-report-properties-dimension_to_stern.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/dimension_to_stern")          |
| [dimension_to_port](#dimension_to_port)           | `integer` | Required | cannot be null | [Static data report AIS message](static-data-report-properties-dimension_to_port.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/dimension_to_port")            |
| [dimension_to_starboard](#dimension_to_starboard) | `integer` | Required | cannot be null | [Static data report AIS message](static-data-report-properties-dimension_to_starboard.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/dimension_to_starboard")  |
| [position_device_type](#position_device_type)     | `string`  | Required | cannot be null | [Static data report AIS message](aids-to-navigation-report-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type") |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static data report AIS message](static-data-report-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | :---------- |
| `"STATIC_DATA_REPORT"` |             |

### ais_message_type Default Value

The default value is:

```json
"STATIC_DATA_REPORT"
```

## callsign

The call sign of the given AIS entity, '@@@@@@@' is default

`callsign`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static data report AIS message](static-data-report-properties-callsign.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/callsign")

### callsign Type

`string`

### callsign Default Value

The default value is:

```json
"@@@@@@@"
```

## vendor_id

Unique identification of the Unit by a number as defined by the manufacturer

`vendor_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static data report AIS message](static-data-report-properties-vendor_id.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/vendor_id")

### vendor_id Type

`string`

### vendor_id Constraints

**maximum**: the value of this number must smaller than or equal to: `20`

### vendor_id Default Value

The default value is:

```json
"@@@@@@@"
```

## entity_name

The name of the AIS entity

`entity_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static data report AIS message](static-data-report-properties-entity_name.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/entity_name")

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

*   defined in: [Static data report AIS message](extended-class-b-report-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/ship_type")

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

*   defined in: [Static data report AIS message](static-data-report-properties-dimension_to_bow.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/dimension_to_bow")

### dimension_to_bow Type

`integer`

## dimension_to_stern

Indicates the dimension of ship

`dimension_to_stern`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Static data report AIS message](static-data-report-properties-dimension_to_stern.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/dimension_to_stern")

### dimension_to_stern Type

`integer`

## dimension_to_port

Indicates the dimension of ship

`dimension_to_port`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Static data report AIS message](static-data-report-properties-dimension_to_port.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/dimension_to_port")

### dimension_to_port Type

`integer`

## dimension_to_starboard

Indicates the dimension of ship

`dimension_to_starboard`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Static data report AIS message](static-data-report-properties-dimension_to_starboard.md "https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/dimension_to_starboard")

### dimension_to_starboard Type

`integer`

## position_device_type

The converted type of the position device used on the AIS entity.

`position_device_type`

*   is required

*   Type: `string` ([AIS position device type](aids-to-navigation-report-properties-ais-position-device-type.md))

*   cannot be null

*   defined in: [Static data report AIS message](aids-to-navigation-report-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type")

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
