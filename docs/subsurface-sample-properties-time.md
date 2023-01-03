# Untitled string in Subsurface sample value Schema

```txt
https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/time
```

The date and time of the sample measurement as an RFC string

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [subsurface-sample.json*](schemas/core/measurement/subsurface-sample.json "open original schema") |

## time Type

`string`

## time Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
