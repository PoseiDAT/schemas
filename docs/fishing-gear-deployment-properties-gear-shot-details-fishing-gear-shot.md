# Fishing gear shot Schema

```txt
https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/gear_shot/items
```

A gear shot event details


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-gear-deployment.json\*](schemas/core/fishing-gear-deployment.json "open original schema") |

## items Type

`object` ([Fishing gear shot](fishing-gear-deployment-properties-gear-shot-details-fishing-gear-shot.md))

# Fishing gear shot Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                  |
| :------------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                   | `string` | Optional | cannot be null | [Fishing gear shot](fishing-gear-shot-properties-date.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-shot.json#/properties/date")                   |
| [location](#location)           | `object` | Required | cannot be null | [Fishing gear shot](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")                           |
| [identifier](#identifier)       | `string` | Optional | cannot be null | [Fishing gear shot](fishing-gear-shot-properties-identifier.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-shot.json#/properties/identifier")       |
| [country_zones](#country_zones) | `string` | Optional | cannot be null | [Fishing gear shot](fishing-gear-shot-properties-country_zones.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-shot.json#/properties/country_zones") |

## date

The datetime the gear shot took place. GBR: DATI, NLD2: DA + TI, NLD3: DA


`date`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Fishing gear shot](fishing-gear-shot-properties-date.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-shot.json#/properties/date")

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
-   defined in: [Fishing gear shot](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## identifier

The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN


`identifier`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Fishing gear shot](fishing-gear-shot-properties-identifier.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-shot.json#/properties/identifier")

### identifier Type

`string`

## country_zones

Indicator of where zone fishing will be commencing. Data recorded in accordance with Norwegian requirements. Known as GBRZO


`country_zones`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Fishing gear shot](fishing-gear-shot-properties-country_zones.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-shot.json#/properties/country_zones")

### country_zones Type

`string`
