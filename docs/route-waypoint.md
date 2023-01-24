# Route waypoint Schema

```txt
https://poseidat.org/schema/core/route-waypoint.json
```

A waypoint which is part of a route.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [route-waypoint.json](schemas/core/route-waypoint.json "open original schema") |

## Route waypoint Type

`object` ([Route waypoint](route-waypoint.md))

# Route waypoint Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :---------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                           | `number` | Required | cannot be null | [Route waypoint](route-waypoint-properties-id.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/id")                            |
| [name](#name)                       | `string` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-name.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/name")                        |
| [latitude](#latitude)               | `number` | Required | cannot be null | [Route waypoint](route-waypoint-properties-latitude.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/latitude")                |
| [longitude](#longitude)             | `number` | Required | cannot be null | [Route waypoint](route-waypoint-properties-longitude.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/longitude")              |
| [turn_radius](#turn_radius)         | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-turn_radius.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/turn_radius")          |
| [portside_xtd](#portside_xtd)       | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-portside_xtd.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/portside_xtd")        |
| [starboard_xtd](#starboard_xtd)     | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-starboard_xtd.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/starboard_xtd")      |
| [safety_contour](#safety_contour)   | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-safety_contour.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/safety_contour")    |
| [safety_depth](#safety_depth)       | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-safety_depth.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/safety_depth")        |
| [geometry_type](#geometry_type)     | `string` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-geometry-type.md "https://poseidat.org/schema/enum/route-geometry-type.json#/properties/geometry_type") |
| [speed_min](#speed_min)             | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-speed_min.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/speed_min")              |
| [speed_max](#speed_max)             | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-speed_max.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/speed_max")              |
| [draught_forward](#draught_forward) | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-draught_forward.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/draught_forward")  |
| [draught_aft](#draught_aft)         | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-draught_aft.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/draught_aft")          |
| [static_ukc](#static_ukc)           | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-static_ukc.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/static_ukc")            |
| [dynamic_ukc](#dynamic_ukc)         | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-dynamic_ukc.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/dynamic_ukc")          |
| [masthead_height](#masthead_height) | `number` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-masthead_height.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/masthead_height")  |
| [etd](#etd)                         | `string` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-etd.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/etd")                          |
| [eta](#eta)                         | `string` | Optional | cannot be null | [Route waypoint](route-waypoint-properties-eta.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/eta")                          |

## id

The id of the waypoint within a trip.

`id`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-id.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/id")

### id Type

`number`

## name

The name of the waypoint.

`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-name.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/name")

### name Type

`string`

## latitude

The latitude of the waypoint.

`latitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-latitude.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/latitude")

### latitude Type

`number`

## longitude

The longitude of the waypoint.

`longitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-longitude.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/longitude")

### longitude Type

`number`

## turn_radius

The turn radius of the waypoint in nautical miles.

`turn_radius`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-turn_radius.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/turn_radius")

### turn_radius Type

`number`

## portside_xtd

The Cross-Track Distance at the port side in nautical miles on the route leg between the previous and this waypoint.

`portside_xtd`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-portside_xtd.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/portside_xtd")

### portside_xtd Type

`number`

## starboard_xtd

The Cross-Track Distance at the starboard side in nautical miles on the route leg between the previous and this waypoint.

`starboard_xtd`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-starboard_xtd.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/starboard_xtd")

### starboard_xtd Type

`number`

## safety_contour

The safety contour in metres on the route leg between the previous and this waypoint.

`safety_contour`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-safety_contour.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/safety_contour")

### safety_contour Type

`number`

## safety_depth

The safety depth in metres on the route leg between the previous and this waypoint.

`safety_depth`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-safety_depth.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/safety_depth")

### safety_depth Type

`number`

## geometry_type

The types of geometry used to calculate the distance between two positions.

`geometry_type`

*   is optional

*   Type: `string` ([Geometry Type](route-waypoint-properties-geometry-type.md))

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-geometry-type.md "https://poseidat.org/schema/enum/route-geometry-type.json#/properties/geometry_type")

### geometry_type Type

`string` ([Geometry Type](route-waypoint-properties-geometry-type.md))

### geometry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                       | Explanation |
| :-------------------------- | :---------- |
| `"RHUMB_LINE_LOXODROME"`    |             |
| `"GREAT_CICRLE_ORTHODROME"` |             |

## speed_min

The lowest cruising speed in knots on the route leg between the previous and this waypoint.

`speed_min`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-speed_min.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/speed_min")

### speed_min Type

`number`

## speed_max

The highest allowed cruising speed in knots on the route leg between the previous and this waypoint.

`speed_max`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-speed_max.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/speed_max")

### speed_max Type

`number`

## draught_forward

The static draught forward (bow) in metres on the route leg between the previous and this waypoint.

`draught_forward`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-draught_forward.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/draught_forward")

### draught_forward Type

`number`

## draught_aft

The static draught aft (stern) in metres on the route leg between the previous and this waypoint.

`draught_aft`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-draught_aft.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/draught_aft")

### draught_aft Type

`number`

## static_ukc

The minimum static Under Keel Clearance on the route leg between the previous and this waypoint.

`static_ukc`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-static_ukc.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/static_ukc")

### static_ukc Type

`number`

## dynamic_ukc

The minimum dynamic Under Keel Clearance on the route leg between the previous and this waypoint.

`dynamic_ukc`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-dynamic_ukc.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/dynamic_ukc")

### dynamic_ukc Type

`number`

## masthead_height

The height of the masthead on the route leg between the previous and this waypoint.

`masthead_height`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-masthead_height.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/masthead_height")

### masthead_height Type

`number`

## etd

The Estimated Time of Departure from this waypoint.

`etd`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-etd.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/etd")

### etd Type

`string`

### etd Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## eta

The Estimated Time of Arrival at this waypoint.

`eta`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Route waypoint](route-waypoint-properties-eta.md "https://poseidat.org/schema/core/route-waypoint.json#/properties/eta")

### eta Type

`string`

### eta Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
