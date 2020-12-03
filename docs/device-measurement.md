# Device measurement Schema

```txt
https://poseidat.org/schema/entry/device-measurement.json
```

A device measurement journal entry


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device-measurement.json](schemas/entry/device-measurement.json "open original schema") |

## Device measurement Type

`object` ([Device measurement](device-measurement.md))

all of

-   [Base entry](arrival-allof-base-entry.md "check type definition")

# Device measurement Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                |
| :------------------------ | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [Device measurement](device-measurement-properties-entry_type.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/entry_type") |
| [device_id](#device_id)   | `string` | Required | cannot be null | [Device measurement](device-measurement-properties-device_id.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/device_id")   |
| [value](#value)           | `number` | Required | cannot be null | [Device measurement](device-measurement-properties-value.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/value")           |
| [timestamp](#timestamp)   | `string` | Required | cannot be null | [Device measurement](device-measurement-properties-timestamp.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/timestamp")   |

## entry_type

The journal entry type identifer


`entry_type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Device measurement](device-measurement-properties-entry_type.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | ----------- |
| `"device-measurement"` |             |

### entry_type Default Value

The default value is:

```json
"device-measurement"
```

## device_id

The unique identifier for the device


`device_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Device measurement](device-measurement-properties-device_id.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/device_id")

### device_id Type

`string`

## value

The registered measurement for the device


`value`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Device measurement](device-measurement-properties-value.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/value")

### value Type

`number`

## timestamp

The date and time the value was recorded in UTC in RFC3339 format


`timestamp`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Device measurement](device-measurement-properties-timestamp.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/timestamp")

### timestamp Type

`string`

### timestamp Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
