# Vessel location Schema

```txt
https://poseidat.org/schema/core/vessel-location.json
```

A location on a vessel, used to locate objects on the vessel


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vessel-location.json](schemas/core/vessel-location.json "open original schema") |

## Vessel location Type

`object` ([Vessel location](vessel-location.md))

# Vessel location Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                  |
| :-------------------------- | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                   | `string` | Required | cannot be null | [Vessel location](vessel-location-properties-id.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/id")                             |
| [compartment](#compartment) | `string` | Required | cannot be null | [Vessel location](vessel-location-properties-vessel-compartment.md "https&#x3A;//poseidat.org/schema/enum/vessel-compartment.json#/properties/compartment") |
| [name](#name)               | `string` | Optional | cannot be null | [Vessel location](vessel-location-properties-name.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/name")                         |
| [description](#description) | `string` | Optional | cannot be null | [Vessel location](vessel-location-properties-description.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/description")           |
| [pos_x](#pos_x)             | `number` | Optional | cannot be null | [Vessel location](vessel-location-properties-pos_x.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/pos_x")                       |
| [pos_y](#pos_y)             | `number` | Optional | cannot be null | [Vessel location](vessel-location-properties-pos_y.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/pos_y")                       |
| [pos_z](#pos_z)             | `number` | Optional | cannot be null | [Vessel location](vessel-location-properties-pos_z.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/pos_z")                       |

## id

The unique identifier for the location (UUID v4)


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Vessel location](vessel-location-properties-id.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/id")

### id Type

`string`

### id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## compartment

The different compartments in a vessel.


`compartment`

-   is required
-   Type: `string` ([Vessel compartment](vessel-location-properties-vessel-compartment.md))
-   cannot be null
-   defined in: [Vessel location](vessel-location-properties-vessel-compartment.md "https&#x3A;//poseidat.org/schema/enum/vessel-compartment.json#/properties/compartment")

### compartment Type

`string` ([Vessel compartment](vessel-location-properties-vessel-compartment.md))

### compartment Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | ----------- |
| `"DECK"`       |             |
| `"BRIDGE"`     |             |
| `"GALLEY"`     |             |
| `"ENGINEROOM"` |             |
| `"FISHHOLD"`   |             |
| `"CABIN"`      |             |
| `"BOW"`        |             |
| `"STERN"`      |             |

## name

The name of this location


`name`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Vessel location](vessel-location-properties-name.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/name")

### name Type

`string`

## description

The description of this location in the compartment


`description`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Vessel location](vessel-location-properties-description.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/description")

### description Type

`string`

## pos_x

The x position in cm, the position which is closest to the port side is 0cm


`pos_x`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Vessel location](vessel-location-properties-pos_x.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/pos_x")

### pos_x Type

`number`

## pos_y

The y position in cm, the position which is closest to the stern is 0cm


`pos_y`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Vessel location](vessel-location-properties-pos_y.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/pos_y")

### pos_y Type

`number`

## pos_z

The z position in cm, the position which is closest to the keel is 0cm


`pos_z`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Vessel location](vessel-location-properties-pos_z.md "https&#x3A;//poseidat.org/schema/core/vessel-location.json#/properties/pos_z")

### pos_z Type

`number`
