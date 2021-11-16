# Control long range message types Schema

```txt
https://poseidat.org/schema/enum/ais/ais-control-long-range.json
```

Transmission control for long-range broadcast message

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                         |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-control-long-range.json](schemas/enum/ais/ais-control-long-range.json "open original schema") |

## Control long range message types Type

`string` ([Control long range message types](ais-control-long-range.md))

## Control long range message types Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                                                                             | Explanation |
| :------------------------------------------------------------------------------------------------ | :---------- |
| `"Class-A AIS station stops transmission of Message 27 within an AIS base station coverage area"` |             |
| `"Request Class-A station to transmit Message 27 within an AIS base station coverage area"`       |             |
