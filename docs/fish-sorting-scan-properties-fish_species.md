# Untitled object in A fish sorting scan detection measurement Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species
```

All the details related to the detected fish in this scan

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fish-sorting-scan.json*](schemas/core/measurement/fish-sorting-scan.json "open original schema") |

## fish_species Type

`object` ([Details](fish-sorting-scan-properties-fish_species.md))

# fish_species Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                     |
| :---------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [code](#code)                       | `string` | Required | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-code.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/code")                       |
| [condition_score](#condition_score) | `number` | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-condition_score.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/condition_score") |
| [confidence](#confidence)           | `number` | Required | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-confidence.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/confidence")           |
| [estimated_age](#estimated_age)     | `number` | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-estimated_age.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/estimated_age")     |
| [length](#length)                   | `number` | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-length.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/length")                   |
| [sex](#sex)                         | `string` | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-sex.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/sex")                         |
| [weight](#weight)                   | `number` | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-weight.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/weight")                   |

## code

The type of the product, e.g. a type of fish. This is a 3-letter FAO fish species code

`code`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-code.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/code")

### code Type

`string`

### code Constraints

**maximum length**: the maximum number of characters for this string is: `3`

**minimum length**: the minimum number of characters for this string is: `3`

**pattern**: the string must match the following regular expression: 

```regexp
^([A-Z]{3})$
```

[try pattern](https://regexr.com/?expression=%5E\(%5BA-Z%5D%7B3%7D\)%24 "try regular expression with regexr.com")

## condition_score

The condition score of the fish on a scale from 1 to 10

`condition_score`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-condition_score.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/condition_score")

### condition_score Type

`number`

### condition_score Constraints

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `1`

## confidence

The confidence score for the detection of the fish species and weight in the image

`confidence`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-confidence.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/confidence")

### confidence Type

`number`

## estimated_age

The estimated age of the fish in years

`estimated_age`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-estimated_age.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/estimated_age")

### estimated_age Type

`number`

## length

The detected length of the fish in meters

`length`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-length.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/length")

### length Type

`number`

## sex

The detected sex of the fish

`sex`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-sex.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/sex")

### sex Type

`string`

### sex Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"male"`    |             |
| `"female"`  |             |
| `"unknown"` |             |

## weight

The measured, estimated or calculated weight of the fish

`weight`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish_species-properties-weight.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish_species/properties/weight")

### weight Type

`number`
