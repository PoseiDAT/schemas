# Untitled string in Static and voyage data AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/ais_version_indicator
```

An indicator for the version the user has on his AIS device.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [static-voyage-data.json*](schemas/core/ais-message/static-voyage-data.json "open original schema") |

## ais_version_indicator Type

`string`

## ais_version_indicator Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                       | Explanation |
| :------------------------------------------ | :---------- |
| `"COMPLIANT_WITH_ITU_R_M_1371_1"`           |             |
| `"COMPLIANT_WITH_ITU_R_M_1371_3_OR_HIGHER"` |             |
| `"COMPLIANT_WITH_ITU_R_M_1371_5_OR_HIGHER"` |             |
| `"COMPLIANT_WITH_FUTURE_EDITIONS"`          |             |
