# Vessel master Schema

```txt
https://poseidat.org/schema/core/vessel-master.json
```

The vessel master details. Usually one per entry but can differ in a single trip

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vessel-master.json](schemas/core/vessel-master.json "open original schema") |

## Vessel master Type

`object` ([Vessel master](vessel-master.md))

# Vessel master Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                           |
| :------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)             | `string` | Required | cannot be null | [Vessel master](vessel-master-properties-name.md "https://poseidat.org/schema/core/vessel-master.json#/properties/name")             |
| [address](#address)       | `string` | Optional | cannot be null | [Vessel master](vessel-master-properties-address.md "https://poseidat.org/schema/core/vessel-master.json#/properties/address")       |
| [identifier](#identifier) | `string` | Optional | cannot be null | [Vessel master](vessel-master-properties-identifier.md "https://poseidat.org/schema/core/vessel-master.json#/properties/identifier") |

## name

The name of the vessel master

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Vessel master](vessel-master-properties-name.md "https://poseidat.org/schema/core/vessel-master.json#/properties/name")

### name Type

`string`

## address

The (abbreviated) address of the vessel master. Required in all but NLD

`address`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel master](vessel-master-properties-address.md "https://poseidat.org/schema/core/vessel-master.json#/properties/address")

### address Type

`string`

## identifier

Can be used to store any (external) identifier of the master

`identifier`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Vessel master](vessel-master-properties-identifier.md "https://poseidat.org/schema/core/vessel-master.json#/properties/identifier")

### identifier Type

`string`
