# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/1
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 1 Type

`object` ([Details](measurement-value-oneof-1.md))

# 1 Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-1-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/1/properties/type") |
| [scale](#scale) | `object` | Required | cannot be null | [Measurement value](measurement-value-oneof-1-properties-scale.md "https://poseidat.org/schema/core/measurement/scale.json#/oneOf/1/properties/scale")           |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-1-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/1/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"SCALE"
```

## scale

A scale measurement that can be used in an entry

`scale`

*   is required

*   Type: `object` ([Scale](measurement-value-oneof-1-properties-scale.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-1-properties-scale.md "https://poseidat.org/schema/core/measurement/scale.json#/oneOf/1/properties/scale")

### scale Type

`object` ([Scale](measurement-value-oneof-1-properties-scale.md))
