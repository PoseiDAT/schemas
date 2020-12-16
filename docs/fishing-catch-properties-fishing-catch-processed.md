# Fishing catch processed Schema

```txt
https://poseidat.org/schema/core/fishing-catch-processed.json#/properties/processed
```

Details of caught fish after it has been processed


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-catch.json\*](schemas/core/fishing-catch.json "open original schema") |

## processed Type

`object` ([Fishing catch processed](fishing-catch-properties-fishing-catch-processed.md))

# Fishing catch processed Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :------------------------------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [fish_presentation](#fish_presentation)           | `string` | Required | cannot be null | [Fishing catch processed](fishing-catch-processed-properties-fish-presentation.md "https&#x3A;//poseidat.org/schema/enum/fish-presentation.json#/properties/fish_presentation")                 |
| [fish_state](#fish_state)                         | `string` | Required | cannot be null | [Fishing catch processed](fishing-catch-processed-properties-fish-state.md "https&#x3A;//poseidat.org/schema/enum/fish-state.json#/properties/fish_state")                                      |
| [package_type](#package_type)                     | `string` | Optional | cannot be null | [Fishing catch processed](fishing-catch-processed-properties-fish-package-type.md "https&#x3A;//poseidat.org/schema/enum/fish-package-type.json#/properties/package_type")                      |
| [number_of_packages](#number_of_packages)         | `number` | Optional | cannot be null | [Fishing catch processed](fishing-catch-processed-properties-number_of_packages.md "https&#x3A;//poseidat.org/schema/core/fishing-catch-processed.json#/properties/number_of_packages")         |
| [average_package_weight](#average_package_weight) | `number` | Optional | cannot be null | [Fishing catch processed](fishing-catch-processed-properties-average_package_weight.md "https&#x3A;//poseidat.org/schema/core/fishing-catch-processed.json#/properties/average_package_weight") |
| [fish_freshness](#fish_freshness)                 | `string` | Optional | cannot be null | [Fishing catch processed](fishing-catch-processed-properties-fish-freshness.md "https&#x3A;//poseidat.org/schema/enum/fish-freshness.json#/properties/fish_freshness")                          |
| [conversion_factor](#conversion_factor)           | `number` | Optional | cannot be null | [Fishing catch processed](fishing-catch-processed-properties-conversion_factor.md "https&#x3A;//poseidat.org/schema/core/fishing-catch-processed.json#/properties/conversion_factor")           |

## fish_presentation

The presentation formats for processed fish species. Please check the wiki for the meaning of these codes.


`fish_presentation`

-   is required
-   Type: `string` ([Fish presentation](fishing-catch-processed-properties-fish-presentation.md))
-   cannot be null
-   defined in: [Fishing catch processed](fishing-catch-processed-properties-fish-presentation.md "https&#x3A;//poseidat.org/schema/enum/fish-presentation.json#/properties/fish_presentation")

### fish_presentation Type

`string` ([Fish presentation](fishing-catch-processed-properties-fish-presentation.md))

### fish_presentation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | ----------- |
| `"BMS"`     |             |
| `"CBF"`     |             |
| `"CLA"`     |             |
| `"DWT"`     |             |
| `"FIL"`     |             |
| `"FIS"`     |             |
| `"FSB"`     |             |
| `"FSP"`     |             |
| `"GHT"`     |             |
| `"GTA"`     |             |
| `"GTF"`     |             |
| `"GUG"`     |             |
| `"GUH"`     |             |
| `"GUL"`     |             |
| `"GUS"`     |             |
| `"GUT"`     |             |
| `"HEA"`     |             |
| `"HET"`     |             |
| `"JAP"`     |             |
| `"JAT"`     |             |
| `"LAP"`     |             |
| `"LVR-C"`   |             |
| `"LVR"`     |             |
| `"OTH"`     |             |
| `"ROE-C"`   |             |
| `"ROE"`     |             |
| `"SAD"`     |             |
| `"SAL"`     |             |
| `"SGH"`     |             |
| `"SGT"`     |             |
| `"SKI"`     |             |
| `"SUR"`     |             |
| `"TAL"`     |             |
| `"TLD"`     |             |
| `"TNG-C"`   |             |
| `"TNG"`     |             |
| `"TUB"`     |             |
| `"WHL"`     |             |
| `"WNG"`     |             |
| `"WNG+SKI"` |             |

## fish_state

The preservation states for processed fish species. Please check the wiki for the meaning of these codes.


`fish_state`

-   is required
-   Type: `string` ([Fish state](fishing-catch-processed-properties-fish-state.md))
-   cannot be null
-   defined in: [Fishing catch processed](fishing-catch-processed-properties-fish-state.md "https&#x3A;//poseidat.org/schema/enum/fish-state.json#/properties/fish_state")

### fish_state Type

`string` ([Fish state](fishing-catch-processed-properties-fish-state.md))

### fish_state Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | ----------- |
| `"ALI"` |             |
| `"BOI"` |             |
| `"DRI"` |             |
| `"FRE"` |             |
| `"FRO"` |             |
| `"SAL"` |             |
| `"SMO"` |             |

## package_type

The package types for processed fish species. Please check the wiki for the meaning of these codes.


`package_type`

-   is optional
-   Type: `string` ([Fish package type](fishing-catch-processed-properties-fish-package-type.md))
-   cannot be null
-   defined in: [Fishing catch processed](fishing-catch-processed-properties-fish-package-type.md "https&#x3A;//poseidat.org/schema/enum/fish-package-type.json#/properties/package_type")

### package_type Type

`string` ([Fish package type](fishing-catch-processed-properties-fish-package-type.md))

### package_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | ----------- |
| `"CNT"` |             |
| `"EC"`  |             |
| `"OK"`  |             |
| `"QS"`  |             |
| `"CN"`  |             |
| `"CT"`  |             |
| `"VO"`  |             |
| `"4H"`  |             |
| `"BX"`  |             |
| `"5H"`  |             |
| `"QR"`  |             |
| `"TB"`  |             |
| `"NF"`  |             |
| `"NG"`  |             |
| `"ZB"`  |             |

## number_of_packages

The number of packages. NLD: NN


`number_of_packages`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Fishing catch processed](fishing-catch-processed-properties-number_of_packages.md "https&#x3A;//poseidat.org/schema/core/fishing-catch-processed.json#/properties/number_of_packages")

### number_of_packages Type

`number`

## average_package_weight

Average product weight, measured in Kg. NLD: AW


`average_package_weight`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Fishing catch processed](fishing-catch-processed-properties-average_package_weight.md "https&#x3A;//poseidat.org/schema/core/fishing-catch-processed.json#/properties/average_package_weight")

### average_package_weight Type

`number`

## fish_freshness

The freshness indication for processed fish species. Please check the wiki for the meaning of these codes.


`fish_freshness`

-   is optional
-   Type: `string` ([Fish freshness](fishing-catch-processed-properties-fish-freshness.md))
-   cannot be null
-   defined in: [Fishing catch processed](fishing-catch-processed-properties-fish-freshness.md "https&#x3A;//poseidat.org/schema/enum/fish-freshness.json#/properties/fish_freshness")

### fish_freshness Type

`string` ([Fish freshness](fishing-catch-processed-properties-fish-freshness.md))

### fish_freshness Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | ----------- |
| `"A"`  |             |
| `"B"`  |             |
| `"E"`  |             |
| `"SO"` |             |
| `"V"`  |             |

## conversion_factor

The conversion factor (ratio) from dead weight to live weight. Depends on combination of fish species, presentation and state. NLD: CF


`conversion_factor`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Fishing catch processed](fishing-catch-processed-properties-conversion_factor.md "https&#x3A;//poseidat.org/schema/core/fishing-catch-processed.json#/properties/conversion_factor")

### conversion_factor Type

`number`
