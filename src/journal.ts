import { ErrorObject } from 'ajv';
import { schemas } from './schemas';
import { ICoreJournal } from './schema-types';
import { validateSchema } from './schema-validator';

/**
 * Convenience class for constructing and validating a Journal
 *
 * @export
 * @class Journal
 */
export class Journal {

  /**
   * Creates an instance of Journal
   *
   * @param {ICoreJournal} [data={}] The data to initialize the Journal with
   */
  constructor( public data: ICoreJournal ) {}

  /**
   * Validates the current Journal data against the core schema
   *
   * @returns {ajv.ErrorObject[]}
   */
  public validate(): ErrorObject[] {
    return validateSchema( { object: this.data, schema: schemas.core.journal } );
  }
}
