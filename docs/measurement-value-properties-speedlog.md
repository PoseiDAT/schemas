# Speedlog Schema

```txt
https://poseidat.org/schema/core/measurement/speedlog.json#/properties/speedlog
```

A combination of all posible speedlog measurements

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## speedlog Type

`object` ([Speedlog](measurement-value-properties-speedlog.md))

# speedlog Properties

| Property                                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                    |
| :-------------------------------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [longitudinal_water_speed](#longitudinal_water_speed)                 | `number` | Required | cannot be null | [Speedlog](speedlog-properties-longitudinal_water_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/longitudinal_water_speed")                 |
| [transverse_water_speed](#transverse_water_speed)                     | `number` | Optional | cannot be null | [Speedlog](speedlog-properties-transverse_water_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/transverse_water_speed")                     |
| [longitudinal_ground_speed](#longitudinal_ground_speed)               | `number` | Optional | cannot be null | [Speedlog](speedlog-properties-longitudinal_ground_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/longitudinal_ground_speed")               |
| [transverse_ground_speed](#transverse_ground_speed)                   | `number` | Optional | cannot be null | [Speedlog](speedlog-properties-transverse_ground_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/transverse_ground_speed")                   |
| [stern_transverse_water_speed](#stern_transverse_water_speed)         | `number` | Optional | cannot be null | [Speedlog](speedlog-properties-stern_transverse_water_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/stern_transverse_water_speed")         |
| [stern_transverse_ground_speed](#stern_transverse_ground_speed)       | `number` | Optional | cannot be null | [Speedlog](speedlog-properties-stern_transverse_ground_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/stern_transverse_ground_speed")       |
| [total_cumulative_water_distance](#total_cumulative_water_distance)   | `number` | Optional | cannot be null | [Speedlog](speedlog-properties-total_cumulative_water_distance.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/total_cumulative_water_distance")   |
| [total_cumulative_ground_distance](#total_cumulative_ground_distance) | `number` | Optional | cannot be null | [Speedlog](speedlog-properties-total_cumulative_ground_distance.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/total_cumulative_ground_distance") |

## longitudinal_water_speed

The longitudinal water speed

`longitudinal_water_speed`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Speedlog](speedlog-properties-longitudinal_water_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/longitudinal_water_speed")

### longitudinal_water_speed Type

`number`

## transverse_water_speed

The transverse water speed

`transverse_water_speed`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Speedlog](speedlog-properties-transverse_water_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/transverse_water_speed")

### transverse_water_speed Type

`number`

## longitudinal_ground_speed

The longitudinal ground speed

`longitudinal_ground_speed`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Speedlog](speedlog-properties-longitudinal_ground_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/longitudinal_ground_speed")

### longitudinal_ground_speed Type

`number`

## transverse_ground_speed

The transverse ground speed

`transverse_ground_speed`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Speedlog](speedlog-properties-transverse_ground_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/transverse_ground_speed")

### transverse_ground_speed Type

`number`

## stern_transverse_water_speed

The stern transverse water speed

`stern_transverse_water_speed`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Speedlog](speedlog-properties-stern_transverse_water_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/stern_transverse_water_speed")

### stern_transverse_water_speed Type

`number`

## stern_transverse_ground_speed

The stern transverse ground speed

`stern_transverse_ground_speed`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Speedlog](speedlog-properties-stern_transverse_ground_speed.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/stern_transverse_ground_speed")

### stern_transverse_ground_speed Type

`number`

## total_cumulative_water_distance

The total cumulative water distance

`total_cumulative_water_distance`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Speedlog](speedlog-properties-total_cumulative_water_distance.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/total_cumulative_water_distance")

### total_cumulative_water_distance Type

`number`

## total_cumulative_ground_distance

The total cumulative ground distance

`total_cumulative_ground_distance`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Speedlog](speedlog-properties-total_cumulative_ground_distance.md "https://poseidat.org/schema/core/measurement/speedlog.json#/properties/total_cumulative_ground_distance")

### total_cumulative_ground_distance Type

`number`
