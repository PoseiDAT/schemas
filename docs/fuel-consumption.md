# Fuel consumption Schema

```txt
https://poseidat.org/schema/core/measurement/fuel-consumption.json
```

Fuel consumption of a certain engine.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                     |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fuel-consumption.json](schemas/core/measurement/fuel-consumption.json "open original schema") |

## Fuel consumption Type

`object` ([Fuel consumption](fuel-consumption.md))

# Fuel consumption Properties

| Property                                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :---------------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [current_consumption](#current_consumption)                 | `number` | Required | cannot be null | [Fuel consumption](fuel-consumption-properties-current_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/current_consumption")                 |
| [current_average_consumption](#current_average_consumption) | `number` | Optional | cannot be null | [Fuel consumption](fuel-consumption-properties-current_average_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/current_average_consumption") |
| [current_peak_consumption](#current_peak_consumption)       | `number` | Optional | cannot be null | [Fuel consumption](fuel-consumption-properties-current_peak_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/current_peak_consumption")       |
| [last_hour_consumption](#last_hour_consumption)             | `number` | Optional | cannot be null | [Fuel consumption](fuel-consumption-properties-last_hour_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/last_hour_consumption")             |
| [last_day_consumption](#last_day_consumption)               | `number` | Optional | cannot be null | [Fuel consumption](fuel-consumption-properties-last_day_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/last_day_consumption")               |

## current_consumption

The current fuel consumption in liters per hour

`current_consumption`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Fuel consumption](fuel-consumption-properties-current_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/current_consumption")

### current_consumption Type

`number`

## current_average_consumption

The current averaged fuel consumption in liters per hour

`current_average_consumption`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fuel consumption](fuel-consumption-properties-current_average_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/current_average_consumption")

### current_average_consumption Type

`number`

## current_peak_consumption

The current peak fuel consumption in liters per hour

`current_peak_consumption`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fuel consumption](fuel-consumption-properties-current_peak_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/current_peak_consumption")

### current_peak_consumption Type

`number`

## last_hour_consumption

The total number of liters consumed in the last hour

`last_hour_consumption`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fuel consumption](fuel-consumption-properties-last_hour_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/last_hour_consumption")

### last_hour_consumption Type

`number`

## last_day_consumption

The total number of liters consumed in the last 24 hours

`last_day_consumption`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fuel consumption](fuel-consumption-properties-last_day_consumption.md "https://poseidat.org/schema/core/measurement/fuel-consumption.json#/properties/last_day_consumption")

### last_day_consumption Type

`number`
