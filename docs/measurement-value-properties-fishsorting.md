# FishSorting Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/fish_sorting
```

A (visual) fish sorting measurement result that can be used in an entry

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## fish_sorting Type

`object` ([FishSorting](measurement-value-properties-fishsorting.md))

# fish_sorting Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                   |
| :---------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [fish_species](#fish_species)             | `string`  | Required | cannot be null | [FishSorting](fish-sorting-properties-fish_species.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/fish_species")             |
| [juvenile](#juvenile)                     | `boolean` | Optional | cannot be null | [FishSorting](fish-sorting-properties-juvenile.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/juvenile")                     |
| [number_of_fish](#number_of_fish)         | `number`  | Optional | cannot be null | [FishSorting](fish-sorting-properties-number_of_fish.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/number_of_fish")         |
| [means_of_measuring](#means_of_measuring) | `string`  | Required | cannot be null | [FishSorting](fish-sorting-properties-means_of_measuring.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/means_of_measuring") |
| [weight](#weight)                         | `number`  | Required | cannot be null | [FishSorting](fish-sorting-properties-weight.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/weight")                         |
| [bounding_box](#bounding_box)             | `array`   | Optional | cannot be null | [FishSorting](fish-sorting-properties-bounding_box.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/bounding_box")             |
| [confidence](#confidence)                 | `number`  | Optional | cannot be null | [FishSorting](fish-sorting-properties-confidence.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/confidence")                 |

## fish_species

The type of the product, e.g. a type of fish. This is a 3-letter FAO fish species code

`fish_species`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [FishSorting](fish-sorting-properties-fish_species.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/fish_species")

### fish_species Type

`string`

### fish_species Constraints

**maximum length**: the maximum number of characters for this string is: `3`

**minimum length**: the minimum number of characters for this string is: `3`

**pattern**: the string must match the following regular expression: 

```regexp
^([A-Z]{3})$
```

[try pattern](https://regexr.com/?expression=%5E\(%5BA-Z%5D%7B3%7D\)%24 "try regular expression with regexr.com")

## juvenile

Indicates the fish is considered juvenile and below the minimum landing size

`juvenile`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [FishSorting](fish-sorting-properties-juvenile.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/juvenile")

### juvenile Type

`boolean`

## number_of_fish

The number of fish as counted during the sorting process

`number_of_fish`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [FishSorting](fish-sorting-properties-number_of_fish.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/number_of_fish")

### number_of_fish Type

`number`

## means_of_measuring

Means of weight measuring: camera/visual based detection (VISION).

`means_of_measuring`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [FishSorting](fish-sorting-properties-means_of_measuring.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/means_of_measuring")

### means_of_measuring Type

`string`

### means_of_measuring Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"VISION"` |             |

## weight

The measured, estimated or calculated weight of the fish

`weight`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [FishSorting](fish-sorting-properties-weight.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/weight")

### weight Type

`number`

## bounding_box

The bounding box of the fish in the image

`bounding_box`

*   is optional

*   Type: `number[]`

*   cannot be null

*   defined in: [FishSorting](fish-sorting-properties-bounding_box.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/bounding_box")

### bounding_box Type

`number[]`

### bounding_box Constraints

**maximum number of items**: the maximum number of items for this array is: `4`

**minimum number of items**: the minimum number of items for this array is: `4`

## confidence

The confidence score for the detection of the fish species and weight in the image

`confidence`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [FishSorting](fish-sorting-properties-confidence.md "https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/confidence")

### confidence Type

`number`
