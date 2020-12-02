# Untitled object in Departure Schema

```txt
https://poseidat.org/schema/core/fishing-gear.json#/properties/gear_on_board/items
```

Fishing gear details


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [departure.json\*](schemas/entry/departure.json "open original schema") |

## items Type

`object` ([Details](departure-properties-gear_on_board-items.md))

# undefined Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                              |
| :---------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [code](#code)           | `string` | Required | cannot be null | [Untitled schema](fishing-gear-properties-code.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/code")           |
| [mesh_size](#mesh_size) | `number` | Optional | cannot be null | [Untitled schema](fishing-gear-properties-mesh_size.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/mesh_size") |
| [amount](#amount)       | `number` | Optional | cannot be null | [Untitled schema](fishing-gear-properties-amount.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/amount")       |
| [length](#length)       | `number` | Optional | cannot be null | [Untitled schema](fishing-gear-properties-length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/length")       |

## code

Gear code corresponding to the FAO’s International Standard Statistical Classification of the Fishing Gear. NLD: GE, GBR: GE


`code`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-gear-properties-code.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/code")

### code Type

`string`

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
