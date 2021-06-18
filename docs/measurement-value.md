# Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json
```

The value of a certain type of measurement

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json](schemas/core/measurement/measurement-value.json "open original schema") |

## Measurement value Type

`object` ([Measurement value](measurement-value.md))

one (and only one) of

*   [Untitled undefined type in Measurement value](measurement-value-oneof-0.md "check type definition")

*   [Untitled undefined type in Measurement value](measurement-value-oneof-1.md "check type definition")

*   [Untitled undefined type in Measurement value](measurement-value-oneof-2.md "check type definition")

# Measurement value Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                   | `string` | Optional | cannot be null | [Measurement value](measurement-value-properties-measurement-type.md "https://poseidat.org/schema/enum/measurement-type.json#/properties/type")                |
| [position](#position)           | `object` | Optional | cannot be null | [Measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                       |
| [numeric](#numeric)             | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-numeric.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/numeric")                   |
| [trawl_tension](#trawl_tension) | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-trawl-tension.md "https://poseidat.org/schema/core/measurement/trawl-tension.json#/properties/trawl_tension") |

## type

The measurement types

`type`

*   is optional

*   Type: `string` ([Measurement type](measurement-value-properties-measurement-type.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-properties-measurement-type.md "https://poseidat.org/schema/enum/measurement-type.json#/properties/type")

### type Type

`string` ([Measurement type](measurement-value-properties-measurement-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | :---------- |
| `"POSITION"`           |             |
| `"TEMPERATURE"`        |             |
| `"HUMIDITY"`           |             |
| `"PRESSURE"`           |             |
| `"SPEED"`              |             |
| `"ONOFF"`              |             |
| `"FORCE"`              |             |
| `"FUEL_CONSUMPTION"`   |             |
| `"DEPTH"`              |             |
| `"ACCELERATION"`       |             |
| `"MAGNETISM"`          |             |
| `"ANGULAR_VELOCITY"`   |             |
| `"VOLTAGE"`            |             |
| `"CURRENT"`            |             |
| `"POWER"`              |             |
| `"ENERGY_CONSUMPTION"` |             |
| `"TRAWL_TENSION"`      |             |

## position

A navigational position that can be used in an entry

`position`

*   is optional

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## numeric

A number representing a measurement from a sensor

`numeric`

*   is optional

*   Type: `object` ([Numeric](measurement-value-properties-numeric.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-properties-numeric.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/numeric")

### numeric Type

`object` ([Numeric](measurement-value-properties-numeric.md))

## trawl_tension

A combination of sensor measurements for the trawl tension

`trawl_tension`

*   is optional

*   Type: `object` ([Trawl tension](measurement-value-properties-trawl-tension.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-properties-trawl-tension.md "https://poseidat.org/schema/core/measurement/trawl-tension.json#/properties/trawl_tension")

### trawl_tension Type

`object` ([Trawl tension](measurement-value-properties-trawl-tension.md))
