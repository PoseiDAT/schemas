# Route Schema

```txt
https://poseidat.org/schema/entry/route.json
```

A route which was planned with an ECS/ECDIS system.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [route.json](schemas/entry/route.json "open original schema") |

## Route Type

`object` ([Route](route.md))

all of

*   [Base entry](arrival-allof-base-entry.md "check type definition")

# Route Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                    |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------ |
| [entry_type](#entry_type) | `string` | Required | cannot be null | [Route](route-properties-entry_type.md "https://poseidat.org/schema/entry/route.json#/properties/entry_type") |
| [name](#name)             | `string` | Required | cannot be null | [Route](route-properties-name.md "https://poseidat.org/schema/entry/route.json#/properties/name")             |
| [info](#info)             | `string` | Optional | cannot be null | [Route](route-properties-info.md "https://poseidat.org/schema/entry/route.json#/properties/info")             |
| [waypoints](#waypoints)   | `array`  | Required | cannot be null | [Route](route-properties-waypoints.md "https://poseidat.org/schema/entry/route.json#/properties/waypoints")   |
| Additional Properties     | Any      | Optional | can be null    |                                                                                                               |

## entry_type

The journal entry type identifier

`entry_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Route](route-properties-entry_type.md "https://poseidat.org/schema/entry/route.json#/properties/entry_type")

### entry_type Type

`string`

### entry_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | :---------- |
| `"route"` |             |

### entry_type Default Value

The default value is:

```json
"route"
```

## name

The name of the route.

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Route](route-properties-name.md "https://poseidat.org/schema/entry/route.json#/properties/name")

### name Type

`string`

## info

Generic route information.

`info`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Route](route-properties-info.md "https://poseidat.org/schema/entry/route.json#/properties/info")

### info Type

`string`

## waypoints

The collection of waypoints which make the route.

`waypoints`

*   is required

*   Type: `object[]` ([Route waypoint](route-properties-waypoints-route-waypoint.md))

*   cannot be null

*   defined in: [Route](route-properties-waypoints.md "https://poseidat.org/schema/entry/route.json#/properties/waypoints")

### waypoints Type

`object[]` ([Route waypoint](route-properties-waypoints-route-waypoint.md))

### waypoints Constraints

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## Additional Properties

Additional properties are allowed and do not have to follow a specific schema
