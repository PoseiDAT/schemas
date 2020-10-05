# Untitled string in LogbookDeparture Schema

```txt
https://poseidat.org/core-schema/logbook/departure.json#/properties/activity_date
```

The date and time of departure in UTC in RFC3339 format


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [departure.json\*](schemas/entry/logbook/departure.json "open original schema") |

## activity_date Type

`string`

## activity_date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
