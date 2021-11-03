# Special maneuvre indicator types Schema

```txt
https://poseidat.org/schema/enum/ais-special-maneuvre.json
```

Indicates whether an special maneuver is ongoing

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-special-maneuvre.json](schemas/enum/ais-special-maneuvre.json "open original schema") |

## Special maneuvre indicator types Type

`string` ([Special maneuvre indicator types](ais-special-maneuvre.md))

## Special maneuvre indicator types Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                               | Explanation |
| :---------------------------------- | :---------- |
| `"not available"`                   |             |
| `"not engaged in special maneuver"` |             |
| `"engaged in special maneuver"`     |             |
