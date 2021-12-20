# Untitled string in Static data report AIS message Schema

```txt
https://poseidat.org/schema/core/ais-message/static-data-report.json#/properties/vendor_id
```

Unique identification of the Unit by a number as defined by the manufacturer

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [static-data-report.json*](schemas/core/ais-message/static-data-report.json "open original schema") |

## vendor_id Type

`string`

## vendor_id Constraints

**maximum**: the value of this number must smaller than or equal to: `20`

## vendor_id Default Value

The default value is:

```json
"@@@@@@@"
```
