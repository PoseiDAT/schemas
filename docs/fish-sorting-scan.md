# A fish sorting scan detection measurement Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-scan.json
```

The result of a measurement scan to sort fish by species and weight using images, video frames or other sensor data

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fish-sorting-scan.json](schemas/core/measurement/fish-sorting-scan.json "open original schema") |

## A fish sorting scan detection measurement Type

`object` ([A fish sorting scan detection measurement](fish-sorting-scan.md))

# A fish sorting scan detection measurement Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                           |
| :---------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [identifier](#identifier)                 | `string`  | Required | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-identifier.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/identifier")                 |
| [start_datetime](#start_datetime)         | `string`  | Required | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-start_datetime.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/start_datetime")         |
| [end_datetime](#end_datetime)             | `string`  | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-end_datetime.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/end_datetime")             |
| [spatial_data](#spatial_data)             | `object`  | Required | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-spatial_data.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/spatial_data")             |
| [below_minimum_size](#below_minimum_size) | `boolean` | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-below_minimum_size.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/below_minimum_size") |
| [occlusion_type](#occlusion_type)         | `string`  | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-occlusion_type.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/occlusion_type")         |
| [fish](#fish)                             | `object`  | Required | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish")                             |
| [validation](#validation)                 | `object`  | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-validation.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/validation")                 |

## identifier

The unique identifier for the fish sorting scan

`identifier`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-identifier.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/identifier")

### identifier Type

`string`

## start_datetime

The date and time the fish sorting scan started in UTC in RFC3339 format

`start_datetime`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-start_datetime.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/start_datetime")

### start_datetime Type

`string`

### start_datetime Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## end_datetime

The date and time the fish sorting scan ended in UTC in RFC3339 format

`end_datetime`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-end_datetime.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/end_datetime")

### end_datetime Type

`string`

### end_datetime Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## spatial_data

The spatial data of the fish in the detection source

`spatial_data`

*   is required

*   Type: `object` ([Details](fish-sorting-scan-properties-spatial_data.md))

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-spatial_data.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/spatial_data")

### spatial_data Type

`object` ([Details](fish-sorting-scan-properties-spatial_data.md))

## below_minimum_size

Indicates the fish is below the minimum measurement size

`below_minimum_size`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-below_minimum_size.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/below_minimum_size")

### below_minimum_size Type

`boolean`

## occlusion_type

The detected occlusion type of the fish in the image

`occlusion_type`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-occlusion_type.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/occlusion_type")

### occlusion_type Type

`string`

### occlusion_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"fully_visible"`     |             |
| `"partially_visible"` |             |
| `"immeasurable"`      |             |

## fish

All the details related to the detected fish in this scan

`fish`

*   is required

*   Type: `object` ([Details](fish-sorting-scan-properties-fish.md))

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-fish.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/fish")

### fish Type

`object` ([Details](fish-sorting-scan-properties-fish.md))

## validation

The validation details of the fish sorting detection

`validation`

*   is optional

*   Type: `object` ([Details](fish-sorting-scan-properties-validation.md))

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-validation.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/validation")

### validation Type

`object` ([Details](fish-sorting-scan-properties-validation.md))
