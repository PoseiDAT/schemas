# Untitled object in undefined Schema

```txt
https://poseidat.org/schema/core/trip-entry.json
```

The trip related details of a journal entry


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [trip-entry.json](schemas/core/trip-entry.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](trip-entry.md))

# undefined Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :-------------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)               | `string` | Required | cannot be null | [Untitled schema](trip-entry-properties-date.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/date")               |
| [trip_nr](#trip_nr)         | `string` | Required | cannot be null | [Untitled schema](trip-entry-properties-trip_nr.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip_nr")         |
| [record_nr](#record_nr)     | `string` | Required | cannot be null | [Untitled schema](trip-entry-properties-record_nr.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/record_nr")     |
| [sequence_nr](#sequence_nr) | `string` | Optional | cannot be null | [Untitled schema](trip-entry-properties-sequence_nr.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/sequence_nr") |
| [location](#location)       | `object` | Optional | cannot be null | [Untitled schema](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")         |

## date

The date the trip entry was created or sent at. All dates and times are UTC. GBR: DATI, NLD: DA


`date`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](trip-entry-properties-date.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/date")

### date Type

`string`

### date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## trip_nr

The trip number this entry belongs to. NLD: TN, GBR: GBRLOGNO


`trip_nr`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](trip-entry-properties-trip_nr.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip_nr")

### trip_nr Type

`string`

## record_nr

The unique record number for the trip entry. Formats differ between ERS dialects. NLD: RN GBR: GBRLOGNO


`record_nr`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](trip-entry-properties-record_nr.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/record_nr")

### record_nr Type

`string`

## sequence_nr

The unique sequence number for the  entry. GBR: GBRLOGSEQ


`sequence_nr`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](trip-entry-properties-sequence_nr.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/sequence_nr")

### sequence_nr Type

`string`

## location

A navigational position that can be used in an entry


`location`

-   is optional
-   Type: `object` ([Position](trip-entry-properties-position.md))
-   cannot be null
-   defined in: [Untitled schema](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))
