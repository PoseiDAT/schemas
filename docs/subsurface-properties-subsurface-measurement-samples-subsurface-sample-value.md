# Subsurface sample value Schema

```txt
https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/samples/items
```

A subsurface sample measurement

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [subsurface.json*](schemas/core/measurement/subsurface.json "open original schema") |

## items Type

`object` ([Subsurface sample value](subsurface-properties-subsurface-measurement-samples-subsurface-sample-value.md))

# items Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                             |
| :---------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [conductivity](#conductivity) | `number` | Required | cannot be null | [Subsurface sample value](subsurface-sample-properties-conductivity.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/conductivity") |
| [depth](#depth)               | `number` | Required | cannot be null | [Subsurface sample value](subsurface-sample-properties-depth.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/depth")               |
| [latitude](#latitude)         | `number` | Required | cannot be null | [Subsurface sample value](subsurface-sample-properties-latitude.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/latitude")         |
| [longitude](#longitude)       | `number` | Required | cannot be null | [Subsurface sample value](subsurface-sample-properties-longitude.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/longitude")       |
| [salinity](#salinity)         | `number` | Required | cannot be null | [Subsurface sample value](subsurface-sample-properties-salinity.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/salinity")         |
| [temp](#temp)                 | `number` | Required | cannot be null | [Subsurface sample value](subsurface-sample-properties-temp.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/temp")                 |
| [time](#time)                 | `string` | Required | cannot be null | [Subsurface sample value](subsurface-sample-properties-time.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/time")                 |

## conductivity

The conductivity of the sample measurement in Siemens per meter

`conductivity`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Subsurface sample value](subsurface-sample-properties-conductivity.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/conductivity")

### conductivity Type

`number`

## depth

The depth of the sample measurement in meters

`depth`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Subsurface sample value](subsurface-sample-properties-depth.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/depth")

### depth Type

`number`

## latitude

The latitude of the sample measurement

`latitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Subsurface sample value](subsurface-sample-properties-latitude.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/latitude")

### latitude Type

`number`

## longitude

The longitude of the sample measurement

`longitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Subsurface sample value](subsurface-sample-properties-longitude.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/longitude")

### longitude Type

`number`

## salinity

The salinity of the sample measurement in Practical Salinity Units

`salinity`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Subsurface sample value](subsurface-sample-properties-salinity.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/salinity")

### salinity Type

`number`

## temp

The temperature of the sample measurement in degrees celsius

`temp`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Subsurface sample value](subsurface-sample-properties-temp.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/temp")

### temp Type

`number`

## time

The date and time of the sample measurement as an RFC string

`time`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Subsurface sample value](subsurface-sample-properties-time.md "https://poseidat.org/schema/core/measurement/subsurface-sample.json#/properties/time")

### time Type

`string`

### time Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
