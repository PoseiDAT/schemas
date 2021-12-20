# Untitled string in Class B position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/unit_flag
```

Type class B unit flag

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [class-b-position-report.json*](schemas/core/ais-message/class-b-position-report.json "open original schema") |

## unit_flag Type

`string`

## unit_flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"SOTDMA"` |             |
| `"CS"`     |             |

## unit_flag Default Value

The default value is:

```json
"CS"
```
