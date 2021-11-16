# AIS message types Schema

```txt
https://poseidat.org/schema/enum/ais/ais-message-type.json
```

The available message types for an ais measurement, starts at 1

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-message-type.json](schemas/enum/ais/ais-message-type.json "open original schema") |

## AIS message types Type

`string` ([AIS message types](ais-message-type.md))

## AIS message types Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                      | Explanation |
| :--------------------------------------------------------- | :---------- |
| `"Position report"`                                        |             |
| `"Base station report"`                                    |             |
| `"Static and voyage related data"`                         |             |
| `"Binary addressed message"`                               |             |
| `"Binary acknowledgement"`                                 |             |
| `"Binary broadcast message"`                               |             |
| `"Standard SAR aircraft position report"`                  |             |
| `"UTC/date inquiry"`                                       |             |
| `"UTC/date response"`                                      |             |
| `"Addressed safety related message"`                       |             |
| `"Safety related acknowledgement"`                         |             |
| `"Safety related broadcast message"`                       |             |
| `"Interrogation"`                                          |             |
| `"Assignment mode command"`                                |             |
| `"DGNSS broadcast binary message"`                         |             |
| `"Standard Class B equipment position report"`             |             |
| `"Extended Class B equipment position report"`             |             |
| `"Data link management message"`                           |             |
| `"Aids-to-navigation report"`                              |             |
| `"Channel management"`                                     |             |
| `"Group assignment command"`                               |             |
| `"Static data report"`                                     |             |
| `"Single slot binary message"`                             |             |
| `"Multiple slot binary message with Communications State"` |             |
| `"Position report for long range applications"`            |             |
| `"Undefined; Reserved for future use"`                     |             |
