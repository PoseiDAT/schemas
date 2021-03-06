# BaseEntry Schema

```txt
https://poseidat.org/schema/core/base-entry.json#/allOf/0
```

The shared properties for all entries


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement.json\*](schemas/entry/sensor/measurement.json "open original schema") |

## 0 Type

`object` ([BaseEntry](measurement-allof-baseentry.md))

# BaseEntry Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                      |
| :------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| [journal_id](#journal_id) | `string`  | Required | cannot be null | [BaseEntry](base-entry-properties-journal_id.md "https&#x3A;//poseidat.org/schema/core/base-entry.json#/properties/journal_id") |
| [entry_id](#entry_id)     | `string`  | Required | cannot be null | [BaseEntry](base-entry-properties-entry_id.md "https&#x3A;//poseidat.org/schema/core/base-entry.json#/properties/entry_id")     |
| [revision](#revision)     | `string`  | Required | cannot be null | [BaseEntry](base-entry-properties-revision.md "https&#x3A;//poseidat.org/schema/core/base-entry.json#/properties/revision")     |
| [immutable](#immutable)   | `boolean` | Required | cannot be null | [BaseEntry](base-entry-properties-immutable.md "https&#x3A;//poseidat.org/schema/core/base-entry.json#/properties/immutable")   |

## journal_id

The unique identifier of the journal (UUID v4) this entry belongs to


`journal_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [BaseEntry](base-entry-properties-journal_id.md "https&#x3A;//poseidat.org/schema/core/base-entry.json#/properties/journal_id")

### journal_id Type

`string`

### journal_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## entry_id

The unique identifier for the entry (UUID v4)


`entry_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [BaseEntry](base-entry-properties-entry_id.md "https&#x3A;//poseidat.org/schema/core/base-entry.json#/properties/entry_id")

### entry_id Type

`string`

### entry_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## revision

The revision timestamp of this entry. Should be the time it was created.


`revision`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [BaseEntry](base-entry-properties-revision.md "https&#x3A;//poseidat.org/schema/core/base-entry.json#/properties/revision")

### revision Type

`string`

### revision Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## immutable

Indicates this entry cannot be replaced with future revisions (default)


`immutable`

-   is required
-   Type: `boolean`
-   cannot be null
-   defined in: [BaseEntry](base-entry-properties-immutable.md "https&#x3A;//poseidat.org/schema/core/base-entry.json#/properties/immutable")

### immutable Type

`boolean`
