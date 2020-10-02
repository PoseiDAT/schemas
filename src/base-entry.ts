import ajv from 'ajv';
import { IBaseEntry } from './core-schema/types';
import { validateSchema } from './schema-validator';
import { schemas } from './core-schema';

/**
 * Convenience class for constructing and validating a Entry
 *
 * @export
 * @class BaseEntry
 */
export class BaseEntry {

  /**
   * Creates an instance of Entry
   *
   * @param {IBaseEntry} [data={}] The data to initialize the Entry with
   */
  constructor( public data: IBaseEntry ) {}

  /**
   * Validates the current Entry data against the core schema
   *
   * @returns {ajv.ErrorObject[]}
   */
  public validate(): ajv.ErrorObject[] {
    return validateSchema( { object: this.data, schema: schemas.baseEntry } );
  }
}
