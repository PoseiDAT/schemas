# Untitled string in Journal Schema

```txt
https://poseidat.org/schema/core/journal.json#/properties/journal_id
```

The unique identifier for the journal (UUID v4)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [journal.json*](schemas/core/journal.json "open original schema") |

## journal_id Type

`string`

## journal_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")
