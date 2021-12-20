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
| `"BINARY_OR_SAFETY_MESSAGE"`                   |             |
| `"BINARY_ACKNOWLEDGEMENT"`                     |             |
| `"SAFETY_ACKNOWLEDGEMENT"`                     |             |
| `"BINARY_OR_SAFETY_BROADCAST"`                 |             |
| `"SAR_AIRCRAFT_POSITION_REPORT"`               |             |
| `"UTC_DATE_INQUIRY"`                           |             |
| `"UTC_DATE_RESPONSE"`                          |             |
| `"INTERROGATION"`                              |             |
| `"ASSIGNMENT_MODE_COMMAND"`                    |             |
| `"DGNSS_BROADCAST_MESSAGE"`                    |             |
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
| `"RESERVED_FOR_FUTURE_USE"`                    |             |
