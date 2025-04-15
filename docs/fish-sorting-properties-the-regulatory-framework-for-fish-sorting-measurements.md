# The regulatory framework for fish sorting measurements Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/regulatory_framework
```

Contains information about the regulating body and guidelines for conducting fish sorting measurements

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fish-sorting.json*](schemas/core/measurement/fish-sorting.json "open original schema") |

## regulatory_framework Type

`object` ([The regulatory framework for fish sorting measurements](fish-sorting-properties-the-regulatory-framework-for-fish-sorting-measurements.md))

# regulatory_framework Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                              |
| :---------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [jurisdiction](#jurisdiction)                   | `string` | Required | cannot be null | [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-jurisdiction.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/jurisdiction")                   |
| [regulation_reference](#regulation_reference)   | `string` | Optional | cannot be null | [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-regulation_reference.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/regulation_reference")   |
| [minimum_landing_sizes](#minimum_landing_sizes) | `array`  | Optional | cannot be null | [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-minimum_landing_sizes.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/minimum_landing_sizes") |

## jurisdiction

The jurisdiction under which the fish sorting measurement is conducted, e.g. EU, US, etc.

`jurisdiction`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-jurisdiction.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/jurisdiction")

### jurisdiction Type

`string`

### jurisdiction Constraints

**maximum length**: the maximum number of characters for this string is: `2`

**minimum length**: the minimum number of characters for this string is: `2`

**pattern**: the string must match the following regular expression: 

```regexp
^([A-Z]{2})$
```

[try pattern](https://regexr.com/?expression=%5E\(%5BA-Z%5D%7B2%7D\)%24 "try regular expression with regexr.com")

## regulation_reference

The specific regulation or guideline reference that applies to the fish sorting measurement (eg. EU Reg 2019/1241)

`regulation_reference`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-regulation_reference.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/regulation_reference")

### regulation_reference Type

`string`

## minimum_landing_sizes

The minimum landing sizes for different fish species

`minimum_landing_sizes`

*   is optional

*   Type: `object[]` ([Details](fish-sorting-regulatory-framework-properties-minimum_landing_sizes-items.md))

*   cannot be null

*   defined in: [The regulatory framework for fish sorting measurements](fish-sorting-regulatory-framework-properties-minimum_landing_sizes.md "https://poseidat.org/schema/core/measurement/fish-sorting-regulatory-framework.json#/properties/minimum_landing_sizes")

### minimum_landing_sizes Type

`object[]` ([Details](fish-sorting-regulatory-framework-properties-minimum_landing_sizes-items.md))
