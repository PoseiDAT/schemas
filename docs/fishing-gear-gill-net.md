# Fishing gear gill net Schema

```txt
https://poseidat.org/schema/core/fishing-gear-gill-net.json
```

Deep Sea Permit requirements when using gill nets


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                   |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-gear-gill-net.json](schemas/core/fishing-gear-gill-net.json "open original schema") |

## Fishing gear gill net Type

`object` ([Fishing gear gill net](fishing-gear-gill-net.md))

# Fishing gear gill net Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :------------------------------------------ | -------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [average_gear_length](#average_gear_length) | `number` | Required | cannot be null | [Fishing gear gill net](fishing-gear-gill-net-properties-average_gear_length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/average_gear_length") |
| [average_gear_height](#average_gear_height) | `number` | Required | cannot be null | [Fishing gear gill net](fishing-gear-gill-net-properties-average_gear_height.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/average_gear_height") |
| [nominal_gear_length](#nominal_gear_length) | `number` | Optional | cannot be null | [Fishing gear gill net](fishing-gear-gill-net-properties-nominal_gear_length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/nominal_gear_length") |
| [number_of_nets](#number_of_nets)           | `number` | Required | cannot be null | [Fishing gear gill net](fishing-gear-gill-net-properties-number_of_nets.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/number_of_nets")           |

## average_gear_length

Average length of fishing nets in meters. NLD: GL, GBR: GNGL


`average_gear_length`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Fishing gear gill net](fishing-gear-gill-net-properties-average_gear_length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/average_gear_length")

### average_gear_length Type

`number`

## average_gear_height

Average height of fishing nets in meters. NLD: GD, GBR: GNGD


`average_gear_height`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Fishing gear gill net](fishing-gear-gill-net-properties-average_gear_height.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/average_gear_height")

### average_gear_height Type

`number`

## nominal_gear_length

The nominal length of one fishing net in meters. GBR: GNNL


`nominal_gear_length`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Fishing gear gill net](fishing-gear-gill-net-properties-nominal_gear_length.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/nominal_gear_length")

### nominal_gear_length Type

`number`

## number_of_nets

Number of nets present in the fleet. NLD: VN, GBR: GNNN


`number_of_nets`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Fishing gear gill net](fishing-gear-gill-net-properties-number_of_nets.md "https&#x3A;//poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/number_of_nets")

### number_of_nets Type

`number`
