# ZoneEnter Schema

```txt
https://poseidat.org/schema/entry/zone-enter.json
```

Enter declaration of a fishing zone

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [zone-enter.json](schemas/entry/zone-enter.json "open original schema") |

## ZoneEnter Type

`object` ([ZoneEnter](zone-enter.md))

all of

*   [Base entry](arrival-allof-base-entry.md "check type definition")

# ZoneEnter Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                    |
| :------------------------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [entry_type](#entry_type)                   | `string`  | Required | cannot be null | [ZoneEnter](zone-enter-properties-entry_type.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/entry_type")                   |
| [activity_date](#activity_date)             | `string`  | Required | cannot be null | [ZoneEnter](zone-enter-properties-activity_date.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/activity_date")             |
| [zone](#zone)                               | `object`  | Required | cannot be null | [ZoneEnter](fishing-tow-properties-fishing-zone.md "https://poseidat.org/schema/core/fishing-zone.json#/properties/zone")                     |
| [location](#location)                       | `object`  | Required | cannot be null | [ZoneEnter](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")              |
| [catch_on_board](#catch_on_board)           | `array`   | Optional | cannot be null | [ZoneEnter](zone-enter-properties-catch-on-board.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/catch_on_board")           |
| [target_species](#target_species)           | `string`  | Optional | cannot be null | [ZoneEnter](zone-enter-properties-target_species.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/target_species")           |
| [directed_species](#directed_species)       | `string`  | Optional | cannot be null | [ZoneEnter](zone-enter-properties-directed_species.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/directed_species")       |
| [effort_zone](#effort_zone)                 | `string`  | Optional | cannot be null | [ZoneEnter](zone-enter-properties-effort-zone.md "https://poseidat.org/schema/enum/effort-zone.json#/properties/effort_zone")                 |
| [trans_zonal_fishing](#trans_zonal_fishing) | `boolean` | Optional | cannot be null | [ZoneEnter](zone-enter-properties-trans_zonal_fishing.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/trans_zonal_fishing") |
| Additional Properties                       | Any       | Optional | can be null    |                                                                                                                                               |

## entry_type

The journal entry type identifer

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-entry_type.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"zone-enter"` |             |

### entry_type Default Value

The default value is:

```json
"zone-enter"
```

## activity_date

The datetime of the arrival in UTC. GBR: DATI, NLD2: DA + TI, NLD3: DA

`activity_date`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-activity_date.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## zone

Geographical zone for fishing activities

`zone`

*   is required

*   Type: `object` ([Fishing zone](fishing-tow-properties-fishing-zone.md))

*   cannot be null

*   defined in: [ZoneEnter](fishing-tow-properties-fishing-zone.md "https://poseidat.org/schema/core/fishing-zone.json#/properties/zone")

### zone Type

`object` ([Fishing zone](fishing-tow-properties-fishing-zone.md))

## location

A navigational position that can be used in an entry

`location`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [ZoneEnter](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## catch_on_board

The previously caught fish present on the vessel at the time of entry

`catch_on_board`

*   is optional

*   Type: `object[]` ([Fishing catch](arrival-properties-catch-on-board-fishing-catch.md))

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-catch-on-board.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/catch_on_board")

### catch_on_board Type

`object[]` ([Fishing catch](arrival-properties-catch-on-board-fishing-catch.md))

## target_species

An indication of the target species for the fishing activity. NLD: TS, GBR: TS

`target_species`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-target_species.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/target_species")

### target_species Type

`string`

## directed_species

An indication of the directed species for the fishing activity. GBR: GBRDS

`directed_species`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-directed_species.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/directed_species")

### directed_species Type

`string`

## effort_zone

The fishing effort zone. Example: A (ICES V-VI)

`effort_zone`

*   is optional

*   Type: `string` ([Effort zone](zone-enter-properties-effort-zone.md))

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-effort-zone.md "https://poseidat.org/schema/enum/effort-zone.json#/properties/effort_zone")

### effort_zone Type

`string` ([Effort zone](zone-enter-properties-effort-zone.md))

### effort_zone Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
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

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [ZoneEnter](zone-enter-properties-trans_zonal_fishing.md "https://poseidat.org/schema/entry/zone-enter.json#/properties/trans_zonal_fishing")

### trans_zonal_fishing Type

`boolean`

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
