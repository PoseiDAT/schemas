# Position accuracy types Schema

```txt
https://poseidat.org/schema/enum/ais-position-accuracy.json
```

Indicates the precision of a given position

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-position-accuracy.json](schemas/enum/ais-position-accuracy.json "open original schema") |

## Position accuracy types Type

`string` ([Position accuracy types](ais-position-accuracy.md))

## Position accuracy types Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"LOW (> 10 M)"`  |             |
| `"HIGH (< 10 M)"` |             |
