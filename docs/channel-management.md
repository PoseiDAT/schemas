# Management of channel Schema

```txt
https://poseidat.org/schema/core/ais-message/channel-management.json
```

Management of channels and transceiver modes by a Base station

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [channel-management.json](schemas/core/ais-message/channel-management.json "open original schema") |

## Management of channel Type

`object` ([Management of channel](channel-management.md))

all of

*   all of

    *   [Untitled undefined type in Base AIS message](base-ais-message-allof-0.md "check type definition")

# Management of channel Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :------------------------------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ais_message_type](#ais_message_type)             | `string` | Required | cannot be null | [Management of channel](channel-management-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/ais_message_type")                  |
| [channel_a_frequency](#channel_a_frequency)       | `number` | Required | cannot be null | [Management of channel](channel-management-properties-channel_a_frequency.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/channel_a_frequency")            |
| [channel_b_frequency](#channel_b_frequency)       | `number` | Required | cannot be null | [Management of channel](channel-management-properties-channel_b_frequency.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/channel_b_frequency")            |
| [channel_a_bandwidth](#channel_a_bandwidth)       | `number` | Required | cannot be null | [Management of channel](channel-management-properties-channel_a_bandwidth.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/channel_a_bandwidth")            |
| [channel_b_bandwidth](#channel_b_bandwidth)       | `number` | Required | cannot be null | [Management of channel](channel-management-properties-channel_b_bandwidth.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/channel_b_bandwidth")            |
| [power](#power)                                   | `string` | Required | cannot be null | [Management of channel](channel-management-properties-power.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/power")                                        |
| [north_east_longtitude](#north_east_longtitude)   | `number` | Required | cannot be null | [Management of channel](channel-management-properties-north_east_longtitude.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/north_east_longtitude")        |
| [north_east_latitude](#north_east_latitude)       | `number` | Required | cannot be null | [Management of channel](channel-management-properties-north_east_latitude.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/north_east_latitude")            |
| [south_west_longtitude](#south_west_longtitude)   | `number` | Required | cannot be null | [Management of channel](channel-management-properties-south_west_longtitude.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/south_west_longtitude")        |
| [south_west_latitude](#south_west_latitude)       | `number` | Required | cannot be null | [Management of channel](channel-management-properties-south_west_latitude.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/south_west_latitude")            |
| [zone_size](#zone_size)                           | `number` | Required | cannot be null | [Management of channel](channel-management-properties-zone_size.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/zone_size")                                |
| [transmit_receive_mode](#transmit_receive_mode)   | `string` | Required | cannot be null | [Management of channel](channel-management-properties-the-mode-the-transmittor-is-using.md "https://poseidat.org/schema/enum/ais-transmit-receive-mode.json#/properties/transmit_receive_mode") |
| [addressed_or_broadcast](#addressed_or_broadcast) | `string` | Required | cannot be null | [Management of channel](channel-management-properties-addressed_or_broadcast.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/addressed_or_broadcast")      |

## ais_message_type

The message type of the given AIS measurement

`ais_message_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-ais_message_type.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/ais_message_type")

### ais_message_type Type

`string`

### ais_message_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | :---------- |
| `"CHANNEL_MANAGEMENT"` |             |

### ais_message_type Default Value

The default value is:

```json
"CHANNEL_MANAGEMENT"
```

## channel_a_frequency

frequency of the primary operating channel (in MHz)

`channel_a_frequency`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-channel_a_frequency.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/channel_a_frequency")

### channel_a_frequency Type

`number`

### channel_a_frequency Default Value

The default value is:

```json
161.975
```

## channel_b_frequency

frequency of the primary operating channel (in MHz)

`channel_b_frequency`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-channel_b_frequency.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/channel_b_frequency")

### channel_b_frequency Type

`number`

### channel_b_frequency Default Value

The default value is:

```json
162.025
```

## channel_a_bandwidth

frequency of the primary operating channel (in kHz)

`channel_a_bandwidth`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-channel_a_bandwidth.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/channel_a_bandwidth")

### channel_a_bandwidth Type

`number`

### channel_a_bandwidth Default Value

The default value is:

```json
25
```

## channel_b_bandwidth

frequency of the secondary operating channel (in kHz)

`channel_b_bandwidth`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-channel_b_bandwidth.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/channel_b_bandwidth")

### channel_b_bandwidth Type

`number`

### channel_b_bandwidth Default Value

The default value is:

```json
25
```

## power

Transmitter Power Mode

`power`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-power.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/power")

### power Type

`string`

### power Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"HIGH"` |             |
| `"LOW"`  |             |

### power Default Value

The default value is:

```json
"HIGH"
```

## north_east_longtitude

Region defining latitudes and longitudes

`north_east_longtitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-north_east_longtitude.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/north_east_longtitude")

### north_east_longtitude Type

`number`

## north_east_latitude

Region defining latitudes and longitudes

`north_east_latitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-north_east_latitude.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/north_east_latitude")

### north_east_latitude Type

`number`

## south_west_longtitude

Region defining latitudes and longitudes

`south_west_longtitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-south_west_longtitude.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/south_west_longtitude")

### south_west_longtitude Type

`number`

## south_west_latitude

Region defining latitudes and longitudes

`south_west_latitude`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-south_west_latitude.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/south_west_latitude")

### south_west_latitude Type

`number`

## zone_size

The size of the transitional zone

`zone_size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-zone_size.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/zone_size")

### zone_size Type

`number`

### zone_size Default Value

The default value is:

```json
5
```

## transmit_receive_mode

The transmit receive mode selected

`transmit_receive_mode`

*   is required

*   Type: `string` ([The mode the transmittor is using](channel-management-properties-the-mode-the-transmittor-is-using.md))

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-the-mode-the-transmittor-is-using.md "https://poseidat.org/schema/enum/ais-transmit-receive-mode.json#/properties/transmit_receive_mode")

### transmit_receive_mode Type

`string` ([The mode the transmittor is using](channel-management-properties-the-mode-the-transmittor-is-using.md))

### transmit_receive_mode Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"TXA_AND_TXB_OR_RXA_AND_RXB"` |             |
| `"TXA_OR_RXA_AND_RXB"`         |             |
| `"TXB_OR_RXA_AND_RXB"`         |             |

### transmit_receive_mode Default Value

The default value is:

```json
"TXA_AND_TXB_OR_RXA_AND_RXB"
```

## addressed_or_broadcast

Addressed or Broadcast Message Indicator

`addressed_or_broadcast`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Management of channel](channel-management-properties-addressed_or_broadcast.md "https://poseidat.org/schema/core/ais-message/channel-management.json#/properties/addressed_or_broadcast")

### addressed_or_broadcast Type

`string`

### addressed_or_broadcast Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"BROADCAST"` |             |
| `"ADDRESSED"` |             |

### addressed_or_broadcast Default Value

The default value is:

```json
"BROADCAST"
```
