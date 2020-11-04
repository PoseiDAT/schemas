# README

## Top-level Schemas

-   [BaseEntry](./base-entry.md "The shared properties for all entries") – `https://poseidat.org/schema/core/base-entry.json`
-   [Departure](./departure.md "A departure from port event") – `https://poseidat.org/schema/entry/departure.json`
-   [Device](./device.md "A device which is a part of a piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/device.json`
-   [DeviceMeasurement](./device-measurement.md "A device measurement journal entry") – `https://poseidat.org/schema/entry/device-measurement.json`
-   [Equipment](./equipment.md "A piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json`
-   [EquipmentInventory](./equipment-inventory.md "An entry detailing the equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory.json`
-   [Journal](./journal.md "A trip journal") – `https://poseidat.org/schema/core/journal.json`
-   [Position](./position.md "A navigational position that can be used in an entry") – `https://poseidat.org/schema/core/position.json`
-   [Vessel](./vessel.md "The vessel information") – `https://poseidat.org/schema/core/vessel.json`

## Other Schemas

### Objects

-   [BaseEntry](./departure-allof-baseentry.md "The shared properties for all entries") – `https://poseidat.org/schema/core/base-entry.json#/allOf/0`
-   [Device](./equipment-properties-device-device.md "A device which is a part of a piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/device.json#/properties/device/items`
-   [Equipment](./equipment-inventory-properties-equipment-equipment.md "A piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/equipment/items`
-   [Position](./departure-properties-position.md "A navigational position that can be used in an entry") – `https://poseidat.org/schema/core/position.json#/properties/position`
-   [Vessel](./journal-properties-vessel.md "The vessel information") – `https://poseidat.org/schema/core/vessel.json#/properties/vessel`

### Arrays

-   [Untitled array in Equipment](./equipment-properties-device.md "The collection of devices that are a part of this piece of equipment") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device`
-   [Untitled array in Equipment](./equipment-properties-device.md "The collection of devices that are a part of this piece of equipment") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device`
-   [Untitled array in EquipmentInventory](./equipment-inventory-properties-equipment.md "The collection of equipment for the vessel") – `https://poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
