# Vessel section Schema

```txt
https://poseidat.org/schema/core/vessel-section.json
```

A section off a vessel, used to detail where objects are on the vessel

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vessel-section.json](schemas/core/vessel-section.json "open original schema") |

## Vessel section Type

`object` ([Vessel section](vessel-section.md))

# Vessel section Properties

| Property                                | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :-------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [vessel_section_id](#vessel_section_id) | `string` | Required | cannot be null | [Vessel section](vessel-section-properties-vessel_section_id.md "https://poseidat.org/schema/core/vessel-section.json#/properties/vessel_section_id") |
| [compartment](#compartment)             | `string` | Required | cannot be null | [Vessel section](vessel-section-properties-vessel-compartment.md "https://poseidat.org/schema/enum/vessel-compartment.json#/properties/compartment")  |
| [name](#name)                           | `string` | Optional | cannot be null | [Vessel section](vessel-section-properties-name.md "https://poseidat.org/schema/core/vessel-section.json#/properties/name")                           |
| [description](#description)             | `string` | Optional | cannot be null | [Vessel section](vessel-section-properties-description.md "https://poseidat.org/schema/core/vessel-section.json#/properties/description")             |
| [pos_x](#pos_x)                         | `number` | Optional | cannot be null | [Vessel section](vessel-section-properties-pos_x.md "https://poseidat.org/schema/core/vessel-section.json#/properties/pos_x")                         |
| [pos_y](#pos_y)                         | `number` | Optional | cannot be null | [Vessel section](vessel-section-properties-pos_y.md "https://poseidat.org/schema/core/vessel-section.json#/properties/pos_y")                         |
| [pos_z](#pos_z)                         | `number` | Optional | cannot be null | [Vessel section](vessel-section-properties-pos_z.md "https://poseidat.org/schema/core/vessel-section.json#/properties/pos_z")                         |

## vessel_section_id

The unique identifier for the section (UUID v4)

`vessel_section_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel section](vessel-section-properties-vessel_section_id.md "https://poseidat.org/schema/core/vessel-section.json#/properties/vessel_section_id")

### vessel_section_id Type

`string`

### vessel_section_id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## compartment

The different compartments in a vessel.

`compartment`

*   is required

*   Type: `string` ([Vessel compartment](vessel-section-properties-vessel-compartment.md))

*   cannot be null

*   defined in: [Vessel section](vessel-section-properties-vessel-compartment.md "https://poseidat.org/schema/enum/vessel-compartment.json#/properties/compartment")

### compartment Type

`string` ([Vessel compartment](vessel-section-properties-vessel-compartment.md))

### compartment Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"DECK"`        |             |
| `"BRIDGE"`      |             |
| `"GALLEY"`      |             |
| `"ENGINE_ROOM"` |             |
| `"FISH_HOLD"`   |             |
| `"CABIN"`       |             |
| `"BOW"`         |             |
| `"STERN"`       |             |

## name

The name of this section

`name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel section](vessel-section-properties-name.md "https://poseidat.org/schema/core/vessel-section.json#/properties/name")

### name Type

`string`

## description

The description of this section in the compartment

`description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel section](vessel-section-properties-description.md "https://poseidat.org/schema/core/vessel-section.json#/properties/description")

### description Type

`string`

## pos_x

The x position in cm, the position which is closest to the port side is 0cm

`pos_x`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Vessel section](vessel-section-properties-pos_x.md "https://poseidat.org/schema/core/vessel-section.json#/properties/pos_x")

### pos_x Type

`number`

## pos_y

The y position in cm, the position which is closest to the stern is 0cm

`pos_y`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Vessel section](vessel-section-properties-pos_y.md "https://poseidat.org/schema/core/vessel-section.json#/properties/pos_y")

### pos_y Type

`number`

## pos_z

The z position in cm, the position which is closest to the keel is 0cm

`pos_z`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Vessel section](vessel-section-properties-pos_z.md "https://poseidat.org/schema/core/vessel-section.json#/properties/pos_z")

### pos_z Type

`number`
