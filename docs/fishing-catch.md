# Fishing catch Schema

```txt
https://poseidat.org/schema/core/fishing-catch.json
```

Details of caught fish

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-catch.json](schemas/core/fishing-catch.json "open original schema") |

## Fishing catch Type

`object` ([Fishing catch](fishing-catch.md))

one (and only one) of

*   [Untitled undefined type in Fishing catch](fishing-catch-oneof-0.md "check type definition")

*   [Untitled undefined type in Fishing catch](fishing-catch-oneof-1.md "check type definition")

# Fishing catch Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                   |
| :------------------------------------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [code](#code)                                     | `string`  | Required | cannot be null | [Fishing catch](fishing-catch-properties-code.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/code")                                     |
| [weight](#weight)                                 | `number`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-weight.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/weight")                                 |
| [number_of_fish](#number_of_fish)                 | `number`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-number_of_fish.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/number_of_fish")                 |
| [weight_in_nets](#weight_in_nets)                 | `number`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-weight_in_nets.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/weight_in_nets")                 |
| [number_of_fish_in_nets](#number_of_fish_in_nets) | `number`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-number_of_fish_in_nets.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/number_of_fish_in_nets") |
| [landing_weight](#landing_weight)                 | `number`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-landing_weight.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/landing_weight")                 |
| [landing_number](#landing_number)                 | `number`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-landing_number.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/landing_number")                 |
| [juvenile](#juvenile)                             | `boolean` | Optional | cannot be null | [Fishing catch](fishing-catch-properties-juvenile.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/juvenile")                             |
| [fish_farming](#fish_farming)                     | `boolean` | Optional | cannot be null | [Fishing catch](fishing-catch-properties-fish_farming.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/fish_farming")                     |
| [means_of_measuring](#means_of_measuring)         | `string`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-means_of_measuring.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/means_of_measuring")         |
| [measured_weight](#measured_weight)               | `string`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-measured_weight.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/measured_weight")               |
| [fish_size](#fish_size)                           | `string`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-fish_size.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/fish_size")                           |
| [processed](#processed)                           | `object`  | Optional | cannot be null | [Fishing catch](fishing-catch-properties-fishing-catch-processed.md "https://poseidat.org/schema/core/fishing-catch-processed.json#/properties/processed")   |

## code

The fish species code. NLD: SN, GBR: SN

`code`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-code.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/code")

### code Type

`string`

## weight

Weight of fish in kg (see context) Depending on context this item will be either (1): Total weight of fish (in kilograms) in catch period. (2): Total weight of fish (in kilograms) on board (aggregate) or (3): Total weight of fish (in kilograms) landed (4): Total weight of fish discarded or used as a live bait. NLD: WT, GBR: WT

`weight`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-weight.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/weight")

### weight Type

`number`

## number_of_fish

The number of fish. NLD: NF, GBR: NF

`number_of_fish`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-number_of_fish.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/number_of_fish")

### number_of_fish Type

`number`

## weight_in_nets

Weight of fish kept in nets outside the hold. NLD: NQ, EU3: NQ

`weight_in_nets`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-weight_in_nets.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/weight_in_nets")

### weight_in_nets Type

`number`

## number_of_fish_in_nets

The number of fish held in nets outside the hold. NLD: NV, EU3: NB

`number_of_fish_in_nets`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-number_of_fish_in_nets.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/number_of_fish_in_nets")

### number_of_fish_in_nets Type

`number`

## landing_weight

Estimate live weight, in kilograms, of fish to be landed or transshipped. If no catches being landed then 0 should be reported. NLD: WT, GBR: GBRLWT, EU3: WL

`landing_weight`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-landing_weight.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/landing_weight")

### landing_weight Type

`number`

## landing_number

Total number of fish to be landed or transshipped. NLD: NF, GBR: LNF, EU3: FL

`landing_number`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-landing_number.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/landing_number")

### landing_number Type

`number`

## juvenile

Indicates the catch is considered a juvenile. NLD3.3+: MV, GBR: GBRJUV

`juvenile`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-juvenile.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/juvenile")

### juvenile Type

`boolean`

## fish_farming

Indicator for farmed fish (Dutch: kweekvis). NLD: KV

`fish_farming`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-fish_farming.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/fish_farming")

### fish_farming Type

`boolean`

## means_of_measuring

Means of weight measuring: estimation (EST), weighing on board (WGH). EU3: MM

`means_of_measuring`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-means_of_measuring.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/means_of_measuring")

### means_of_measuring Type

`string`

### means_of_measuring Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"EST"` |             |
| `"WGH"` |             |

## measured_weight

The weighed or measured weight. Type depends on means_of_measuring value. NLD3.3: MM

`measured_weight`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-measured_weight.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/measured_weight")

### measured_weight Type

`string`

## fish_size

Fish size category (1-8; one size or kg, g, cm, mm or number of fish per kg as appropriate). NLD3.3: SF

`fish_size`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-fish_size.md "https://poseidat.org/schema/core/fishing-catch.json#/properties/fish_size")

### fish_size Type

`string`

## processed

Details of caught fish after it has been processed

`processed`

*   is optional

*   Type: `object` ([Fishing catch processed](fishing-catch-properties-fishing-catch-processed.md))

*   cannot be null

*   defined in: [Fishing catch](fishing-catch-properties-fishing-catch-processed.md "https://poseidat.org/schema/core/fishing-catch-processed.json#/properties/processed")

### processed Type

`object` ([Fishing catch processed](fishing-catch-properties-fishing-catch-processed.md))
