# Untitled number in Class B position report AIS Schema

```txt
https://poseidat.org/schema/core/ais-message/class-b-position-report.json#/properties/true_heading
```

Degrees (0-359) (511 indicates not available = default)

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                    |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [class-b-position-report.json*](schemas/core/ais-message/class-b-position-report.json "open original schema") |

## true_heading Type

`number`

## true_heading Constraints

**maximum**: the value of this number must smaller than or equal to: `511`

**minimum**: the value of this number must greater than or equal to: `0`

## true_heading Default Value

The default value is:

```json
511
```
