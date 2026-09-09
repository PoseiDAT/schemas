import { ICoreJournal } from './schema-types';
import { validateSchema, ValidationIssue } from './schema-validator';
import { journalSchema } from './zod/core/journal';

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
   * @returns {ValidationIssue[]}
   */
  public validate(): ValidationIssue[] {
    return validateSchema( { object: this.data, schema: journalSchema } );
  }
}
