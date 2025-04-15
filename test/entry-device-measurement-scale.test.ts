import { v4 } from 'uuid';
import { DeviceMeasurementEntry } from '../src/index';
import { IEntryDeviceMeasurement, IMeasurementScale } from '../src/schema-types';

describe('DeviceMeasurementEntry (SCALE)', () => {

  test('Validating a DeviceMeasurementEntry of type SCALE should succeed', () => {

    const scaleData: IMeasurementScale = {
      tow: {
        activity_date_start: '2025-04-15T15:00:00Z',
        activity_date_end: '2025-04-15T15:00:00Z',
        sequence_number: 1,
        reference: 'HAUL_REF_001',
        location_start: {
          latitude: 54.1234,
          longitude: 3.1234,
        },
        zone: {
          economical_zone: 'NLD',
          fao_area: '27.4.c',
          fao_subarea: '4',
          fao_division: 'c',
          ices_rectangle: '35F6',
          effort_zone: 'A',
          regional_body: 'NEAFC'
        },
        fishing_gear: {
          code: 'DRB',
          mesh_size: 80,
        },
      },
      category: 'FISH',
      product: 'COD',
      product_description: 'Unsorted cod bits',
      processed: {
        fish_presentation: 'WHL',
        fish_state: 'FRO',
        package_type: 'CT',
        number_of_packages: 4,
        average_package_weight: 250,
        package_labels: ['LABEL1', 'LABEL2'],
        fish_freshness: 'A',
        conversion_factor: 1.0,
      },
      weight: 1000,
    }

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
            type: "SCALE",
            scale: scaleData,
        }
    };

    const entry = new DeviceMeasurementEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

});
