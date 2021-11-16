# DTE ready types Schema

```txt
https://poseidat.org/schema/enum/ais/ais-DTE.json
```

Data terminal equipment (DTE) ready (0 = available, 1 = not available = default)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-DTE.json](schemas/enum/ais/ais-DTE.json "open original schema") |

## DTE ready types Type

`string` ([DTE ready types](ais-dte.md))

## DTE ready types Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"available"`     |             |
| `"not available"` |             |
