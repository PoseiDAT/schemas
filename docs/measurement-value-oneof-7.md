# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/7
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 7 Type

`object` ([Details](measurement-value-oneof-7.md))

# 7 Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)       | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-7-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/7/properties/type") |
| [weather](#weather) | `object` | Required | cannot be null | [Measurement value](measurement-value-oneof-7-properties-weather.md "https://poseidat.org/schema/core/measurement/weather.json#/oneOf/7/properties/weather")     |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-7-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/7/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"WEATHER"
```

## weather

A combination of all posible weather station measurements

`weather`

*   is required

*   Type: `object` ([Weather](measurement-value-oneof-7-properties-weather.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-7-properties-weather.md "https://poseidat.org/schema/core/measurement/weather.json#/oneOf/7/properties/weather")

### weather Type

`object` ([Weather](measurement-value-oneof-7-properties-weather.md))
