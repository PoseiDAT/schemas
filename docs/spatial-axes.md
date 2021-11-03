# Position Schema

```txt
https://poseidat.org/schema/core/measurement/spatial-axes.json
```

The spatial axes for a given sensor

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                             |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [spatial-axes.json](schemas/core/measurement/spatial-axes.json "open original schema") |

## Position Type

`object` ([Position](spatial-axes.md))

# Position Properties

| Property | Type     | Required | Nullable       | Defined by                                                                                                              |
| :------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------- |
| [x](#x)  | `number` | Required | cannot be null | [Position](spatial-axes-properties-x.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/properties/x") |
| [y](#y)  | `number` | Required | cannot be null | [Position](spatial-axes-properties-y.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/properties/y") |
| [z](#z)  | `number` | Required | cannot be null | [Position](spatial-axes-properties-z.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/properties/z") |

## x

The easting coordinate range

`x`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Position](spatial-axes-properties-x.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/properties/x")

### x Type

`number`

## y

The northing coordinate range

`y`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Position](spatial-axes-properties-y.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/properties/y")

### y Type

`number`

## z

The elevation of the coordinate range

`z`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Position](spatial-axes-properties-z.md "https://poseidat.org/schema/core/measurement/spatial-axes.json#/properties/z")

### z Type

`number`
