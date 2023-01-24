# Subsurface measurements Schema

```txt
https://poseidat.org/schema/core/measurement/subsurface.json#/properties/subsurface
```

A collection of subsurface samples measurements

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## subsurface Type

`object` ([Subsurface measurements](measurement-value-properties-subsurface-measurements.md))

# subsurface Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [samples](#samples)   | `array`  | Required | cannot be null | [Subsurface measurements](subsurface-properties-subsurface-measurement-samples.md "https://poseidat.org/schema/core/measurement/subsurface.json#/properties/samples") |
| [metadata](#metadata) | `string` | Optional | cannot be null | [Subsurface measurements](subsurface-properties-metadata.md "https://poseidat.org/schema/core/measurement/subsurface.json#/properties/metadata")                      |

## samples

The collection of subsurface measurement samples

`samples`

*   is required

*   Type: `object[]` ([Subsurface sample value](subsurface-properties-subsurface-measurement-samples-subsurface-sample-value.md))

*   cannot be null

*   defined in: [Subsurface measurements](subsurface-properties-subsurface-measurement-samples.md "https://poseidat.org/schema/core/measurement/subsurface.json#/properties/samples")

### samples Type

`object[]` ([Subsurface sample value](subsurface-properties-subsurface-measurement-samples-subsurface-sample-value.md))

## metadata

The sensors technical metadata

`metadata`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Subsurface measurements](subsurface-properties-metadata.md "https://poseidat.org/schema/core/measurement/subsurface.json#/properties/metadata")

### metadata Type

`string`
