# Arrival Schema

```txt
https://poseidat.org/schema/entry/arrival.json
```

A return to port event


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [arrival.json](schemas/entry/arrival.json "open original schema") |

## Arrival Type

`object` ([Arrival](arrival.md))

all of

-   [BaseEntry](arrival-allof-baseentry.md "check type definition")

# Arrival Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                             |
| :-------------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [trip](#trip)                     | `object` | Required | cannot be null | [Arrival](arrival-properties-trip.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip")                         |
| [activity_date](#activity_date)   | `string` | Required | cannot be null | [Arrival](arrival-properties-activity_date.md "https&#x3A;//poseidat.org/schema/entry/arrival.json#/properties/activity_date")         |
| [port](#port)                     | `object` | Required | cannot be null | [Arrival](arrival-properties-port.md "https&#x3A;//poseidat.org/schema/core/port.json#/properties/port")                               |
| [reason_arrival](#reason_arrival) | `string` | Required | cannot be null | [Arrival](arrival-properties-reason_arrival.md "https&#x3A;//poseidat.org/schema/enum/reason-arrival.json#/properties/reason_arrival") |
| [catch_on_board](#catch_on_board) | `array`  | Optional | cannot be null | [Arrival](arrival-properties-catch_on_board.md "https&#x3A;//poseidat.org/schema/entry/arrival.json#/properties/catch_on_board")       |

## trip

The trip related details of a journal entry


`trip`

-   is required
-   Type: `object` ([Details](arrival-properties-trip.md))
-   cannot be null
-   defined in: [Arrival](arrival-properties-trip.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip")

### trip Type

`object` ([Details](arrival-properties-trip.md))

## activity_date

The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA


`activity_date`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Arrival](arrival-properties-activity_date.md "https&#x3A;//poseidat.org/schema/entry/arrival.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## port

Fishing port details


`port`

-   is required
-   Type: `object` ([Details](arrival-properties-port.md))
-   cannot be null
-   defined in: [Arrival](arrival-properties-port.md "https&#x3A;//poseidat.org/schema/core/port.json#/properties/port")

### port Type

`object` ([Details](arrival-properties-port.md))

## reason_arrival

The reason for the vessel to return to port. Please check the wiki for the meaning of these codes.


`reason_arrival`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Arrival](arrival-properties-reason_arrival.md "https&#x3A;//poseidat.org/schema/enum/reason-arrival.json#/properties/reason_arrival")

### reason_arrival Type

`string`

### reason_arrival Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | ----------- |
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

-   is optional
-   Type: `object[]` ([Details](arrival-properties-catch_on_board-items.md))
-   cannot be null
-   defined in: [Arrival](arrival-properties-catch_on_board.md "https&#x3A;//poseidat.org/schema/entry/arrival.json#/properties/catch_on_board")

### catch_on_board Type

`object[]` ([Details](arrival-properties-catch_on_board-items.md))
