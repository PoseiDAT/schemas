# ZoneEnter Schema

```txt
https://poseidat.org/schema/entry/zone-enter.json#/anyOf/8
```

Enter declaration of a fishing zone

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [entry.json*](schemas/entry.json "open original schema") |

## 8 Type

`object` ([ZoneEnter](entry-anyof-zoneenter.md))

# 8 Properties

| Property                                    | Type          | Required | Nullable       | Defined by                                                                                                                                    |
| :------------------------------------------ | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [journal_id](#journal_id)                   | `string`      | Required | cannot be null | [ZoneEnter](zone-enter-properties-journal_id.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/journal_id")                   |
| [entry_id](#entry_id)                       | `string`      | Required | cannot be null | [ZoneEnter](zone-enter-properties-entry_id.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/entry_id")                       |
| [entry_type](#entry_type)                   | `string`      | Required | cannot be null | [ZoneEnter](zone-enter-properties-entry_type.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/entry_type")                   |
| [entry_datetime](#entry_datetime)           | `string`      | Optional | cannot be null | [ZoneEnter](zone-enter-properties-entry_datetime.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/entry_datetime")           |
| [revision](#revision)                       | `string`      | Required | cannot be null | [ZoneEnter](zone-enter-properties-revision.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/revision")                       |
| [immutable](#immutable)                     | `boolean`     | Required | cannot be null | [ZoneEnter](zone-enter-properties-immutable.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/immutable")                     |
| [remarks](#remarks)                         | `string`      | Optional | cannot be null | [ZoneEnter](zone-enter-properties-remarks.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/remarks")                         |
| [activity_date](#activity_date)             | `string`      | Required | cannot be null | [ZoneEnter](zone-enter-properties-activity_date.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/activity_date")             |
| [zone](#zone)                               | `object`      | Required | cannot be null | [ZoneEnter](fishing-tow-properties-fishing-zone.md "https://poseidat.org/schema/core/fishing-zone.json#/properties/zone")                     |
| [location](#location)                       | `object`      | Required | cannot be null | [ZoneEnter](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")              |
| [catch_on_board](#catch_on_board)           | `array`       | Optional | cannot be null | [ZoneEnter](zone-enter-properties-catch_on_board.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/catch_on_board")           |
| [target_species](#target_species)           | `string`      | Optional | cannot be null | [ZoneEnter](zone-enter-properties-target_species.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/target_species")           |
| [directed_species](#directed_species)       | `string`      | Optional | cannot be null | [ZoneEnter](zone-enter-properties-directed_species.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/directed_species")       |
| [effort_zone](#effort_zone)                 | `string`      | Optional | cannot be null | [ZoneEnter](zone-enter-properties-effort-zone.md "https://poseidat.org/schema/enum/effort-zone.json#/properties/effort_zone")                 |
| [trans_zonal_fishing](#trans_zonal_fishing) | `boolean`     | Optional | cannot be null | [ZoneEnter](zone-enter-properties-trans_zonal_fishing.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/trans_zonal_fishing") |
| Additional Properties                       | Not specified | Optional | cannot be null | [ZoneEnter](zone-enter-additionalproperties.md "https://poseidat.org/schema/entry/zone-enter.json#/additionalProperties")                     |

## journal_id

The unique identifier of the journal (UUID v4) this entry belongs to

`journal_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-journal_id.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/journal_id")

### journal_id Type

`string`

### journal_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## entry_id

The unique identifier for the entry (UUID v4)

`entry_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-entry_id.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/entry_id")

### entry_id Type

`string`

### entry_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## entry_type



`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-entry_type.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**constant**: the value of this property must be equal to:

```json
"zone-enter"
```

## entry_datetime

The date and time the entry was logged in UTC in RFC3339 format

`entry_datetime`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-entry_datetime.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/entry_datetime")

### entry_datetime Type

`string`

### entry_datetime Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## revision

The revision timestamp of this entry. Should be the time it was created.

`revision`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-revision.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/revision")

### revision Type

`string`

### revision Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## immutable

Indicates this entry cannot be replaced with future revisions (default)

`immutable`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-immutable.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/immutable")

### immutable Type

`boolean`

## remarks

Free form remarks that are to be added to this journal entry

`remarks`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-remarks.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/remarks")

### remarks Type

`string`

## activity_date



`activity_date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-activity_date.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## zone

Geographical zone for fishing activities

`zone`

*   is required

*   Type: `object` ([Fishing zone](fishing-tow-properties-fishing-zone.md))

*   cannot be null

*   defined in: [ZoneEnter](fishing-tow-properties-fishing-zone.md "https://poseidat.org/schema/core/fishing-zone.json#/properties/zone")

### zone Type

`object` ([Fishing zone](fishing-tow-properties-fishing-zone.md))

## location

A navigational position that can be used in an entry

`location`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [ZoneEnter](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## catch_on_board



`catch_on_board`

*   is optional

*   Type: `object[]` ([Fishing catch](arrival-properties-catch_on_board-fishing-catch.md))

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-catch_on_board.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/catch_on_board")

### catch_on_board Type

`object[]` ([Fishing catch](arrival-properties-catch_on_board-fishing-catch.md))

## target_species



`target_species`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-target_species.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/target_species")

### target_species Type

`string`

## directed_species



`directed_species`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-directed_species.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/directed_species")

### directed_species Type

`string`

## effort_zone

The fishing effort zone. Example: A (ICES V-VI)

`effort_zone`

*   is optional

*   Type: `string` ([Effort zone](zone-enter-properties-effort-zone.md))

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-effort-zone.md "https://poseidat.org/schema/enum/effort-zone.json#/properties/effort_zone")

### effort_zone Type

`string` ([Effort zone](zone-enter-properties-effort-zone.md))

### effort_zone Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `"A"` |             |
| `"B"` |             |
| `"C"` |             |
| `"D"` |             |
| `"E"` |             |
| `"F"` |             |
| `"G"` |             |
| `"H"` |             |
| `"J"` |             |
| `"K"` |             |
| `"L"` |             |
| `"M"` |             |
| `"N"` |             |
| `"O"` |             |
| `"P"` |             |
| `"Q"` |             |
| `"R"` |             |
| `"S"` |             |
| `"T"` |             |
| `"U"` |             |
| `"V"` |             |
| `"W"` |             |
| `"X"` |             |
| `"Y"` |             |

## trans_zonal_fishing



`trans_zonal_fishing`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-trans_zonal_fishing.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/trans_zonal_fishing")

### trans_zonal_fishing Type

`boolean`

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-additionalproperties.md "https://poseidat.org/schema/entry/zone-enter.json#/additionalProperties")

### additionalProperties Type

unknown
