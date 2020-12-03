# End of fishing activity Schema

```txt
https://poseidat.org/schema/entry/fishing-activity.json
```

Notification of intent to cease all fishing activity for the trip


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fishing-activity.json](schemas/entry/fishing-activity.json "open original schema") |

## End of fishing activity Type

`object` ([End of fishing activity](fishing-activity.md))

all of

-   [BaseEntry](arrival-allof-baseentry.md "check type definition")

# End of fishing activity Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                 |
| :------------------------ | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [End of fishing activity](fishing-activity-properties-entry_type.md "https&#x3A;//poseidat.org/schema/entry/fishing-activity.json#/properties/entry_type") |
| [trip](#trip)             | `object` | Required | cannot be null | [End of fishing activity](arrival-properties-trip.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip")                             |
| [tow](#tow)               | `object` | Required | cannot be null | [End of fishing activity](fishing-activity-properties-tow.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/tow")                     |

## entry_type

The journal entry type identifer


`entry_type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [End of fishing activity](fishing-activity-properties-entry_type.md "https&#x3A;//poseidat.org/schema/entry/fishing-activity.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | ----------- |
| `"fishing-activity"` |             |

### entry_type Default Value

The default value is:

```json
"fishing-activity"
```

## trip

The trip related details of a journal entry


`trip`

-   is required
-   Type: `object` ([Details](arrival-properties-trip.md))
-   cannot be null
-   defined in: [End of fishing activity](arrival-properties-trip.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip")

### trip Type

`object` ([Details](arrival-properties-trip.md))

## tow

Fishing tow details


`tow`

-   is required
-   Type: `object` ([Details](fishing-activity-properties-tow.md))
-   cannot be null
-   defined in: [End of fishing activity](fishing-activity-properties-tow.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/tow")

### tow Type

`object` ([Details](fishing-activity-properties-tow.md))
