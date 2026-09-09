# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/0
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 0 Type

`object` ([Details](measurement-value-oneof-0.md))

# 0 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)         | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-0-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/0/properties/type") |
| [position](#position) | `object` | Required | cannot be null | [Measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/oneOf/0/properties/position")                 |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-0-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/0/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"POSITION"
```

## position

A navigational position that can be used in an entry

`position`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Measurement value](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/oneOf/0/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))
