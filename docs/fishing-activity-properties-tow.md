# Untitled object in End of fishing activity Schema

```txt
https://poseidat.org/schema/core/fishing-tow.json#/properties/tow
```

Fishing tow details


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-activity.json\*](schemas/entry/fishing-activity.json "open original schema") |

## tow Type

`object` ([Details](fishing-activity-properties-tow.md))

# undefined Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                    |
| :------------------------------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [activity_date_start](#activity_date_start) | `string` | Optional | cannot be null | [Untitled schema](fishing-tow-properties-activity_date_start.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/activity_date_start")     |
| [activity_date_end](#activity_date_end)     | `string` | Optional | cannot be null | [Untitled schema](fishing-tow-properties-activity_date_end.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/activity_date_end")         |
| [location_start](#location_start)           | `object` | Optional | cannot be null | [Untitled schema](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location_start")                         |
| [location_end](#location_end)               | `object` | Optional | cannot be null | [Untitled schema](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location_end")                           |
| [waypoints](#waypoints)                     | `array`  | Optional | cannot be null | [Untitled schema](fishing-tow-properties-waypoints.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/waypoints")                         |
| [zone](#zone)                               | `object` | Required | cannot be null | [Untitled schema](fishing-tow-properties-zone.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/zone")                                  |
| [fishing_gear](#fishing_gear)               | `object` | Optional | cannot be null | [Untitled schema](departure-properties-gear_on_board-items.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/fishing_gear")             |
| [gear_deployment](#gear_deployment)         | `object` | Optional | cannot be null | [Untitled schema](fishing-tow-properties-gear_deployment.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_deployment") |
| [catches](#catches)                         | `array`  | Optional | cannot be null | [Untitled schema](fishing-tow-properties-catches.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/catches")                             |

## activity_date_start

The datetime the tow started in UTC


`activity_date_start`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-tow-properties-activity_date_start.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/activity_date_start")

### activity_date_start Type

`string`

### activity_date_start Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## activity_date_end

The datetime the tow ended in UTC


`activity_date_end`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](fishing-tow-properties-activity_date_end.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/activity_date_end")

### activity_date_end Type

`string`

### activity_date_end Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## location_start

A navigational position that can be used in an entry


`location_start`

-   is optional
-   Type: `object` ([Position](trip-entry-properties-position.md))
-   cannot be null
-   defined in: [Untitled schema](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location_start")

### location_start Type

`object` ([Position](trip-entry-properties-position.md))

## location_end

A navigational position that can be used in an entry


`location_end`

-   is optional
-   Type: `object` ([Position](trip-entry-properties-position.md))
-   cannot be null
-   defined in: [Untitled schema](trip-entry-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/location_end")

### location_end Type

`object` ([Position](trip-entry-properties-position.md))

## waypoints

The collection of geographical locations logged during the tow


`waypoints`

-   is optional
-   Type: `object[]` ([Position](trip-entry-properties-position.md))
-   cannot be null
-   defined in: [Untitled schema](fishing-tow-properties-waypoints.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/waypoints")

### waypoints Type

`object[]` ([Position](trip-entry-properties-position.md))

## zone

Geographical zone for fishing activities


`zone`

-   is required
-   Type: `object` ([Details](fishing-tow-properties-zone.md))
-   cannot be null
-   defined in: [Untitled schema](fishing-tow-properties-zone.md "https&#x3A;//poseidat.org/schema/core/fishing-zone.json#/properties/zone")

### zone Type

`object` ([Details](fishing-tow-properties-zone.md))

## fishing_gear

Fishing gear details


`fishing_gear`

-   is optional
-   Type: `object` ([Details](departure-properties-gear_on_board-items.md))
-   cannot be null
-   defined in: [Untitled schema](departure-properties-gear_on_board-items.md "https&#x3A;//poseidat.org/schema/core/fishing-gear.json#/properties/fishing_gear")

### fishing_gear Type

`object` ([Details](departure-properties-gear_on_board-items.md))

## gear_deployment

Fishing gear deployment details


`gear_deployment`

-   is optional
-   Type: `object` ([Details](fishing-tow-properties-gear_deployment.md))
-   cannot be null
-   defined in: [Untitled schema](fishing-tow-properties-gear_deployment.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_deployment")

### gear_deployment Type

`object` ([Details](fishing-tow-properties-gear_deployment.md))

## catches

The fish caught in this tow


`catches`

-   is optional
-   Type: `object[]` ([Details](fishing-tow-properties-catches-items.md))
-   cannot be null
-   defined in: [Untitled schema](fishing-tow-properties-catches.md "https&#x3A;//poseidat.org/schema/core/fishing-tow.json#/properties/catches")

### catches Type

`object[]` ([Details](fishing-tow-properties-catches-items.md))
