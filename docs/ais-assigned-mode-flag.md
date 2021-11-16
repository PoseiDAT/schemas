# Assigned mode flag Schema

```txt
https://poseidat.org/schema/enum/ais/ais-assigned-mode-flag.json
```

State of station if it is operating in autonomous or assigned mode; 0 is default.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-assigned-mode-flag.json](schemas/enum/ais/ais-assigned-mode-flag.json "open original schema") |

## Assigned mode flag Type

`string` ([Assigned mode flag](ais-assigned-mode-flag.md))

## Assigned mode flag Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                   | Explanation |
| :------------------------------------------------------ | :---------- |
| `"Station operating in autonomous and continuous mode"` |             |
| `"Station operating in assigned mode"`                  |             |
