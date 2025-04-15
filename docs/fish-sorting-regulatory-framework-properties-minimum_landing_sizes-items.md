# Untitled object in The regulatory framework for fish sorting measurements Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/minimum_landing_sizes/items
```

The fish species and its minimum landing size

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fish-sorting-regulatory-framework.json*](schemas/core/measurement/fish-sorting-regulatory-framework.json "open original schema") |

## items Type

`object` ([Details](fish-sorting-regulatory-framework-properties-minimum_landing_sizes-items.md))

# items Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                                                                          |
| :---------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [size](#size)                 | `number` | Required | cannot be null | [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-minimum_landing_sizes-items-properties-size.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/minimum_landing_sizes/items/properties/size")                 |
| [fish_species](#fish_species) | `string` | Required | cannot be null | [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-minimum_landing_sizes-items-properties-fish_species.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/minimum_landing_sizes/items/properties/fish_species") |

## size

The minimum landing size for the species in meters

`size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-minimum_landing_sizes-items-properties-size.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/minimum_landing_sizes/items/properties/size")

### size Type

`number`

## fish_species

The type of the product, e.g. a type of fish. This is a 3-letter FAO fish species code

`fish_species`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-minimum_landing_sizes-items-properties-fish_species.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/minimum_landing_sizes/items/properties/fish_species")

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
