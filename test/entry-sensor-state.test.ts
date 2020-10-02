import { ISensorState } from '../src/core-schema/types';
import { SensorState } from '../src/index';

describe('SensorState', () => {

  test('SensorState needs to be defined', () => {
    expect(SensorState).toBeDefined();
  });

  test('Create an empty SensorState', () => {
    const baseEntry = new SensorState({} as ISensorState);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty SensorState should fail', () => {
    const baseEntry = new SensorState({} as ISensorState);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });
});
