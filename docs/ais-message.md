# AIS message Schema

```txt
https://poseidat.org/schema/core/entry/ais-message.json
```

The message received or send by an AIS device

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [ais-message.json](schemas/entry/ais-message.json "open original schema") |

## AIS message Type

`object` ([AIS message](ais-message.md))

all of

*   [Base entry](ais-message-allof-base-entry.md "check type definition")

# AIS message Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                           |
| :------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [AIS message](ais-message-properties-entry_type.md "https://poseidat.org/schema/core/entry/ais-message.json#/properties/entry_type") |
| [device_id](#device_id)   | `string` | Required | cannot be null | [AIS message](ais-message-properties-device_id.md "https://poseidat.org/schema/core/entry/ais-message.json#/properties/device_id")   |
| Additional Properties     | Any      | Optional | can be null    |                                                                                                                                      |

## entry_type

The journal entry type identifer

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [AIS message](ais-message-properties-entry_type.md "https://poseidat.org/schema/core/entry/ais-message.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"ais-message"` |             |

### entry_type Default Value

The default value is:

```json
"ais-message"
```

## device_id

The unique identifier for the device

`device_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [AIS message](ais-message-properties-device_id.md "https://poseidat.org/schema/core/entry/ais-message.json#/properties/device_id")

### device_id Type

`string`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
