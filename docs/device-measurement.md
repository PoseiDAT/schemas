# Device measurement Schema

```txt
https://poseidat.org/schema/entry/device-measurement.json
```

A device measurement journal entry

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [device-measurement.json](schemas/entry/device-measurement.json "open original schema") |

## Device measurement Type

`object` ([Device measurement](device-measurement.md))

# Device measurement Properties

| Property                          | Type          | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------------------- | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [journal_id](#journal_id)         | `string`      | Required | cannot be null | [Device measurement](device-measurement-properties-journal_id.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/journal_id")             |
| [entry_id](#entry_id)             | `string`      | Required | cannot be null | [Device measurement](device-measurement-properties-entry_id.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/entry_id")                 |
| [entry_type](#entry_type)         | `string`      | Required | cannot be null | [Device measurement](device-measurement-properties-entry_type.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/entry_type")             |
| [entry_datetime](#entry_datetime) | `string`      | Optional | cannot be null | [Device measurement](device-measurement-properties-entry_datetime.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/entry_datetime")     |
| [revision](#revision)             | `string`      | Required | cannot be null | [Device measurement](device-measurement-properties-revision.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/revision")                 |
| [immutable](#immutable)           | `boolean`     | Required | cannot be null | [Device measurement](device-measurement-properties-immutable.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/immutable")               |
| [remarks](#remarks)               | `string`      | Optional | cannot be null | [Device measurement](device-measurement-properties-remarks.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/remarks")                   |
| [device_id](#device_id)           | `string`      | Required | cannot be null | [Device measurement](device-measurement-properties-device_id.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/device_id")               |
| [value](#value)                   | Merged        | Required | cannot be null | [Device measurement](device-measurement-properties-measurement-value.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/properties/value") |
| Additional Properties             | Not specified | Optional | cannot be null | [Device measurement](device-measurement-additionalproperties.md "https://poseidat.org/schema/entry/device-measurement.json#/additionalProperties")               |

## journal_id

The unique identifier of the journal (UUID v4) this entry belongs to

`journal_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device measurement](device-measurement-properties-journal_id.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/journal_id")

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

*   defined in: [Device measurement](device-measurement-properties-entry_id.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/entry_id")

### entry_id Type

`string`

### entry_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## entry_type



`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device measurement](device-measurement-properties-entry_type.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**constant**: the value of this property must be equal to:

```json
"device-measurement"
```

## entry_datetime

The date and time the entry was logged in UTC in RFC3339 format

`entry_datetime`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device measurement](device-measurement-properties-entry_datetime.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/entry_datetime")

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

*   defined in: [Device measurement](device-measurement-properties-revision.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/revision")

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

*   defined in: [Device measurement](device-measurement-properties-immutable.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/immutable")

### immutable Type

`boolean`

## remarks

Free form remarks that are to be added to this journal entry

`remarks`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device measurement](device-measurement-properties-remarks.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/remarks")

### remarks Type

`string`

## device_id



`device_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device measurement](device-measurement-properties-device_id.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/device_id")

### device_id Type

`string`

## value

The value of a certain type of measurement

`value`

*   is required

*   Type: merged type ([Measurement value](device-measurement-properties-measurement-value.md))

*   cannot be null

*   defined in: [Device measurement](device-measurement-properties-measurement-value.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/properties/value")

### value Type

merged type ([Measurement value](device-measurement-properties-measurement-value.md))

one (and only one) of

*   [Untitled object in Measurement value](measurement-value-oneof-0.md "check type definition")

*   [Untitled object in Measurement value](measurement-value-oneof-1.md "check type definition")

*   [Untitled object in Measurement value](measurement-value-oneof-2.md "check type definition")

*   [Untitled object in Measurement value](measurement-value-oneof-3.md "check type definition")

*   [Untitled object in Measurement value](measurement-value-oneof-4.md "check type definition")

*   [Untitled object in Measurement value](measurement-value-oneof-5.md "check type definition")

*   [Untitled object in Measurement value](measurement-value-oneof-6.md "check type definition")

*   [Untitled object in Measurement value](measurement-value-oneof-7.md "check type definition")

*   [Untitled object in Measurement value](measurement-value-oneof-8.md "check type definition")

## Additional Properties

Additional properties are allowed, as long as they follow this schema:



*   is optional

*   Type: unknown

*   cannot be null

*   defined in: [Device measurement](device-measurement-additionalproperties.md "https://poseidat.org/schema/entry/device-measurement.json#/additionalProperties")

### additionalProperties Type

unknown
