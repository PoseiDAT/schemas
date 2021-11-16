# Untitled number in AIS measurement value Schema

```txt
https://poseidat.org/schema/core/measurement/ais-measurement.json#/properties/ROT
```

The Rate Of Turn of the ship in degrees, minus = turning left; plus = turning right; (128  no turn information available (default))

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-measurement.json*](schemas/core/measurement/ais-measurement.json "open original schema") |

## ROT Type

`number`

## ROT Constraints

**maximum**: the value of this number must smaller than or equal to: `127`

**minimum**: the value of this number must greater than or equal to: `-128`

## ROT Default Value

The default value is:

```json
-128
```
