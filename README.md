# PoseiDAT schemas

The PoseiDAT initiative was created to create an open data format to exchange maritime sourced **scientific**, **technical** and **economic** activity data for fishing vessels.
This repository contains the core schemas for the PoseiDAT data interchange formats and exposes itself as an NPM package that can be used to create and validate PoseiDAT journals, entries and events.

## Purpose and origins

There is a growing demand for data collection and analysis in the world of commercial fishery.
Government and scientific parties have interest for both preservation, inspection and law enforcement.
Commercial entities have an interest for operational efficiency and fulfilling their legal requirements.

There are various existing studies all working on parts of available data sets which all have different formats and data ranges.
The Electronic recording and reporting system (ERS) is used to record, report, process, store and send fisheries data (catch, landing, sales and transhipment) and is often used as a source for these studies.
The ERS is focused on government use and will lack lower level operational details.
There are also new data sets emerging like sensory data which has no place in an ERS.
On the other end of the spectrum organizations such as [ICES](http://www.ices.dk) collect surveys for scientific and data analysis purposes.
These surveys are more focussed on a certain subject and may not have enough relational markers for commercial business analysis.

The PoseiDAT initiative was created to create something we call the `vessel journal`.
This is the super set of data that brings together all the data collected during a vessels lifetime (or specific ownership period).
A journal is comprised of `entries` that can be sent and collected piecemeal.
An entry is time based log which can contain one or more `events`.
The addition of entries can occur both on board a vessel and at a central land based location by the commercial entity running the vessel.
This journal could then be used as a source for data sharing to scientific studies and systems like an ERS.
Having a standard schema for each entry type will hopefully allow more system to exchange their data.
By distinguishing between entry types an export can be filtered on the types of data the owner wants to share with other systems.

## Core entities

A journal contains the following information:

* journal identifier
* vessel information
* equipment installed on the vessel
* vessel service history (1...n)
* events (1...n)

You can think of the journal much like its paper equivalent.
On the cover the name identifying the vessel is shown.
The first couple of pages are reserved for a description of the vessel and contains a listing of the equipment on board.
There are also some pages dedicated to logging services performed on the vessel much like the maintenance booklet of your car.
Next the entries begin with a header detailing the exact date and time the entry was made.
The entry itself is a collection of events that occurred at that specific moment in time.

### Entries

An entry should at least contains the following:

* a unique identifier
* revision identifier
* a date and time in UTC
* some entry type specific data

We currently support the following entry types:

* EquipmentInventory (1)
* VesselRegistration (1)
* ServiceHistory (1...n)
* PersonalRoster (1)
* Events (1...n)

### EquipmentInventory

There should only be 1 `EquipmentInventory` which will be updated with new revisions when equipment is installed, replaced or decommissioned.
Since `equipment` can be referenced by event entries (for sensory data) they should never be removed but marked with a status (installed, replaced, etc).

### VesselRegistration

There should only be 1 `VesselRegistration` which will be updated with new revisions when vessel registration details are updated.

### ServiceHistory

> Not implemented yet

Every time vessel or equipment maintenance is carried out a `ServiceHistory` entry should be added to the journal.
The service entry will reference any equipment and/or devices involved and who performed the work.
This entry can also be used to mark the next maintenance interval (if applicable).

### PersonalRoster

> Not implemented yet

The person roster details the current human beings involved with the vessel in some capacity.
Involvement could be anything from captain to passenger.
There should only be 1 `PersonalRoster` which will be updated with new revisions when a persons involvement changes.

### Events

The flexibility of the PoseiDAT schema lies in the event types we collect and support.
By having structured and well defined event schemas they can be consumed and interpreted by other systems.
The events we support will be extended as the project progresses.
An example of the type of events a journal entry can contain are:

* DeviceMeasurement
* DeviceNotification (warning, error, failure)
* Navigational
* Departure
* Arrival
* Landing
* ZoneCrossing
* TowStart
* TowEnd
* FishingHaul
* ProductionBatch

### Revisions

The journal is intended to be append only.
This means that older entries cannot be altered but they can be replaced with a newer revision.
A journal entry can by default be replaced unless it is specifically marked as being `immutable`.
Sensor data will generally be marked immutable where catch related data can (mostly) be replaced to correct them.

To update an existing entry a new entry will be added to the journal with the same identifier but a newer revision.
The date and time the entry was created will be the basis for the revision identifier.
So when an entry is created a revision identifier will be made using an RFC date string combined with the entry identifier.
This should alleviate concurrency issues when multiple systems are trying to create revisions of the same entry and will allow for natural time based sorting.
So even though a new revision can be made the original entry is not modified but replaced and will always remain a part of the journal.

### Archiving entries

Because of the append only nature of the journal removing entries is not supported.
There is however an `archived` flag present in journal server implementations which marks an entry as obsolete.
Note that this is not a property in the entry schema itself but should be a characteristic of the storage system (database) of the entries.
Archiving an entry does not alter the original entry data itself because of append only nature of journal entries.
When exporting data to external systems these archived entries can be skipped.
However for journal integrity and auditing purposes no information should be deleted.

## Design principles

These will evolve as the project continues.

* Schemas must be a v7 [json-schema](https://json-schema.org)
* All date times must be in UTC
* All date time must be RFC3339 formatted strings
* All schema properties must have descriptions
* Property descriptions should note their unit of measurement (if applicable)
* Unit tests must cover every schema
* Unit tests should cover validation errors
* Identifiers should be UUID v4
* Entities should never be copied but referenced by identifier (ex. source device details for a measurement event)
* Any referenced identifier may never be removed/archived from the journal (referential integrity)
* A journal is unique to a vessel (vessel ownership changes may warrant a new journal for the same vessel)

## Development

This repository is setup to help develop and validate new and existing schemas for PoseiDAT.

If you want to get involved with developing the PoseiDAT schemas you can clone this repository.
You will need to have  NodeJS v12 installed

```bash
git clone git@github.com:PoseiDAT/schemas.git
npm install
```

The schemas themselves are found in `src/core-schema`.
The `src/core-schema/index.ts` needs to be updated to export new schemas when they are added.
The `src/core-schema/types.ts` is generated form the json schemas when doing an `npm run test` or an `npm run build`.
Should the need arise to only update the typings run `npm run build:typings`

Please be liberal in adding unit tests in the `test` folder for your schemas and data validation.
All the code and unit tests are written in TypeScript targeted for NodeJS.
You can check the line based coverage after running `npm run test` by opening `coverage/lcov-report/index.html` in a web browser.

Documentation is generated on each build and hosted on [github pages](https://poseidat.github.io/schemas/). You can locally test them with `npm run docs`.

## Installation

Install the npm package by running the npm install command:

```bash
npm install @poseidat/schemas
```

### Usage

Here is an example on how to use this package to create and validate an Arrival Entry by taking the following steps:

* We import the necessary class and interface
* We setup an empty object, this is where your data for the actual Arrival Entry would be
* We create the PoseiDAT Arrival Entry
* We validate the PoseiDAT Arrival Entry
* We check if we have errors within the Arrival Entry

```ts
import {
  ArrivalEntry,
  IEntryArrival
} from '@poseidat/schemas';

const arrivalEntryData = {};

const poseidatArrivalEntry = new ArrivalEntry(arrivalEntryData as IEntryArrival);

const errors = poseidatArrivalEntry.validate();

if (errors.length) {
  // Handle errors
}
```

And here is how you would create and validate a Journal, we use the [uuid package](https://www.npmjs.com/package/uuid) to generate the uuid that is required:

```ts
import {
  Journal,
  ICoreJournal
} from '@poseidat/schemas';
import { v4 as uuidv4 } from 'uuid';

const journalData: ICoreJournal = {
  journal_id: uuidv4(),
  vessel: {
      name: 'Amsterdam',
      flag_state: 'NL',
      cfr: 'NL00000001',
      call_sign:'VOC001',
      hull_number: 'VOC-1',
      registration_date: '01-01-1748',
      full_length: '48',
    }
};

const poseidatJournal = new Journal(journalData);

const errors = poseidatJournal.validate();

if (errors.length) {
  // Handle errors
}
```
