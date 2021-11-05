# Numeric Schema

```txt
https://poseidat.org/schema/core/measurement/numeric.json#/properties/numeric
```

A number representing a measurement from a sensor

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ais-measurement.json*](schemas/entry/ais-measurement.json "open original schema") |

## numeric Type

`object` ([Numeric](ais-measurement-properties-numeric.md))

# numeric Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                           |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------- |
| [value](#value) | `number` | Required | cannot be null | [Numeric](numeric-properties-value.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/value") |

## value

The absolute measured value

`value`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Numeric](numeric-properties-value.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/value")

### value Type

`number`
