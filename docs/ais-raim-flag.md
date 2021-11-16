# AIS RAIM flag flag Schema

```txt
https://poseidat.org/schema/enum/ais/ais-RAIM-flag.json
```

Receiver autonomous integrity monitoring (RAIM) flag of electronic position fixing device; 0 = RAIM not in use = default; 1 = RAIM in use.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-RAIM-flag.json](schemas/enum/ais/ais-RAIM-flag.json "open original schema") |

## AIS RAIM flag flag Type

`string` ([AIS RAIM flag flag](ais-raim-flag.md))

## AIS RAIM flag flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                         | Explanation |
| :---------------------------- | :---------- |
| `"RAIM not in use (default)"` |             |
| `"RAIM in use"`               |             |
