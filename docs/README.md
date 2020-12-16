# README

## Top-level Schemas

-   [Arrival](./arrival.md "A return to port event") – `https://poseidat.org/schema/entry/arrival.json`
-   [Base entry](./base-entry.md "The shared properties for all entries") – `https://poseidat.org/schema/core/base-entry.json`
-   [Departure](./departure.md "A departure from port event") – `https://poseidat.org/schema/entry/departure.json`
-   [Device](./device.md "A device which is a part of a piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/device.json`
-   [Device measurement](./device-measurement.md "A device measurement journal entry") – `https://poseidat.org/schema/entry/device-measurement.json`
-   [Effort zone](./effort-zone.md "The fishing effort zone") – `https://poseidat.org/schema/enum/effort-zone.json`
-   [End of fishing activity](./end-of-fishing.md "Notification of intent to cease all fishing activity for the trip") – `https://poseidat.org/schema/entry/end-of-fishing.json`
-   [Equipment](./equipment.md "A piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json`
-   [Equipment inventory](./equipment-inventory.md "An entry detailing the equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory.json`
-   [Fish freshness](./fish-freshness.md "The freshness indication for processed fish species") – `https://poseidat.org/schema/enum/fish-freshness.json`
-   [Fish package type](./fish-package-type.md "The package types for processed fish species") – `https://poseidat.org/schema/enum/fish-package-type.json`
-   [Fish presentation](./fish-presentation.md "The presentation formats for processed fish species") – `https://poseidat.org/schema/enum/fish-presentation.json`
-   [Fish state](./fish-state.md "The preservation states for processed fish species") – `https://poseidat.org/schema/enum/fish-state.json`
-   [Fishing activity](./fishing-activity.md "Notification of intent to cease all fishing activity for the trip") – `https://poseidat.org/schema/entry/fishing-activity.json`
-   [Fishing catch](./fishing-catch.md "Details of caught fish") – `https://poseidat.org/schema/core/fishing-catch.json`
-   [Fishing catch processed](./fishing-catch-processed.md "Details of caught fish after it has been processed") – `https://poseidat.org/schema/core/fishing-catch-processed.json`
-   [Fishing gear](./fishing-gear.md "Fishing gear details") – `https://poseidat.org/schema/core/fishing-gear.json`
-   [Fishing gear deployment](./fishing-gear-deployment.md "Fishing gear deployment details") – `https://poseidat.org/schema/core/fishing-gear-deployment.json`
-   [Fishing gear gill net](./fishing-gear-gill-net.md "Deep Sea Permit requirements when using gill nets") – `https://poseidat.org/schema/core/fishing-gear-gill-net.json`
-   [Fishing gear loss](./fishing-gear-loss.md "A gear loss event details") – `https://poseidat.org/schema/core/fishing-gear-loss.json`
-   [Fishing gear retrieve](./fishing-gear-retrieve.md "A gear retrieve event details") – `https://poseidat.org/schema/core/fishing-gear-retrieve.json`
-   [Fishing gear shot](./fishing-gear-shot.md "A gear shot event details") – `https://poseidat.org/schema/core/fishing-gear-shot.json`
-   [Fishing gear type](./fishing-gear-type.md "Fishing gear type codes") – `https://poseidat.org/schema/enum/fishing-gear-type.json`
-   [Fishing tow](./fishing-tow.md "Fishing tow details") – `https://poseidat.org/schema/core/fishing-tow.json`
-   [Fishing zone](./fishing-zone.md "Geographical zone for fishing activities") – `https://poseidat.org/schema/core/fishing-zone.json`
-   [Journal](./journal.md "A trip journal") – `https://poseidat.org/schema/core/journal.json`
-   [Port](./port.md "Fishing port details") – `https://poseidat.org/schema/core/port.json`
-   [Position](./position.md "A navigational position that can be used in an entry") – `https://poseidat.org/schema/core/position.json`
-   [Reason arrival](./reason-arrival.md "The reason for the vessel to return to port") – `https://poseidat.org/schema/enum/reason-arrival.json`
-   [Reason departure](./reason-departure.md "The reason for the vessel to depart from port") – `https://poseidat.org/schema/enum/reason-departure.json`
-   [Reason discard](./reason-discard.md "The reason for a vessel to discard caught fish") – `https://poseidat.org/schema/enum/reason-discard.json`
-   [Trip entry](./trip-entry.md "The trip related details of a journal entry") – `https://poseidat.org/schema/core/trip-entry.json`
-   [Vessel](./vessel.md "The vessel information") – `https://poseidat.org/schema/core/vessel.json`
-   [Vessel inspection](./vessel-inspection.md "Vessel inspection details") – `https://poseidat.org/schema/core/vessel-inspection.json`
-   [Vessel master](./vessel-master.md "The vessel master details") – `https://poseidat.org/schema/core/vessel-master.json`
-   [Vessel partner](./vessel-partner.md "Fishing vessel details for partnered fishing") – `https://poseidat.org/schema/core/vessel-partner.json`
-   [ZoneEnter](./zone-enter.md "Enter declaration of a fishing zone") – `https://poseidat.org/schema/entry/zone-enter.json`
-   [ZoneExit](./zone-exit.md "Exit declaration of a fishing zone") – `https://poseidat.org/schema/entry/zone-exit.json`

## Other Schemas

### Objects

-   [Base entry](./arrival-allof-base-entry.md "The shared properties for all entries") – `https://poseidat.org/schema/core/base-entry.json#/allOf/0`
-   [Device](./equipment-properties-devices-device.md "A device which is a part of a piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/device.json#/properties/device/items`
-   [Equipment](./equipment-inventory-properties-equipment-on-board-equipment.md "A piece of equipment installed on a vessel") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/equipment/items`
-   [Fishing catch](./arrival-properties-catch-on-board-fishing-catch.md "Details of caught fish") – `https://poseidat.org/schema/core/fishing-catch.json#/properties/catch_on_board/items`
-   [Fishing catch processed](./fishing-catch-properties-fishing-catch-processed.md "Details of caught fish after it has been processed") – `https://poseidat.org/schema/core/fishing-catch-processed.json#/properties/processed`
-   [Fishing gear](./departure-properties-gear-on-board-fishing-gear.md "Fishing gear details") – `https://poseidat.org/schema/core/fishing-gear.json#/properties/gear_on_board/items`
-   [Fishing gear deployment](./fishing-tow-properties-fishing-gear-deployment.md "Fishing gear deployment details") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_deployment`
-   [Fishing gear gill net](./fishing-gear-deployment-properties-fishing-gear-gill-net.md "Deep Sea Permit requirements when using gill nets") – `https://poseidat.org/schema/core/fishing-gear-gill-net.json#/properties/gill_net`
-   [Fishing gear loss](./fishing-gear-deployment-properties-gear-loss-details-fishing-gear-loss.md "A gear loss event details") – `https://poseidat.org/schema/core/fishing-gear-loss.json#/properties/gear_loss/items`
-   [Fishing gear retrieve](./fishing-gear-deployment-properties-gear-retrieve-details-fishing-gear-retrieve.md "A gear retrieve event details") – `https://poseidat.org/schema/core/fishing-gear-retrieve.json#/properties/gear_retrieve/items`
-   [Fishing gear shot](./fishing-gear-deployment-properties-gear-shot-details-fishing-gear-shot.md "A gear shot event details") – `https://poseidat.org/schema/core/fishing-gear-shot.json#/properties/gear_shot/items`
-   [Fishing tow](./fishing-activity-properties-fishing-tow.md "Fishing tow details") – `https://poseidat.org/schema/core/fishing-tow.json#/properties/tow`
-   [Fishing zone](./fishing-tow-properties-fishing-zone.md "Geographical zone for fishing activities") – `https://poseidat.org/schema/core/fishing-zone.json#/properties/zone`
-   [Port](./arrival-properties-port.md "Fishing port details") – `https://poseidat.org/schema/core/port.json#/properties/port`
-   [Position](./trip-entry-properties-position.md "A navigational position that can be used in an entry") – `https://poseidat.org/schema/core/position.json#/properties/location`
-   [Trip entry](./arrival-properties-trip-entry.md "The trip related details of a journal entry") – `https://poseidat.org/schema/core/trip-entry.json#/properties/trip`
-   [Vessel](./journal-properties-vessel.md "The vessel information") – `https://poseidat.org/schema/core/vessel.json#/properties/vessel`
-   [Vessel master](./vessel-partner-properties-vessel-master.md "The vessel master details") – `https://poseidat.org/schema/core/vessel-master.json#/properties/master`
-   [Vessel partner](./fishing-gear-deployment-properties-partnered-fishing-vessels-vessel-partner.md "Fishing vessel details for partnered fishing") – `https://poseidat.org/schema/core/vessel-partner.json#/properties/partnered_fishing_vessel/items`

### Arrays

-   [Catch on board](./arrival-properties-catch-on-board.md "The caught fish present on board the vessel") – `https://poseidat.org/schema/entry/arrival.json#/properties/catch_on_board`
-   [Catch on board](./departure-properties-catch-on-board.md "The previously caught fish present on board the vessel") – `https://poseidat.org/schema/entry/departure.json#/properties/catch_on_board`
-   [Catch on board](./zone-enter-properties-catch-on-board.md "The previously caught fish present on the vessel at the time of entry") – `https://poseidat.org/schema/entry/zone-enter.json#/properties/catch_on_board`
-   [Catch on board](./zone-exit-properties-catch-on-board.md "The previously caught fish present on the vessel at the time of entry") – `https://poseidat.org/schema/entry/zone-exit.json#/properties/catch_on_board`
-   [Caught fish](./fishing-tow-properties-caught-fish.md "The fish caught in this tow") – `https://poseidat.org/schema/core/fishing-tow.json#/properties/catches`
-   [Caught fish](./fishing-tow-properties-caught-fish.md "The fish caught in this tow") – `https://poseidat.org/schema/core/fishing-tow.json#/properties/catches`
-   [Devices](./equipment-properties-devices.md "The collection of devices that are a part of this piece of equipment") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device`
-   [Devices](./equipment-properties-devices.md "The collection of devices that are a part of this piece of equipment") – `https://poseidat.org/schema/entry/equipment-inventory/equipment.json#/properties/device`
-   [Equipment on board](./equipment-inventory-properties-equipment-on-board.md "The collection of equipment for the vessel") – `https://poseidat.org/schema/entry/equipment-inventory.json#/properties/equipment`
-   [Gear loss details](./fishing-gear-deployment-properties-gear-loss-details.md "All gear loss even details") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_loss`
-   [Gear loss details](./fishing-gear-deployment-properties-gear-loss-details.md "All gear loss even details") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_loss`
-   [Gear on board](./departure-properties-gear-on-board.md "The gear present on board the vessel") – `https://poseidat.org/schema/entry/departure.json#/properties/gear_on_board`
-   [Gear retrieve details](./fishing-gear-deployment-properties-gear-retrieve-details.md "All gear retrieve even details") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_retrieve`
-   [Gear retrieve details](./fishing-gear-deployment-properties-gear-retrieve-details.md "All gear retrieve even details") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_retrieve`
-   [Gear shot details](./fishing-gear-deployment-properties-gear-shot-details.md "All gear shot event details") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_shot`
-   [Gear shot details](./fishing-gear-deployment-properties-gear-shot-details.md "All gear shot event details") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/gear_shot`
-   [Partnered fishing vessels](./fishing-gear-deployment-properties-partnered-fishing-vessels.md "Details of partner vessels for pair fishing") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/partnered_fishing_vessel`
-   [Partnered fishing vessels](./fishing-gear-deployment-properties-partnered-fishing-vessels.md "Details of partner vessels for pair fishing") – `https://poseidat.org/schema/core/fishing-gear-deployment.json#/properties/partnered_fishing_vessel`
-   [Trans zonal fishing areas](./zone-exit-properties-trans-zonal-fishing-areas.md "The zones involved in trans-zonal fishing") – `https://poseidat.org/schema/entry/zone-exit.json#/properties/trans_zonal_fishing_zones`
-   [Waypoints](./fishing-tow-properties-waypoints.md "The collection of geographical locations logged during the tow") – `https://poseidat.org/schema/core/fishing-tow.json#/properties/waypoints`
-   [Waypoints](./fishing-tow-properties-waypoints.md "The collection of geographical locations logged during the tow") – `https://poseidat.org/schema/core/fishing-tow.json#/properties/waypoints`

## Version Note

The schemas linked above follow the JSON Schema Spec version: `http://json-schema.org/draft-07/schema#`
