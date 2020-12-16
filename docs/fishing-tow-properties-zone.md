# Untitled object in undefined Schema

```txt
https://poseidat.org/schema/core/fishing-zone.json#/properties/zone
```

Geographical zone for fishing activities


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-tow.json\*](schemas/core/fishing-tow.json "open original schema") |

## zone Type

`object` ([Details](fishing-tow-properties-zone.md))

# undefined Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                          |
| :---------------------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [economical_zone](#economical_zone) | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-economical_zone.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/economical_zone") |
| [fao_area](#fao_area)               | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-fao_area.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_area")               |
| [fao_subarea](#fao_subarea)         | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-fao_subarea.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_subarea")         |
| [fao_division](#fao_division)       | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-fao_division.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_division")       |
| [fao_subdivision](#fao_subdivision) | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-fao_subdivision.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_subdivision") |
| [fao_unit](#fao_unit)               | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-fao_unit.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_unit")               |
| [ices_rectangle](#ices_rectangle)   | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-ices_rectangle.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/ices_rectangle")   |
| [effort_zone](#effort_zone)         | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-effort_zone.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/effort_zone")         |
| [regional_body](#regional_body)     | `string` | Optional | cannot be null | [Untitled schema](fishing-zone-properties-regional_body.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/regional_body")     |

## economical_zone

The economical zone. This is a 3 letter ISO country code


`economical_zone`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-economical_zone.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/economical_zone")

### economical_zone Type

`string`

## fao_area

The FAO area. Example: 27.3.d.28.2. This is the 1st value: 27


`fao_area`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-fao_area.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_area")

### fao_area Type

`string`

## fao_subarea

The FAO sub-area. Example: 27.3.d.28.2. This is the 2nd value: 3


`fao_subarea`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-fao_subarea.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_subarea")

### fao_subarea Type

`string`

## fao_division

The FAO division. Example: 27.3.d.28.2. This is the 3rd value: d


`fao_division`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-fao_division.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_division")

### fao_division Type

`string`

## fao_subdivision

The FAO subdivision. Example: 27.3.d.28.2. This is the 4th value: 28


`fao_subdivision`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-fao_subdivision.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_subdivision")

### fao_subdivision Type

`string`

## fao_unit

The FAO unit. Example: 27.3.d.28.2. This is the 5th value: 2


`fao_unit`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-fao_unit.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/fao_unit")

### fao_unit Type

`string`

## ices_rectangle

The ICES statistical rectangle. Example: 26A0


`ices_rectangle`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-ices_rectangle.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/ices_rectangle")

### ices_rectangle Type

`string`

## effort_zone

The fishing effort zone. Example: A (ICES V-VI)


`effort_zone`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-effort_zone.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/effort_zone")

### effort_zone Type

`string`

## regional_body

The regional fishery body. Example: AIDCP (Agreement on the International Dolphin Conservation Program)


`regional_body`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-zone-properties-regional_body.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/regional_body")

### regional_body Type

`string`
