# Untitled string in Management of channel Schema

```txt
https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/addressed_or_broadcast
```

Addressed or Broadcast Message Indicator

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [channel-management.json*](schemas/core/ais-message/channel-management.json "open original schema") |

## addressed_or_broadcast Type

`string`

## addressed_or_broadcast Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"BROADCAST"` |             |
| `"ADDRESSED"` |             |

## addressed_or_broadcast Default Value

The default value is:

```json
"BROADCAST"
```
