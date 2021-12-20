# DGNSS corrections provided by a base station Schema

```txt
https://poseidat.org/schema/core/ais-message/dgnss-broadcast-message.json
```

Global navigation satellite system corrections provided by a base station

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [dgnss-broadcast-message.json](schemas/core/ais-message/dgnss-broadcast-message.json "open original schema") |

## DGNSS corrections provided by a base station Type

`object` ([DGNSS corrections provided by a base station](dgnss-broadcast-message.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# DGNSS corrections provided by a base station Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                      |
| :------------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type) | `string` | Required | cannot be null | [DGNSS corrections provided by a base station](dgnss-broadcast-message-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/dgnss-broadcast-message.json#/properties/ais_message_type") |
| [position](#position)                 | `object` | Required | cannot be null | [DGNSS corrections provided by a base station](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")                                             |
| [data](#data)                         | `string` | Required | cannot be null | [DGNSS corrections provided by a base station](dgnss-broadcast-message-properties-data.md "https://poseidat.org/schema/core/ais-message/dgnss-broadcast-message.json#/properties/data")                         |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [DGNSS corrections provided by a base station](dgnss-broadcast-message-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/dgnss-broadcast-message.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                       | Explanation |
| :-------------------------- | :---------- |
| `"DGNSS_BROADCAST_MESSAGE"` |             |

### ais_message_type Default Value

The default value is:

```json
"DGNSS_BROADCAST_MESSAGE"
```

## position

A navigational position that can be used in an entry

`position`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [DGNSS corrections provided by a base station](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/position")

### position Type

`object` ([Position](trip-entry-properties-position.md))

## data

DGNSS correction data in text

`data`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [DGNSS corrections provided by a base station](dgnss-broadcast-message-properties-data.md "https://poseidat.org/schema/core/ais-message/dgnss-broadcast-message.json#/properties/data")

### data Type

`string`
