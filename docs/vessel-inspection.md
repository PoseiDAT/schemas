# Vessel inspection Schema

```txt
https://poseidat.org/schema/core/vessel-inspection.json
```

Vessel inspection details


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vessel-inspection.json](schemas/core/vessel-inspection.json "open original schema") |

## Vessel inspection Type

`object` ([Vessel inspection](vessel-inspection.md))

# Vessel inspection Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)             | `string` | Required | cannot be null | [Vessel inspection](vessel-inspection-properties-date.md "https&#x3A;//poseidat.org/schema/core/vessel-inspection.json#/properties/date")             |
| [location](#location)     | `object` | Required | cannot be null | [Vessel inspection](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")                     |
| [country](#country)       | `string` | Optional | cannot be null | [Vessel inspection](vessel-inspection-properties-country.md "https&#x3A;//poseidat.org/schema/core/vessel-inspection.json#/properties/country")       |
| [identifier](#identifier) | `string` | Required | cannot be null | [Vessel inspection](vessel-inspection-properties-identifier.md "https&#x3A;//poseidat.org/schema/core/vessel-inspection.json#/properties/identifier") |

## date

The datetime the inspection took place


`date`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Vessel inspection](vessel-inspection-properties-date.md "https&#x3A;//poseidat.org/schema/core/vessel-inspection.json#/properties/date")

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
-   defined in: [Vessel inspection](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## country

The country performing the inspection as a 3 letter ISO code. Example: NLD, BEL, GBR. NLD: IC


`country`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Vessel inspection](vessel-inspection-properties-country.md "https&#x3A;//poseidat.org/schema/core/vessel-inspection.json#/properties/country")

### country Type

`string`

## identifier

The identification of the inspecting official. NLD: IA


`identifier`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Vessel inspection](vessel-inspection-properties-identifier.md "https&#x3A;//poseidat.org/schema/core/vessel-inspection.json#/properties/identifier")

### identifier Type

`string`
