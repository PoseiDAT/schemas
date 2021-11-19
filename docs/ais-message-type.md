# AIS message types Schema

```txt
https://poseidat.org/schema/enum/ais-message-type.json
```

The available message types for an ais message

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-message-type.json](schemas/enum/ais-message-type.json "open original schema") |

## AIS message types Type

`string` ([AIS message types](ais-message-type.md))

## AIS message types Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                          | Explanation |
| :--------------------------------------------- | :---------- |
| `"POSITION_REPORT"`                            |             |
| `"BASE_STATION_REPORT"`                        |             |
| `"STATIC_AND_VOYAGE_DATA"`                     |             |
| `"BINARY_MESSAGE"`                             |             |
| `"BINARY_ACKNOWLEDGEMENT"`                     |             |
| `"BINARY_BROADCAST_MESSAGE"`                   |             |
| `"SAR_AIRCRAFT_POSITION_REPORT"`               |             |
| `"UTC_DATE_INQUIRY"`                           |             |
| `"UTC_DATE_RESPONSE"`                          |             |
| `"ADDRESSED_SAFETY_RELATED_MESSAGE"`           |             |
| `"SAFETY_RELATED_ACKNOWLEDGEMENT"`             |             |
| `"SAFETY_RELATED_BROADCAST_MESSAGE"`           |             |
| `"INTERROGATION"`                              |             |
| `"ASSIGNMENT_MODE_COMMAND"`                    |             |
| `"DGNSS_BROADCAST_BINARY_MESSAGE"`             |             |
| `"CLASS_B_EQUIPMENT_POSITION_REPORT"`          |             |
| `"EXTENDED_CLASS_B_EQUIPMENT_POSITION_REPORT"` |             |
| `"DATA_LINK_MANAGEMENT_MESSAGE"`               |             |
| `"AIDS_TO_NAVIGATION_REPORT"`                  |             |
| `"CHANNEL_MANAGEMENT"`                         |             |
| `"GROUP_ASSIGNMENT_COMMAND"`                   |             |
| `"STATIC_DATA_REPORT"`                         |             |
| `"SINGLE_SLOT_BINARY_MESSAGE"`                 |             |
| `"MULTIPLE_SLOT_BINARY_MESSAGE"`               |             |
| `"LONG_RANGE_APPLICATION_POSITION_REPORT"`     |             |
| `"RESERVER_FOR_FUTURE_USE"`                    |             |
