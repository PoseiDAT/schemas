import {
  IAisMessageAidsToNavigationReport,
  IAisMessageBaseStationReport,
  IAisMessageBinaryOrSafetyBroadcast,
  IAisMessageBinaryOrSafetyMessage,
  IAisMessageChannelManagement,
  IAisMessageClassBPositionReport,
  IAisMessageDateInquiry,
  IAisMessageDateResponse,
  IAisMessageDgnssBroadcastMessage,
  IAisMessageExtendedClassBReport,
  IAisMessageGroupAssignmentCommand,
  IAisMessageInterrogation,
  IAisMessageLongRangeApplicationPositionReport,
  IAisMessagePositionReport,
  IAisMessageSarAircraftPositionReport,
  IAisMessageStaticDataReport,
  IAisMessageStaticVoyageData,
  IAisMessageTextPayloadMessage,
  IEntryAisMessage,
} from "./../src/schema-types";
import { AisMessageEntry } from "./../src/entry-ais-message";
import { v4 } from "uuid";

describe("AisMessageEntry", () => {
  test("AisMessageEntry needs to be defined", () => {
    expect(AisMessageEntry).toBeDefined();
  });

  test("Validating an empty AisMessageEntry should fail", () => {
    const aisEntry = new AisMessageEntry({} as IEntryAisMessage);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(5);
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
  });

  test("Validating a IAisMessagePositionReport should succeed", () => {
    const data: IAisMessagePositionReport = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      ais_message_type: "POSITION_REPORT",
      repeat_indicator: 3,
      position: {
        latitude: 1.1,
        longitude: 1.1,
        speed_over_ground: 3.3,
        course_made_good: 3.3,
      },
      position_accuracy: "LOW",
      rate_of_turn: -128,
      true_heading: 3,
      raim_flag: "RAIM_IN_USE",
      special_maneuvre_indicator: "ENGAGED_IN_SPECIAL_MANEUVER",
      communication_state: 0,
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessagePositionReport should succeed", () => {
    const data: IAisMessageBaseStationReport = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      ais_message_type: "BASE_STATION_REPORT",
      repeat_indicator: 3,
      position: {
        latitude: 1.1,
        longitude: 1.1,
        speed_over_ground: 3.3,
        course_made_good: 3.3,
      },
      position_accuracy: "LOW",
      position_device_type: "GLONASS",
      control_long_range_message: "REQUEST_TRANSMISSION_MESSAGE_27",
      raim_flag: "RAIM_IN_USE",
      communication_state: 0,
      priority: 1,
      nav_status: "UNDEFINED",
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessagePositionReport should succeed", () => {
    const data: IAisMessageStaticVoyageData = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      ais_message_type: "STATIC_AND_VOYAGE_DATA",
      repeat_indicator: 3,
      ais_version_indicator: "COMPLIANT_WITH_ITU_R_M_1371_1",
      imo_number: "0001000001",
      callsign: "UK-999",
      entity_name: "BOAT",
      ship_type: "NOT_AVAILABLE",
      eta: "2020-01-01T00:00:00Z",
      max_draught: 0,
      destination: "URK",
      dte: "NOT_AVAILABLE",
      dimension_to_bow: 1,
      dimension_to_stern: 1,
      dimension_to_port: 1,
      dimension_to_starboard: 1,
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageBinaryOrSafetyMessage should succeed", () => {
    const data: IAisMessageBinaryOrSafetyMessage = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      ais_message_type: "BINARY_OR_SAFETY_MESSAGE",
      sequence_number: 0,
      destination_id: 0,
      repeat_indicator: 0,
      message_text: "011010000110111101101001",
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageTextPayloadMessage should succeed", () => {
    const data: IAisMessageTextPayloadMessage = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      ais_message_type: "BINARY_ACKNOWLEDGEMENT",
      payload: "011010000110111101101001",
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageBinaryOrSafetyBroadcast should succeed", () => {
    const data: IAisMessageBinaryOrSafetyBroadcast = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      ais_message_type: "BINARY_OR_SAFETY_BROADCAST",
      repeat_indicator: 0,
      message_text_array: ["011010000110111101101001"],
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageSarAircraftPositionReport should succeed", () => {
    const data: IAisMessageSarAircraftPositionReport = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      ais_message_type: "SAR_AIRCRAFT_POSITION_REPORT",
      position: {
        latitude: 1.1,
        longitude: 1.1,
        speed_over_ground: 3.3,
        course_made_good: 3.3,
      },
      position_accuracy: "LOW",
      altitude: 1.1,
      altitude_sensor: "GNSS",
      data_terminal_equipment: "AVAILABLE",
      assigned_mode_flag: "AUTONOMOUS_CONTINUOUS_MODE",
      raim_flag: "RAIM_NOT_IN_USE",
      communication_state_selected: "SOTDMA",
      communication_state: 1,
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageDateInquiry should succeed", () => {
    const data: IAisMessageDateInquiry = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      ais_message_type: "UTC_DATE_INQUIRY",
      destination_id: 0,
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageDateResponse should succeed", () => {
    const data: IAisMessageDateResponse = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      ais_message_type: "UTC_DATE_RESPONSE",
      date_time_response: "2020-01-01T00:00:00Z",
      position: {
        latitude: 1.1,
        longitude: 1.1,
        speed_over_ground: 3.3,
        course_made_good: 3.3,
      },
      position_accuracy: "LOW",
      position_device_type: "UNDEFINED",
      control_long_range_message: "STOP_TRANSMISSION_MESSAGE_27",
      raim_flag: "RAIM_NOT_IN_USE",
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageInterrogation should succeed", () => {
    const data: IAisMessageInterrogation = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      ais_message_type: "INTERROGATION",
      requested_message_type: ["POSITION_REPORT"],
      destination_ids: [1],
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageInterrogation should succeed", () => {
    const data: IAisMessageInterrogation = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      ais_message_type: "INTERROGATION",
      requested_message_type: ["POSITION_REPORT"],
      destination_ids: [1],
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageDgnssBroadcastMessage should succeed", () => {
    const data: IAisMessageDgnssBroadcastMessage = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      ais_message_type: "DGNSS_BROADCAST_MESSAGE",
      position: {
        latitude: 1.1,
        longitude: 1.1,
      },
      priority: 1,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageClassBPositionReport should succeed", () => {
    const data: IAisMessageClassBPositionReport = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      priority: 1,
      ais_message_type: "CLASS_B_EQUIPMENT_POSITION_REPORT",
      position: {
        latitude: 1.1,
        longitude: 1.1,
        speed_over_ground: 3.3,
        course_made_good: 3.3,
      },
      position_accuracy: "LOW",
      true_heading: 0,
      unit_flag: "CS",
      display_flag: "NO_DISPLAY",
      dsc_flag: "NO_DSC_FUNCTION",
      band_flag: "CAPABLE_OPERATING_525_OVER_KHZ",
      message_flag: "NO_FREQUENCY_VIA_MESSAGE_22",
      assigned_mode_flag: "AUTONOMOUS_CONTINUOUS_MODE",
      raim_flag: "RAIM_NOT_IN_USE",
      communication_state_selected: "SOTDMA",
      communication_state: 0,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageExtendedClassBReport should succeed", () => {
    const data: IAisMessageExtendedClassBReport = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      priority: 1,
      ais_message_type: "CLASS_B_EQUIPMENT_POSITION_REPORT",
      position: {
        latitude: 1.1,
        longitude: 1.1,
        speed_over_ground: 3.3,
        course_made_good: 3.3,
      },
      position_accuracy: "LOW",
      true_heading: 0,
      entity_name: "UK-199",
      ship_type: "NOT_AVAILABLE",
      dimension_to_bow: 0,
      dimension_to_stern: 0,
      dimension_to_port: 0,
      dimension_to_starboard: 0,
      position_device_type: "UNDEFINED",
      assigned_mode_flag: "AUTONOMOUS_CONTINUOUS_MODE",
      raim_flag: "RAIM_NOT_IN_USE",
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageAidsToNavigationReport should succeed", () => {
    const data: IAisMessageAidsToNavigationReport = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      priority: 1,
      ais_message_type: "AIDS_TO_NAVIGATION_REPORT",
      position: {
        latitude: 1.1,
        longitude: 1.1,
        speed_over_ground: 3.3,
        course_made_good: 3.3,
      },
      position_accuracy: "LOW",
      raim_flag: "RAIM_NOT_IN_USE",
      aid_type: "NOT_AVAILABLE",
      aid_name_extension: "TEXT",
      dimension_to_bow: 0,
      dimension_to_stern: 0,
      dimension_to_port: 0,
      dimension_to_starboard: 0,
      aton_status: "00000000",
      off_position_indicator: "ON_POSITION",
      virtual_aton_flag: "REAL_ATON",
      entity_name: "NAME",
      position_device_type: "UNDEFINED",
      assigned_mode_flag: "AUTONOMOUS_CONTINUOUS_MODE",
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageChannelManagement should succeed", () => {
    const data: IAisMessageChannelManagement = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      priority: 1,
      ais_message_type: "CHANNEL_MANAGEMENT",
      channel_a_frequency: 161.975,
      channel_b_frequency: 162.025,
      channel_a_bandwidth: 25,
      channel_b_bandwidth: 25,
      power: "HIGH",
      north_east_longtitude: 0,
      north_east_latitude: 0,
      south_west_longtitude: 0,
      south_west_latitude: 0,
      zone_size: 0,
      addressed_or_broadcast: "BROADCAST",
      transmit_receive_mode: "TXA_AND_TXB_OR_RXA_AND_RXB",
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageStaticDataReport should succeed", () => {
    const data: IAisMessageGroupAssignmentCommand = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      priority: 1,
      ais_message_type: "GROUP_ASSIGNMENT_COMMAND",
      north_east_longtitude: 0,
      north_east_latitude: 0,
      south_west_longtitude: 0,
      south_west_latitude: 0,
      transmit_receive_mode: "TXA_AND_TXB_OR_RXA_AND_RXB",
      quiet_time: 0,
      ship_type: "NOT_AVAILABLE",
      station_type: "",
      report_interval: 0,
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageStaticDataReport should succeed", () => {
    const data: IAisMessageStaticDataReport = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      priority: 1,
      ais_message_type: "STATIC_DATA_REPORT",
      callsign: "@@@@@",
      vendor_id: "@@@@@",
      entity_name: "@@@@@@@@@@@@@@@",
      dimension_to_bow: 0,
      dimension_to_stern: 0,
      dimension_to_port: 0,
      dimension_to_starboard: 0,
      position_device_type: "UNDEFINED",
      ship_type: "NOT_AVAILABLE",
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test("Validating a IAisMessageLongRangeApplicationPositionReport should succeed", () => {
    const data: IAisMessageLongRangeApplicationPositionReport = {
      journal_id: v4(),
      entry_id: v4(),
      revision: "2020-01-01T00:00:00Z",
      immutable: false,
      entry_type: "ais-message",
      device_id: v4(),
      entity_id: 1,
      repeat_indicator: 0,
      priority: 1,
      ais_message_type: "LONG_RANGE_APPLICATION_POSITION_REPORT",
      nav_status: "UNDER_WAY_USING_ENGINE",
      position: {
        latitude: 1.1,
        longitude: 1.1,
        speed_over_ground: 3.3,
        course_made_good: 3.3,
      },
      position_accuracy: "LOW",
      raim_flag: "RAIM_NOT_IN_USE",
      position_latency: "LESS_THAN_5_SECONDS",
    };
    const aisEntry = new AisMessageEntry(data);
    const validationErrors = aisEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });
});
