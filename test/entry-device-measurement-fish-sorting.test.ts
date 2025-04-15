import { v4 } from 'uuid';
import { DeviceMeasurementEntry } from '../src/index';
import type { IEntryDeviceMeasurement, IMeasurementFishSorting } from '../src/schema-types';

describe('DeviceMeasurementEntry (FISH_SORTING)', () => {

  test('Validating a DeviceMeasurementEntry of type FISH_SORTING should succeed', () => {

    const sortingData: IMeasurementFishSorting = {
      means_of_measuring: 'VISION',
      regulatory_framework: {
        jurisdiction: 'EU',
        regulation_reference: 'EU 2019/1241',
        minimum_landing_sizes: [
          { fish_species: 'COD', size: 0.35 },
          { fish_species: 'HER', size: 0.20 }
        ],
      },
      scans: [
        {
          identifier: 'det_01',
          start_datetime: '2025-04-15T00:01:29Z',
          end_datetime: '2025-04-15T00:01:30Z',
          spatial_data: {
            bounding_box: [296, 792, 414, 1155],
          },
          occlusion_type: 'fully_visible',
          below_minimum_size: false,
          fish: {
            species_code: 'COD',
            species_confidence: 0.85,
            length: 0.9,
            weight: 7.01,
            condition_score: 8.5,
            estimated_age: 3
          },
          validation: {
            actor: 'machine',
            status: 'pending'
          }
        },
        {
          identifier: 'det_02',
          start_datetime: '2025-04-15T00:01:31Z',
          end_datetime: '2025-04-15T00:01:35Z',
          spatial_data: {
            polygons: [
              [196, 772],
              [464, 772],
              [464, 1157],
              [196, 1157]
            ],
          },
          occlusion_type: 'partially_visible',
          below_minimum_size: false,
          fish: {
            species_code: 'HER',
            species_confidence: 0.65,
            length: 0.6,
            weight: 7.0,
            condition_score: 7.2,
            sex: 'unknown'
          },
          validation: {
            actor: 'machine',
            status: 'pending'
          }
        }
      ],
      summary: {
        amount: 2,
        weight: 14.02,
        fish_species: [
          { species_code: 'COD', amount: 1, weight: 7.01 },
          { species_code: 'HER', amount: 1, weight: 7.01 }
        ]
      }
    };

    const data: IEntryDeviceMeasurement =
      {
        journal_id: v4(),
        entry_id: v4(),
        entry_type: "device-measurement",
        entry_datetime: "2025-04-15T00:00:00Z",
        revision: "2025-04-15T00:00:00Z",
        immutable: false,
        device_id: "DEVICE_ID_STRING",
        value : {
            type: "FISH_SORTING",
            fish_sorting: sortingData,
        }
    };

    const entry = new DeviceMeasurementEntry(data);

    console.log(JSON.stringify(entry.data, null, 2));

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
