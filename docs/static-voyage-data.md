# Static and voyage data AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/static-voyage-data.json
```

An AIS message used to report static or voyage related data.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [static-voyage-data.json](schemas/core/ais-message/static-voyage-data.json "open original schema") |

## Static and voyage data AIS Type

`object` ([Static and voyage data AIS](static-voyage-data.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Static and voyage data AIS Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :------------------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)             | `string`  | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/ais_message_type")             |
| [ais_version_indicator](#ais_version_indicator)   | `string`  | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-ais_version_indicator.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/ais_version_indicator")   |
| [imo_number](#imo_number)                         | `string`  | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-imo_number.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/imo_number")                         |
| [callsign](#callsign)                             | `string`  | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-callsign.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/callsign")                             |
| [entity_name](#entity_name)                       | `string`  | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-entity_name.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/entity_name")                       |
| [ship_type](#ship_type)                           | `string`  | Required | cannot be null | [Static and voyage data AIS](extended-class-b-report-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/ship_type")                                   |
| [dimension_to_bow](#dimension_to_bow)             | `integer` | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-dimension_to_bow.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/dimension_to_bow")             |
| [dimension_to_stern](#dimension_to_stern)         | `integer` | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-dimension_to_stern.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/dimension_to_stern")         |
| [dimension_to_port](#dimension_to_port)           | `integer` | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-dimension_to_port.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/dimension_to_port")           |
| [dimension_to_starboard](#dimension_to_starboard) | `integer` | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-dimension_to_starboard.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/dimension_to_starboard") |
| [eta](#eta)                                       | `string`  | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-eta.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/eta")                                       |
| [max_draught](#max_draught)                       | `number`  | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-max_draught.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/max_draught")                       |
| [destination](#destination)                       | `string`  | Required | cannot be null | [Static and voyage data AIS](static-voyage-data-properties-destination.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/destination")                       |
| [dte](#dte)                                       | `string`  | Required | cannot be null | [Static and voyage data AIS](sar-aircraft-position-report-properties-dte-ready-types.md "https://poseidat.org/schema/enum/ais-dte.json#/properties/dte")                                        |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"STATIC_AND_VOYAGE_DATA"` |             |

### ais_message_type Default Value

The default value is:

```json
"STATIC_AND_VOYAGE_DATA"
```

## ais_version_indicator

An indicator for the version the user has on his AIS device.

`ais_version_indicator`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-ais_version_indicator.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/ais_version_indicator")

### ais_version_indicator Type

`string`

### ais_version_indicator Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                       | Explanation |
| :------------------------------------------ | :---------- |
| `"COMPLIANT_WITH_ITU_R_M_1371_1"`           |             |
| `"COMPLIANT_WITH_ITU_R_M_1371_3_OR_HIGHER"` |             |
| `"COMPLIANT_WITH_ITU_R_M_1371_5_OR_HIGHER"` |             |
| `"COMPLIANT_WITH_FUTURE_EDITIONS"`          |             |

## imo_number

The International Maritime Organization (IMO) number is a unique identifier for ships

`imo_number`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-imo_number.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/imo_number")

### imo_number Type

`string`

### imo_number Default Value

The default value is:

```json
"0"
```

## callsign

The call sign of the given AIS entity, '@@@@@@@' is default

`callsign`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-callsign.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/callsign")

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

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-entity_name.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/entity_name")

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

*   defined in: [Static and voyage data AIS](extended-class-b-report-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/ship_type")

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

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-dimension_to_bow.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/dimension_to_bow")

### dimension_to_bow Type

`integer`

## dimension_to_stern

Indicates the dimension of ship

`dimension_to_stern`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-dimension_to_stern.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/dimension_to_stern")

### dimension_to_stern Type

`integer`

## dimension_to_port

Indicates the dimension of ship

`dimension_to_port`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-dimension_to_port.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/dimension_to_port")

### dimension_to_port Type

`integer`

## dimension_to_starboard

Indicates the dimension of ship

`dimension_to_starboard`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-dimension_to_starboard.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/dimension_to_starboard")

### dimension_to_starboard Type

`integer`

## eta

Estimated date and time of arrival

`eta`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-eta.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/eta")

### eta Type

`string`

### eta Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## max_draught

Maximum present static draught in meters

`max_draught`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-max_draught.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/max_draught")

### max_draught Type

`number`

## destination

Destination of the vessel, Maximum 20 characters

`destination`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Static and voyage data AIS](static-voyage-data-properties-destination.md "https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/destination")

### destination Type

`string`

### destination Constraints

**maximum length**: the maximum number of characters for this string is: `20`

## dte

Data terminal equipment (DTE) ready (0 = available, 1 = not available = default)

`dte`

*   is required

*   Type: `string` ([DTE ready types](sar-aircraft-position-report-properties-dte-ready-types.md))

*   cannot be null

*   defined in: [Static and voyage data AIS](sar-aircraft-position-report-properties-dte-ready-types.md "https://poseidat.org/schema/enum/ais-dte.json#/properties/dte")

### dte Type

`string` ([DTE ready types](sar-aircraft-position-report-properties-dte-ready-types.md))

### dte Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"AVAILABLE"`     |             |
| `"NOT_AVAILABLE"` |             |

### dte Default Value

The default value is:

```json
"NOT_AVAILABLE"
```
