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

all of

*   [Base entry](arrival-allof-base-entry.md "check type definition")

# Device measurement Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [Device measurement](device-measurement-properties-entry_type.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/entry_type")             |
| [device_id](#device_id)   | `string` | Required | cannot be null | [Device measurement](device-measurement-properties-device_id.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/device_id")               |
| [value](#value)           | Merged   | Required | cannot be null | [Device measurement](device-measurement-properties-measurement-value.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/properties/value") |
| Additional Properties     | Any      | Optional | can be null    |                                                                                                                                                                  |

## entry_type

The journal entry type identifer

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device measurement](device-measurement-properties-entry_type.md "https://poseidat.org/schema/entry/device-measurement.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | :---------- |
| `"device-measurement"` |             |

### entry_type Default Value

The default value is:

```json
"device-measurement"
```

## device_id

The unique identifier for the device

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

*   Type: `object` ([Measurement value](device-measurement-properties-measurement-value.md))

*   cannot be null

*   defined in: [Device measurement](device-measurement-properties-measurement-value.md "https://poseidat.org/schema/core/measurement/measurement-value.json#/properties/value")

### value Type

`object` ([Measurement value](device-measurement-properties-measurement-value.md))

one (and only one) of

*   [Untitled undefined type in Measurement value](measurement-value-oneof-0.md "check type definition")

*   [Untitled undefined type in Measurement value](measurement-value-oneof-1.md "check type definition")

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
