# Untitled string in Management of channel Schema

```txt
https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/power
```

Transmitter Power Mode

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [channel-management.json*](schemas/core/ais-message/channel-management.json "open original schema") |

## power Type

`string`

## power Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"HIGH"` |             |
| `"LOW"`  |             |

## power Default Value

The default value is:

```json
"HIGH"
```
