# Fishing gear Schema

```txt
https://poseidat.org/schema/core/fishing-gear.json#/properties/gear_on_board/items
```

Fishing gear details


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [departure.json\*](schemas/entry/departure.json "open original schema") |

## items Type

`object` ([Fishing gear](departure-properties-gear-on-board-fishing-gear.md))

# Fishing gear Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                   |
| :---------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| [code](#code)           | `string` | Required | cannot be null | [Fishing gear](fishing-gear-properties-fishing-gear-type.md "https&#x3A;//poseidat.org/schema/enum/fishing-gear-type.json#/properties/code") |
| [mesh_size](#mesh_size) | `number` | Optional | cannot be null | [Fishing gear](fishing-gear-properties-mesh_size.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/mesh_size")         |
| [amount](#amount)       | `number` | Optional | cannot be null | [Fishing gear](fishing-gear-properties-amount.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/amount")               |
| [length](#length)       | `number` | Optional | cannot be null | [Fishing gear](fishing-gear-properties-length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/length")               |

## code

Fishing gear type codes. Example: TBB, PS


`code`

-   is required
-   Type: `string` ([Fishing gear type](fishing-gear-properties-fishing-gear-type.md))
-   cannot be null
-   defined in: [Fishing gear](fishing-gear-properties-fishing-gear-type.md "https&#x3A;//poseidat.org/schema/enum/fishing-gear-type.json#/properties/code")

### code Type

`string` ([Fishing gear type](fishing-gear-properties-fishing-gear-type.md))

### code Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | ----------- |
| `"DRB"` |             |
| `"FIX"` |             |
| `"FPO"` |             |
| `"GEN"` |             |
| `"GN"`  |             |
| `"GNC"` |             |
| `"GND"` |             |
| `"GNF"` |             |
| `"GNS"` |             |
| `"GTN"` |             |
| `"GTR"` |             |
| `"HMD"` |             |
| `"KRK"` |             |
| `"LA"`  |             |
| `"LHM"` |             |
| `"LHP"` |             |
| `"LL"`  |             |
| `"LLD"` |             |
| `"LLS"` |             |
| `"LTL"` |             |
| `"LX"`  |             |
| `"MIS"` |             |
| `"NK"`  |             |
| `"OTB"` |             |
| `"OTM"` |             |
| `"OTT"` |             |
| `"PS"`  |             |
| `"PS1"` |             |
| `"PS2"` |             |
| `"PTB"` |             |
| `"PTM"` |             |
| `"PUL"` |             |
| `"RG"`  |             |
| `"SDN"` |             |
| `"SPR"` |             |
| `"SSC"` |             |
| `"SV"`  |             |
| `"SX"`  |             |
| `"TB"`  |             |
| `"TBB"` |             |
| `"TBN"` |             |
| `"TBS"` |             |

## mesh_size

The fishing gear mesh size measured in millimeters. NLD: ME, GBR: ME


`mesh_size`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Fishing gear](fishing-gear-properties-mesh_size.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/mesh_size")

### mesh_size Type

`number`

## amount

The number of fishing gear items. NLD: NN, GBR: GBRGNL


`amount`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Fishing gear](fishing-gear-properties-amount.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/amount")

### amount Type

`number`

## length

The total length of the fishing gear in meters. NLD: TL, GBR: GBRGNT


`length`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Fishing gear](fishing-gear-properties-length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/length")

### length Type

`number`
