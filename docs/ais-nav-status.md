# AIS navigation status Schema

```txt
https://poseidat.org/schema/enum/ais-nav-status.json
```

The converted nav status given by an AIS measerement.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-nav-status.json](schemas/enum/ais-nav-status.json "open original schema") |

## AIS navigation status Type

`string` ([AIS navigation status](ais-nav-status.md))

## AIS navigation status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                               | Explanation |
| :-------------------------------------------------- | :---------- |
| `"UNDER_WAY_USING_ENGINE"`                          |             |
| `"AT_ANCHOR"`                                       |             |
| `"NOT_UNDER_COMMAND"`                               |             |
| `"RESTRICTED_MANOEUVERABILITY"`                     |             |
| `"CONSTRAINED_BY_HER_DRAUGHT"`                      |             |
| `"MOORED"`                                          |             |
| `"AGROUND"`                                         |             |
| `"ENGAGED_IN_FISHING"`                              |             |
| `"UNDER_WAY_SAILING"`                               |             |
| `"RESERVED_FOR_FUTURE_AMENDMENT_OF_NAV_STATUS_HSC"` |             |
| `"RESERVED_FOR_FUTURE_AMENDMENT_OF_NAV_STATUS_WIG"` |             |
| `"RESERVED_FOR_FUTURE_USE"`                         |             |
| `"AIS_SART_ACTIVE"`                                 |             |
| `"UNDEFINED"`                                       |             |
