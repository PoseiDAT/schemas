# Untitled string in Trip entry Schema

```txt
https://poseidat.org/schema/core/trip-entry.json#/properties/date
```

The date the trip entry was created or sent at. All dates and times are UTC. GBR: DATI, NLD: DA

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [trip-entry.json*](schemas/core/trip-entry.json "open original schema") |

## date Type

`string`

## date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
