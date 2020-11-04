# Departure Schema

```txt
https://poseidat.org/schema/entry/departure.json
```

A departure from port event


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                            |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | --------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [departure.json](schemas/entry/departure.json "open original schema") |

## Departure Type

`object` ([Departure](departure.md))

all of

-   [BaseEntry](departure-allof-baseentry.md "check type definition")

# Departure Properties

| Property                                      | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :-------------------------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [departure_date](#departure_date)             | `string` | Required | cannot be null | [Departure](departure-properties-departure_date.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/departure_date")             |
| [port](#port)                                 | `string` | Required | cannot be null | [Departure](departure-properties-port.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/port")                                 |
| [anticipated_activity](#anticipated_activity) | `string` | Optional | cannot be null | [Departure](departure-properties-anticipated_activity.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/anticipated_activity") |
| [position](#position)                         | `object` | Optional | cannot be null | [Departure](departure-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/position")                           |

## departure_date

The date and time of departure in UTC in RFC3339 format


`departure_date`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Departure](departure-properties-departure_date.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/departure_date")

### departure_date Type

`string`

### departure_date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## port

The code of the port of departure. These are 5 letter codes prefixed with a 2 letter country code and a 3 letter port identifier. Example: NLURK, BEANR


`port`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Departure](departure-properties-port.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/port")

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
-   defined in: [Departure](departure-properties-anticipated_activity.md "https&#x3A;//poseidat.org/schema/entry/departure.json#/properties/anticipated_activity")

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

A navigational position that can be used in an entry


`position`

-   is optional
-   Type: `object` ([Position](departure-properties-position.md))
-   cannot be null
-   defined in: [Departure](departure-properties-position.md "https&#x3A;//poseidat.org/schema/core/position.json#/properties/position")

### position Type

`object` ([Position](departure-properties-position.md))
