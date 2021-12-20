# AIS position device type Schema

```txt
https://poseidat.org/schema/enum/ais-position-device-type.json
```

The converted type of the position device used on the AIS entity.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-position-device-type.json](schemas/enum/ais-position-device-type.json "open original schema") |

## AIS position device type Type

`string` ([AIS position device type](ais-position-device-type.md))

## AIS position device type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"UNDEFINED"`                    |             |
| `"GPS"`                          |             |
| `"GLONASS"`                      |             |
| `"COMBINED_GPS_GLONASS"`         |             |
| `"LORAN_C"`                      |             |
| `"CHAYKA"`                       |             |
| `"INTEGRATED_NAVIGATION_SYSTEM"` |             |
| `"SURVEYED"`                     |             |
| `"GALILEO"`                      |             |
| `"NOT_USED"`                     |             |
| `"INTERNAL_GNSS"`                |             |
