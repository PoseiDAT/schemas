# Untitled string in BaseEntry Schema

```txt
https://poseidat.org/schema/core/base-entry.json#/properties/entry_datetime
```

The date and time the entry was logged in UTC in RFC3339 format


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [base-entry.json\*](schemas/core/base-entry.json "open original schema") |

## entry_datetime Type

`string`

## entry_datetime Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
