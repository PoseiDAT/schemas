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

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                 |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [haul_number](#haul_number) | `number` | Required | cannot be null | [Scale](scale-properties-haul_number.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/haul_number") |
| [weight](#weight)           | `number` | Required | cannot be null | [Scale](scale-properties-weight.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/weight")           |
| [category](#category)       | `string` | Required | cannot be null | [Scale](scale-properties-scale-category.md "https://poseidat.org/schema/enum/scale-category.json#/properties/category")    |
| [product](#product)         | Merged   | Required | cannot be null | [Scale](scale-properties-product.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/product")         |

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

*   Type: `string` ([Details](scale-properties-product.md))

*   cannot be null

*   defined in: [Scale](scale-properties-product.md "https://poseidat.org/schema/core/measurement/scale.json#/properties/product")

### product Type

`string` ([Details](scale-properties-product.md))

any of

*   [Fish type](scale-properties-product-anyof-fish-type.md "check type definition")

*   [Untitled undefined type in Scale](scale-properties-product-anyof-1.md "check type definition")
