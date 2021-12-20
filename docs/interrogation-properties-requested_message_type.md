# Untitled array in Interrogation send by the AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/interrogation.json#/properties/requested_message_type
```

the requested message type used in message type 15 (interrogation); Can request up to two message types from two stations

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [interrogation.json*](schemas/core/ais-message/interrogation.json "open original schema") |

## requested_message_type Type

`string[]` ([AIS message types](base-ais-message-properties-ais-message-types.md))

## requested_message_type Constraints

**maximum number of items**: the maximum number of items for this array is: `2`
