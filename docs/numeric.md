# Numeric Schema

```txt
https://poseidat.org/schema/core/measurement/numeric.json
```

A number representing a measurement from a sensor

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [numeric.json](schemas/core/measurement/numeric.json "open original schema") |

## Numeric Type

`object` ([Numeric](numeric.md))

# Numeric Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                           |
| :------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [value](#value)                 | `number` | Required | cannot be null | [Numeric](numeric-properties-value.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/value")                 |
| [positiveError](#positiveerror) | `number` | Optional | cannot be null | [Numeric](numeric-properties-positiveerror.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/positiveError") |
| [negativeError](#negativeerror) | `number` | Optional | cannot be null | [Numeric](numeric-properties-negativeerror.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/negativeError") |

## value

The absolute measured value

`value`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Numeric](numeric-properties-value.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/value")

### value Type

`number`

## positiveError

The positive error on the measurement

`positiveError`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Numeric](numeric-properties-positiveerror.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/positiveError")

### positiveError Type

`number`

## negativeError

The negative error on the measurement

`negativeError`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Numeric](numeric-properties-negativeerror.md "https://poseidat.org/schema/core/measurement/numeric.json#/properties/negativeError")

### negativeError Type

`number`
