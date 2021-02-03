# Fishing gear loss Schema

```txt
https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/gear_loss/items
```

A gear loss event details

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [fishing-gear-deployment.json*](schemas/core/fishing-gear-deployment.json "open original schema") |

## items Type

`object` ([Fishing gear loss](fishing-gear-deployment-properties-gear-loss-details-fishing-gear-loss.md))

# items Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [date](#date)               | `string` | Optional | cannot be null | [Fishing gear loss](fishing-gear-loss-properties-date.md "https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/date")               |
| [location](#location)       | `object` | Required | cannot be null | [Fishing gear loss](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")           |
| [identifier](#identifier)   | `string` | Required | cannot be null | [Fishing gear loss](fishing-gear-loss-properties-identifier.md "https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/identifier")   |
| [remarks](#remarks)         | `string` | Optional | cannot be null | [Fishing gear loss](fishing-gear-loss-properties-remarks.md "https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/remarks")         |
| [amount_lost](#amount_lost) | `number` | Optional | cannot be null | [Fishing gear loss](fishing-gear-loss-properties-amount_lost.md "https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/amount_lost") |

## date

The datetime the gear loss took place

`date`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing gear loss](fishing-gear-loss-properties-date.md "https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/date")

### date Type

`string`

### date Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## location

A navigational position that can be used in an entry

`location`

*   is required

*   Type: `object` ([Position](trip-entry-properties-position.md))

*   cannot be null

*   defined in: [Fishing gear loss](trip-entry-properties-position.md "https://poseidat.org/schema/core/measurement/position.json#/properties/location")

### location Type

`object` ([Position](trip-entry-properties-position.md))

## identifier

The identification tag attached to the lost gear. NLD: NI, GBR: GBRGNFN

`identifier`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Fishing gear loss](fishing-gear-loss-properties-identifier.md "https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/identifier")

### identifier Type

`string`

## remarks

Free form text to describe the reason of the gear loss. NLD: VT, GBR: GBRCOM

`remarks`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Fishing gear loss](fishing-gear-loss-properties-remarks.md "https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/remarks")

### remarks Type

`string`

## amount_lost

The amount of gear items lost, GBR: NN

`amount_lost`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Fishing gear loss](fishing-gear-loss-properties-amount_lost.md "https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/amount_lost")

### amount_lost Type

`number`
