# Reason departure Schema

```txt
https://poseidat.org/schema/enum/reason-departure.json#/properties/anticipated_activity
```

The reason for the vessel to depart from port. Please check the wiki for the meaning of these codes.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                             |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [departure.json*](schemas/entry/departure.json "open original schema") |

## anticipated_activity Type

`string` ([Reason departure](departure-properties-reason-departure.md))

## anticipated_activity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"FIS"` |             |
| `"GUD"` |             |
| `"OTH"` |             |
| `"SCR"` |             |
| `"STE"` |             |
| `"TST"` |             |
