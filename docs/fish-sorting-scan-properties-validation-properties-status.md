# Untitled string in A fish sorting scan detection measurement Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/validation/properties/status
```

The validation status of the fish sorting detection

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [fish-sorting-scan.json*](schemas/core/measurement/fish-sorting-scan.json "open original schema") |

## status Type

`string`

## status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"pending"`        |             |
| `"human_verified"` |             |
| `"rejected"`       |             |
