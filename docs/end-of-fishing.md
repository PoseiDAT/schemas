# End of fishing activity Schema

```txt
https://poseidat.org/schema/entry/end-of-fishing.json
```

Notification of intent to cease all fishing activity for the trip


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [end-of-fishing.json](schemas/entry/end-of-fishing.json "open original schema") |

## End of fishing activity Type

`object` ([End of fishing activity](end-of-fishing.md))

all of

-   [BaseEntry](arrival-allof-baseentry.md "check type definition")

# End of fishing activity Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                   |
| :------------------------------ | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [trip](#trip)                   | `object` | Required | cannot be null | [End of fishing activity](arrival-properties-trip.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip")                               |
| [activity_date](#activity_date) | `string` | Required | cannot be null | [End of fishing activity](end-of-fishing-properties-activity_date.md "https&#x3A;//poseidat.org/schema/entry/end-of-fishing.json#/properties/activity_date") |

## trip

The trip related details of a journal entry


`trip`

-   is required
-   Type: `object` ([Details](arrival-properties-trip.md))
-   cannot be null
-   defined in: [End of fishing activity](arrival-properties-trip.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip")

### trip Type

`object` ([Details](arrival-properties-trip.md))

## activity_date

The datetime of end of fishing in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA


`activity_date`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [End of fishing activity](end-of-fishing-properties-activity_date.md "https&#x3A;//poseidat.org/schema/entry/end-of-fishing.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
