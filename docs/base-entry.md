# Base entry Schema

```txt
https://poseidat.org/schema/core/base-entry.json
```

The shared properties for all entries

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [base-entry.json](schemas/core/base-entry.json "open original schema") |

## Base entry Type

`object` ([Base entry](base-entry.md))

# Base entry Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                          |
| :-------------------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [journal_id](#journal_id)         | `string`      | Required | cannot be null | [Base entry](base-entry-properties-journal_id.md "https://poseidat.org/schema/core/base-entry.json#/properties/journal_id")         |
| [entry_id](#entry_id)             | `string`      | Required | cannot be null | [Base entry](base-entry-properties-entry_id.md "https://poseidat.org/schema/core/base-entry.json#/properties/entry_id")             |
| [entry_type](#entry_type)         | `string`      | Required | cannot be null | [Base entry](base-entry-properties-entry_type.md "https://poseidat.org/schema/core/base-entry.json#/properties/entry_type")         |
| [entry_datetime](#entry_datetime) | `string`      | Optional | cannot be null | [Base entry](base-entry-properties-entry_datetime.md "https://poseidat.org/schema/core/base-entry.json#/properties/entry_datetime") |
| [revision](#revision)             | `string`      | Required | cannot be null | [Base entry](base-entry-properties-revision.md "https://poseidat.org/schema/core/base-entry.json#/properties/revision")             |
| [immutable](#immutable)           | `boolean`     | Required | cannot be null | [Base entry](base-entry-properties-immutable.md "https://poseidat.org/schema/core/base-entry.json#/properties/immutable")           |
| [remarks](#remarks)               | `string`      | Optional | cannot be null | [Base entry](base-entry-properties-remarks.md "https://poseidat.org/schema/core/base-entry.json#/properties/remarks")               |
| Additional Properties             | Not specified | Optional | cannot be null | [Base entry](base-entry-additionalproperties.md "https://poseidat.org/schema/core/base-entry.json#/additionalProperties")           |

## journal_id

The unique identifier of the journal (UUID v4) this entry belongs to

`journal_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Base entry](base-entry-properties-journal_id.md "https://poseidat.org/schema/core/base-entry.json#/properties/journal_id")

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

*   defined in: [Base entry](base-entry-properties-entry_id.md "https://poseidat.org/schema/core/base-entry.json#/properties/entry_id")

### entry_id Type

`string`

### entry_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## entry_type

The journal entry type identifier

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Base entry](base-entry-properties-entry_type.md "https://poseidat.org/schema/core/base-entry.json#/properties/entry_type")

### entry_type Type

`string`

## entry_datetime

The date and time the entry was logged in UTC in RFC3339 format

`entry_datetime`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Base entry](base-entry-properties-entry_datetime.md "https://poseidat.org/schema/core/base-entry.json#/properties/entry_datetime")

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

*   defined in: [Base entry](base-entry-properties-revision.md "https://poseidat.org/schema/core/base-entry.json#/properties/revision")

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

*   defined in: [Base entry](base-entry-properties-immutable.md "https://poseidat.org/schema/core/base-entry.json#/properties/immutable")

### immutable Type

`boolean`

## remarks

Free form remarks that are to be added to this journal entry

`remarks`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Base entry](base-entry-properties-remarks.md "https://poseidat.org/schema/core/base-entry.json#/properties/remarks")

### remarks Type

`string`

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Base entry](base-entry-additionalproperties.md "https://poseidat.org/schema/core/base-entry.json#/additionalProperties")

### additionalProperties Type

unknown
