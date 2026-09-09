# Fishing gear shot Schema

```txt
https://poseidat.org/schema/core/fishing-gear-shot.json
```

A gear shot event details

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                           |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-gear-shot.json](schemas/core/fishing-gear-shot.json "open original schema") |

## Fishing gear shot Type

`object` ([Fishing gear shot](fishing-gear-shot.md))

# Fishing gear shot Properties

| Property                        | Type          | Required | Nullable       | Defined by                                                                                                                                             |
| :------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)                   | `string`      | Optional | cannot be null | [Fishing gear shot](fishing-gear-shot-properties-date.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/date")                   |
| [data](#data)                   | Not specified | Required | cannot be null | [Fishing gear shot](fishing-gear-shot-properties-data.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/data")                   |
| [location](#location)           | `object`      | Required | cannot be null | [Fishing gear shot](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")               |
| [identifier](#identifier)       | `string`      | Optional | cannot be null | [Fishing gear shot](fishing-gear-shot-properties-identifier.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/identifier")       |
| [country_zones](#country_zones) | `string`      | Optional | cannot be null | [Fishing gear shot](fishing-gear-shot-properties-country_zones.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/country_zones") |
| Additional Properties           | Not specified | Optional | cannot be null | [Fishing gear shot](fishing-gear-shot-additionalproperties.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/additionalProperties")         |

## date

The datetime the gear shot took place. GBR: DATI, NLD2: DA + TI, NLD3: DA

`date`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing gear shot](fishing-gear-shot-properties-date.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/date")

### date Type

`string`

### date Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## data



`data`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [Fishing gear shot](fishing-gear-shot-properties-data.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/data")

### data Type

unknown

## location

A navigational position that can be used in an entry

`location`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Fishing gear shot](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## identifier

The identification tag attached to the retrieved gear. NLD: NI, GBR: GBRGNFN

`identifier`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing gear shot](fishing-gear-shot-properties-identifier.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/identifier")

### identifier Type

`string`

## country_zones

Indicator of where zone fishing will be commencing. Data recorded in accordance with Norwegian requirements. Known as GBRZO

`country_zones`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing gear shot](fishing-gear-shot-properties-country_zones.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/country_zones")

### country_zones Type

`string`

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Fishing gear shot](fishing-gear-shot-additionalproperties.md "https://poseidat.org/schema/core/fishing-gear-shot.json#/additionalProperties")

### additionalProperties Type

unknown
