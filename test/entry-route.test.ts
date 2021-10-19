import { v4 } from 'uuid';
import { RouteEntry } from '../src/index';
import { ICoreRouteWaypoint, IEntryRoute } from '../src/schema-types';

describe('RouteEntry', () => {

  test('RouteEntry needs to be defined', () => {
    expect(RouteEntry).toBeDefined();
  });

  test('Create an empty RouteEntry', () => {
    const baseEntry = new RouteEntry({} as IEntryRoute);
    expect(baseEntry).toBeDefined();
  });

  test('Validating an empty RouteEntry should fail', () => {
    const baseEntry = new RouteEntry({} as IEntryRoute);

    const validationErrors = baseEntry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toBeGreaterThan(0);
  });

  test('Validating a minimal RouteEntry should succeed', () => {
    const data: IEntryRoute =
      {
        entry_id: v4(),
        journal_id: v4(),
        entry_type: "route",
        revision: "2021-01-01T01:00:00z",
        immutable: false,
        name: "testroute",
        waypoints: [
          {
            id: 1,
            latitude: 52.468733,
            longitude: 4.582467
          },
          {
            id: 2,
            latitude: 52.464450,
            longitude: 4.557550
          }
        ]
    };

    const entry = new RouteEntry(data);

    const validationErrors = entry.validate();
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

});
