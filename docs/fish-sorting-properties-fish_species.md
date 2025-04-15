# Untitled string in FishSorting Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting.json#/properties/fish_species
```

The type of the product, e.g. a type of fish. This is a 3-letter FAO fish species code

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [fish-sorting.json*](schemas/core/measurement/fish-sorting.json "open original schema") |

## fish_species Type

`string`

## fish_species Constraints

**maximum length**: the maximum number of characters for this string is: `3`

**minimum length**: the minimum number of characters for this string is: `3`

**pattern**: the string must match the following regular expression: 

```regexp
^([A-Z]{3})$
```

[try pattern](https://regexr.com/?expression=%5E\(%5BA-Z%5D%7B3%7D\)%24 "try regular expression with regexr.com")
