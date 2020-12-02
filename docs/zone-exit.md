# Untitled object in undefined Schema

```txt
https://poseidat.org/schema/entry/zone-exit.json
```

Exit declaration of a fishing zone


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [zone-exit.json](schemas/entry/zone-exit.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](zone-exit.md))

all of

-   [BaseEntry](arrival-allof-baseentry.md "check type definition")

# undefined Properties

| Property                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                         |
| :------------------------------------------------------ | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [activity_date](#activity_date)                         | `string`  | Required | cannot be null | [Untitled schema](zone-exit-properties-activity_date.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/activity_date")                         |
| [zone](#zone)                                           | `object`  | Required | cannot be null | [Untitled schema](zone-enter-properties-zone.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/zone")                                        |
| [location](#location)                                   | `object`  | Required | cannot be null | [Untitled schema](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")                                    |
| [catch_on_board](#catch_on_board)                       | `array`   | Optional | cannot be null | [Untitled schema](zone-exit-properties-catch_on_board.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/catch_on_board")                       |
| [target_species](#target_species)                       | `string`  | Optional | cannot be null | [Untitled schema](zone-exit-properties-target_species.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/target_species")                       |
| [effort_zone](#effort_zone)                             | `string`  | Optional | cannot be null | [Untitled schema](zone-enter-properties-effort_zone.md "https&#x3A;//poseidat.org/schema/enum/effort-zone.json#/properties/effort_zone")                           |
| [trans_zonal_fishing](#trans_zonal_fishing)             | `boolean` | Optional | cannot be null | [Untitled schema](zone-exit-properties-trans_zonal_fishing.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/trans_zonal_fishing")             |
| [trans_zonal_fishing_zones](#trans_zonal_fishing_zones) | `array`   | Optional | cannot be null | [Untitled schema](zone-exit-properties-trans_zonal_fishing_zones.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/trans_zonal_fishing_zones") |

## activity_date

The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA


`activity_date`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](zone-exit-properties-activity_date.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## zone

Geographical zone for fishing activities


`zone`

-   is required
-   Type: `object` ([Details](zone-enter-properties-zone.md))
-   cannot be null
-   defined in: [Untitled schema](zone-enter-properties-zone.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/zone")

### zone Type

`object` ([Details](zone-enter-properties-zone.md))

## location

A navigational position that can be used in an entry


`location`

-   is required
-   Type: `object` ([Position](trip-entry-properties-position.md))
-   cannot be null
-   defined in: [Untitled schema](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## catch_on_board

The previously caught fish present on the vessel at the time of entry


`catch_on_board`

-   is optional
-   Type: `object[]` ([Details](zone-exit-properties-catch_on_board-items.md))
-   cannot be null
-   defined in: [Untitled schema](zone-exit-properties-catch_on_board.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/catch_on_board")

### catch_on_board Type

`object[]` ([Details](zone-exit-properties-catch_on_board-items.md))

## target_species

An indication of the target species for the fishing activity. Only GBR: TS


`target_species`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](zone-exit-properties-target_species.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/target_species")

### target_species Type

`string`

## effort_zone

The fishing effort zone. Example: A (ICES V-VI)


`effort_zone`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](zone-enter-properties-effort_zone.md "https&#x3A;//poseidat.org/schema/enum/effort-zone.json#/properties/effort_zone")

### effort_zone Type

`string`

### effort_zone Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | ----------- |
| `"A"` |             |
| `"B"` |             |
| `"C"` |             |
| `"D"` |             |
| `"E"` |             |
| `"F"` |             |
| `"G"` |             |
| `"H"` |             |
| `"J"` |             |
| `"K"` |             |
| `"L"` |             |
| `"M"` |             |
| `"N"` |             |
| `"O"` |             |
| `"P"` |             |
| `"Q"` |             |
| `"R"` |             |
| `"S"` |             |
| `"T"` |             |
| `"U"` |             |
| `"V"` |             |
| `"W"` |             |
| `"X"` |             |
| `"Y"` |             |

## trans_zonal_fishing

Indicates the vessel has engaged in trans-zonal fishing: GRB: GBRTRZ


`trans_zonal_fishing`

-   is optional
-   Type: `boolean`
-   cannot be null
-   defined in: [Untitled schema](zone-exit-properties-trans_zonal_fishing.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/trans_zonal_fishing")

### trans_zonal_fishing Type

`boolean`

## trans_zonal_fishing_zones

The zones involved in trans-zonal fishing. NLD: NLTRZ


`trans_zonal_fishing_zones`

-   is optional
-   Type: `object[]` ([Details](zone-enter-properties-zone.md))
-   cannot be null
-   defined in: [Untitled schema](zone-exit-properties-trans_zonal_fishing_zones.md "https&#x3A;//poseidat.org/schema/entry/zone-exit.json#/properties/trans_zonal_fishing_zones")

### trans_zonal_fishing_zones Type

`object[]` ([Details](zone-enter-properties-zone.md))
