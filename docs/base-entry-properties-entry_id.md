# Untitled string in BaseEntry Schema

```txt
https://poseidat.org/schema/core/base-entry.json#/properties/entry_id
```

The unique identifier for the entry (UUID v4)


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [base-entry.json\*](schemas/core/base-entry.json "open original schema") |

## entry_id Type

`string`

## entry_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")
