# Aid type Schema

```txt
https://poseidat.org/schema/enum/ais-aid-type.json
```

0 = not available = default; Type of aids-to-navigation;

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                 |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-aid-type.json](schemas/enum/ais-aid-type.json "open original schema") |

## Aid type Type

`string` ([Aid type](ais-aid-type.md))

## Aid type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                       | Explanation |
| :------------------------------------------ | :---------- |
| `"NOT_AVAILABLE"`                           |             |
| `"REFERENCE_POINT"`                         |             |
| `"RACON"`                                   |             |
| `"FIXED_STRUCTURES_OFF_SHORE"`              |             |
| `"EMERGENCY_WRECK_MARKING_BUOY"`            |             |
| `"LIGHT_WITHOUT_SECTORS"`                   |             |
| `"LIGHT_WITH_SECTORS"`                      |             |
| `"LEADING_LIGHT_FRONT"`                     |             |
| `"LEADING_LIGHT_REAR"`                      |             |
| `"BEACON_CARDINAL_NORTH"`                   |             |
| `"BEACON_CARDINAL_SOUTH"`                   |             |
| `"BEACON_CARDINAL_EAST"`                    |             |
| `"BEACON_CARDINAL_WEST"`                    |             |
| `"BEACON_PORT_HAND"`                        |             |
| `"BEACON_STARBOARD_HAND"`                   |             |
| `"BEACON_PREFERRED_CHANNEL_PORT_HAND"`      |             |
| `"BEACON_PREFERRED_CHANNEL_STARBOARD_HAND"` |             |
| `"BEACON_ISOLATED_DANGER"`                  |             |
| `"BEACON_SAFE_WATER"`                       |             |
| `"BEACON_SPECIAL_MARKER"`                   |             |
| `"CARDINAL_MARK_NORTH"`                     |             |
| `"CARDINAL_MARK_SOUTH"`                     |             |
| `"CARDINAL_MARK_WEST"`                      |             |
| `"CARDINAL_MARK_EAST"`                      |             |
| `"PORT_HAND_MARK"`                          |             |
| `"STARBOARD_HAND_MARK"`                     |             |
| `"PREFERRED_CHANNEL_PORT_HAND"`             |             |
| `"PREFERRED_CHANNEL_STARBOARD_HAND"`        |             |
| `"ISOLATED_DANGER"`                         |             |
| `"SAFE_WATER"`                              |             |
| `"SPECIAL_MARK"`                            |             |
| `"LANBY"`                                   |             |
