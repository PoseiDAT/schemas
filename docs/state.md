# SensorState Schema

```txt
https://poseidat.org/core-schema/sensor/state.json
```

A sensor state journal entry


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                           |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [state.json](schemas/entry/sensor/state.json "open original schema") |

## SensorState Type

`object` ([SensorState](state.md))

all of

-   [BaseEntry](measurement-allof-baseentry.md "check type definition")

# SensorState Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                   |
| :---------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [sensor_id](#sensor_id) | `string` | Required | cannot be null | [SensorState](state-properties-sensor_id.md "https&#x3A;//poseidat.org/core-schema/sensor/state.json#/properties/sensor_id") |
| [value](#value)         | `string` | Required | cannot be null | [SensorState](state-properties-value.md "https&#x3A;//poseidat.org/core-schema/sensor/state.json#/properties/value")         |
| [timestamp](#timestamp) | `string` | Optional | cannot be null | [SensorState](state-properties-timestamp.md "https&#x3A;//poseidat.org/core-schema/sensor/state.json#/properties/timestamp") |

## sensor_id

The unique identifier for the sensor


`sensor_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [SensorState](state-properties-sensor_id.md "https&#x3A;//poseidat.org/core-schema/sensor/state.json#/properties/sensor_id")

### sensor_id Type

`string`

## value

The registered state for the sensor


`value`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [SensorState](state-properties-value.md "https&#x3A;//poseidat.org/core-schema/sensor/state.json#/properties/value")

### value Type

`string`

## timestamp

The date and time the sensor value was recorded at in UTC in RFC3339 format


`timestamp`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [SensorState](state-properties-timestamp.md "https&#x3A;//poseidat.org/core-schema/sensor/state.json#/properties/timestamp")

### timestamp Type

`string`

### timestamp Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
