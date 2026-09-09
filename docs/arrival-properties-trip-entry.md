# Trip entry Schema

```txt
https://poseidat.org/schema/core/trip-entry.json#/properties/trip
```

The trip related details of a journal entry

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [arrival.json*](schemas/entry/arrival.json "open original schema") |

## trip Type

`object` ([Trip entry](arrival-properties-trip-entry.md))

# trip Properties

| Property                    | Type          | Required | Nullable       | Defined by                                                                                                                        |
| :-------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)               | `string`      | Required | cannot be null | [Trip entry](trip-entry-properties-date.md "https://poseidat.org/schema/core/trip-entry.json#/properties/date")                   |
| [trip_nr](#trip_nr)         | `string`      | Required | cannot be null | [Trip entry](trip-entry-properties-trip_nr.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip_nr")             |
| [record_nr](#record_nr)     | `string`      | Required | cannot be null | [Trip entry](trip-entry-properties-record_nr.md "https://poseidat.org/schema/core/trip-entry.json#/properties/record_nr")         |
| [sequence_nr](#sequence_nr) | `string`      | Optional | cannot be null | [Trip entry](trip-entry-properties-sequence_nr.md "https://poseidat.org/schema/core/trip-entry.json#/properties/sequence_nr")     |
| [location](#location)       | `object`      | Optional | cannot be null | [Trip entry](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location") |
| Additional Properties       | Not specified | Optional | cannot be null | [Trip entry](trip-entry-additionalproperties.md "https://poseidat.org/schema/core/trip-entry.json#/additionalProperties")         |

## date

The date the trip entry was created or sent at. All dates and times are UTC. GBR: DATI, NLD: DA

`date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Trip entry](trip-entry-properties-date.md "https://poseidat.org/schema/core/trip-entry.json#/properties/date")

### date Type

`string`

### date Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## trip_nr

The trip number this entry belongs to. NLD: TN, GBR: GBRLOGNO

`trip_nr`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Trip entry](trip-entry-properties-trip_nr.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip_nr")

### trip_nr Type

`string`

## record_nr

The unique record number for the trip entry. Formats differ between ERS dialects. NLD: RN GBR: GBRLOGNO

`record_nr`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Trip entry](trip-entry-properties-record_nr.md "https://poseidat.org/schema/core/trip-entry.json#/properties/record_nr")

### record_nr Type

`string`

## sequence_nr

The unique sequence number for the  entry. GBR: GBRLOGSEQ

`sequence_nr`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Trip entry](trip-entry-properties-sequence_nr.md "https://poseidat.org/schema/core/trip-entry.json#/properties/sequence_nr")

### sequence_nr Type

`string`

## location

A navigational position that can be used in an entry

`location`

*   is optional

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Trip entry](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Trip entry](trip-entry-additionalproperties.md "https://poseidat.org/schema/core/trip-entry.json#/additionalProperties")

### additionalProperties Type

unknown
