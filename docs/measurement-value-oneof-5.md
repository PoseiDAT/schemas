# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/5
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 5 Type

`object` ([Details](measurement-value-oneof-5.md))

# 5 Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                         |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)             | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-5-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/5/properties/type")                   |
| [subsurface](#subsurface) | `object` | Required | cannot be null | [Measurement value](measurement-value-oneof-5-properties-subsurface-measurements.md "https://poseidat.org/schema/core/measurement/subsurface.json#/oneOf/5/properties/subsurface") |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-5-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/5/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"SUBSURFACE"
```

## subsurface

A collection of subsurface samples measurements

`subsurface`

*   is required

*   Type: `object` ([Subsurface measurements](measurement-value-oneof-5-properties-subsurface-measurements.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-5-properties-subsurface-measurements.md "https://poseidat.org/schema/core/measurement/subsurface.json#/oneOf/5/properties/subsurface")

### subsurface Type

`object` ([Subsurface measurements](measurement-value-oneof-5-properties-subsurface-measurements.md))
