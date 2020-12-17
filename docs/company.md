# Company Schema

```txt
https://poseidat.org/schema/core/persona/company.json
```

A company involved with the vessel


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [company.json](schemas/core/persona/company.json "open original schema") |

## Company Type

`object` ([Company](company.md))

# Company Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                            |
| :------------------ | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [id](#id)           | `string` | Required | cannot be null | [Company](company-properties-id.md "https&#x3A;//poseidat.org/schema/core/persona/company.json#/properties/id")       |
| [name](#name)       | `string` | Required | cannot be null | [Company](company-properties-name.md "https&#x3A;//poseidat.org/schema/core/persona/company.json#/properties/name")   |
| [address](#address) | `object` | Optional | cannot be null | [Company](company-properties-address.md "https&#x3A;//poseidat.org/schema/core/address.json#/properties/address")     |
| [phone](#phone)     | `string` | Optional | cannot be null | [Company](company-properties-phone.md "https&#x3A;//poseidat.org/schema/core/persona/company.json#/properties/phone") |
| [email](#email)     | `string` | Optional | cannot be null | [Company](company-properties-email.md "https&#x3A;//poseidat.org/schema/core/persona/company.json#/properties/email") |

## id

The unique identifier for the company (UUID v4)


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Company](company-properties-id.md "https&#x3A;//poseidat.org/schema/core/persona/company.json#/properties/id")

### id Type

`string`

### id Constraints

**UUID**: the string must be a UUID, according to [RFC 4122](https://tools.ietf.org/html/rfc4122 "check the specification")

## name

The name of the company


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Company](company-properties-name.md "https&#x3A;//poseidat.org/schema/core/persona/company.json#/properties/name")

### name Type

`string`

## address

A street address


`address`

-   is optional
-   Type: `object` ([Address](company-properties-address.md))
-   cannot be null
-   defined in: [Company](company-properties-address.md "https&#x3A;//poseidat.org/schema/core/address.json#/properties/address")

### address Type

`object` ([Address](company-properties-address.md))

## phone

The phone number of the company


`phone`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Company](company-properties-phone.md "https&#x3A;//poseidat.org/schema/core/persona/company.json#/properties/phone")

### phone Type

`string`

## email

The email address of the company


`email`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Company](company-properties-email.md "https&#x3A;//poseidat.org/schema/core/persona/company.json#/properties/email")

### email Type

`string`
