# AIS DGNSS data Schema

```txt
https://poseidat.org/schema/core/ais-DGNSS-data.json
```

AIS DGNSS data send with an AIS message

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ais-DGNSS-data.json](schemas/core/ais-DGNSS-data.json "open original schema") |

## AIS DGNSS data Type

`object` ([AIS DGNSS data](ais-dgnss-data.md))

# AIS DGNSS data Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                        |
| :---------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [z_count](#z_count)                 | `number` | Optional | cannot be null | [AIS DGNSS data](ais-dgnss-data-properties-z_count.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/z_count")                 |
| [sequence_number](#sequence_number) | `number` | Optional | cannot be null | [AIS DGNSS data](ais-dgnss-data-properties-sequence_number.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/sequence_number") |
| [number_of_words](#number_of_words) | `number` | Optional | cannot be null | [AIS DGNSS data](ais-dgnss-data-properties-number_of_words.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/number_of_words") |
| [health](#health)                   | `number` | Optional | cannot be null | [AIS DGNSS data](ais-dgnss-data-properties-health.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/health")                   |
| [DGNSS_data](#dgnss_data)           | `string` | Optional | cannot be null | [AIS DGNSS data](ais-dgnss-data-properties-dgnss_data.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/DGNSS_data")           |

## z_count

Time value in 0.6 s (0-3 599.4)

`z_count`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS DGNSS data](ais-dgnss-data-properties-z_count.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/z_count")

### z_count Type

`number`

## sequence_number

Message sequence number (cyclic 0-7)

`sequence_number`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS DGNSS data](ais-dgnss-data-properties-sequence_number.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/sequence_number")

### sequence_number Type

`number`

## number_of_words

The number of words in the GNSS data message

`number_of_words`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS DGNSS data](ais-dgnss-data-properties-number_of_words.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/number_of_words")

### number_of_words Type

`number`

## health

The station health

`health`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS DGNSS data](ais-dgnss-data-properties-health.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/health")

### health Type

`number`

## DGNSS_data

DGNSS message data words excluding parity

`DGNSS_data`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS DGNSS data](ais-dgnss-data-properties-dgnss_data.md "https://poseidat.org/schema/core/ais-DGNSS-data.json#/properties/DGNSS_data")

### DGNSS_data Type

`string`
