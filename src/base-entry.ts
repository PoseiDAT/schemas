import ajv from 'ajv';
import { ICoreSchemaBaseEntry } from './core-schema/types';
import { validateSchema } from './schema-validator';
import { schemas } from './core-schema';

/**
 * Convenience class for constructing and validating an Entry
 * Can be extended by other entry classes to reuse validation logic
 *
 * @export
 * @class BaseEntry
 */
export class BaseEntry {

  /**
   * Creates an instance of Entry
   *
   * @param {ICoreSchemaBaseEntry} [data={}] The data to initialize the Entry with
   */
  constructor(
    public data: ICoreSchemaBaseEntry,
    protected schema = schemas.baseEntry,
  ) {}

  /**
   * Validates the current Entry data against the core schema
   *
   * @returns {ajv.ErrorObject[]}
   */
  public validate(): ajv.ErrorObject[] {
    return validateSchema( { object: this.data, schema: this.schema } );
  }
}
