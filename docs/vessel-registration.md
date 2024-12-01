# Vessel registration Schema

```txt
https://poseidat.org/schema/entry/vessel-registration.json
```

An entry detailing the registered details of a vessel like hull number, flag state, etc. Only 1 should exist per journal

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vessel-registration.json](schemas/entry/vessel-registration.json "open original schema") |

## Vessel registration Type

`object` ([Vessel registration](vessel-registration.md))

all of

*   [Base entry](arrival-allof-base-entry.md "check type definition")

# Vessel registration Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [Vessel registration](vessel-registration-properties-entry_type.md "https://poseidat.org/schema/entry/vessel-registration.json#/properties/entry_type") |
| [vessel](#vessel)         | `object` | Required | cannot be null | [Vessel registration](vessel-registration-properties-vessel.md "https://poseidat.org/schema/core/vessel.json#/properties/vessel")                       |
| Additional Properties     | Any      | Optional | can be null    |                                                                                                                                                         |

## entry_type

The journal entry type identifier

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel registration](vessel-registration-properties-entry_type.md "https://poseidat.org/schema/entry/vessel-registration.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"vessel-registration"` |             |

### entry_type Default Value

The default value is:

```json
"vessel-registration"
```

## vessel

The vessel information

`vessel`

*   is required

*   Type: `object` ([Vessel](vessel-registration-properties-vessel.md))

*   cannot be null

*   defined in: [Vessel registration](vessel-registration-properties-vessel.md "https://poseidat.org/schema/core/vessel.json#/properties/vessel")

### vessel Type

`object` ([Vessel](vessel-registration-properties-vessel.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
