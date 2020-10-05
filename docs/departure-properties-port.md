# Untitled string in LogbookDeparture Schema

```txt
https://poseidat.org/core-schema/logbook/departure.json#/properties/port
```

The code of the port of departure. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                      |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [departure.json\*](schemas/entry/logbook/departure.json "open original schema") |

## port Type

`string`

## port Constraints

**maximum length**: the maximum number of characters for this string is: `5`

**minimum length**: the minimum number of characters for this string is: `5`

**pattern**: the string must match the following regular expression: 

```regexp
[A-Z]{5}
```

[try pattern](https://regexr.com/?expression=%5BA-Z%5D%7B5%7D "try regular expression with regexr.com")
