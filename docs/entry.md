# Entry Schema

```txt
https://poseidat.org/schema/entry.json
```

Any journal entry. Exactly one of the known entry types must match, discriminated by entry_type.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [entry.json](schemas/entry.json "open original schema") |

## Entry Type

merged type ([Entry](entry.md))

any of

*   [Arrival](entry-anyof-arrival.md "check type definition")

*   [Departure](entry-anyof-departure.md "check type definition")

*   [Device measurement](entry-anyof-device-measurement.md "check type definition")

*   [End of fishing activity](entry-anyof-end-of-fishing-activity.md "check type definition")

*   [Equipment inventory](entry-anyof-equipment-inventory.md "check type definition")

*   [Fishing activity](entry-anyof-fishing-activity.md "check type definition")

*   [Route](entry-anyof-route.md "check type definition")

*   [Vessel registration](entry-anyof-vessel-registration.md "check type definition")

*   [ZoneEnter](entry-anyof-zoneenter.md "check type definition")

*   [ZoneExit](entry-anyof-zoneexit.md "check type definition")
