import { v4 } from "uuid";
import { IEntryDeviceMeasurement } from "../src/schema-types";
import { DeviceMeasurementEntry } from "../src/entry-device-measurement";

describe("DeviceMeasurementEntry", () => {
  test("DeviceMeasurementEntry needs to be defined", () => {
    expect(DeviceMeasurementEntry).toBeDefined();
  });

  test("Validating an empty DeviceMeasurementEntry should fail", () => {
    const measurementEntry = new DeviceMeasurementEntry(
      {} as IEntryDeviceMeasurement
    );
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(6);
    expect(validationErrors[0].message).toEqual(
      "must have required property 'journal_id'"
    );
    expect(validationErrors[0].schemaPath).toEqual(
      "https://poseidat.org/schema/core/base-entry.json/required"
    );
    expect(validationErrors[1].message).toEqual(
      "must have required property 'entry_id'"
    );
    expect(validationErrors[1].schemaPath).toEqual(
      "https://poseidat.org/schema/core/base-entry.json/required"
    );
    expect(validationErrors[2].message).toEqual(
      "must have required property 'revision'"
    );
    expect(validationErrors[2].schemaPath).toEqual(
      "https://poseidat.org/schema/core/base-entry.json/required"
    );
    expect(validationErrors[3].message).toEqual(
      "must have required property 'immutable'"
    );
    expect(validationErrors[3].schemaPath).toEqual(
      "https://poseidat.org/schema/core/base-entry.json/required"
    );
    expect(validationErrors[4].message).toEqual(
      "must have required property 'device_id'"
    );
    expect(validationErrors[4].schemaPath).toEqual("#/required");
    expect(validationErrors[5].message).toEqual(
      "must have required property 'value'"
    );
    expect(validationErrors[5].schemaPath).toEqual("#/required");
  });

  /**
   * TODO: i want to write more tests for the ais, but need to find a way to bind required properties
   * to a certain message_type value
   *
   * Example schema code of how i wanted it to work:
    "oneOf": [
      {
        "if": {
          "properties": {
            "message_type": {
              "oneOf": [
                { "const": 1},
                { "const": 2},
                { "const": 3}
              ]
            }
          }
        },
        "then": {
          "required": ["position", "RAIM_flag","COG","true_heading", "special_maneuvre_indicator",
            "position_accuracy","ROT", "SOG", "timestamp"]
        }
      },
      {
        "if": {
          "properties": {
            "message_type": {
              "oneOf": [
                { "const": 4},
                { "const": 11}
              ]
            }
          }
        },
        "then": {
          "required": ["position", "position_accuracy", "position_device_type","timestamp",  "RAIM_flag", "SOTDMA_communication_state"]
        }
      }

      ...... etc.
    ]

    But this code does not work with json schemas so need to find something.
    Maybe a way to do this is just to handle it in tests instead of json schemas.
    Or write a different schema for each message_type, but this would make a lot of duplicate properties
    in the total docs

    Further my tests fail because it says 'can't resolve reference https://poseidat.org/schema/enum/ais/ais-message-type.json'
    But I think the reason is that jest cant find my schemas since they arent yet on the live version.
    So I think i cant test those until they are live
   */

  test("Validating a AIS DeviceMeasurementEntry with supported message type should succeed", () => {
    const data: IEntryDeviceMeasurement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "device-measurement",
      device_id: v4(),
      value: {
        type: "AIS",
        ais: {
          message_type: "Static data report",
          entity_id: 1,
          repeat_indicator: 1,
          position: {
            latitude: 1,
            longitude: 1,
          },
          position_accuracy: "HIGH (< 10 M)",
          RAIM_flag: "RAIM not in use (default)",
          ROT: 1,
          SOG: 1,
          COG: 1,
          timestamp: 1637102187,
          true_heading: 1,
          special_maneuvre_indicator: "not engaged in special maneuver",
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a minimal position DeviceMeasurementEntry should succeed", () => {
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
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a full position DeviceMeasurementEntry should succeed", () => {
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
          number_of_satellites: 1,
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a minimal numeric DeviceMeasurementEntry should succeed", () => {
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
          value: 1.1,
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a minimal trawl tension DeviceMeasurementEntry should succeed", () => {
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
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a full trawl tension DeviceMeasurementEntry should succeed", () => {
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
          drum_rotations_starboard: 1.1,
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a scale DeviceMeasurementEntry with supported fish species should succeed", () => {
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
          product: "ANF",
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a scale DeviceMeasurementEntry with new fish species should succeed", () => {
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
          product: "AAA",
        },
      },
    };
    const measurementEntry = new DeviceMeasurementEntry(data);
    const validationErrors = measurementEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
