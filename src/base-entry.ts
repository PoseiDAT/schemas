import ajv from 'ajv';
import { ICoreBaseEntry } from './schema/types';
import { validateSchema } from './schema-validator';
import { schemas } from './schema';

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
   * @param {ICoreBaseEntry} [data={}] The data to initialize the Entry with
   */
  constructor(
    public data: ICoreBaseEntry,
    protected schema = schemas.core.baseEntry,
    entryType = 'base-entry',
  ) {
    this.data.entry_type = entryType;
  }

  /**
   * Validates the current Entry data against the core schema
   *
   * @returns {ajv.ErrorObject[]}
   */
  public validate(): ajv.ErrorObject[] {
    return validateSchema( { object: this.data, schema: this.schema } );
  }
}
