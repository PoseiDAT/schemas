# Fishing gear retrieve Schema

```txt
https://poseidat.org/schema/core/fishing-gear-retrieve.json#/properties/gear_retrieve/items
```

A gear retrieve event details


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-gear-deployment.json\*](schemas/core/fishing-gear-deployment.json "open original schema") |

## items Type

`object` ([Fishing gear retrieve](fishing-gear-deployment-properties-gear_retrieve-fishing-gear-retrieve.md))

# Fishing gear retrieve Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)             | `string` | Optional | cannot be null | [Fishing gear retrieve](fishing-gear-retrieve-properties-date.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-retrieve.json#/properties/date")             |
| [location](#location)     | `object` | Required | cannot be null | [Fishing gear retrieve](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")                             |
| [identifier](#identifier) | `string` | Required | cannot be null | [Fishing gear retrieve](fishing-gear-retrieve-properties-identifier.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-retrieve.json#/properties/identifier") |

## date

The datetime the gear retrieve took place. GBR: DATI, NLD2: DA + TI, NLD3: DA


`date`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Fishing gear retrieve](fishing-gear-retrieve-properties-date.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-retrieve.json#/properties/date")

### date Type

`string`

### date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## location

A navigational position that can be used in an entry


`location`

-   is required
-   Type: `object` ([Position](trip-entry-properties-position.md))
-   cannot be null
-   defined in: [Fishing gear retrieve](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## identifier

The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN


`identifier`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Fishing gear retrieve](fishing-gear-retrieve-properties-identifier.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-retrieve.json#/properties/identifier")

### identifier Type

`string`
