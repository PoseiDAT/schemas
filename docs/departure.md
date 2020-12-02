# Departure Schema

```txt
https://poseidat.org/schema/entry/departure.json
```

A departure from port event


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [departure.json](schemas/entry/departure.json "open original schema") |

## Departure Type

`object` ([Departure](departure.md))

all of

-   [BaseEntry](arrival-allof-baseentry.md "check type definition")

# Departure Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                   |
| :-------------------------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [trip](#trip)                                 | `object` | Required | cannot be null | [Departure](arrival-properties-trip.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip")                                             |
| [activity_date](#activity_date)               | `string` | Required | cannot be null | [Departure](departure-properties-activity_date.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/activity_date")                         |
| [port](#port)                                 | `object` | Required | cannot be null | [Departure](arrival-properties-port.md "https&#x3A;//poseidat.org/schema/core/port.json#/properties/port")                                                   |
| [anticipated_activity](#anticipated_activity) | `string` | Optional | cannot be null | [Departure](departure-properties-anticipated_activity.md "https&#x3A;//poseidat.org/schema/enum/anticipated-activity.json#/properties/anticipated_activity") |
| [gear_on_board](#gear_on_board)               | `array`  | Optional | cannot be null | [Departure](departure-properties-gear_on_board.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/gear_on_board")                         |
| [catch_on_board](#catch_on_board)             | `array`  | Optional | cannot be null | [Departure](departure-properties-catch_on_board.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/catch_on_board")                       |

## trip

The trip related details of a journal entry


`trip`

-   is required
-   Type: `object` ([Details](arrival-properties-trip.md))
-   cannot be null
-   defined in: [Departure](arrival-properties-trip.md "https&#x3A;//poseidat.org/schema/core/trip-entry.json#/properties/trip")

### trip Type

`object` ([Details](arrival-properties-trip.md))

## activity_date

The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA


`activity_date`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Departure](departure-properties-activity_date.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/activity_date")

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
-   defined in: [Departure](arrival-properties-port.md "https&#x3A;//poseidat.org/schema/core/port.json#/properties/port")

### port Type

`object` ([Details](arrival-properties-port.md))

## anticipated_activity

The anticipated activity for the fishing trip. Please check the wiki for the meaning of these codes.


`anticipated_activity`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Departure](departure-properties-anticipated_activity.md "https&#x3A;//poseidat.org/schema/enum/anticipated-activity.json#/properties/anticipated_activity")

### anticipated_activity Type

`string`

### anticipated_activity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | ----------- |
| `"STE"` |             |
| `"FIS"` |             |
| `"GUD"` |             |
| `"OTH"` |             |
| `"SCR"` |             |
| `"TST"` |             |

## gear_on_board

The gear present on board the vessel


`gear_on_board`

-   is optional
-   Type: `object[]` ([Details](departure-properties-gear_on_board-items.md))
-   cannot be null
-   defined in: [Departure](departure-properties-gear_on_board.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/gear_on_board")

### gear_on_board Type

`object[]` ([Details](departure-properties-gear_on_board-items.md))

### gear_on_board Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## catch_on_board

The previously caught fish present on board the vessel


`catch_on_board`

-   is optional
-   Type: `object[]` ([Details](departure-properties-catch_on_board-items.md))
-   cannot be null
-   defined in: [Departure](departure-properties-catch_on_board.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/catch_on_board")

### catch_on_board Type

`object[]` ([Details](departure-properties-catch_on_board-items.md))
