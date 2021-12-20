# Untitled string in Position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/base-station-report.json#/properties/date
```

The date and time when the AIS message was created.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [base-station-report.json*](schemas/core/ais-message/base-station-report.json "open original schema") |

## date Type

`string`

## date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
