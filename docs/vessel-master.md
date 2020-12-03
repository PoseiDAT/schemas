# Untitled object in undefined Schema

```txt
https://poseidat.org/schema/core/vessel-master.json
```

The vessel master details. Usually one per entry but can differ in a single trip


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                   |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ---------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Allowed               | none                | [vessel-master.json](schemas/core/vessel-master.json "open original schema") |

## Untitled object in undefined Type

`object` ([Details](vessel-master.md))

# undefined Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                  |
| :------------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [name](#name)             | `string` | Required | cannot be null | [Untitled schema](vessel-master-properties-name.md "https&#x3A;//poseidat.org/schema/core/vessel-master.json#/properties/name")             |
| [address](#address)       | `string` | Optional | cannot be null | [Untitled schema](vessel-master-properties-address.md "https&#x3A;//poseidat.org/schema/core/vessel-master.json#/properties/address")       |
| [identifier](#identifier) | `string` | Optional | cannot be null | [Untitled schema](vessel-master-properties-identifier.md "https&#x3A;//poseidat.org/schema/core/vessel-master.json#/properties/identifier") |

## name

The name of the vessel master


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](vessel-master-properties-name.md "https&#x3A;//poseidat.org/schema/core/vessel-master.json#/properties/name")

### name Type

`string`

## address

The (abbreviated) address of the vessel master. Required in all but NLD


`address`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](vessel-master-properties-address.md "https&#x3A;//poseidat.org/schema/core/vessel-master.json#/properties/address")

### address Type

`string`

## identifier

Can be used to store any (external) identifier of the master


`identifier`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Untitled schema](vessel-master-properties-identifier.md "https&#x3A;//poseidat.org/schema/core/vessel-master.json#/properties/identifier")

### identifier Type

`string`
