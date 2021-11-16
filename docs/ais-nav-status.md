# AIS navigation status Schema

```txt
https://poseidat.org/schema/enum/ais/ais-nav-status.json
```

The converted nav status given by an AIS measerement.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-nav-status.json](schemas/enum/ais/ais-nav-status.json "open original schema") |

## AIS navigation status Type

`string` ([AIS navigation status](ais-nav-status.md))

## AIS navigation status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                            | Explanation |
| :--------------------------------------------------------------- | :---------- |
| `"Under way using engine"`                                       |             |
| `"At anchor"`                                                    |             |
| `"Not under command"`                                            |             |
| `"Restricted manoeuverability"`                                  |             |
| `"Constrained by her draught"`                                   |             |
| `"Moored"`                                                       |             |
| `"Aground"`                                                      |             |
| `"Engaged in Fishing"`                                           |             |
| `"Under way sailing"`                                            |             |
| `"Reserved for future amendment of Navigational Status for HSC"` |             |
| `"Reserved for future amendment of Navigational Status for WIG"` |             |
| `"Reserved for future use"`                                      |             |
| `"AIS-SART is active"`                                           |             |
| `"Not defined (default)"`                                        |             |
