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

*   [Untitled undefined type in Measurement value](measurement-value-oneof-3.md "check type definition")

*   [Untitled undefined type in Measurement value](measurement-value-oneof-4.md "check type definition")

*   [Untitled undefined type in Measurement value](measurement-value-oneof-5.md "check type definition")

*   [Untitled undefined type in Measurement value](measurement-value-oneof-6.md "check type definition")

*   [Untitled undefined type in Measurement value](measurement-value-oneof-7.md "check type definition")

# Measurement value Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                              |
| :------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                         | `string` | Optional | cannot be null | [Measurement value](measurement-value-properties-measurement-type.md "https://poseidat.org/schema/enum/measurement-type.json#/properties/type")                         |
| [position](#position)                 | `object` | Optional | cannot be null | [Measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                |
| [numeric](#numeric)                   | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-numeric.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/numeric")                            |
| [trawl_tension](#trawl_tension)       | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-trawl-tension.md "https://poseidat.org/schema/core/measurement/trawl-tension.json#/properties/trawl_tension")          |
| [scale](#scale)                       | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-scale.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/scale")                                  |
| [fuel_consumption](#fuel_consumption) | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-fuel-consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/fuel_consumption") |
| [spatial_axes](#spatial_axes)         | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-spatial-axes.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/properties/spatial_axes")             |
| [subsurface](#subsurface)             | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-subsurface-measurements.md "https://poseidat.org/schema/core/measurement/subsurface.json#/properties/subsurface")      |
| [speedlog](#speedlog)                 | `object` | Optional | cannot be null | [Measurement value](measurement-value-properties-speedlog.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/speedlog")                         |

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
| `"ACCELERATION"`       |             |
| `"ANGULAR_VELOCITY"`   |             |
| `"CURRENT"`            |             |
| `"DEPTH"`              |             |
| `"ENERGY_CONSUMPTION"` |             |
| `"FORCE"`              |             |
| `"FUEL_CONSUMPTION"`   |             |
| `"HUMIDITY"`           |             |
| `"MAGNETISM"`          |             |
| `"ONOFF"`              |             |
| `"POSITION"`           |             |
| `"POWER"`              |             |
| `"PRESSURE"`           |             |
| `"ROUTE"`              |             |
| `"RPM"`                |             |
| `"SCALE"`              |             |
| `"SPATIAL_AXES"`       |             |
| `"SPEED"`              |             |
| `"SUBSURFACE"`         |             |
| `"TEMPERATURE"`        |             |
| `"TRAWL_TENSION"`      |             |
| `"VOLTAGE"`            |             |
| `"SPEEDLOG"`           |             |

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

## scale

A scale measurement that can be used in an entry

`scale`

*   is optional

*   Type: `object` ([Scale](measurement-value-properties-scale.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-properties-scale.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/scale")

### scale Type

`object` ([Scale](measurement-value-properties-scale.md))

## fuel_consumption

Fuel consumption of a certain engine.

`fuel_consumption`

*   is optional

*   Type: `object` ([Fuel consumption](measurement-value-properties-fuel-consumption.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-properties-fuel-consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/fuel_consumption")

### fuel_consumption Type

`object` ([Fuel consumption](measurement-value-properties-fuel-consumption.md))

## spatial_axes

The spatial axes for a given sensor

`spatial_axes`

*   is optional

*   Type: `object` ([Spatial axes](measurement-value-properties-spatial-axes.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-properties-spatial-axes.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/properties/spatial_axes")

### spatial_axes Type

`object` ([Spatial axes](measurement-value-properties-spatial-axes.md))

## subsurface

A collection of subsurface samples measurements

`subsurface`

*   is optional

*   Type: `object` ([Subsurface measurements](measurement-value-properties-subsurface-measurements.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-properties-subsurface-measurements.md "https://poseidat.org/schema/core/measurement/subsurface.json#/properties/subsurface")

### subsurface Type

`object` ([Subsurface measurements](measurement-value-properties-subsurface-measurements.md))

## speedlog

A combination of all posible speedlog measurements

`speedlog`

*   is optional

*   Type: `object` ([Speedlog](measurement-value-properties-speedlog.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-properties-speedlog.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/speedlog")

### speedlog Type

`object` ([Speedlog](measurement-value-properties-speedlog.md))
