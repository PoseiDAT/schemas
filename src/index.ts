import ajv from 'ajv';
import { validateSchema } from './schema-validator';
export { validateSchema } from './schema-validator';

/**
 * Convience class for constructing and validating a Journal
 *
 * @export
 * @class Journal
 */
export class Journal {

  /**
   * Creates an instance of Journal
   *
   * @param {Record<string, unknown>} [data={}] The data to initialize the Journal with
   */
  constructor( public data: Record<string, unknown> = {} ) {}

  /**
   * Validates the current Journal data against the core schema
   *
   * @returns {ajv.ErrorObject[]}
   */
  public validate(): ajv.ErrorObject[] {
    return validateSchema( { object: this.data } );
  }
}
