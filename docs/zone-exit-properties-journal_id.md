# Untitled string in ZoneExit Schema

```txt
https://poseidat.org/schema/entry/zone-exit.json#/properties/journal_id
```

The unique identifier of the journal (UUID v4) this entry belongs to

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [zone-exit.json*](schemas/entry/zone-exit.json "open original schema") |

## journal_id Type

`string`

## journal_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")
