# Weather Schema

```txt
https://poseidat.org/schema/core/measurement/weather.json
```

A combination of all posible weather station measurements

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [weather.json](schemas/core/measurement/weather.json "open original schema") |

## Weather Type

`object` ([Weather](weather.md))

# Weather Properties

| Property                                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :---------------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [air_pressure](#air_pressure)                               | `number` | Optional | cannot be null | [Weather](weather-properties-air_pressure.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/air_pressure")                               |
| [air_temperature](#air_temperature)                         | `number` | Optional | cannot be null | [Weather](weather-properties-air_temperature.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/air_temperature")                         |
| [water_temperature](#water_temperature)                     | `number` | Optional | cannot be null | [Weather](weather-properties-water_temperature.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/water_temperature")                     |
| [relative_humidity](#relative_humidity)                     | `number` | Optional | cannot be null | [Weather](weather-properties-relative_humidity.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/relative_humidity")                     |
| [absolute_humidity](#absolute_humidity)                     | `number` | Optional | cannot be null | [Weather](weather-properties-absolute_humidity.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/absolute_humidity")                     |
| [dew_point](#dew_point)                                     | `number` | Optional | cannot be null | [Weather](weather-properties-dew_point.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/dew_point")                                     |
| [wind_dir_true](#wind_dir_true)                             | `number` | Optional | cannot be null | [Weather](weather-properties-wind_dir_true.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/wind_dir_true")                             |
| [wind_dir_magnetic](#wind_dir_magnetic)                     | `number` | Optional | cannot be null | [Weather](weather-properties-wind_dir_magnetic.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/wind_dir_magnetic")                     |
| [wind_speed](#wind_speed)                                   | `number` | Optional | cannot be null | [Weather](weather-properties-wind_speed.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/wind_speed")                                   |
| [relative_wind_chill_temp](#relative_wind_chill_temp)       | `number` | Optional | cannot be null | [Weather](weather-properties-relative_wind_chill_temp.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/relative_wind_chill_temp")       |
| [theoretical_wind_chill_temp](#theoretical_wind_chill_temp) | `number` | Optional | cannot be null | [Weather](weather-properties-theoretical_wind_chill_temp.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/theoretical_wind_chill_temp") |
| [rain_intensity](#rain_intensity)                           | `number` | Optional | cannot be null | [Weather](weather-properties-rain_intensity.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/rain_intensity")                           |
| [wave_height](#wave_height)                                 | `number` | Optional | cannot be null | [Weather](weather-properties-wave_height.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/wave_height")                                 |

## air_pressure

The air pressure in bar

`air_pressure`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-air_pressure.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/air_pressure")

### air_pressure Type

`number`

## air_temperature

The air temperature in degrees Celsius

`air_temperature`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-air_temperature.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/air_temperature")

### air_temperature Type

`number`

## water_temperature

The temperature of the surface water in degrees Celsius

`water_temperature`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-water_temperature.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/water_temperature")

### water_temperature Type

`number`

## relative_humidity

The relative air humidity in percent

`relative_humidity`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-relative_humidity.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/relative_humidity")

### relative_humidity Type

`number`

## absolute_humidity

The absolute air humidity in percent

`absolute_humidity`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-absolute_humidity.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/absolute_humidity")

### absolute_humidity Type

`number`

## dew_point

The dew point in degrees Celsius

`dew_point`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-dew_point.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/dew_point")

### dew_point Type

`number`

## wind_dir_true

The wind direction relative to the true north in degrees

`wind_dir_true`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-wind_dir_true.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/wind_dir_true")

### wind_dir_true Type

`number`

## wind_dir_magnetic

The wind direction relative to magnetic north in degrees

`wind_dir_magnetic`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-wind_dir_magnetic.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/wind_dir_magnetic")

### wind_dir_magnetic Type

`number`

## wind_speed

The wind speed in meters per second

`wind_speed`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-wind_speed.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/wind_speed")

### wind_speed Type

`number`

## relative_wind_chill_temp

The relative wind chill temperature in degrees Celsius

`relative_wind_chill_temp`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-relative_wind_chill_temp.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/relative_wind_chill_temp")

### relative_wind_chill_temp Type

`number`

## theoretical_wind_chill_temp

The theoretical wind chill temperature in degrees Celsius

`theoretical_wind_chill_temp`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-theoretical_wind_chill_temp.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/theoretical_wind_chill_temp")

### theoretical_wind_chill_temp Type

`number`

## rain_intensity

The rain intensity in l/m2 per hour

`rain_intensity`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-rain_intensity.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/rain_intensity")

### rain_intensity Type

`number`

## wave_height

The wave height in meters

`wave_height`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Weather](weather-properties-wave_height.md "https://poseidat.org/schema/core/measurement/weather.json#/properties/wave_height")

### wave_height Type

`number`
