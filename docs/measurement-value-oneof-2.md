# Untitled object in Measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/2
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## 2 Type

`object` ([Details](measurement-value-oneof-2.md))

# 2 Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :------------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                         | `string` | Required | cannot be null | [Measurement value](measurement-value-oneof-2-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/2/properties/type")                        |
| [fuel_consumption](#fuel_consumption) | `object` | Required | cannot be null | [Measurement value](measurement-value-oneof-2-properties-fuel-consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/oneOf/2/properties/fuel_consumption") |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-2-properties-type.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/oneOf/2/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"FUEL_CONSUMPTION"
```

## fuel_consumption

Fuel consumption of a certain engine.

`fuel_consumption`

*   is required

*   Type: `object` ([Fuel consumption](measurement-value-oneof-2-properties-fuel-consumption.md))

*   cannot be null

*   defined in: [Measurement value](measurement-value-oneof-2-properties-fuel-consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/oneOf/2/properties/fuel_consumption")

### fuel_consumption Type

`object` ([Fuel consumption](measurement-value-oneof-2-properties-fuel-consumption.md))
