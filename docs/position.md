# Position Schema

```txt
https://poseidat.org/schema/core/measurement/position.json
```

A navigational position that can be used in an entry

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [position.json](schemas/core/measurement/position.json "open original schema") |

## Position Type

`object` ([Position](position.md))

# Position Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :-------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [latitude](#latitude)                         | `number` | Required | cannot be null | [Position](position-properties-latitude.md "https://poseidat.org/schema/core/measurement/position.json#/properties/latitude")                         |
| [longitude](#longitude)                       | `number` | Required | cannot be null | [Position](position-properties-longitude.md "https://poseidat.org/schema/core/measurement/position.json#/properties/longitude")                       |
| [course_made_good](#course_made_good)         | `number` | Optional | cannot be null | [Position](position-properties-course_made_good.md "https://poseidat.org/schema/core/measurement/position.json#/properties/course_made_good")         |
| [speed_over_ground](#speed_over_ground)       | `number` | Optional | cannot be null | [Position](position-properties-speed_over_ground.md "https://poseidat.org/schema/core/measurement/position.json#/properties/speed_over_ground")       |
| [number_of_satellites](#number_of_satellites) | `number` | Optional | cannot be null | [Position](position-properties-number_of_satellites.md "https://poseidat.org/schema/core/measurement/position.json#/properties/number_of_satellites") |
| [fix_quality](#fix_quality)                   | `string` | Optional | cannot be null | [Position](position-properties-gnss-fix-quality.md "https://poseidat.org/schema/enum/gnss-fix-quality.json#/properties/fix_quality")                  |
| [fix_type](#fix_type)                         | `string` | Optional | cannot be null | [Position](position-properties-gnss-fix-type.md "https://poseidat.org/schema/enum/gnss-fix-type.json#/properties/fix_type")                           |
| [hdop](#hdop)                                 | `number` | Optional | cannot be null | [Position](position-properties-hdop.md "https://poseidat.org/schema/core/measurement/position.json#/properties/hdop")                                 |
| [antenna_altitude](#antenna_altitude)         | `number` | Optional | cannot be null | [Position](position-properties-antenna_altitude.md "https://poseidat.org/schema/core/measurement/position.json#/properties/antenna_altitude")         |
| [geoidal_separation](#geoidal_separation)     | `number` | Optional | cannot be null | [Position](position-properties-geoidal_separation.md "https://poseidat.org/schema/core/measurement/position.json#/properties/geoidal_separation")     |
| [dgps_data_age](#dgps_data_age)               | `number` | Optional | cannot be null | [Position](position-properties-dgps_data_age.md "https://poseidat.org/schema/core/measurement/position.json#/properties/dgps_data_age")               |
| [dgps_station_id](#dgps_station_id)           | `number` | Optional | cannot be null | [Position](position-properties-dgps_station_id.md "https://poseidat.org/schema/core/measurement/position.json#/properties/dgps_station_id")           |

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

## number_of_satellites

The number of satellites used to calculate the position

`number_of_satellites`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-number_of_satellites.md "https://poseidat.org/schema/core/measurement/position.json#/properties/number_of_satellites")

### number_of_satellites Type

`number`

## fix_quality

The quality of a GNSS receiver's fix.

`fix_quality`

*   is optional

*   Type: `string` ([GNSS fix quality](position-properties-gnss-fix-quality.md))

*   cannot be null

*   defined in: [Position](position-properties-gnss-fix-quality.md "https://poseidat.org/schema/enum/gnss-fix-quality.json#/properties/fix_quality")

### fix_quality Type

`string` ([GNSS fix quality](position-properties-gnss-fix-quality.md))

### fix_quality Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"INVALID"`  |             |
| `"GPS_FIX"`  |             |
| `"DGPS_FIX"` |             |

## fix_type

The type of a GNSS receiver's fix.

`fix_type`

*   is optional

*   Type: `string` ([GNSS fix type](position-properties-gnss-fix-type.md))

*   cannot be null

*   defined in: [Position](position-properties-gnss-fix-type.md "https://poseidat.org/schema/enum/gnss-fix-type.json#/properties/fix_type")

### fix_type Type

`string` ([GNSS fix type](position-properties-gnss-fix-type.md))

### fix_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"NOT_AVAILABLE"` |             |
| `"2D_FIX"`        |             |
| `"3D_FIX"`        |             |

## hdop

Relative accuracy of horizontal position

`hdop`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-hdop.md "https://poseidat.org/schema/core/measurement/position.json#/properties/hdop")

### hdop Type

`number`

## antenna_altitude

The number of meters above mean sea level of the receiver antenna

`antenna_altitude`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-antenna_altitude.md "https://poseidat.org/schema/core/measurement/position.json#/properties/antenna_altitude")

### antenna_altitude Type

`number`

## geoidal_separation

Height of geoid above WGS84 ellipsoid in meters

`geoidal_separation`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-geoidal_separation.md "https://poseidat.org/schema/core/measurement/position.json#/properties/geoidal_separation")

### geoidal_separation Type

`number`

## dgps_data_age

The age of the DGPS data in seconds

`dgps_data_age`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-dgps_data_age.md "https://poseidat.org/schema/core/measurement/position.json#/properties/dgps_data_age")

### dgps_data_age Type

`number`

## dgps_station_id

The station id of the used DGPS reference station

`dgps_station_id`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Position](position-properties-dgps_station_id.md "https://poseidat.org/schema/core/measurement/position.json#/properties/dgps_station_id")

### dgps_station_id Type

`number`
