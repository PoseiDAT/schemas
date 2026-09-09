# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/3
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 3 Type

`object` ([Details](measurement-value-oneof-3.md))

# 3 Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                     |
| :------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                   | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-3-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/3/properties/type")               |
| [trawl_tension](#trawl_tension) | `object` | Required | cannot be null | [Measurement value](measurement-value-oneof-3-properties-trawl-tension.md "https://poseidat.org/schema/core/measurement/trawl-tension.json#/oneOf/3/properties/trawl_tension") |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-3-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/3/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"TRAWL_TENSION"
```

## trawl_tension

A combination of sensor measurements for the trawl tension

`trawl_tension`

*   is required

*   Type: `object` ([Trawl tension](measurement-value-oneof-3-properties-trawl-tension.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-3-properties-trawl-tension.md "https://poseidat.org/schema/core/measurement/trawl-tension.json#/oneOf/3/properties/trawl_tension")

### trawl_tension Type

`object` ([Trawl tension](measurement-value-oneof-3-properties-trawl-tension.md))
