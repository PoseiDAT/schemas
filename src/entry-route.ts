import { BaseEntry } from './base-entry';
import { schemas } from './schemas';
import { IEntryRoute } from './schema-types';

export class RouteEntry extends BaseEntry {
  constructor(
    public data: IEntryRoute,
  ) {
    super(data, schemas.entry.route, 'route');
  }
}
