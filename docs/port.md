# Port Schema

```txt
https://poseidat.org/schema/core/port.json
```

Fishing port details

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                 |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [port.json](schemas/core/port.json "open original schema") |

## Port Type

`object` ([Port](port.md))

# Port Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                  |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [code](#code)         | `string` | Required | cannot be null | [Port](port-properties-code.md "https://poseidat.org/schema/core/port.json#/properties/code")                               |
| [location](#location) | `object` | Optional | cannot be null | [Port](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location") |

## code

The international port code. Format is 2 letter country code and 3 letter port code. Example: NLURK, BEANR, GBHUL

`code`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Port](port-properties-code.md "https://poseidat.org/schema/core/port.json#/properties/code")

### code Type

`string`

### code Constraints

**maximum length**: the maximum number of characters for this string is: `5`

**minimum length**: the minimum number of characters for this string is: `5`

## location

A navigational position that can be used in an entry

`location`

*   is optional

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Port](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))
