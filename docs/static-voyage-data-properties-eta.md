# Untitled string in Static and voyage data AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/static-voyage-data.json#/properties/eta
```

Estimated date and time of arrival

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [static-voyage-data.json*](schemas/core/ais-message/static-voyage-data.json "open original schema") |

## eta Type

`string`

## eta Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
