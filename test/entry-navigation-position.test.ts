import { INavigationPosition } from '../src/schema/types';
import { NavigationPosition } from '../src/index';

describe('NavigationPosition', () => {

  test('NavigationPosition needs to be defined', () => {
    expect(NavigationPosition).toBeDefined();
  });

  test('Create an empty NavigationPosition', () => {
    const baseEntry = new NavigationPosition({} as INavigationPosition);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty NavigationPosition should fail', () => {
    const baseEntry = new NavigationPosition({} as INavigationPosition);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });
});
