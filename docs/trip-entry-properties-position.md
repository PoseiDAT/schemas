# Position Schema

```txt
https://poseidat.org/schema/core/measurement/position.json#/properties/location
```

A navigational position that can be used in an entry

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [trip-entry.json*](schemas/core/trip-entry.json "open original schema") |

## location Type

`object` ([Position](trip-entry-properties-position.md))

# location Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :-------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [latitude](#latitude)                         | `number` | Required | cannot be null | [Position](position-properties-latitude.md "https://poseidat.org/schema/core/measurement/position.json#/properties/latitude")                         |
| [longitude](#longitude)                       | `number` | Required | cannot be null | [Position](position-properties-longitude.md "https://poseidat.org/schema/core/measurement/position.json#/properties/longitude")                       |
| [heading](#heading)                           | `number` | Optional | cannot be null | [Position](position-properties-heading.md "https://poseidat.org/schema/core/measurement/position.json#/properties/heading")                           |
| [course_made_good](#course_made_good)         | `number` | Optional | cannot be null | [Position](position-properties-course_made_good.md "https://poseidat.org/schema/core/measurement/position.json#/properties/course_made_good")         |
| [speed_over_ground](#speed_over_ground)       | `number` | Optional | cannot be null | [Position](position-properties-speed_over_ground.md "https://poseidat.org/schema/core/measurement/position.json#/properties/speed_over_ground")       |
| [speed_through_water](#speed_through_water)   | `number` | Optional | cannot be null | [Position](position-properties-speed_through_water.md "https://poseidat.org/schema/core/measurement/position.json#/properties/speed_through_water")   |
| [number_of_satellites](#number_of_satellites) | `number` | Optional | cannot be null | [Position](position-properties-number_of_satellites.md "https://poseidat.org/schema/core/measurement/position.json#/properties/number_of_satellites") |

## latitude

The latitude of the geographical location

`latitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-latitude.md "https://poseidat.org/schema/core/measurement/position.json#/properties/latitude")

### latitude Type

`number`

## longitude

The longitude of the geographical location

`longitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-longitude.md "https://poseidat.org/schema/core/measurement/position.json#/properties/longitude")

### longitude Type

`number`

## heading

The compass heading of the vessel in degrees

`heading`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-heading.md "https://poseidat.org/schema/core/measurement/position.json#/properties/heading")

### heading Type

`number`

## course_made_good

The direction in which the vessel is traveling, in degrees

`course_made_good`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-course_made_good.md "https://poseidat.org/schema/core/measurement/position.json#/properties/course_made_good")

### course_made_good Type

`number`

## speed_over_ground

The velocity of the vessel in meters per second (m/s) over the ground

`speed_over_ground`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-speed_over_ground.md "https://poseidat.org/schema/core/measurement/position.json#/properties/speed_over_ground")

### speed_over_ground Type

`number`

## speed_through_water

The velocity of the vessel in meters per second (m/s) through the water

`speed_through_water`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-speed_through_water.md "https://poseidat.org/schema/core/measurement/position.json#/properties/speed_through_water")

### speed_through_water Type

`number`

## number_of_satellites

The number of satellites used to calculate the position

`number_of_satellites`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-number_of_satellites.md "https://poseidat.org/schema/core/measurement/position.json#/properties/number_of_satellites")

### number_of_satellites Type

`number`
