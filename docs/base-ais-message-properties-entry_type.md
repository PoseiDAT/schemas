# Untitled string in AIS message Schema

```txt
https://poseidat.org/schema/core/entry/base-ais-message.json#/properties/entry_type
```

The journal entry type identifer

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [base-ais-message.json*](schemas/entry/base-ais-message.json "open original schema") |

## entry_type Type

`string`

## entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"ais-message"` |             |

## entry_type Default Value

The default value is:

```json
"ais-message"
```
