# LogbookDeparture Schema

```txt
https://poseidat.org/core-schema/logbook/departure.json
```

A departure journal entry


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                    |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ----------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [departure.json](schemas/entry/logbook/departure.json "open original schema") |

## LogbookDeparture Type

`object` ([LogbookDeparture](departure.md))

all of

-   [BaseEntry](measurement-allof-baseentry.md "check type definition")

# LogbookDeparture Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                       |
| :-------------------------------------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [activity_date](#activity_date)               | `string` | Optional | cannot be null | [LogbookDeparture](departure-properties-activity_date.md "https&#x3A;//poseidat.org/core-schema/logbook/departure.json#/properties/activity_date")               |
| [port](#port)                                 | `string` | Optional | cannot be null | [LogbookDeparture](departure-properties-port.md "https&#x3A;//poseidat.org/core-schema/logbook/departure.json#/properties/port")                                 |
| [anticipated_activity](#anticipated_activity) | `string` | Optional | cannot be null | [LogbookDeparture](departure-properties-anticipated_activity.md "https&#x3A;//poseidat.org/core-schema/logbook/departure.json#/properties/anticipated_activity") |
| [position](#position)                         | Merged   | Optional | cannot be null | [LogbookDeparture](departure-properties-navigationposition.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/position")             |

## activity_date

The date and time of departure in UTC in RFC3339 format


`activity_date`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [LogbookDeparture](departure-properties-activity_date.md "https&#x3A;//poseidat.org/core-schema/logbook/departure.json#/properties/activity_date")

### activity_date Type

`string`

### activity_date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## port

The code of the port of departure. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR


`port`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [LogbookDeparture](departure-properties-port.md "https&#x3A;//poseidat.org/core-schema/logbook/departure.json#/properties/port")

### port Type

`string`

### port Constraints

**maximum length**: the maximum number of characters for this string is: `5`

**minimum length**: the minimum number of characters for this string is: `5`

**pattern**: the string must match the following regular expression: 

```regexp
[A-Z]{5}
```

[try pattern](https://regexr.com/?expression=%5BA-Z%5D%7B5%7D "try regular expression with regexr.com")

## anticipated_activity

The anticipated activity for the fishing trip. Please check the wiki for the meaning of these codes.


`anticipated_activity`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [LogbookDeparture](departure-properties-anticipated_activity.md "https&#x3A;//poseidat.org/core-schema/logbook/departure.json#/properties/anticipated_activity")

### anticipated_activity Type

`string`

### anticipated_activity Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | ----------- |
| `"STE"` |             |
| `"FIS"` |             |
| `"GUD"` |             |
| `"OTH"` |             |
| `"SCR"` |             |
| `"TST"` |             |

## position

A navigational position journal entry


`position`

-   is optional
-   Type: `object` ([NavigationPosition](departure-properties-navigationposition.md))
-   cannot be null
-   defined in: [LogbookDeparture](departure-properties-navigationposition.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/position")

### position Type

`object` ([NavigationPosition](departure-properties-navigationposition.md))

all of

-   [BaseEntry](measurement-allof-baseentry.md "check type definition")
