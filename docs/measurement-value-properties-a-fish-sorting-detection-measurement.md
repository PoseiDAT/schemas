# A fish sorting detection measurement Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/fish_sorting
```

The results of a set of detection runs to sort fish by species and weight using images, video frames or other sensor data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## fish_sorting Type

`object` ([A fish sorting detection measurement](measurement-value-properties-a-fish-sorting-detection-measurement.md))

# fish_sorting Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                       |
| :-------------------------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [means_of_measuring](#means_of_measuring)     | `string` | Optional | cannot be null | [A fish sorting detection measurement](fish-sorting-properties-means_of_measuring.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/means_of_measuring")                                                            |
| [regulatory_framework](#regulatory_framework) | `object` | Optional | cannot be null | [A fish sorting detection measurement](fish-sorting-properties-the-regulatory-framework-for-fish-sorting-measurements.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/regulatory_framework") |
| [scans](#scans)                               | `array`  | Required | cannot be null | [A fish sorting detection measurement](fish-sorting-properties-scans.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/scans")                                                                                      |
| [summary](#summary)                           | `object` | Required | cannot be null | [A fish sorting detection measurement](fish-sorting-properties-the-summary-for-a-fish-sorting-measurement.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/summary")                                       |

## means_of_measuring

Means of weight measuring. E.g.: camera/visual based detection (VISION).

`means_of_measuring`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting detection measurement](fish-sorting-properties-means_of_measuring.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/means_of_measuring")

### means_of_measuring Type

`string`

### means_of_measuring Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"VISION"` |             |

## regulatory_framework

Contains information about the regulating body and guidelines for conducting fish sorting measurements

`regulatory_framework`

*   is optional

*   Type: `object` ([The regulatory framework for fish sorting measurements](fish-sorting-properties-the-regulatory-framework-for-fish-sorting-measurements.md))

*   cannot be null

*   defined in: [A fish sorting detection measurement](fish-sorting-properties-the-regulatory-framework-for-fish-sorting-measurements.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/regulatory_framework")

### regulatory_framework Type

`object` ([The regulatory framework for fish sorting measurements](fish-sorting-properties-the-regulatory-framework-for-fish-sorting-measurements.md))

## scans

The individual fish sorting scans collected during the fish sorting measurement

`scans`

*   is required

*   Type: `object[]` ([A fish sorting scan detection measurement](fish-sorting-properties-scans-a-fish-sorting-scan-detection-measurement.md))

*   cannot be null

*   defined in: [A fish sorting detection measurement](fish-sorting-properties-scans.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/scans")

### scans Type

`object[]` ([A fish sorting scan detection measurement](fish-sorting-properties-scans-a-fish-sorting-scan-detection-measurement.md))

## summary

Contains the amount, types and estimated weights of fish sorted during a fish sorting measurement

`summary`

*   is required

*   Type: `object` ([The summary for a fish sorting measurement](fish-sorting-properties-the-summary-for-a-fish-sorting-measurement.md))

*   cannot be null

*   defined in: [A fish sorting detection measurement](fish-sorting-properties-the-summary-for-a-fish-sorting-measurement.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/summary")

### summary Type

`object` ([The summary for a fish sorting measurement](fish-sorting-properties-the-summary-for-a-fish-sorting-measurement.md))
