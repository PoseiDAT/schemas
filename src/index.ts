import ajv from 'ajv';
import { IJournal } from './core-schema/types';
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
  constructor( public data: IJournal ) {}

  /**
   * Validates the current Journal data against the core schema
   *
   * @returns {ajv.ErrorObject[]}
   */
  public validate(): ajv.ErrorObject[] {
    return validateSchema( { object: this.data as unknown as Record<string, unknown> } );
  }
}
