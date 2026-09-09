# End of fishing activity Schema

```txt
https://poseidat.org/schema/entry/end-of-fishing.json
```

Notification of intent to cease all fishing activity for the trip

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [end-of-fishing.json](schemas/entry/end-of-fishing.json "open original schema") |

## End of fishing activity Type

`object` ([End of fishing activity](end-of-fishing.md))

# End of fishing activity Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                |
| :-------------------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [journal_id](#journal_id)         | `string`      | Required | cannot be null | [End of fishing activity](end-of-fishing-properties-journal_id.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/journal_id")         |
| [entry_id](#entry_id)             | `string`      | Required | cannot be null | [End of fishing activity](end-of-fishing-properties-entry_id.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/entry_id")             |
| [entry_type](#entry_type)         | `string`      | Required | cannot be null | [End of fishing activity](end-of-fishing-properties-entry_type.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/entry_type")         |
| [entry_datetime](#entry_datetime) | `string`      | Optional | cannot be null | [End of fishing activity](end-of-fishing-properties-entry_datetime.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/entry_datetime") |
| [revision](#revision)             | `string`      | Required | cannot be null | [End of fishing activity](end-of-fishing-properties-revision.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/revision")             |
| [immutable](#immutable)           | `boolean`     | Required | cannot be null | [End of fishing activity](end-of-fishing-properties-immutable.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/immutable")           |
| [remarks](#remarks)               | `string`      | Optional | cannot be null | [End of fishing activity](end-of-fishing-properties-remarks.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/remarks")               |
| [trip](#trip)                     | `object`      | Required | cannot be null | [End of fishing activity](arrival-properties-trip-entry.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip")                           |
| [activity_date](#activity_date)   | `string`      | Required | cannot be null | [End of fishing activity](end-of-fishing-properties-activity_date.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/activity_date")   |
| Additional Properties             | Not specified | Optional | cannot be null | [End of fishing activity](end-of-fishing-additionalproperties.md "https://poseidat.org/schema/entry/end-of-fishing.json#/additionalProperties")           |

## journal_id

The unique identifier of the journal (UUID v4) this entry belongs to

`journal_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [End of fishing activity](end-of-fishing-properties-journal_id.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/journal_id")

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

*   defined in: [End of fishing activity](end-of-fishing-properties-entry_id.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/entry_id")

### entry_id Type

`string`

### entry_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## entry_type



`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [End of fishing activity](end-of-fishing-properties-entry_type.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**constant**: the value of this property must be equal to:

```json
"end-of-fishing"
```

## entry_datetime

The date and time the entry was logged in UTC in RFC3339 format

`entry_datetime`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [End of fishing activity](end-of-fishing-properties-entry_datetime.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/entry_datetime")

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

*   defined in: [End of fishing activity](end-of-fishing-properties-revision.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/revision")

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

*   defined in: [End of fishing activity](end-of-fishing-properties-immutable.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/immutable")

### immutable Type

`boolean`

## remarks

Free form remarks that are to be added to this journal entry

`remarks`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [End of fishing activity](end-of-fishing-properties-remarks.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/remarks")

### remarks Type

`string`

## trip

The trip related details of a journal entry

`trip`

*   is required

*   Type: `object` ([Trip entry](arrival-properties-trip-entry.md))

*   cannot be null

*   defined in: [End of fishing activity](arrival-properties-trip-entry.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip")

### trip Type

`object` ([Trip entry](arrival-properties-trip-entry.md))

## activity_date



`activity_date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [End of fishing activity](end-of-fishing-properties-activity_date.md "https://poseidat.org/schema/entry/end-of-fishing.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**pattern**: the string must match the following regular expression: 

```regexp
^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:[0-5]\d(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$
```

[try pattern](https://regexr.com/?expression=%5E%5Cd%7B4%7D-%5Cd%7B2%7D-%5Cd%7B2%7DT%5Cd%7B2%7D%3A%5Cd%7B2%7D%3A%5B0-5%5D%5Cd\(%3F%3A%5C.%5Cd%2B\)%3F\(%3F%3AZ%7C%5B%2B-%5D%5Cd%7B2%7D%3A%5Cd%7B2%7D\)%24 "try regular expression with regexr.com")

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [End of fishing activity](end-of-fishing-additionalproperties.md "https://poseidat.org/schema/entry/end-of-fishing.json#/additionalProperties")

### additionalProperties Type

unknown
