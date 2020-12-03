# Vessel partner Schema

```txt
https://poseidat.org/schema/core/vessel-partner.json
```

Fishing vessel details for partnered fishing


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vessel-partner.json](schemas/core/vessel-partner.json "open original schema") |

## Vessel partner Type

`object` ([Vessel partner](vessel-partner.md))

# Vessel partner Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :-------------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [hull_number](#hull_number) | `string` | Required | cannot be null | [Vessel partner](vessel-partner-properties-hull_number.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/hull_number") |
| [rss](#rss)                 | `string` | Optional | cannot be null | [Vessel partner](vessel-partner-properties-rss.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/rss")                 |
| [cfr](#cfr)                 | `string` | Optional | cannot be null | [Vessel partner](vessel-partner-properties-cfr.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/cfr")                 |
| [call_sign](#call_sign)     | `string` | Optional | cannot be null | [Vessel partner](vessel-partner-properties-call_sign.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/call_sign")     |
| [flag_state](#flag_state)   | `string` | Required | cannot be null | [Vessel partner](vessel-partner-properties-flag_state.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/flag_state")   |
| [name](#name)               | `string` | Optional | cannot be null | [Vessel partner](vessel-partner-properties-name.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/name")               |
| [master](#master)           | `object` | Optional | cannot be null | [Vessel partner](vessel-partner-properties-vessel-master.md "https&#x3A;//poseidat.org/schema/core/vessel-master.json#/properties/master")     |

## hull_number

The external markings of the vessel. NLD2+: XR, GBR: PXR


`hull_number`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Vessel partner](vessel-partner-properties-hull_number.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/hull_number")

### hull_number Type

`string`

## rss

The RSS identification code for the vessel. GBR: GBRPRSSNO


`rss`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Vessel partner](vessel-partner-properties-rss.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/rss")

### rss Type

`string`

## cfr

The code of federal regulation for the vessel. GBR: PIR


`cfr`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Vessel partner](vessel-partner-properties-cfr.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/cfr")

### cfr Type

`string`

## call_sign

The international radio call sign for the vessel. GBR: PRC


`call_sign`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Vessel partner](vessel-partner-properties-call_sign.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/call_sign")

### call_sign Type

`string`

## flag_state

Flag state of vessel registration. NLD2+: FS, GBR: PFS


`flag_state`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Vessel partner](vessel-partner-properties-flag_state.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/flag_state")

### flag_state Type

`string`

## name

The name of the vessel. NLD3+: NA, GBR: PNA


`name`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Vessel partner](vessel-partner-properties-name.md "https&#x3A;//poseidat.org/schema/core/vessel-partner.json#/properties/name")

### name Type

`string`

## master

The vessel master details. Usually one per entry but can differ in a single trip


`master`

-   is optional
-   Type: `object` ([Vessel master](vessel-partner-properties-vessel-master.md))
-   cannot be null
-   defined in: [Vessel partner](vessel-partner-properties-vessel-master.md "https&#x3A;//poseidat.org/schema/core/vessel-master.json#/properties/master")

### master Type

`object` ([Vessel master](vessel-partner-properties-vessel-master.md))
