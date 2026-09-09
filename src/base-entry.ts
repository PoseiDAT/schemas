import * as z from "zod";
import { ICoreBaseEntry } from "./schema-types";
import { validateSchema, ValidationIssue } from "./schema-validator";
import { baseEntrySchema } from "./validators/core/base-entry";

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
    protected schema: z.ZodType = baseEntrySchema,
    entryType = "base-entry",
  ) {
    this.data.entry_type = entryType;
  }

  /**
   * Validates the current Entry data against the core schema
   *
   * @returns {ValidationIssue[]}
   */
  public validate(): ValidationIssue[] {
    return validateSchema({ object: this.data, schema: this.schema });
  }
}
