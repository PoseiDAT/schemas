# Untitled string in Class B position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/dsc_flag
```

Indicates whether ship is equipped with DSC function

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [class-b-position-report.json*](schemas/core/ais-message/class-b-position-report.json "open original schema") |

## dsc_flag Type

`string`

## dsc_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"NO_DSC_FUNCTION"`       |             |
| `"DSC_FUNCTION_EQUIPPED"` |             |

## dsc_flag Default Value

The default value is:

```json
"NO_DSC_FUNCTION"
```
