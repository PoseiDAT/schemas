# Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/properties/value
```

The value of a certain type of measurement


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device-measurement.json\*](schemas/entry/device-measurement.json "open original schema") |

## value Type

`object` ([Measurement value](device-measurement-properties-measurement-value.md))

# Measurement value Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                              |
| :-------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)   | `string` | Required | cannot be null | [Measurement value](measurement-value-properties-measurement-type.md "https&#x3A;//poseidat.org/schema/enum/measurement-type.json#/properties/type")    |
| [value](#value) | Merged   | Required | cannot be null | [Measurement value](measurement-value-properties-value.md "https&#x3A;//poseidat.org/schema/core/measurement/measurement-value.json#/properties/value") |

## type

The measurement types


`type`

-   is required
-   Type: `string` ([Measurement type](measurement-value-properties-measurement-type.md))
-   cannot be null
-   defined in: [Measurement value](measurement-value-properties-measurement-type.md "https&#x3A;//poseidat.org/schema/enum/measurement-type.json#/properties/type")

### type Type

`string` ([Measurement type](measurement-value-properties-measurement-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | ----------- |
| `"POSITION"`          |             |
| `"TEMPERATURE"`       |             |
| `"HUMIDITY"`          |             |
| `"PRESSURE"`          |             |
| `"SPEED"`             |             |
| `"ONOFF"`             |             |
| `"FORCE"`             |             |
| `"FUELCONSUMPTION"`   |             |
| `"DEPTH"`             |             |
| `"ACCELLERATION"`     |             |
| `"MAGNETISM"`         |             |
| `"ANGULARVELOCITY"`   |             |
| `"VOLTAGE"`           |             |
| `"CURRENT"`           |             |
| `"POWER"`             |             |
| `"ENERGYCONSUMPTION"` |             |
| `"TRAWLTENSION"`      |             |

## value

The value of the measurement


`value`

-   is required
-   Type: merged type ([Details](measurement-value-properties-value.md))
-   cannot be null
-   defined in: [Measurement value](measurement-value-properties-value.md "https&#x3A;//poseidat.org/schema/core/measurement/measurement-value.json#/properties/value")

### value Type

merged type ([Details](measurement-value-properties-value.md))

one (and only one) of

-   [Position](trip-entry-properties-position.md "check type definition")
-   [Number](measurement-value-properties-value-oneof-number.md "check type definition")
