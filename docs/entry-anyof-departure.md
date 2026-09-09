# Departure Schema

```txt
https://poseidat.org/schema/entry/departure.json#/anyOf/1
```

A departure from port event

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [entry.json*](schemas/entry.json "open original schema") |

## 1 Type

`object` ([Departure](entry-anyof-departure.md))

# 1 Properties

| Property                                      | Type          | Required | Nullable       | Defined by                                                                                                                                      |
| :-------------------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| [journal_id](#journal_id)                     | `string`      | Required | cannot be null | [Departure](departure-properties-journal_id.md "https://poseidat.org/schema/entry/departure.json#/properties/journal_id")                       |
| [entry_id](#entry_id)                         | `string`      | Required | cannot be null | [Departure](departure-properties-entry_id.md "https://poseidat.org/schema/entry/departure.json#/properties/entry_id")                           |
| [entry_type](#entry_type)                     | `string`      | Required | cannot be null | [Departure](departure-properties-entry_type.md "https://poseidat.org/schema/entry/departure.json#/properties/entry_type")                       |
| [entry_datetime](#entry_datetime)             | `string`      | Optional | cannot be null | [Departure](departure-properties-entry_datetime.md "https://poseidat.org/schema/entry/departure.json#/properties/entry_datetime")               |
| [revision](#revision)                         | `string`      | Required | cannot be null | [Departure](departure-properties-revision.md "https://poseidat.org/schema/entry/departure.json#/properties/revision")                           |
| [immutable](#immutable)                       | `boolean`     | Required | cannot be null | [Departure](departure-properties-immutable.md "https://poseidat.org/schema/entry/departure.json#/properties/immutable")                         |
| [remarks](#remarks)                           | `string`      | Optional | cannot be null | [Departure](departure-properties-remarks.md "https://poseidat.org/schema/entry/departure.json#/properties/remarks")                             |
| [trip](#trip)                                 | `object`      | Required | cannot be null | [Departure](arrival-properties-trip-entry.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip")                               |
| [activity_date](#activity_date)               | `string`      | Required | cannot be null | [Departure](departure-properties-activity_date.md "https://poseidat.org/schema/entry/departure.json#/properties/activity_date")                 |
| [port](#port)                                 | `object`      | Required | cannot be null | [Departure](arrival-properties-port.md "https://poseidat.org/schema/core/port.json#/properties/port")                                           |
| [anticipated_activity](#anticipated_activity) | `string`      | Optional | cannot be null | [Departure](departure-properties-reason-departure.md "https://poseidat.org/schema/enum/reason-departure.json#/properties/anticipated_activity") |
| [gear_on_board](#gear_on_board)               | `array`       | Optional | cannot be null | [Departure](departure-properties-gear_on_board.md "https://poseidat.org/schema/entry/departure.json#/properties/gear_on_board")                 |
| [catch_on_board](#catch_on_board)             | `array`       | Optional | cannot be null | [Departure](departure-properties-catch_on_board.md "https://poseidat.org/schema/entry/departure.json#/properties/catch_on_board")               |
| Additional Properties                         | Not specified | Optional | cannot be null | [Departure](departure-additionalproperties.md "https://poseidat.org/schema/entry/departure.json#/additionalProperties")                         |

## journal_id

The unique identifier of the journal (UUID v4) this entry belongs to

`journal_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Departure](departure-properties-journal_id.md "https://poseidat.org/schema/entry/departure.json#/properties/journal_id")

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

*   defined in: [Departure](departure-properties-entry_id.md "https://poseidat.org/schema/entry/departure.json#/properties/entry_id")

### entry_id Type

`string`

### entry_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## entry_type



`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Departure](departure-properties-entry_type.md "https://poseidat.org/schema/entry/departure.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**constant**: the value of this property must be equal to:

```json
"departure"
```

## entry_datetime

The date and time the entry was logged in UTC in RFC3339 format

`entry_datetime`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Departure](departure-properties-entry_datetime.md "https://poseidat.org/schema/entry/departure.json#/properties/entry_datetime")

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

*   defined in: [Departure](departure-properties-revision.md "https://poseidat.org/schema/entry/departure.json#/properties/revision")

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

*   defined in: [Departure](departure-properties-immutable.md "https://poseidat.org/schema/entry/departure.json#/properties/immutable")

### immutable Type

`boolean`

## remarks

Free form remarks that are to be added to this journal entry

`remarks`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Departure](departure-properties-remarks.md "https://poseidat.org/schema/entry/departure.json#/properties/remarks")

### remarks Type

`string`

## trip

The trip related details of a journal entry

`trip`

*   is required

*   Type: `object` ([Trip entry](arrival-properties-trip-entry.md))

*   cannot be null

*   defined in: [Departure](arrival-properties-trip-entry.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip")

### trip Type

`object` ([Trip entry](arrival-properties-trip-entry.md))

## activity_date



`activity_date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Departure](departure-properties-activity_date.md "https://poseidat.org/schema/entry/departure.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## port

Fishing port details

`port`

*   is required

*   Type: `object` ([Port](arrival-properties-port.md))

*   cannot be null

*   defined in: [Departure](arrival-properties-port.md "https://poseidat.org/schema/core/port.json#/properties/port")

### port Type

`object` ([Port](arrival-properties-port.md))

## anticipated_activity

The reason for the vessel to depart from port. Please check the wiki for the meaning of these codes.

`anticipated_activity`

*   is optional

*   Type: `string` ([Reason departure](departure-properties-reason-departure.md))

*   cannot be null

*   defined in: [Departure](departure-properties-reason-departure.md "https://poseidat.org/schema/enum/reason-departure.json#/properties/anticipated_activity")

### anticipated_activity Type

`string` ([Reason departure](departure-properties-reason-departure.md))

### anticipated_activity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"FIS"` |             |
| `"GUD"` |             |
| `"OTH"` |             |
| `"SCR"` |             |
| `"STE"` |             |
| `"TST"` |             |

## gear_on_board



`gear_on_board`

*   is optional

*   Type: `object[]` ([Fishing gear](departure-properties-gear_on_board-fishing-gear.md))

*   cannot be null

*   defined in: [Departure](departure-properties-gear_on_board.md "https://poseidat.org/schema/entry/departure.json#/properties/gear_on_board")

### gear_on_board Type

`object[]` ([Fishing gear](departure-properties-gear_on_board-fishing-gear.md))

### gear_on_board Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## catch_on_board



`catch_on_board`

*   is optional

*   Type: `object[]` ([Fishing catch](arrival-properties-catch_on_board-fishing-catch.md))

*   cannot be null

*   defined in: [Departure](departure-properties-catch_on_board.md "https://poseidat.org/schema/entry/departure.json#/properties/catch_on_board")

### catch_on_board Type

`object[]` ([Fishing catch](arrival-properties-catch_on_board-fishing-catch.md))

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Departure](departure-additionalproperties.md "https://poseidat.org/schema/entry/departure.json#/additionalProperties")

### additionalProperties Type

unknown
