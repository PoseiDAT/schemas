# The mode the transmittor is using Schema

```txt
https://poseidat.org/schema/enum/ais-transmit-receive-mode.json
```

The transmit receive mode selected

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                           |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ais-transmit-receive-mode.json](schemas/enum/ais-transmit-receive-mode.json "open original schema") |

## The mode the transmittor is using Type

`string` ([The mode the transmittor is using](ais-transmit-receive-mode.md))

## The mode the transmittor is using Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                          | Explanation |
| :----------------------------- | :---------- |
| `"TXA_AND_TXB_OR_RXA_AND_RXB"` |             |
| `"TXA_OR_RXA_AND_RXB"`         |             |
| `"TXB_OR_RXA_AND_RXB"`         |             |
