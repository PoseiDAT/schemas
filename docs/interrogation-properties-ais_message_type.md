# Untitled string in Interrogation send by the AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/interrogation.json#/properties/ais_message_type
```

The message type of the given AIS measurement

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [interrogation.json*](schemas/core/ais-message/interrogation.json "open original schema") |

## ais_message_type Type

`string`

## ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"INTERROGATION"` |             |

## ais_message_type Default Value

The default value is:

```json
"INTERROGATION"
```
