# Untitled string in Class B position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/band_flag
```

Capable of operating over the upper 525 kHz band of the marine band or the whole marine band

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [class-b-position-report.json*](schemas/core/ais-message/class-b-position-report.json "open original schema") |

## band_flag Type

`string`

## band_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                  | Explanation |
| :------------------------------------- | :---------- |
| `"CAPABLE_OPERATING_525_OVER_KHZ"`     |             |
| `"CAPABLE_OPERATING_OVER_MARINE_BAND"` |             |

## band_flag Default Value

The default value is:

```json
"CAPABLE_OPERATING_525_OVER_KHZ"
```
