# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/4
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 4 Type

`object` ([Details](measurement-value-oneof-4.md))

# 4 Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                  |
| :---------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                 | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-4-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/4/properties/type")            |
| [spatial_axes](#spatial_axes) | `object` | Required | cannot be null | [Measurement value](measurement-value-oneof-4-properties-spatial-axes.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/oneOf/4/properties/spatial_axes") |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-4-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/4/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"SPATIAL_AXES"
```

## spatial_axes

The spatial axes for a given sensor

`spatial_axes`

*   is required

*   Type: `object` ([Spatial axes](measurement-value-oneof-4-properties-spatial-axes.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-4-properties-spatial-axes.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/oneOf/4/properties/spatial_axes")

### spatial_axes Type

`object` ([Spatial axes](measurement-value-oneof-4-properties-spatial-axes.md))
