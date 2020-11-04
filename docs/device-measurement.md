# DeviceMeasurement Schema

```txt
https://poseidat.org/schema/entry/device-measurement.json
```

A device measurement journal entry


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [device-measurement.json](schemas/entry/device-measurement.json "open original schema") |

## DeviceMeasurement Type

`object` ([DeviceMeasurement](device-measurement.md))

all of

-   [BaseEntry](position-allof-baseentry.md "check type definition")

# DeviceMeasurement Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                             |
| :---------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [device_id](#device_id) | `string` | Required | cannot be null | [DeviceMeasurement](device-measurement-properties-device_id.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/device_id") |
| [value](#value)         | `number` | Required | cannot be null | [DeviceMeasurement](device-measurement-properties-value.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/value")         |
| [timestamp](#timestamp) | `string` | Required | cannot be null | [DeviceMeasurement](device-measurement-properties-timestamp.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/timestamp") |

## device_id

The unique identifier for the device


`device_id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [DeviceMeasurement](device-measurement-properties-device_id.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/device_id")

### device_id Type

`string`

## value

The registered measurement for the device


`value`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [DeviceMeasurement](device-measurement-properties-value.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/value")

### value Type

`number`

## timestamp

The date and time the value was recorded in UTC in RFC3339 format


`timestamp`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [DeviceMeasurement](device-measurement-properties-timestamp.md "https&#x3A;//poseidat.org/schema/entry/device-measurement.json#/properties/timestamp")

### timestamp Type

`string`

### timestamp Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")
