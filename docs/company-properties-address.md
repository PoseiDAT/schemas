# Address Schema

```txt
https://poseidat.org/schema/core/address.json#/properties/address
```

A street address

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [company.json*](schemas/core/persona/company.json "open original schema") |

## address Type

`object` ([Address](company-properties-address.md))

# address Properties

| Property                                          | Type     | Required | Nullable       | Defined by                                                                                                                                 |
| :------------------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [streetAddress](#streetaddress)                   | `string` | Required | cannot be null | [Address](address-properties-streetaddress.md "https://poseidat.org/schema/core/address.json#/properties/streetAddress")                   |
| [streetAddressExtension](#streetaddressextension) | `string` | Optional | cannot be null | [Address](address-properties-streetaddressextension.md "https://poseidat.org/schema/core/address.json#/properties/streetAddressExtension") |
| [postalCode](#postalcode)                         | `string` | Required | cannot be null | [Address](address-properties-postalcode.md "https://poseidat.org/schema/core/address.json#/properties/postalCode")                         |
| [city](#city)                                     | `string` | Required | cannot be null | [Address](address-properties-city.md "https://poseidat.org/schema/core/address.json#/properties/city")                                     |
| [region](#region)                                 | `string` | Optional | cannot be null | [Address](address-properties-region.md "https://poseidat.org/schema/core/address.json#/properties/region")                                 |
| [country](#country)                               | `string` | Required | cannot be null | [Address](address-properties-country.md "https://poseidat.org/schema/core/address.json#/properties/country")                               |

## streetAddress

The street and number

`streetAddress`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-streetaddress.md "https://poseidat.org/schema/core/address.json#/properties/streetAddress")

### streetAddress Type

`string`

## streetAddressExtension

An optional street and number extension

`streetAddressExtension`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-streetaddressextension.md "https://poseidat.org/schema/core/address.json#/properties/streetAddressExtension")

### streetAddressExtension Type

`string`

## postalCode

The postal or ZIP code of the city

`postalCode`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-postalcode.md "https://poseidat.org/schema/core/address.json#/properties/postalCode")

### postalCode Type

`string`

## city

The city or town

`city`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-city.md "https://poseidat.org/schema/core/address.json#/properties/city")

### city Type

`string`

## region

The region or province

`region`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-region.md "https://poseidat.org/schema/core/address.json#/properties/region")

### region Type

`string`

## country

The country

`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-country.md "https://poseidat.org/schema/core/address.json#/properties/country")

### country Type

`string`
