# Vessel inspection Schema

```txt
https://poseidat.org/schema/core/vessel-inspection.json
```

Vessel inspection details

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vessel-inspection.json](schemas/core/vessel-inspection.json "open original schema") |

## Vessel inspection Type

`object` ([Vessel inspection](vessel-inspection.md))

# Vessel inspection Properties

| Property                  | Type          | Required | Nullable       | Defined by                                                                                                                                       |
| :------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)             | `string`      | Required | cannot be null | [Vessel inspection](vessel-inspection-properties-date.md "https://poseidat.org/schema/core/vessel-inspection.json#/properties/date")             |
| [location](#location)     | `object`      | Required | cannot be null | [Vessel inspection](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")         |
| [country](#country)       | `string`      | Optional | cannot be null | [Vessel inspection](vessel-inspection-properties-country.md "https://poseidat.org/schema/core/vessel-inspection.json#/properties/country")       |
| [identifier](#identifier) | `string`      | Required | cannot be null | [Vessel inspection](vessel-inspection-properties-identifier.md "https://poseidat.org/schema/core/vessel-inspection.json#/properties/identifier") |
| Additional Properties     | Not specified | Optional | cannot be null | [Vessel inspection](vessel-inspection-additionalproperties.md "https://poseidat.org/schema/core/vessel-inspection.json#/additionalProperties")   |

## date

The datetime the inspection took place

`date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel inspection](vessel-inspection-properties-date.md "https://poseidat.org/schema/core/vessel-inspection.json#/properties/date")

### date Type

`string`

### date Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## location

A navigational position that can be used in an entry

`location`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Vessel inspection](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## country

The country performing the inspection as a 3 letter ISO code. Example: NLD, BEL, GBR. NLD: IC

`country`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel inspection](vessel-inspection-properties-country.md "https://poseidat.org/schema/core/vessel-inspection.json#/properties/country")

### country Type

`string`

## identifier

The identification of the inspecting official. NLD: IA

`identifier`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel inspection](vessel-inspection-properties-identifier.md "https://poseidat.org/schema/core/vessel-inspection.json#/properties/identifier")

### identifier Type

`string`

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Vessel inspection](vessel-inspection-additionalproperties.md "https://poseidat.org/schema/core/vessel-inspection.json#/additionalProperties")

### additionalProperties Type

unknown
