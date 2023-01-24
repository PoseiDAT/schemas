# Scale Schema

```txt
https://poseidat.org/schema/core/measurement/scale.json#/properties/scale
```

A scale measurement that can be used in an entry

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [measurement-value.json*](schemas/core/measurement/measurement-value.json "open original schema") |

## scale Type

`object` ([Scale](measurement-value-properties-scale.md))

# scale Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :---------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [haul_date_start](#haul_date_start) | `string` | Optional | cannot be null | [Scale](scale-properties-haul_date_start.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/haul_date_start")                 |
| [haul_date_end](#haul_date_end)     | `string` | Optional | cannot be null | [Scale](scale-properties-haul_date_end.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/haul_date_end")                     |
| [haul_number](#haul_number)         | `number` | Required | cannot be null | [Scale](scale-properties-haul_number.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/haul_number")                         |
| [weight](#weight)                   | `number` | Required | cannot be null | [Scale](scale-properties-weight.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/weight")                                   |
| [category](#category)               | `string` | Required | cannot be null | [Scale](scale-properties-scale-category.md "https://poseidat.org/schema/enum/scale-category.json#/properties/category")                            |
| [product](#product)                 | `string` | Required | cannot be null | [Scale](scale-properties-product.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/product")                                 |
| [processed](#processed)             | `object` | Optional | cannot be null | [Scale](fishing-catch-properties-fishing-catch-processed.md "https://poseidat.org/schema/core/fishing-catch-processed.json#/properties/processed") |

## haul_date_start

The datetime the haul started in UTC

`haul_date_start`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Scale](scale-properties-haul_date_start.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/haul_date_start")

### haul_date_start Type

`string`

### haul_date_start Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## haul_date_end

The datetime the haul ended in UTC

`haul_date_end`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Scale](scale-properties-haul_date_end.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/haul_date_end")

### haul_date_end Type

`string`

### haul_date_end Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## haul_number

The number of the haul the product was caught in

`haul_number`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Scale](scale-properties-haul_number.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/haul_number")

### haul_number Type

`number`

## weight

The weight of the product

`weight`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Scale](scale-properties-weight.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/weight")

### weight Type

`number`

## category

The types of supported product categories to weigh

`category`

*   is required

*   Type: `string` ([Scale category](scale-properties-scale-category.md))

*   cannot be null

*   defined in: [Scale](scale-properties-scale-category.md "https://poseidat.org/schema/enum/scale-category.json#/properties/category")

### category Type

`string` ([Scale category](scale-properties-scale-category.md))

### category Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"FISH"` |             |

## product

The type of the product, e.g. a type of fish

`product`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Scale](scale-properties-product.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/product")

### product Type

`string`

### product Constraints

**maximum length**: the maximum number of characters for this string is: `3`

**minimum length**: the minimum number of characters for this string is: `3`

**pattern**: the string must match the following regular expression: 

```regexp
^([A-Z]{3})$
```

[try pattern](https://regexr.com/?expression=%5E\(%5BA-Z%5D%7B3%7D\)%24 "try regular expression with regexr.com")

## processed

Details of caught fish after it has been processed

`processed`

*   is optional

*   Type: `object` ([Fishing catch processed](fishing-catch-properties-fishing-catch-processed.md))

*   cannot be null

*   defined in: [Scale](fishing-catch-properties-fishing-catch-processed.md "https://poseidat.org/schema/core/fishing-catch-processed.json#/properties/processed")

### processed Type

`object` ([Fishing catch processed](fishing-catch-properties-fishing-catch-processed.md))
