import { v4 } from 'uuid';
import { IEntryDeviceMeasurement } from '../src/schema-types';
import { DeviceMeasurementEntry } from '../src/entry-device-measurement';

describe('DeviceMeasurementEntry', () => {
  test('DeviceMeasurementEntry needs to be defined', () => {
    expect(DeviceMeasurementEntry).toBeDefined();
  });

  test('Validating an empty DeviceMeasurementEntry should fail', () => {
    const measurementEntry = new DeviceMeasurementEntry({} as IEntryDeviceMeasurement);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(6);
    expect(validationErrors[0].message).toEqual("must have required property 'journal_id'");
    expect(validationErrors[0].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[1].message).toEqual("must have required property 'entry_id'");
    expect(validationErrors[1].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[2].message).toEqual("must have required property 'revision'");
    expect(validationErrors[2].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[3].message).toEqual("must have required property 'immutable'");
    expect(validationErrors[3].schemaPath).toEqual('https://poseidat.org/schema/core/base-entry.json/required');
    expect(validationErrors[4].message).toEqual("must have required property 'device_id'");
    expect(validationErrors[4].schemaPath).toEqual('#/required');
    expect(validationErrors[5].message).toEqual("must have required property 'value'");
    expect(validationErrors[5].schemaPath).toEqual('#/required');
  });

  test('Validating a minimal position DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "POSITION",
        position: {
          latitude: 1.1,
          longitude: 1.1
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a full position DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "POSITION",
        position: {
          latitude: 1.1,
          longitude: 1.1,
          course_made_good: 1.1,
          speed_over_ground: 1.1,
          number_of_satellites: 1
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a minimal numeric DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "TEMPERATURE",
        numeric: {
          value: 1.1
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a minimal trawl tension DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "TRAWL_TENSION",
        trawl_tension: {
          shooted_length_center: 1.1,
          shooted_length_port: 1.1,
          shooted_length_starboard: 1.1,
          traction_center: 1.1,
          traction_port: 1.1,
          traction_starboard: 1.1
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a full trawl tension DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "TRAWL_TENSION",
        trawl_tension: {
          shooted_length_center: 1.1,
          shooted_length_port: 1.1,
          shooted_length_starboard: 1.1,
          traction_center: 1.1,
          traction_port: 1.1,
          traction_starboard: 1.1,
          speed_center: 1.1,
          speed_port: 1.1,
          speed_starboard: 1.1,
          pressure_center: 1.1,
          pressure_port: 1.1,
          pressure_starboard: 1.1,
          drum_rotations_center: 1.1,
          drum_rotations_port: 1.1,
          drum_rotations_starboard: 1.1
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a scale DeviceMeasurementEntry with supported fish species should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "SCALE",
        scale: {
          haul_number: 1,
          weight: 1.1,
          category: "FISH",
          product: "ANF"
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a scale DeviceMeasurementEntry with new fish species should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "SCALE",
        scale: {
          haul_number: 1,
          weight: 1.1,
          category: "FISH",
          product: "AAA"
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a spatial axes DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "SPATIAL_AXES",
        spatial_axes: {
          y: 1,
          x: 1,
          z: 1
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a subsurface DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "SUBSURFACE",
        subsurface: {
          samples: [{
            temp: 5.936999797821045,
            conductivity: 20.009000778198242,
            salinity: 19.340999603271484,
            time: "2022-12-29T14:18:15Z",
            latitude: 53.181148529052734,
            longitude: 5.417250156402588,
            depth: 5.90500020980835
          }],
          metadata: "METADATA",
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    console.error(validationErrors);
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a speedlog DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "SPEEDLOG",
        speedlog: {
          longitudinal_water_speed: 12.4,
          total_cumulative_water_distance: 205909
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    console.error(validationErrors);
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validating a weather DeviceMeasurementEntry should succeed', () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "WEATHER",
        weather: {
          air_pressure: 1.030,
          air_temperature: 24.1,
          wind_dir_true: 214
        }
      }
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    console.error(validationErrors);
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
