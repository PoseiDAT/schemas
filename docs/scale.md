# Scale Schema

```txt
https://poseidat.org/schema/core/measurement/scale.json
```

A scale measurement that can be used in an entry

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :----------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [scale.json](schemas/core/measurement/scale.json "open original schema") |

## Scale Type

`object` ([Scale](scale.md))

# Scale Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                         |
| :------------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tow](#tow)                                 | `object` | Optional | cannot be null | [Scale](scale-properties-fishing-tow.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/tow")                                       |
| [weight](#weight)                           | `number` | Required | cannot be null | [Scale](scale-properties-weight.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/weight")                                   |
| [category](#category)                       | `string` | Required | cannot be null | [Scale](scale-properties-scale-category.md "https://poseidat.org/schema/enum/scale-category.json#/properties/category")                            |
| [product](#product)                         | `string` | Required | cannot be null | [Scale](scale-properties-product.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/product")                                 |
| [product_description](#product_description) | `string` | Optional | cannot be null | [Scale](scale-properties-product_description.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/product_description")         |
| [processed](#processed)                     | `object` | Optional | cannot be null | [Scale](fishing-catch-properties-fishing-catch-processed.md "https://poseidat.org/schema/core/fishing-catch-processed.json#/properties/processed") |

## tow

Fishing tow (or haul) details

`tow`

*   is optional

*   Type: `object` ([Fishing tow](scale-properties-fishing-tow.md))

*   cannot be null

*   defined in: [Scale](scale-properties-fishing-tow.md "https://poseidat.org/schema/core/fishing-tow.json#/properties/tow")

### tow Type

`object` ([Fishing tow](scale-properties-fishing-tow.md))

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

## product_description

A description of the products appearance, sorting, quality or other grading information that is could be of importance. This is a free form text value whose purpose and format is dictated by the data source.

`product_description`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Scale](scale-properties-product_description.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/product_description")

### product_description Type

`string`

## processed

Details of caught fish after it has been processed

`processed`

*   is optional

*   Type: `object` ([Fishing catch processed](fishing-catch-properties-fishing-catch-processed.md))

*   cannot be null

*   defined in: [Scale](fishing-catch-properties-fishing-catch-processed.md "https://poseidat.org/schema/core/fishing-catch-processed.json#/properties/processed")

### processed Type

`object` ([Fishing catch processed](fishing-catch-properties-fishing-catch-processed.md))
