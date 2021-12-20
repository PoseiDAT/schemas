# Untitled string in Date response AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/date-response.json#/properties/date_time_response
```

The send UTC date time response from the destination ship

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [date-response.json*](schemas/core/ais-message/date-response.json "open original schema") |

## date_time_response Type

`string`

## date_time_response Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
