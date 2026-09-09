# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/6
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 6 Type

`object` ([Details](measurement-value-oneof-6.md))

# 6 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)         | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-6-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/6/properties/type") |
| [speedlog](#speedlog) | `object` | Required | cannot be null | [Measurement value](measurement-value-oneof-6-properties-speedlog.md "https://poseidat.org/schema/core/measurement/speedlog.json#/oneOf/6/properties/speedlog")  |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-6-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/6/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"SPEEDLOG"
```

## speedlog

A combination of all posible speedlog measurements

`speedlog`

*   is required

*   Type: `object` ([Speedlog](measurement-value-oneof-6-properties-speedlog.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-6-properties-speedlog.md "https://poseidat.org/schema/core/measurement/speedlog.json#/oneOf/6/properties/speedlog")

### speedlog Type

`object` ([Speedlog](measurement-value-oneof-6-properties-speedlog.md))
