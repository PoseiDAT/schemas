import { BaseEntry } from './base-entry';
import { schemas } from './schema';
import { INavigationPosition } from './schema/types';

export class NavigationPosition extends BaseEntry {
  constructor(
    public data: INavigationPosition,
  ) {
    super(data, schemas.navigationPosition);
  }
}
