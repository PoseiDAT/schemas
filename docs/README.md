# README

## Top-level Schemas

-   [Arrival](./arrival.md "A return to port event") – `https://poseidat.org/schema/entry/arrival.json`
-   [BaseEntry](./base-entry.md "The shared properties for all entries") – `https://poseidat.org/schema/core/base-entry.json`
-   [Departure](./departure.md "A departure from port event") – `https://poseidat.org/schema/entry/departure.json`
-   [Device](./device.md "A device which is a part of a piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/device.json`
-   [DeviceMeasurement](./device-measurement.md "A device measurement journal entry") – `https://poseidat.org/schema/entry/device-measurement.json`
-   [End of fishing activity](./end-of-fishing.md "Notification of intent to cease all fishing activity for the trip") – `https://poseidat.org/schema/entry/end-of-fishing.json`
-   [Equipment](./equipment.md "A piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json`
-   [EquipmentInventory](./equipment-inventory.md "An entry detailing the equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory.json`
-   [Journal](./journal.md "A trip journal") – `https://poseidat.org/schema/core/journal.json`
-   [Position](./position.md "A navigational position that can be used in an entry") – `https://poseidat.org/schema/core/position.json`
-   [Untitled object in undefined](./zone-enter.md "Enter declaration of a fishing zone") – `https://poseidat.org/schema/entry/zone-enter.json`
-   [Untitled object in undefined](./zone-exit.md "Exit declaration of a fishing zone") – `https://poseidat.org/schema/entry/zone-exit.json`
-   [Untitled object in undefined](./fishing-gear.md "Fishing gear details") – `https://poseidat.org/schema/core/fishing-gear.json`
-   [Untitled object in undefined](./fishing-zone.md "Geographical zone for fishing activities") – `https://poseidat.org/schema/core/fishing-zone.json`
-   [Untitled object in undefined](./port.md "Fishing port details") – `https://poseidat.org/schema/core/port.json`
-   [Untitled object in undefined](./trip-entry.md "The trip related details of a journal entry") – `https://poseidat.org/schema/core/trip-entry.json`
-   [Untitled object in undefined](./vessel-inspection.md "Vessel inspection details") – `https://poseidat.org/schema/core/vessel-inspection.json`
-   [Untitled string in undefined](./anticipated-activity.md "The anticipated activity for the fishing trip") – `https://poseidat.org/schema/enum/anticipated-activity.json`
-   [Untitled string in undefined](./effort-zone.md "The fishing effort zone") – `https://poseidat.org/schema/enum/effort-zone.json`
-   [Untitled string in undefined](./reason-arrival.md "The reason for the vessel to return to port") – `https://poseidat.org/schema/enum/reason-arrival.json`
-   [Vessel](./vessel.md "The vessel information") – `https://poseidat.org/schema/core/vessel.json`

## Other Schemas

### Objects

-   [BaseEntry](./arrival-allof-baseentry.md "The shared properties for all entries") – `https://poseidat.org/schema/core/base-entry.json#/allOf/0`
-   [Device](./equipment-properties-device-device.md "A device which is a part of a piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/device.json#/properties/device/items`
-   [Equipment](./equipment-inventory-properties-equipment-equipment.md "A piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/equipment/items`
-   [Position](./trip-entry-properties-position.md "A navigational position that can be used in an entry") – `https://poseidat.org/schema/core/position.json#/properties/location`
-   [Untitled object in Arrival](./arrival-properties-trip.md "The trip related details of a journal entry") – `https://poseidat.org/schema/core/trip-entry.json#/properties/trip`
-   [Untitled object in Arrival](./arrival-properties-port.md "Fishing port details") – `https://poseidat.org/schema/core/port.json#/properties/port`
-   [Untitled object in Arrival](./arrival-properties-catch_on_board-items.md) – `https://poseidat.org/schema/entry/arrival.json#/properties/catch_on_board/items`
-   [Untitled object in Departure](./departure-properties-gear_on_board-items.md "Fishing gear details") – `https://poseidat.org/schema/core/fishing-gear.json#/properties/gear_on_board/items`
-   [Untitled object in Departure](./departure-properties-catch_on_board-items.md) – `https://poseidat.org/schema/entry/departure.json#/properties/catch_on_board/items`
-   [Untitled object in undefined](./zone-enter-properties-zone.md "Geographical zone for fishing activities") – `https://poseidat.org/schema/core/fishing-zone.json#/properties/zone`
-   [Untitled object in undefined](./zone-enter-properties-catch_on_board-items.md) – `https://poseidat.org/schema/entry/zone-enter.json#/properties/catch_on_board/items`
-   [Untitled object in undefined](./zone-exit-properties-catch_on_board-items.md) – `https://poseidat.org/schema/entry/zone-exit.json#/properties/catch_on_board/items`
-   [Vessel](./journal-properties-vessel.md "The vessel information") – `https://poseidat.org/schema/core/vessel.json#/properties/vessel`

### Arrays

-   [Untitled array in Arrival](./arrival-properties-catch_on_board.md "The caught fish present on board the vessel") – `https://poseidat.org/schema/entry/arrival.json#/properties/catch_on_board`
-   [Untitled array in Departure](./departure-properties-gear_on_board.md "The gear present on board the vessel") – `https://poseidat.org/schema/entry/departure.json#/properties/gear_on_board`
-   [Untitled array in Departure](./departure-properties-catch_on_board.md "The previously caught fish present on board the vessel") – `https://poseidat.org/schema/entry/departure.json#/properties/catch_on_board`
-   [Untitled array in Equipment](./equipment-properties-device.md "The collection of devices that are a part of this piece of equipment") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device`
-   [Untitled array in Equipment](./equipment-properties-device.md "The collection of devices that are a part of this piece of equipment") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device`
-   [Untitled array in EquipmentInventory](./equipment-inventory-properties-equipment.md "The collection of equipment for the vessel") – `https://poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment`
-   [Untitled array in undefined](./zone-enter-properties-catch_on_board.md "The previously caught fish present on the vessel at the time of entry") – `https://poseidat.org/schema/entry/zone-enter.json#/properties/catch_on_board`
-   [Untitled array in undefined](./zone-exit-properties-catch_on_board.md "The previously caught fish present on the vessel at the time of entry") – `https://poseidat.org/schema/entry/zone-exit.json#/properties/catch_on_board`
-   [Untitled array in undefined](./zone-exit-properties-trans_zonal_fishing_zones.md "The zones involved in trans-zonal fishing") – `https://poseidat.org/schema/entry/zone-exit.json#/properties/trans_zonal_fishing_zones`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
