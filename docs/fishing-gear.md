# Untitled object in undefined Schema

```txt
https://poseidat.org/schema/core/fishing-gear.json
```

Fishing gear details


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-gear.json](schemas/core/fishing-gear.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](fishing-gear.md))

# undefined Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :---------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [code](#code)           | `string` | Required | cannot be null | [Untitled schema](fishing-gear-properties-code.md "https&#x3A;//poseidat.org/schema/enum/fishing-gear-type.json#/properties/code")      |
| [mesh_size](#mesh_size) | `number` | Optional | cannot be null | [Untitled schema](fishing-gear-properties-mesh_size.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/mesh_size") |
| [amount](#amount)       | `number` | Optional | cannot be null | [Untitled schema](fishing-gear-properties-amount.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/amount")       |
| [length](#length)       | `number` | Optional | cannot be null | [Untitled schema](fishing-gear-properties-length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/length")       |

## code

Fishing gear type codes. Example: TBB, PS


`code`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-gear-properties-code.md "https&#x3A;//poseidat.org/schema/enum/fishing-gear-type.json#/properties/code")

### code Type

`string`

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
-   defined in: [Untitled schema](fishing-gear-properties-mesh_size.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/mesh_size")

### mesh_size Type

`number`

## amount

The number of fishing gear items. NLD: NN, GBR: GBRGNL


`amount`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Untitled schema](fishing-gear-properties-amount.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/amount")

### amount Type

`number`

## length

The total length of the fishing gear in meters. NLD: TL, GBR: GBRGNT


`length`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Untitled schema](fishing-gear-properties-length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/length")

### length Type

`number`
