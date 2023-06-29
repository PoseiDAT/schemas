# Text Schema

```txt
https://poseidat.org/schema/core/measurement/text.json#/properties/text
```

A string or piece of text representing a measurement from a sensor

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## text Type

`object` ([Text](measurement-value-properties-text.md))

# text Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                  |
| :-------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------- |
| [value](#value) | `string` | Required | cannot be null | [Text](text-properties-value.md "https://poseidat.org/schema/core/measurement/text.json#/properties/value") |

## value

The string value send by the sensor

`value`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Text](text-properties-value.md "https://poseidat.org/schema/core/measurement/text.json#/properties/value")

### value Type

`string`
