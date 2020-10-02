import { BaseEntry } from './base-entry';
import { schemas } from './core-schema';
import { INavigationPosition } from './core-schema/types';

export class NavigationPosition extends BaseEntry {
  constructor(
    public data: INavigationPosition,
  ) {
    super(data, schemas.navigationPosition);
  }
}
