# Device Schema

```txt
https://poseidat.org/schema/core/equipment/device.json#/properties/devices/items
```

A device which is a part of a piece of equipment installed on a vessel

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [equipment.json*](schemas/core/equipment/equipment.json "open original schema") |

## items Type

`object` ([Device](equipment-properties-devices-device.md))

# items Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------ |
| [device_id](#device_id)   | `string` | Required | cannot be null | [Device](device-properties-device_id.md "https://poseidat.org/schema/core/equipment/device.json#/properties/device_id")   |
| [name](#name)             | `string` | Required | cannot be null | [Device](device-properties-name.md "https://poseidat.org/schema/core/equipment/device.json#/properties/name")             |
| [type](#type)             | `string` | Required | cannot be null | [Device](device-properties-device-type.md "https://poseidat.org/schema/enum/device-type.json#/properties/type")           |
| [brand](#brand)           | `string` | Optional | cannot be null | [Device](device-properties-brand.md "https://poseidat.org/schema/core/equipment/device.json#/properties/brand")           |
| [product_no](#product_no) | `string` | Optional | cannot be null | [Device](device-properties-product_no.md "https://poseidat.org/schema/core/equipment/device.json#/properties/product_no") |
| [serial_no](#serial_no)   | `string` | Optional | cannot be null | [Device](device-properties-serial_no.md "https://poseidat.org/schema/core/equipment/device.json#/properties/serial_no")   |
| [supplier](#supplier)     | `object` | Optional | cannot be null | [Device](equipment-properties-company.md "https://poseidat.org/schema/core/persona/company.json#/properties/supplier")    |
| [installer](#installer)   | `object` | Optional | cannot be null | [Device](equipment-properties-company.md "https://poseidat.org/schema/core/persona/company.json#/properties/installer")   |
| [maintainer](#maintainer) | `object` | Optional | cannot be null | [Device](equipment-properties-company.md "https://poseidat.org/schema/core/persona/company.json#/properties/maintainer")  |

## device_id

The unique identifier for the device (UUID v4)

`device_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-device_id.md "https://poseidat.org/schema/core/equipment/device.json#/properties/device_id")

### device_id Type

`string`

### device_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## name

Name of the device

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-name.md "https://poseidat.org/schema/core/equipment/device.json#/properties/name")

### name Type

`string`

## type

The types of supported technical vessel devices.

`type`

*   is required

*   Type: `string` ([Device type](device-properties-device-type.md))

*   cannot be null

*   defined in: [Device](device-properties-device-type.md "https://poseidat.org/schema/enum/device-type.json#/properties/type")

### type Type

`string` ([Device type](device-properties-device-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value               | Explanation |
| :------------------ | :---------- |
| `"ANTENNA"`         |             |
| `"PUMP"`            |             |
| `"PROCESSOR"`       |             |
| `"DISPLAY"`         |             |
| `"HID"`             |             |
| `"ROUTER"`          |             |
| `"SWITCH"`          |             |
| `"MODEM"`           |             |
| `"SENSOR"`          |             |
| `"BRAKE"`           |             |
| `"ACTUATOR"`        |             |
| `"CABLE"`           |             |
| `"ENCLOSURE"`       |             |
| `"CIRCUIT_BREAKER"` |             |

## brand

The brand of the device

`brand`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-brand.md "https://poseidat.org/schema/core/equipment/device.json#/properties/brand")

### brand Type

`string`

## product_no

The product number of the device

`product_no`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-product_no.md "https://poseidat.org/schema/core/equipment/device.json#/properties/product_no")

### product_no Type

`string`

## serial_no

The serial number of the device

`serial_no`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Device](device-properties-serial_no.md "https://poseidat.org/schema/core/equipment/device.json#/properties/serial_no")

### serial_no Type

`string`

## supplier

The details of a (commercial) company

`supplier`

*   is optional

*   Type: `object` ([Company](equipment-properties-company.md))

*   cannot be null

*   defined in: [Device](equipment-properties-company.md "https://poseidat.org/schema/core/persona/company.json#/properties/supplier")

### supplier Type

`object` ([Company](equipment-properties-company.md))

## installer

The details of a (commercial) company

`installer`

*   is optional

*   Type: `object` ([Company](equipment-properties-company.md))

*   cannot be null

*   defined in: [Device](equipment-properties-company.md "https://poseidat.org/schema/core/persona/company.json#/properties/installer")

### installer Type

`object` ([Company](equipment-properties-company.md))

## maintainer

The details of a (commercial) company

`maintainer`

*   is optional

*   Type: `object` ([Company](equipment-properties-company.md))

*   cannot be null

*   defined in: [Device](equipment-properties-company.md "https://poseidat.org/schema/core/persona/company.json#/properties/maintainer")

### maintainer Type

`object` ([Company](equipment-properties-company.md))
