# Untitled object in The summary for a fish sorting measurement Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species/items
```

The fish species and the total amount detected for that species

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fish-sorting-summary.json*](schemas/core/measurement/fish-sorting-summary.json "open original schema") |

## items Type

`object` ([Details](fish-sorting-summary-properties-fish_species-items.md))

# items Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                  |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [amount](#amount)             | `number` | Optional | cannot be null | [The summary for a fish sorting measurement](fish-sorting-summary-properties-fish_species-items-properties-amount.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species/items/properties/amount")             |
| [weight](#weight)             | `number` | Optional | cannot be null | [The summary for a fish sorting measurement](fish-sorting-summary-properties-fish_species-items-properties-weight.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species/items/properties/weight")             |
| [species_code](#species_code) | `string` | Required | cannot be null | [The summary for a fish sorting measurement](fish-sorting-summary-properties-fish_species-items-properties-species_code.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species/items/properties/species_code") |

## amount

The total amount of fish detected for the species

`amount`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [The summary for a fish sorting measurement](fish-sorting-summary-properties-fish_species-items-properties-amount.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species/items/properties/amount")

### amount Type

`number`

## weight

The total weight of fish detected for the species

`weight`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [The summary for a fish sorting measurement](fish-sorting-summary-properties-fish_species-items-properties-weight.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species/items/properties/weight")

### weight Type

`number`

## species_code

The type of the product, e.g. a type of fish. This is a 3-letter FAO fish species code

`species_code`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [The summary for a fish sorting measurement](fish-sorting-summary-properties-fish_species-items-properties-species_code.md "https://poseidat.org/schema/core/measurement/fish-sorting-summary.json#/properties/fish_species/items/properties/species_code")

### species_code Type

`string`

### species_code Constraints

**maximum length**: the maximum number of characters for this string is: `3`

**minimum length**: the minimum number of characters for this string is: `3`

**pattern**: the string must match the following regular expression: 

```regexp
^([A-Z]{3})$
```

[try pattern](https://regexr.com/?expression=%5E\(%5BA-Z%5D%7B3%7D\)%24 "try regular expression with regexr.com")
