# ContactDetails Schema

```txt
https://poseidat.org/schema/core/contact-details.json
```

Contact information for persona


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                       |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | -------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [contact-details.json](schemas/core/contact-details.json "open original schema") |

## ContactDetails Type

`object` ([ContactDetails](contact-details.md))

# ContactDetails Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                           |
| :-------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| [phone](#phone) | `string` | Optional | cannot be null | [ContactDetails](contact-details-properties-phone.md "https&#x3A;//poseidat.org/schema/core/contact-details.json#/properties/phone") |
| [email](#email) | `string` | Optional | cannot be null | [ContactDetails](contact-details-properties-email.md "https&#x3A;//poseidat.org/schema/core/contact-details.json#/properties/email") |

## phone

The phone number of the contact


`phone`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [ContactDetails](contact-details-properties-phone.md "https&#x3A;//poseidat.org/schema/core/contact-details.json#/properties/phone")

### phone Type

`string`

## email

The email address of the contact


`email`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [ContactDetails](contact-details-properties-email.md "https&#x3A;//poseidat.org/schema/core/contact-details.json#/properties/email")

### email Type

`string`
