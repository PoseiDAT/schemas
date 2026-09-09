# Fish state Schema

```txt
https://poseidat.org/schema/enum/fish-state.json#/properties/fish_state
```

The preservation states for processed fish species. Please check the wiki for the meaning of these codes.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [fishing-catch-processed.json*](schemas/core/fishing-catch-processed.json "open original schema") |

## fish_state Type

`string` ([Fish state](fishing-catch-processed-properties-fish-state.md))

## fish_state Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"ALI"` |             |
| `"BOI"` |             |
| `"DRI"` |             |
| `"FRE"` |             |
| `"FRO"` |             |
| `"SAL"` |             |
| `"SMO"` |             |
