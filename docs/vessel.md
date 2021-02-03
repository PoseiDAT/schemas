# Vessel Schema

```txt
https://poseidat.org/schema/core/vessel.json
```

The vessel information

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [vessel.json](schemas/core/vessel.json "open original schema") |

## Vessel Type

`object` ([Vessel](vessel.md))

# Vessel Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                           | `string` | Required | cannot be null | [Vessel](vessel-properties-name.md "https://poseidat.org/schema/core/vessel.json#/properties/name")                           |
| [flag_state](#flag_state)               | `string` | Required | cannot be null | [Vessel](vessel-properties-flag_state.md "https://poseidat.org/schema/core/vessel.json#/properties/flag_state")               |
| [cfr](#cfr)                             | `string` | Required | cannot be null | [Vessel](vessel-properties-cfr.md "https://poseidat.org/schema/core/vessel.json#/properties/cfr")                             |
| [call_sign](#call_sign)                 | `string` | Optional | cannot be null | [Vessel](vessel-properties-call_sign.md "https://poseidat.org/schema/core/vessel.json#/properties/call_sign")                 |
| [hull_number](#hull_number)             | `string` | Required | cannot be null | [Vessel](vessel-properties-hull_number.md "https://poseidat.org/schema/core/vessel.json#/properties/hull_number")             |
| [gbr_rss](#gbr_rss)                     | `string` | Optional | cannot be null | [Vessel](vessel-properties-gbr_rss.md "https://poseidat.org/schema/core/vessel.json#/properties/gbr_rss")                     |
| [iccat](#iccat)                         | `string` | Optional | cannot be null | [Vessel](vessel-properties-iccat.md "https://poseidat.org/schema/core/vessel.json#/properties/iccat")                         |
| [gfcm](#gfcm)                           | `string` | Optional | cannot be null | [Vessel](vessel-properties-gfcm.md "https://poseidat.org/schema/core/vessel.json#/properties/gfcm")                           |
| [uvi](#uvi)                             | `string` | Optional | cannot be null | [Vessel](vessel-properties-uvi.md "https://poseidat.org/schema/core/vessel.json#/properties/uvi")                             |
| [imo_code](#imo_code)                   | `string` | Optional | cannot be null | [Vessel](vessel-properties-imo_code.md "https://poseidat.org/schema/core/vessel.json#/properties/imo_code")                   |
| [net_tonnage](#net_tonnage)             | `number` | Optional | cannot be null | [Vessel](vessel-properties-net_tonnage.md "https://poseidat.org/schema/core/vessel.json#/properties/net_tonnage")             |
| [gross_tonnage](#gross_tonnage)         | `number` | Optional | cannot be null | [Vessel](vessel-properties-gross_tonnage.md "https://poseidat.org/schema/core/vessel.json#/properties/gross_tonnage")         |
| [registration_date](#registration_date) | `string` | Optional | cannot be null | [Vessel](vessel-properties-registration_date.md "https://poseidat.org/schema/core/vessel.json#/properties/registration_date") |
| [full_length](#full_length)             | `number` | Optional | cannot be null | [Vessel](vessel-properties-full_length.md "https://poseidat.org/schema/core/vessel.json#/properties/full_length")             |

## name

The display name for the vessel

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-name.md "https://poseidat.org/schema/core/vessel.json#/properties/name")

### name Type

`string`

## flag_state

The vessels flag state and country to report ERS messages to. Should be a 3 letter ISO code.

`flag_state`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-flag_state.md "https://poseidat.org/schema/core/vessel.json#/properties/flag_state")

### flag_state Type

`string`

## cfr

The vessel's Community Fleet Registration number. Fixed format defined by the pattern: "AAAXXXXXXXXX" (AAA = Fully capitalised country code of the vessel's first registration within the EU, XXXXXXXXX = 9 character alphanumeric code.). Known as CFR or IR

`cfr`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-cfr.md "https://poseidat.org/schema/core/vessel.json#/properties/cfr")

### cfr Type

`string`

## call_sign

The vessels international radio call sign (RC)

`call_sign`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-call_sign.md "https://poseidat.org/schema/core/vessel.json#/properties/call_sign")

### call_sign Type

`string`

## hull_number

The vessel's side (hull) registration number. Also known as XR or PLN. May contain dots or dashes

`hull_number`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-hull_number.md "https://poseidat.org/schema/core/vessel.json#/properties/hull_number")

### hull_number Type

`string`

## gbr_rss

GBR ONLY: The vessel's unique identity number as recorded by the UK Registrar of Seamen and Shipping

`gbr_rss`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-gbr_rss.md "https://poseidat.org/schema/core/vessel.json#/properties/gbr_rss")

### gbr_rss Type

`string`

## iccat

International Commission for the Conservation of Atlantic Tuna identifier

`iccat`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-iccat.md "https://poseidat.org/schema/core/vessel.json#/properties/iccat")

### iccat Type

`string`

## gfcm

Global Fisheries Council of the Mediterranean identifier

`gfcm`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-gfcm.md "https://poseidat.org/schema/core/vessel.json#/properties/gfcm")

### gfcm Type

`string`

## uvi

Unique Vessel Identifier (IMO number). A number issued by the tuna RFMOs or by ISSF.

`uvi`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-uvi.md "https://poseidat.org/schema/core/vessel.json#/properties/uvi")

### uvi Type

`string`

## imo_code

The unique identification of a vessel according to Lloyds register

`imo_code`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-imo_code.md "https://poseidat.org/schema/core/vessel.json#/properties/imo_code")

### imo_code Type

`string`

## net_tonnage

The net loading capacity of the vessel, expressed in tons

`net_tonnage`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Vessel](vessel-properties-net_tonnage.md "https://poseidat.org/schema/core/vessel.json#/properties/net_tonnage")

### net_tonnage Type

`number`

## gross_tonnage

The gross loading capacity of the vessel, expressed in tons

`gross_tonnage`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Vessel](vessel-properties-gross_tonnage.md "https://poseidat.org/schema/core/vessel.json#/properties/gross_tonnage")

### gross_tonnage Type

`number`

## registration_date

The date the vessel was registered

`registration_date`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel](vessel-properties-registration_date.md "https://poseidat.org/schema/core/vessel.json#/properties/registration_date")

### registration_date Type

`string`

### registration_date Constraints

**date**: the string must be a date string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## full_length

The full length of the vessel in meters

`full_length`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Vessel](vessel-properties-full_length.md "https://poseidat.org/schema/core/vessel.json#/properties/full_length")

### full_length Type

`number`
