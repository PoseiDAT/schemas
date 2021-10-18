# Equipment Schema

```txt
https://poseidat.org/schema/core/equipment/equipment.json
```

A piece of equipment installed on a vessel. Equipment is composed out of different devices

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [equipment.json](schemas/core/equipment/equipment.json "open original schema") |

## Equipment Type

`object` ([Equipment](equipment.md))

# Equipment Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                             |
| :---------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| [equipment_id](#equipment_id) | `string` | Required | cannot be null | [Equipment](equipment-properties-equipment_id.md "https://poseidat.org/schema/core/equipment/equipment.json#/properties/equipment_id") |
| [name](#name)                 | `string` | Required | cannot be null | [Equipment](equipment-properties-name.md "https://poseidat.org/schema/core/equipment/equipment.json#/properties/name")                 |
| [type](#type)                 | `string` | Required | cannot be null | [Equipment](equipment-properties-equipment-type.md "https://poseidat.org/schema/enum/equipment-type.json#/properties/type")            |
| [supplier](#supplier)         | `object` | Optional | cannot be null | [Equipment](equipment-properties-company-2.md "https://poseidat.org/schema/core/persona/company.json#/properties/supplier")            |
| [installer](#installer)       | `object` | Optional | cannot be null | [Equipment](equipment-properties-company-2.md "https://poseidat.org/schema/core/persona/company.json#/properties/installer")           |
| [maintainer](#maintainer)     | `object` | Optional | cannot be null | [Equipment](equipment-properties-company-2.md "https://poseidat.org/schema/core/persona/company.json#/properties/maintainer")          |
| [devices](#devices)           | `array`  | Required | cannot be null | [Equipment](equipment-properties-devices.md "https://poseidat.org/schema/core/equipment/equipment.json#/properties/devices")           |

## equipment_id

The unique identifier for the equipment (UUID v4)

`equipment_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Equipment](equipment-properties-equipment_id.md "https://poseidat.org/schema/core/equipment/equipment.json#/properties/equipment_id")

### equipment_id Type

`string`

### equipment_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## name

Name of the equipment

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Equipment](equipment-properties-name.md "https://poseidat.org/schema/core/equipment/equipment.json#/properties/name")

### name Type

`string`

## type

The types of supported technical vessel equipment.

`type`

*   is required

*   Type: `string` ([Equipment type](equipment-properties-equipment-type.md))

*   cannot be null

*   defined in: [Equipment](equipment-properties-equipment-type.md "https://poseidat.org/schema/enum/equipment-type.json#/properties/type")

### type Type

`string` ([Equipment type](equipment-properties-equipment-type.md))

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"ENGINE"`           |             |
| `"GNSS"`             |             |
| `"ECHO_SOUNDER"`     |             |
| `"FISH_FINDER"`      |             |
| `"AIS"`              |             |
| `"TANK_LEVEL_METER"` |             |
| `"TENSIOMETER"`      |             |
| `"CHARGER"`          |             |
| `"SEPARATOR"`        |             |
| `"COMPASS"`          |             |
| `"V_SAT"`            |             |
| `"REFRIGERATOR"`     |             |
| `"ICE_MAKER"`        |             |
| `"WINCH"`            |             |
| `"RUDDER"`           |             |
| `"PROPELLER"`        |             |
| `"PUMP"`             |             |
| `"SENSOR"`           |             |
| `"SCALE"`            |             |
| `"ECDIS"`            |             |
| `"ECS"`              |             |

## supplier

The details of a (commercial) company

`supplier`

*   is optional

*   Type: `object` ([Company](equipment-properties-company-2.md))

*   cannot be null

*   defined in: [Equipment](equipment-properties-company-2.md "https://poseidat.org/schema/core/persona/company.json#/properties/supplier")

### supplier Type

`object` ([Company](equipment-properties-company-2.md))

## installer

The details of a (commercial) company

`installer`

*   is optional

*   Type: `object` ([Company](equipment-properties-company-2.md))

*   cannot be null

*   defined in: [Equipment](equipment-properties-company-2.md "https://poseidat.org/schema/core/persona/company.json#/properties/installer")

### installer Type

`object` ([Company](equipment-properties-company-2.md))

## maintainer

The details of a (commercial) company

`maintainer`

*   is optional

*   Type: `object` ([Company](equipment-properties-company-2.md))

*   cannot be null

*   defined in: [Equipment](equipment-properties-company-2.md "https://poseidat.org/schema/core/persona/company.json#/properties/maintainer")

### maintainer Type

`object` ([Company](equipment-properties-company-2.md))

## devices

The collection of devices of which this equipment is composed

`devices`

*   is required

*   Type: `object[]` ([Device](equipment-properties-devices-device.md))

*   cannot be null

*   defined in: [Equipment](equipment-properties-devices.md "https://poseidat.org/schema/core/equipment/equipment.json#/properties/devices")

### devices Type

`object[]` ([Device](equipment-properties-devices-device.md))

### devices Constraints

**minimum number of items**: the minimum number of items for this array is: `2`
