# Position Schema

```txt
https://poseidat.org/schema/core/position.json
```

A navigational position that can be used in an entry


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                         |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [position.json](schemas/core/position.json "open original schema") |

## Position Type

`object` ([Position](position.md))

# Position Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :---------------------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [latitude](#latitude)                     | `number` | Required | cannot be null | [Position](position-properties-latitude.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/latitude")                     |
| [longitude](#longitude)                   | `number` | Required | cannot be null | [Position](position-properties-longitude.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/longitude")                   |
| [heading](#heading)                       | `number` | Optional | cannot be null | [Position](position-properties-heading.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/heading")                       |
| [courseMadeGood](#courseMadeGood)         | `number` | Optional | cannot be null | [Position](position-properties-coursemadegood.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/courseMadeGood")         |
| [speedOverGround](#speedOverGround)       | `number` | Optional | cannot be null | [Position](position-properties-speedoverground.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/speedOverGround")       |
| [speedThroughWater](#speedThroughWater)   | `number` | Optional | cannot be null | [Position](position-properties-speedthroughwater.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/speedThroughWater")   |
| [numberOfSatellites](#numberOfSatellites) | `number` | Optional | cannot be null | [Position](position-properties-numberofsatellites.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/numberOfSatellites") |

## latitude

The latitude of the geographical location


`latitude`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Position](position-properties-latitude.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/latitude")

### latitude Type

`number`

## longitude

The longitude of the geographical location


`longitude`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Position](position-properties-longitude.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/longitude")

### longitude Type

`number`

## heading

The compass heading of the vessel in degrees


`heading`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Position](position-properties-heading.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/heading")

### heading Type

`number`

## courseMadeGood

The direction in which the vessel is traveling, in degrees


`courseMadeGood`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Position](position-properties-coursemadegood.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/courseMadeGood")

### courseMadeGood Type

`number`

## speedOverGround

The velocity of the vessel in meters per second (m/s) over the ground


`speedOverGround`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Position](position-properties-speedoverground.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/speedOverGround")

### speedOverGround Type

`number`

## speedThroughWater

The velocity of the vessel in meters per second (m/s) through the water


`speedThroughWater`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Position](position-properties-speedthroughwater.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/speedThroughWater")

### speedThroughWater Type

`number`

## numberOfSatellites

The number of satellites used to calculate the position


`numberOfSatellites`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Position](position-properties-numberofsatellites.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/numberOfSatellites")

### numberOfSatellites Type

`number`
