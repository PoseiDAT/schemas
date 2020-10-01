# PoseiDAT schemas

The PoseiDAT initiative was created to create an open data format to exchange maritime, sensory and commercial activity data for fishing trawler trips.
This repository contains the core schemas for the PoseiDAT data interchange formats and exposes itself as an NPM package that can be used to create and validate PoseiDAT journals and entries.

## Purpose and origins

There is a growing demand for data collection and analysis in the world of commercial fishery.
Government and scientific parties have interest for both preservation, inspection and law enforcement.
Commercial entries have interest for operational efficiency and fulfilling their legal requirements.

There are various existing studies all working on parts of available data sets which all have different formats and data ranges.
The Electronic recording and reporting system (ERS) is used to record, report, process, store and send fisheries data (catch, landing, sales and transhipment) and is often used as a source for these studies.
The ERS is focused on government use will omit lower level operational details.
There are also new data sets emerging like sensory data collection which has no place in an ERS.
On the other end of the spectrum organizations such as [ICES](http://www.ices.dk) collect surveys from participating fishing vessels for scientific data analysis purposes.
These surveys are more single subject focussed and may not have enough relational markers for commercial business analysis.

The PoseiDAT initiative was created to create something we call the `trip journal`.
This is the super set of data that brings together all the data collected during a (fishing) vessel trip.
A journal is comprised of entries that can be sent and collected piecemeal both on board a vessel and at a central location for the commercial entity running the vessel.
This journal could then be used as a source for both scientific studies and systems like an ERS.
Having a standard schema for each entry type will hopefully allow more system to exchange their data.
By distinguishing between entry types an export can be filtered on the types of data the owner wants to share with other systems.

## Core entities

A journal contains the following information:

* journal identifier
* vessel identification
* entries

The entries we support will be extended as the project progresses.
An example of the type of entries we forsee are:

* Navigational (GPS)
* SensorMeasurement
* SensorNotification (warning, error, failure)
* Departure
* Arrival
* Landing
* ZoneCrossing
* TowStart
* TowEnd

### Revisions

A journal entry can be updated unless it is specifically marked as being `immutable`.
Sensor data will generally be marked immutable where catch related data can be amended.

A new entry will be added to the journal with the same identifier but a newer revision identifier.
The date and time the entry was created will be the revision identifier.
So when an entry is created a revision identifier will be made using an RFC date string combined with the journal identifier.
This should alleviate concurrency issues when multiple systems are trying to create revisions at the same time and will allow for natural time based sorting.
So even though a new revision can be made the original entry is not modified but replaced.

## Design principles

These will be amended as the project continues.

* Schemas must be a v7 [json-schema](https://json-schema.org)
* Identifiers should be UUID v4
* All date times must be in UTC
* All date time must be RFC3339 formatted strings
* All schema properties must have descriptions
* Property descriptions should note their unit of measurement
* Unit test should cover every schema

## Development

This repository is setup to help develop and validate new and existing schemas for PoseiDAT.

The schemas themselves are found in `src/core-schema`.
The `src/core-schema/index.ts` needs to be updated to export new schemas when they are added.
The `src/core-schema/types.ts` is generated form the json schemas when doing an `npm run test` or an `npm run build`.
Should the need arise to only update the typings run `npm run build:typings`

Please be liberal in adding unit tests in the `test` folder for your schemas and data variations.
All the code and unit tests are written in TypeScript targeted for NodeJS.
You can check the line based coverage after running `npm run test` by opening `coverage/lcov-report/index.html` in a web browser.
