# Address Schema

```txt
https://poseidat.org/schema/core/address.json
```

A street address

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                       |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :--------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [address.json](schemas/core/address.json "open original schema") |

## Address Type

`object` ([Address](address.md))

# Address Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                     |
| :---------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [street_address](#street_address)                     | `string` | Required | cannot be null | [Address](address-properties-street_address.md "https://poseidat.org/schema/core/address.json#/properties/street_address")                     |
| [street_address_extension](#street_address_extension) | `string` | Optional | cannot be null | [Address](address-properties-street_address_extension.md "https://poseidat.org/schema/core/address.json#/properties/street_address_extension") |
| [postal_code](#postal_code)                           | `string` | Required | cannot be null | [Address](address-properties-postal_code.md "https://poseidat.org/schema/core/address.json#/properties/postal_code")                           |
| [city](#city)                                         | `string` | Required | cannot be null | [Address](address-properties-city.md "https://poseidat.org/schema/core/address.json#/properties/city")                                         |
| [region](#region)                                     | `string` | Optional | cannot be null | [Address](address-properties-region.md "https://poseidat.org/schema/core/address.json#/properties/region")                                     |
| [country](#country)                                   | `string` | Required | cannot be null | [Address](address-properties-country.md "https://poseidat.org/schema/core/address.json#/properties/country")                                   |

## street_address

The street and number

`street_address`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-street_address.md "https://poseidat.org/schema/core/address.json#/properties/street_address")

### street_address Type

`string`

## street_address_extension

An optional street and number extension

`street_address_extension`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-street_address_extension.md "https://poseidat.org/schema/core/address.json#/properties/street_address_extension")

### street_address_extension Type

`string`

## postal_code

The postal or ZIP code of the city

`postal_code`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Address](address-properties-postal_code.md "https://poseidat.org/schema/core/address.json#/properties/postal_code")

### postal_code Type

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
