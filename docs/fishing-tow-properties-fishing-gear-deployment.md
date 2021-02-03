# Fishing gear deployment Schema

```txt
https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_deployment
```

Fishing gear deployment details

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-tow.json*](schemas/core/fishing-tow.json "open original schema") |

## gear_deployment Type

`object` ([Fishing gear deployment](fishing-tow-properties-fishing-gear-deployment.md))

# gear_deployment Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :---------------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [duration](#duration)                                 | `number` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-duration.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/duration")                                  |
| [unit_of_time](#unit_of_time)                         | `string` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-unit_of_time.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/unit_of_time")                          |
| [fishing_operations](#fishing_operations)             | `number` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-fishing_operations.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/fishing_operations")              |
| [fishing_depth](#fishing_depth)                       | `number` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-fishing_depth.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/fishing_depth")                        |
| [gear_component_count](#gear_component_count)         | `number` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear_component_count.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_component_count")          |
| [gear_specification](#gear_specification)             | `number` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear_specification.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_specification")              |
| [gear_problems](#gear_problems)                       | `number` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear_problems.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_problems")                        |
| [gill_net](#gill_net)                                 | `object` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-fishing-gear-gill-net.md "https://poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/gill_net")                       |
| [gear_capacity](#gear_capacity)                       | `string` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear_capacity.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_capacity")                        |
| [gear_hook_count](#gear_hook_count)                   | `number` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear_hook_count.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_hook_count")                    |
| [gear_dredger_count](#gear_dredger_count)             | `number` | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear_dredger_count.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_dredger_count")              |
| [gear_shot](#gear_shot)                               | `array`  | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear-shot-details.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_shot")                        |
| [gear_retrieve](#gear_retrieve)                       | `array`  | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear-retrieve-details.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_retrieve")                |
| [gear_loss](#gear_loss)                               | `array`  | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-gear-loss-details.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_loss")                        |
| [partnered_fishing_vessel](#partnered_fishing_vessel) | `array`  | Optional | cannot be null | [Fishing gear deployment](fishing-gear-deployment-properties-partnered-fishing-vessels.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/partnered_fishing_vessel") |

## duration

Number of minutes the gear was deployed. Known as DU

`duration`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-duration.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/duration")

### duration Type

`number`

## unit_of_time

The unit of time for measuring gear deployment. NLD: ET

`unit_of_time`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-unit_of_time.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/unit_of_time")

### unit_of_time Type

`string`

## fishing_operations

Number of fishing operations per 24 hour period: number of times gear is shot - does not apply to hooks, lines and pots. If no fishing operations took place then report 0. Known as FO

`fishing_operations`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-fishing_operations.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/fishing_operations")

### fishing_operations Type

`number`

## fishing_depth

Fishing depth. The distance from the water surface to the lowest part of the fishing gear, measured in meters. Applies to vessels working under deep sea permit and using towed gear, long lines or fixed nets. Known as FD

`fishing_depth`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-fishing_depth.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/fishing_depth")

### fishing_depth Type

`number`

## gear_component_count

Additional information relating to certain gear types e.g. liners = hooks, dredger = number of dredges. GBR: GBRFOX

`gear_component_count`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear_component_count.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_component_count")

### gear_component_count Type

`number`

## gear_specification

Norwegian requirement - gear specification (trawls: 1=single, 2=double, 3=triple). GBR: GBRGS

`gear_specification`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear_specification.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_specification")

### gear_specification Type

`number`

### gear_specification Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `1`   |             |
| `2`   |             |
| `3`   |             |

## gear_problems

Norwegian requirement - gear problems (1=empty net, 2=net burst, 3=net split, 4=broken meshes, 5=lost gear, 6=other). GBR: GBRGP

`gear_problems`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear_problems.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_problems")

### gear_problems Type

`number`

### gear_problems Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `1`   |             |
| `2`   |             |
| `3`   |             |
| `4`   |             |
| `5`   |             |
| `6`   |             |

## gill_net

Deep Sea Permit requirements when using gill nets

`gill_net`

*   is optional

*   Type: `object` ([Fishing gear gill net](fishing-gear-deployment-properties-fishing-gear-gill-net.md))

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-fishing-gear-gill-net.md "https://poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/gill_net")

### gill_net Type

`object` ([Fishing gear gill net](fishing-gear-deployment-properties-fishing-gear-gill-net.md))

## gear_capacity

The capacity or dimensions of the deployed gear. NLD: GC

`gear_capacity`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear_capacity.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_capacity")

### gear_capacity Type

`string`

## gear_hook_count

Additional information relating to certain gear types: liners = hooks. NLD: NH

`gear_hook_count`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear_hook_count.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_hook_count")

### gear_hook_count Type

`number`

## gear_dredger_count

Additional information relating to certain gear types: dredger = number of dredges. NLD: NN

`gear_dredger_count`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear_dredger_count.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_dredger_count")

### gear_dredger_count Type

`number`

## gear_shot

All gear shot event details. NLD: GES, GBR: GES

`gear_shot`

*   is optional

*   Type: `object[]` ([Fishing gear shot](fishing-gear-deployment-properties-gear-shot-details-fishing-gear-shot.md))

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear-shot-details.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_shot")

### gear_shot Type

`object[]` ([Fishing gear shot](fishing-gear-deployment-properties-gear-shot-details-fishing-gear-shot.md))

## gear_retrieve

All gear retrieve even details. NLD: GER, GBR: GER

`gear_retrieve`

*   is optional

*   Type: `object[]` ([Fishing gear retrieve](fishing-gear-deployment-properties-gear-retrieve-details-fishing-gear-retrieve.md))

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear-retrieve-details.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_retrieve")

### gear_retrieve Type

`object[]` ([Fishing gear retrieve](fishing-gear-deployment-properties-gear-retrieve-details-fishing-gear-retrieve.md))

## gear_loss

All gear loss even details. NLD: GLS, GBR: GLS

`gear_loss`

*   is optional

*   Type: `object[]` ([Fishing gear loss](fishing-gear-deployment-properties-gear-loss-details-fishing-gear-loss.md))

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-gear-loss-details.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_loss")

### gear_loss Type

`object[]` ([Fishing gear loss](fishing-gear-deployment-properties-gear-loss-details-fishing-gear-loss.md))

## partnered_fishing_vessel

Details of partner vessels for pair fishing. BR: PFP, NLD: NLSPN

`partnered_fishing_vessel`

*   is optional

*   Type: `object[]` ([Vessel partner](fishing-gear-deployment-properties-partnered-fishing-vessels-vessel-partner.md))

*   cannot be null

*   defined in: [Fishing gear deployment](fishing-gear-deployment-properties-partnered-fishing-vessels.md "https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/partnered_fishing_vessel")

### partnered_fishing_vessel Type

`object[]` ([Vessel partner](fishing-gear-deployment-properties-partnered-fishing-vessels-vessel-partner.md))
