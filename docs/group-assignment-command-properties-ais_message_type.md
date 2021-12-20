# Untitled string in Group assignment command Schema

```txt
https://poseidat.org/schema/core/ais-message/group-assignment-command.json#/properties/ais_message_type
```

The message type of the given AIS measurement

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                      |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [group-assignment-command.json*](schemas/core/ais-message/group-assignment-command.json "open original schema") |

## ais_message_type Type

`string`

## ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                        | Explanation |
| :--------------------------- | :---------- |
| `"GROUP_ASSIGNMENT_COMMAND"` |             |

## ais_message_type Default Value

The default value is:

```json
"GROUP_ASSIGNMENT_COMMAND"
```
