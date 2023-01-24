# Fishing activity Schema

```txt
https://poseidat.org/schema/entry/fishing-activity.json
```

Notification of intent to cease all fishing activity for the trip

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-activity.json](schemas/entry/fishing-activity.json "open original schema") |

## Fishing activity Type

`object` ([Fishing activity](fishing-activity.md))

all of

*   [Base entry](arrival-allof-base-entry.md "check type definition")

# Fishing activity Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [Fishing activity](fishing-activity-properties-entry_type.md "https://poseidat.org/schema/entry/fishing-activity.json#/properties/entry_type") |
| [trip](#trip)             | `object` | Required | cannot be null | [Fishing activity](arrival-properties-trip-entry.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip")                       |
| [tow](#tow)               | `object` | Required | cannot be null | [Fishing activity](fishing-activity-properties-fishing-tow.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/tow")             |
| Additional Properties     | Any      | Optional | can be null    |                                                                                                                                                |

## entry_type

The journal entry type identifier

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Fishing activity](fishing-activity-properties-entry_type.md "https://poseidat.org/schema/entry/fishing-activity.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"fishing-activity"` |             |

### entry_type Default Value

The default value is:

```json
"fishing-activity"
```

## trip

The trip related details of a journal entry

`trip`

*   is required

*   Type: `object` ([Trip entry](arrival-properties-trip-entry.md))

*   cannot be null

*   defined in: [Fishing activity](arrival-properties-trip-entry.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip")

### trip Type

`object` ([Trip entry](arrival-properties-trip-entry.md))

## tow

Fishing tow details

`tow`

*   is required

*   Type: `object` ([Fishing tow](fishing-activity-properties-fishing-tow.md))

*   cannot be null

*   defined in: [Fishing activity](fishing-activity-properties-fishing-tow.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/tow")

### tow Type

`object` ([Fishing tow](fishing-activity-properties-fishing-tow.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
