# NavigationPosition Schema

```txt
https://poseidat.org/core-schema/navigation/position.json
```

A navigational position journal entry


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                     |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [position.json](schemas/entry/navigation/position.json "open original schema") |

## NavigationPosition Type

`object` ([NavigationPosition](position.md))

all of

-   [BaseEntry](measurement-allof-baseentry.md "check type definition")

# NavigationPosition Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                    |
| :---------------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------- |
| [latitude](#latitude)   | `number` | Required | cannot be null | [NavigationPosition](position-properties-latitude.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/latitude")   |
| [longitude](#longitude) | `number` | Required | cannot be null | [NavigationPosition](position-properties-longitude.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/longitude") |
| [heading](#heading)     | `number` | Optional | cannot be null | [NavigationPosition](position-properties-heading.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/heading")     |
| [velocity](#velocity)   | `number` | Optional | cannot be null | [NavigationPosition](position-properties-velocity.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/velocity")   |

## latitude

The latitude of the geographical location


`latitude`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [NavigationPosition](position-properties-latitude.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/latitude")

### latitude Type

`number`

## longitude

The longitude of the geographical location


`longitude`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [NavigationPosition](position-properties-longitude.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/longitude")

### longitude Type

`number`

## heading

The compass heading of the vessel in degrees


`heading`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [NavigationPosition](position-properties-heading.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/heading")

### heading Type

`number`

## velocity

The velocity of the vessel in meters per second (m/s)


`velocity`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [NavigationPosition](position-properties-velocity.md "https&#x3A;//poseidat.org/core-schema/navigation/position.json#/properties/velocity")

### velocity Type

`number`
