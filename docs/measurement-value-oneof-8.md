# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/8
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 8 Type

`object` ([Details](measurement-value-oneof-8.md))

# 8 Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)       | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-8-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/8/properties/type") |
| [numeric](#numeric) | `object` | Required | cannot be null | [Measurement value](measurement-value-oneof-8-properties-numeric.md "https://poseidat.org/schema/core/measurement/numeric.json#/oneOf/8/properties/numeric")     |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-8-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/8/properties/type")

### type Type

`string`

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
| `"HUMIDITY"`           |             |
| `"MAGNETISM"`          |             |
| `"ONOFF"`              |             |
| `"POWER"`              |             |
| `"PRESSURE"`           |             |
| `"ROUTE"`              |             |
| `"RPM"`                |             |
| `"SPEED"`              |             |
| `"TEMPERATURE"`        |             |
| `"VOLTAGE"`            |             |

## numeric

A number representing a measurement from a sensor

`numeric`

*   is required

*   Type: `object` ([Numeric](measurement-value-oneof-8-properties-numeric.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-8-properties-numeric.md "https://poseidat.org/schema/core/measurement/numeric.json#/oneOf/8/properties/numeric")

### numeric Type

`object` ([Numeric](measurement-value-oneof-8-properties-numeric.md))
