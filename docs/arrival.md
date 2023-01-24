# Arrival Schema

```txt
https://poseidat.org/schema/entry/arrival.json
```

A return to port event

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [arrival.json](schemas/entry/arrival.json "open original schema") |

## Arrival Type

`object` ([Arrival](arrival.md))

all of

*   [Base entry](arrival-allof-base-entry.md "check type definition")

# Arrival Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                        |
| :-------------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type)         | `string` | Required | cannot be null | [Arrival](arrival-properties-entry_type.md "https://poseidat.org/schema/entry/arrival.json#/properties/entry_type")               |
| [trip](#trip)                     | `object` | Required | cannot be null | [Arrival](arrival-properties-trip-entry.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip")                   |
| [activity_date](#activity_date)   | `string` | Required | cannot be null | [Arrival](arrival-properties-activity_date.md "https://poseidat.org/schema/entry/arrival.json#/properties/activity_date")         |
| [port](#port)                     | `object` | Required | cannot be null | [Arrival](arrival-properties-port.md "https://poseidat.org/schema/core/port.json#/properties/port")                               |
| [reason_arrival](#reason_arrival) | `string` | Required | cannot be null | [Arrival](arrival-properties-reason-arrival.md "https://poseidat.org/schema/enum/reason-arrival.json#/properties/reason_arrival") |
| [catch_on_board](#catch_on_board) | `array`  | Optional | cannot be null | [Arrival](arrival-properties-catch-on-board.md "https://poseidat.org/schema/entry/arrival.json#/properties/catch_on_board")       |
| Additional Properties             | Any      | Optional | can be null    |                                                                                                                                   |

## entry_type

The journal entry type identifier

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Arrival](arrival-properties-entry_type.md "https://poseidat.org/schema/entry/arrival.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"arrival"` |             |

### entry_type Default Value

The default value is:

```json
"arrival"
```

## trip

The trip related details of a journal entry

`trip`

*   is required

*   Type: `object` ([Trip entry](arrival-properties-trip-entry.md))

*   cannot be null

*   defined in: [Arrival](arrival-properties-trip-entry.md "https://poseidat.org/schema/core/trip-entry.json#/properties/trip")

### trip Type

`object` ([Trip entry](arrival-properties-trip-entry.md))

## activity_date

The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA

`activity_date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Arrival](arrival-properties-activity_date.md "https://poseidat.org/schema/entry/arrival.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## port

Fishing port details

`port`

*   is required

*   Type: `object` ([Port](arrival-properties-port.md))

*   cannot be null

*   defined in: [Arrival](arrival-properties-port.md "https://poseidat.org/schema/core/port.json#/properties/port")

### port Type

`object` ([Port](arrival-properties-port.md))

## reason_arrival

The reason for the vessel to return to port. Please check the wiki for the meaning of these codes.

`reason_arrival`

*   is required

*   Type: `string` ([Reason arrival](arrival-properties-reason-arrival.md))

*   cannot be null

*   defined in: [Arrival](arrival-properties-reason-arrival.md "https://poseidat.org/schema/enum/reason-arrival.json#/properties/reason_arrival")

### reason_arrival Type

`string` ([Reason arrival](arrival-properties-reason-arrival.md))

### reason_arrival Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"ECY"` |             |
| `"GRD"` |             |
| `"LAN"` |             |
| `"OTH"` |             |
| `"REF"` |             |
| `"REP"` |             |
| `"RES"` |             |
| `"SCR"` |             |
| `"SHE"` |             |
| `"TRA"` |             |

## catch_on_board

The caught fish present on board the vessel

`catch_on_board`

*   is optional

*   Type: `object[]` ([Fishing catch](arrival-properties-catch-on-board-fishing-catch.md))

*   cannot be null

*   defined in: [Arrival](arrival-properties-catch-on-board.md "https://poseidat.org/schema/entry/arrival.json#/properties/catch_on_board")

### catch_on_board Type

`object[]` ([Fishing catch](arrival-properties-catch-on-board-fishing-catch.md))

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
