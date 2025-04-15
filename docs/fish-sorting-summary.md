# The summary for a fish sorting measurement Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-summary.json
```

Contains the amount, types and estimated weights of fish sorted during a fish sorting measurement

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fish-sorting-summary.json](schemas/core/measurement/fish-sorting-summary.json "open original schema") |

## The summary for a fish sorting measurement Type

`object` ([The summary for a fish sorting measurement](fish-sorting-summary.md))

# The summary for a fish sorting measurement Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                  |
| :---------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [amount](#amount)                         | `number` | Required | cannot be null | [The summary for a fish sorting measurement](fish-sorting-summary-properties-amount.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/amount")                         |
| [weight](#weight)                         | `number` | Required | cannot be null | [The summary for a fish sorting measurement](fish-sorting-summary-properties-weight.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/weight")                         |
| [average_confidence](#average_confidence) | `number` | Optional | cannot be null | [The summary for a fish sorting measurement](fish-sorting-summary-properties-average_confidence.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/average_confidence") |
| [fish_species](#fish_species)             | `array`  | Optional | cannot be null | [The summary for a fish sorting measurement](fish-sorting-summary-properties-fish_species.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species")             |

## amount

The amount of detected individual fish during the sorting measurement

`amount`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [The summary for a fish sorting measurement](fish-sorting-summary-properties-amount.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/amount")

### amount Type

`number`

## weight

The measured, estimated or calculated total weight of the fish

`weight`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [The summary for a fish sorting measurement](fish-sorting-summary-properties-weight.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/weight")

### weight Type

`number`

## average_confidence

The average of the confidence scores for the detections of the fish species and weight during the sorting measurement

`average_confidence`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [The summary for a fish sorting measurement](fish-sorting-summary-properties-average_confidence.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/average_confidence")

### average_confidence Type

`number`

## fish_species

The total amount of fish detected for a specific species

`fish_species`

*   is optional

*   Type: `object[]` ([Details](fish-sorting-summary-properties-fish_species-items.md))

*   cannot be null

*   defined in: [The summary for a fish sorting measurement](fish-sorting-summary-properties-fish_species.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species")

### fish_species Type

`object[]` ([Details](fish-sorting-summary-properties-fish_species-items.md))
