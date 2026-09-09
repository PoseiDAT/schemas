# Fish freshness Schema

```txt
https://poseidat.org/schema/enum/fish-freshness.json#/properties/fish_freshness
```

The freshness indication for processed fish species. Please check the wiki for the meaning of these codes.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [fishing-catch-processed.json*](schemas/core/fishing-catch-processed.json "open original schema") |

## fish_freshness Type

`string` ([Fish freshness](fishing-catch-processed-properties-fish-freshness.md))

## fish_freshness Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"A"`  |             |
| `"B"`  |             |
| `"E"`  |             |
| `"SO"` |             |
| `"V"`  |             |
