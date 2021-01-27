# Number Schema

```txt
https://poseidat.org/schema/core/measurement/number.json#/properties/value/oneOf/1
```

A number representing a measurement from a sensor


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json\*](schemas/core/measurement/measurement-value.json "open original schema") |

## 1 Type

`object` ([Number](measurement-value-properties-value-oneof-number.md))

# Number Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                             |
| :------------------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [value](#value)                 | `number` | Required | cannot be null | [Number](number-properties-value.md "https&#x3A;//poseidat.org/schema/core/measurement/number.json#/properties/value")                 |
| [positiveError](#positiveError) | `number` | Optional | cannot be null | [Number](number-properties-positiveerror.md "https&#x3A;//poseidat.org/schema/core/measurement/number.json#/properties/positiveError") |
| [negativeError](#negativeError) | `number` | Optional | cannot be null | [Number](number-properties-negativeerror.md "https&#x3A;//poseidat.org/schema/core/measurement/number.json#/properties/negativeError") |

## value

The absolute measured value


`value`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Number](number-properties-value.md "https&#x3A;//poseidat.org/schema/core/measurement/number.json#/properties/value")

### value Type

`number`

## positiveError

The positive error on the measurement


`positiveError`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Number](number-properties-positiveerror.md "https&#x3A;//poseidat.org/schema/core/measurement/number.json#/properties/positiveError")

### positiveError Type

`number`

## negativeError

The negative error on the measurement


`negativeError`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Number](number-properties-negativeerror.md "https&#x3A;//poseidat.org/schema/core/measurement/number.json#/properties/negativeError")

### negativeError Type

`number`
