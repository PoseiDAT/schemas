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

one (and only one) of

*   [Untitled undefined type in AIS measurement value](ais-measurement-oneof-0.md "check type definition")

*   [Untitled undefined type in AIS measurement value](ais-measurement-oneof-1.md "check type definition")

*   [Untitled undefined type in AIS measurement value](ais-measurement-oneof-2.md "check type definition")

*   [Untitled undefined type in AIS measurement value](ais-measurement-oneof-3.md "check type definition")

*   [Untitled undefined type in AIS measurement value](ais-measurement-oneof-4.md "check type definition")

*   [Untitled undefined type in AIS measurement value](ais-measurement-oneof-5.md "check type definition")

*   [Untitled undefined type in AIS measurement value](ais-measurement-oneof-6.md "check type definition")

# ais Properties

| Property                                                  | Type          | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :-------------------------------------------------------- | :------------ | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [entity_id](#entity_id)                                   | Not specified | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-entity_id.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/entity_id")                                  |
| [type](#type)                                             | `string`      | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-ais-measurement-type.md "https://poseidat.org/schema/enum/ais-measurement-type.json#/properties/type")                                   |
| [position](#position)                                     | `object`      | Optional | cannot be null | [AIS measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                                |
| [numeric](#numeric)                                       | `object`      | Optional | cannot be null | [AIS measurement value](measurement-value-properties-numeric.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/numeric")                                            |
| [ETA](#eta)                                               | `string`      | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-eta.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ETA")                                              |
| [destination](#destination)                               | `string`      | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-destination.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/destination")                              |
| [special_maneuvre_indicator](#special_maneuvre_indicator) | `string`      | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-special-maneuvre-indicator-types.md "https://poseidat.org/schema/enum/ais-special-maneuvre.json#/properties/special_maneuvre_indicator") |
| [DTE](#dte)                                               | `string`      | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-dte-ready-types.md "https://poseidat.org/schema/enum/ais-DTE.json#/properties/DTE")                                                      |
| [position_accuracy](#position_accuracy)                   | `string`      | Optional | cannot be null | [AIS measurement value](ais-measurement-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")                  |

## entity_id



`entity_id`

*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-entity_id.md "https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/entity_id")

### entity_id Type

unknown

## type

The measurement types for the AIS

`type`

*   is optional

*   Type: `string` ([AIS measurement type](ais-measurement-properties-ais-measurement-type.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-ais-measurement-type.md "https://poseidat.org/schema/enum/ais-measurement-type.json#/properties/type")

### type Type

`string` ([AIS measurement type](ais-measurement-properties-ais-measurement-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"POSITION"`                   |             |
| `"DTE"`                        |             |
| `"ETA"`                        |             |
| `"DESTINATION"`                |             |
| `"SOG"`                        |             |
| `"ROT"`                        |             |
| `"COG"`                        |             |
| `"TRUE_HEADING"`               |             |
| `"SPECIAL_MANEUVRE_INDICATOR"` |             |

## position

A navigational position that can be used in an entry

`position`

*   is optional

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [AIS measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## numeric

A number representing a measurement from a sensor

`numeric`

*   is optional

*   Type: `object` ([Numeric](measurement-value-properties-numeric.md))

*   cannot be null

*   defined in: [AIS measurement value](measurement-value-properties-numeric.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/numeric")

### numeric Type

`object` ([Numeric](measurement-value-properties-numeric.md))

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

*   defined in: [AIS measurement value](ais-measurement-properties-special-maneuvre-indicator-types.md "https://poseidat.org/schema/enum/ais-special-maneuvre.json#/properties/special_maneuvre_indicator")

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

*   defined in: [AIS measurement value](ais-measurement-properties-dte-ready-types.md "https://poseidat.org/schema/enum/ais-DTE.json#/properties/DTE")

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

## position_accuracy

Indicates the precision of a given position

`position_accuracy`

*   is optional

*   Type: `string` ([Position accuracy types](ais-measurement-properties-position-accuracy-types.md))

*   cannot be null

*   defined in: [AIS measurement value](ais-measurement-properties-position-accuracy-types.md "https://poseidat.org/schema/enum/ais-position-accuracy.json#/properties/position_accuracy")

### position_accuracy Type

`string` ([Position accuracy types](ais-measurement-properties-position-accuracy-types.md))

### position_accuracy Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"LOW (> 10 M)"`  |             |
| `"HIGH (< 10 M)"` |             |
