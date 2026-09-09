# Fishing tow Schema

```txt
https://poseidat.org/schema/core/fishing-tow.json
```

Fishing tow details

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-tow.json](schemas/core/fishing-tow.json "open original schema") |

## Fishing tow Type

`object` ([Fishing tow](fishing-tow.md))

# Fishing tow Properties

| Property                                    | Type          | Required | Nullable       | Defined by                                                                                                                                                   |
| :------------------------------------------ | :------------ | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [activity_date_start](#activity_date_start) | `string`      | Required | cannot be null | [Fishing tow](fishing-tow-properties-activity_date_start.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/activity_date_start")             |
| [activity_date_end](#activity_date_end)     | `string`      | Optional | cannot be null | [Fishing tow](fishing-tow-properties-activity_date_end.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/activity_date_end")                 |
| [location_start](#location_start)           | `object`      | Optional | cannot be null | [Fishing tow](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location_start")                     |
| [location_end](#location_end)               | `object`      | Optional | cannot be null | [Fishing tow](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location_end")                       |
| [waypoints](#waypoints)                     | `array`       | Optional | cannot be null | [Fishing tow](fishing-tow-properties-waypoints.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/waypoints")                                 |
| [zone](#zone)                               | `object`      | Required | cannot be null | [Fishing tow](fishing-tow-properties-fishing-zone.md "https://poseidat.org/schema/core/fishing-zone.json#/properties/zone")                                  |
| [fishing_gear](#fishing_gear)               | `object`      | Optional | cannot be null | [Fishing tow](departure-properties-gear_on_board-fishing-gear.md "https://poseidat.org/schema/core/fishing-gear.json#/properties/fishing_gear")              |
| [gear_deployment](#gear_deployment)         | `object`      | Optional | cannot be null | [Fishing tow](fishing-tow-properties-fishing-gear-deployment.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_deployment") |
| [catches](#catches)                         | `array`       | Optional | cannot be null | [Fishing tow](fishing-tow-properties-caught-fish.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/catches")                                 |
| Additional Properties                       | Not specified | Optional | cannot be null | [Fishing tow](fishing-tow-additionalproperties.md "https://poseidat.org/schema/core/fishing-tow.json#/additionalProperties")                                 |

## activity_date_start

The datetime the tow started in UTC

`activity_date_start`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Fishing tow](fishing-tow-properties-activity_date_start.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/activity_date_start")

### activity_date_start Type

`string`

### activity_date_start Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## activity_date_end

The datetime the tow ended in UTC

`activity_date_end`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing tow](fishing-tow-properties-activity_date_end.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/activity_date_end")

### activity_date_end Type

`string`

### activity_date_end Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## location_start

A navigational position that can be used in an entry

`location_start`

*   is optional

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Fishing tow](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location_start")

### location_start Type

`object` ([Position](trip-entry-properties-position.md))

## location_end

A navigational position that can be used in an entry

`location_end`

*   is optional

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Fishing tow](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location_end")

### location_end Type

`object` ([Position](trip-entry-properties-position.md))

## waypoints

The collection of geographical locations logged during the tow

`waypoints`

*   is optional

*   Type: `object[]` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Fishing tow](fishing-tow-properties-waypoints.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/waypoints")

### waypoints Type

`object[]` ([Position](trip-entry-properties-position.md))

## zone

Geographical zone for fishing activities

`zone`

*   is required

*   Type: `object` ([Fishing zone](fishing-tow-properties-fishing-zone.md))

*   cannot be null

*   defined in: [Fishing tow](fishing-tow-properties-fishing-zone.md "https://poseidat.org/schema/core/fishing-zone.json#/properties/zone")

### zone Type

`object` ([Fishing zone](fishing-tow-properties-fishing-zone.md))

## fishing_gear

Fishing gear details

`fishing_gear`

*   is optional

*   Type: `object` ([Fishing gear](departure-properties-gear_on_board-fishing-gear.md))

*   cannot be null

*   defined in: [Fishing tow](departure-properties-gear_on_board-fishing-gear.md "https://poseidat.org/schema/core/fishing-gear.json#/properties/fishing_gear")

### fishing_gear Type

`object` ([Fishing gear](departure-properties-gear_on_board-fishing-gear.md))

## gear_deployment

Fishing gear deployment details

`gear_deployment`

*   is optional

*   Type: `object` ([Fishing gear deployment](fishing-tow-properties-fishing-gear-deployment.md))

*   cannot be null

*   defined in: [Fishing tow](fishing-tow-properties-fishing-gear-deployment.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_deployment")

### gear_deployment Type

`object` ([Fishing gear deployment](fishing-tow-properties-fishing-gear-deployment.md))

## catches

The fish caught in this tow

`catches`

*   is optional

*   Type: `object[]` ([Fishing catch](arrival-properties-catch_on_board-fishing-catch.md))

*   cannot be null

*   defined in: [Fishing tow](fishing-tow-properties-caught-fish.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/catches")

### catches Type

`object[]` ([Fishing catch](arrival-properties-catch_on_board-fishing-catch.md))

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Fishing tow](fishing-tow-additionalproperties.md "https://poseidat.org/schema/core/fishing-tow.json#/additionalProperties")

### additionalProperties Type

unknown
