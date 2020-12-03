# Untitled string in Base entry Schema

```txt
https://poseidat.org/schema/core/base-entry.json#/properties/journal_id
```

The unique identifier of the journal (UUID v4) this entry belongs to


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [base-entry.json\*](schemas/core/base-entry.json "open original schema") |

## journal_id Type

`string`

## journal_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")
