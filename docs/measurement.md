# SensorMeasurement Schema

```txt
https://poseidat.org/core-schema/sensor/measurement.json
```

A sensor measurement journal entry


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement.json](schemas/entry/sensor/measurement.json "open original schema") |

## SensorMeasurement Type

`object` ([SensorMeasurement](measurement.md))

all of

-   [BaseEntry](measurement-allof-baseentry.md "check type definition")

# SensorMeasurement Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :---------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [sensor_id](#sensor_id) | `string` | Required | cannot be null | [SensorMeasurement](measurement-properties-sensor_id.md "https&#x3A;//poseidat.org/core-schema/sensor/measurement.json#/properties/sensor_id") |
| [value](#value)         | `number` | Required | cannot be null | [SensorMeasurement](measurement-properties-value.md "https&#x3A;//poseidat.org/core-schema/sensor/measurement.json#/properties/value")         |
| [timestamp](#timestamp) | `string` | Optional | cannot be null | [SensorMeasurement](measurement-properties-timestamp.md "https&#x3A;//poseidat.org/core-schema/sensor/measurement.json#/properties/timestamp") |

## sensor_id

The unique identifier for the sensor


`sensor_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [SensorMeasurement](measurement-properties-sensor_id.md "https&#x3A;//poseidat.org/core-schema/sensor/measurement.json#/properties/sensor_id")

### sensor_id Type

`string`

## value

The registered measurement for the sensor


`value`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [SensorMeasurement](measurement-properties-value.md "https&#x3A;//poseidat.org/core-schema/sensor/measurement.json#/properties/value")

### value Type

`number`

## timestamp

The date and time the sensor value was recorded at in UTC in RFC3339 format


`timestamp`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [SensorMeasurement](measurement-properties-timestamp.md "https&#x3A;//poseidat.org/core-schema/sensor/measurement.json#/properties/timestamp")

### timestamp Type

`string`

### timestamp Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
