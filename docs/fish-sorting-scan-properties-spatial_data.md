# Untitled object in A fish sorting scan detection measurement Schema

```txt
https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/spatial_data
```

The spatial data of the fish in the detection source

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [fish-sorting-scan.json*](schemas/core/measurement/fish-sorting-scan.json "open original schema") |

## spatial_data Type

`object` ([Details](fish-sorting-scan-properties-spatial_data.md))

# spatial_data Properties

| Property                      | Type    | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :---------------------------- | :------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [bounding_box](#bounding_box) | `array` | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-spatial_data-properties-bounding_box.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/spatial_data/properties/bounding_box") |
| [polygons](#polygons)         | `array` | Optional | cannot be null | [A fish sorting scan detection measurement](fish-sorting-scan-properties-spatial_data-properties-polygons.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/spatial_data/properties/polygons")         |

## bounding_box

The bounding box of the fish in the image

`bounding_box`

*   is optional

*   Type: `number[]`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-spatial_data-properties-bounding_box.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/spatial_data/properties/bounding_box")

### bounding_box Type

`number[]`

### bounding_box Constraints

**maximum number of items**: the maximum number of items for this array is: `4`

**minimum number of items**: the minimum number of items for this array is: `4`

## polygons

The polygons of the fish in the image

`polygons`

*   is optional

*   Type: `number[][]`

*   cannot be null

*   defined in: [A fish sorting scan detection measurement](fish-sorting-scan-properties-spatial_data-properties-polygons.md "https://poseidat.org/schema/core/measurement/fish-sorting-scan.json#/properties/spatial_data/properties/polygons")

### polygons Type

`number[][]`
