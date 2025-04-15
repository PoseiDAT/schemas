# Untitled object in A fish sorting scan detection measurement Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/validation
```

The validation details of the fish sorting detection

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fish-sorting-scan.json*](schemas/core/measurement/fish-sorting-scan.json "open original schema") |

## validation Type

`object` ([Details](fish-sorting-scan-properties-validation.md))

# validation Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                               |
| :---------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [actor](#actor)   | `string` | Required | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-validation-properties-actor.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/validation/properties/actor")   |
| [status](#status) | `string` | Required | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-validation-properties-status.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/validation/properties/status") |

## actor

The actor performing the validation, e.g. machine or human

`actor`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-validation-properties-actor.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/validation/properties/actor")

### actor Type

`string`

### actor Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"machine"` |             |
| `"human"`   |             |

## status

The validation status of the fish sorting detection

`status`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-validation-properties-status.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/validation/properties/status")

### status Type

`string`

### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"pending"`        |             |
| `"human_verified"` |             |
| `"rejected"`       |             |
