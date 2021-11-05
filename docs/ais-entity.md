# AIS entity Schema

```txt
https://poseidat.org/schema/core/ais-entity.json
```

An AIS ship with static relatedentity from the AIS

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ais-entity.json](schemas/entry/ais-entity.json "open original schema") |

## AIS entity Type

`object` ([AIS entity](ais-entity.md))

all of

*   [Base entry](ais-entity-allof-base-entry.md "check type definition")

# AIS entity Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :-------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [entity_id](#entity_id)                       | `number` | Required | cannot be null | [AIS entity](ais-entity-properties-entity_id.md "https://poseidat.org/schema/core/ais-entity.json#/properties/entity_id")                                         |
| [call_sign](#call_sign)                       | `string` | Optional | cannot be null | [AIS entity](ais-entity-properties-call_sign.md "https://poseidat.org/schema/core/ais-entity.json#/properties/call_sign")                                         |
| [entity_name](#entity_name)                   | `string` | Optional | cannot be null | [AIS entity](ais-entity-properties-entity_name.md "https://poseidat.org/schema/core/ais-entity.json#/properties/entity_name")                                     |
| [entity_type](#entity_type)                   | `string` | Optional | cannot be null | [AIS entity](ais-entity-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/entity_type")                                |
| [position_device_type](#position_device_type) | `string` | Optional | cannot be null | [AIS entity](ais-entity-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type") |
| [dimension_ship](#dimension_ship)             | `number` | Optional | cannot be null | [AIS entity](ais-entity-properties-dimension_ship.md "https://poseidat.org/schema/core/ais-entity.json#/properties/dimension_ship")                               |

## entity_id

The unique MMSI number given by the AIS

`entity_id`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [AIS entity](ais-entity-properties-entity_id.md "https://poseidat.org/schema/core/ais-entity.json#/properties/entity_id")

### entity_id Type

`number`

## call_sign

The call sign of the given AIS entity

`call_sign`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS entity](ais-entity-properties-call_sign.md "https://poseidat.org/schema/core/ais-entity.json#/properties/call_sign")

### call_sign Type

`string`

## entity_name

The name of the AIS entity

`entity_name`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [AIS entity](ais-entity-properties-entity_name.md "https://poseidat.org/schema/core/ais-entity.json#/properties/entity_name")

### entity_name Type

`string`

## entity_type

The converted names of the ais ship types.

`entity_type`

*   is optional

*   Type: `string` ([AIS ship type](ais-entity-properties-ais-ship-type.md))

*   cannot be null

*   defined in: [AIS entity](ais-entity-properties-ais-ship-type.md "https://poseidat.org/schema/enum/ais-ship-type.json#/properties/entity_type")

### entity_type Type

`string` ([AIS ship type](ais-entity-properties-ais-ship-type.md))

### entity_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                   | Explanation |
| :------------------------------------------------------ | :---------- |
| `"Not available (default)"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Reserved for future use"`                             |             |
| `"Wing in ground (WIG), all ships of this type"`        |             |
| `"Wing in ground (WIG), Hazardous category A"`          |             |
| `"Wing in ground (WIG), Hazardous category B"`          |             |
| `"Wing in ground (WIG), Hazardous category C"`          |             |
| `"Wing in ground (WIG), Hazardous category D"`          |             |
| `"Wing in ground (WIG), Reserved for future use"`       |             |
| `"Wing in ground (WIG), Reserved for future use"`       |             |
| `"Wing in ground (WIG), Reserved for future use"`       |             |
| `"Wing in ground (WIG), Reserved for future use"`       |             |
| `"Wing in ground (WIG), Reserved for future use"`       |             |
| `"Fishing"`                                             |             |
| `"Towing"`                                              |             |
| `"Towing: length exceeds 200m or breadth exceeds 25m"`  |             |
| `"Dredging or underwater ops"`                          |             |
| `"Diving ops"`                                          |             |
| `"Military ops"`                                        |             |
| `"Sailing"`                                             |             |
| `"Pleasure Craft"`                                      |             |
| `"Reserved"`                                            |             |
| `"Reserved"`                                            |             |
| `"High speed craft (HSC), all ships of this type"`      |             |
| `"High speed craft (HSC), Hazardous category A"`        |             |
| `"High speed craft (HSC), Hazardous category B"`        |             |
| `"High speed craft (HSC), Hazardous category C"`        |             |
| `"High speed craft (HSC), Hazardous category D"`        |             |
| `"High speed craft (HSC), Reserved for future use"`     |             |
| `"High speed craft (HSC), Reserved for future use"`     |             |
| `"High speed craft (HSC), Reserved for future use"`     |             |
| `"High speed craft (HSC), Reserved for future use"`     |             |
| `"High speed craft (HSC), Reserved for future use"`     |             |
| `"High speed craft (HSC), No additional information"`   |             |
| `"Pilot Vessel"`                                        |             |
| `"Search and Rescue vessel"`                            |             |
| `"Tug"`                                                 |             |
| `"Port Tender"`                                         |             |
| `"Anti-pollution equipment"`                            |             |
| `"Law Enforcement"`                                     |             |
| `"Spare - Local Vessel"`                                |             |
| `"Spare - Local Vessel"`                                |             |
| `"Medical Transport"`                                   |             |
| `"Noncombatant ship according to RR Resolution No. 18"` |             |
| `"Passenger, all ships of this type"`                   |             |
| `"Passenger, Hazardous category A"`                     |             |
| `"Passenger, Hazardous category B"`                     |             |
| `"Passenger, Hazardous category C"`                     |             |
| `"Passenger, Hazardous category D"`                     |             |
| `"Passenger, Reserved for future use"`                  |             |
| `"Passenger, Reserved for future use"`                  |             |
| `"Passenger, Reserved for future use"`                  |             |
| `"Passenger, Reserved for future use"`                  |             |
| `"Passenger, No additional information"`                |             |
| `"Cargo, all ships of this type"`                       |             |
| `"Cargo, Hazardous category A"`                         |             |
| `"Cargo, Hazardous category B"`                         |             |
| `"Cargo, Hazardous category C"`                         |             |
| `"Cargo, Hazardous category D"`                         |             |
| `"Cargo, Reserved for future use"`                      |             |
| `"Cargo, Reserved for future use"`                      |             |
| `"Cargo, Reserved for future use"`                      |             |
| `"Cargo, Reserved for future use"`                      |             |
| `"Cargo, No additional information"`                    |             |
| `"Tanker, all ships of this type"`                      |             |
| `"Tanker, Hazardous category A"`                        |             |
| `"Tanker, Hazardous category B"`                        |             |
| `"Tanker, Hazardous category C"`                        |             |
| `"Tanker, Hazardous category D"`                        |             |
| `"Tanker, Reserved for future use"`                     |             |
| `"Tanker, Reserved for future use"`                     |             |
| `"Tanker, Reserved for future use"`                     |             |
| `"Tanker, No additional information"`                   |             |
| `"Other Type, all ships of this type"`                  |             |
| `"Other Type, Hazardous category A"`                    |             |
| `"Other Type, Hazardous category B"`                    |             |
| `"Other Type, Hazardous category C"`                    |             |
| `"Other Type, Hazardous category D"`                    |             |
| `"Other Type, Reserved for future use"`                 |             |
| `"Other Type, Reserved for future use"`                 |             |
| `"Other Type, Reserved for future use"`                 |             |
| `"Other Type, Reserved for future use"`                 |             |
| `"Other Type, no additional information"`               |             |

## position_device_type

The converted type of the position device used on the AIS entity.

`position_device_type`

*   is optional

*   Type: `string` ([AIS position device type](ais-entity-properties-ais-position-device-type.md))

*   cannot be null

*   defined in: [AIS entity](ais-entity-properties-ais-position-device-type.md "https://poseidat.org/schema/enum/ais-position-device-type.json#/properties/position_device_type")

### position_device_type Type

`string` ([AIS position device type](ais-entity-properties-ais-position-device-type.md))

### position_device_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                            | Explanation |
| :------------------------------- | :---------- |
| `"undefined (default)"`          |             |
| `"GPS"`                          |             |
| `"GLONASS"`                      |             |
| `"combined GPS/GLONASS"`         |             |
| `"Loran-C"`                      |             |
| `"Chayka"`                       |             |
| `"integrated navigation system"` |             |
| `"surveyed"`                     |             |
| `"Galileo"`                      |             |
| `"not used"`                     |             |
| `"not used"`                     |             |
| `"not used"`                     |             |
| `"not used"`                     |             |
| `"not used"`                     |             |
| `"not used"`                     |             |
| `"internal GNSS"`                |             |

## dimension_ship

Indicates the dimension of ship

`dimension_ship`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [AIS entity](ais-entity-properties-dimension_ship.md "https://poseidat.org/schema/core/ais-entity.json#/properties/dimension_ship")

### dimension_ship Type

`number`
