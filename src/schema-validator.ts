import Ajv from 'ajv';
import AjvKeywords from 'ajv-keywords';
import { JSONSchema7 } from 'json-schema';
import { schemas } from './schema';
import { ICoreBaseEntry, ICoreJournal } from './schema/types';

// We will pre-load all the Journal related schemas into our validator
//
const jsonSchemas = [];
for (const [, schemaSection] of Object.entries(schemas)) {
  for (const [, schema] of Object.entries(schemaSection)) {
    jsonSchemas.push(schema);
  }
}

// Our validator instance
//
const validator = new Ajv({
  $data: true,
  allErrors: true,
  schemas: jsonSchemas,
});

// Extend AJV with extra keyword validation
//
AjvKeywords(validator);

/**
 * Validate a single object with a provided schema
 *
 * @export
 * @param {*} object The object to validate
 * @param {*} schema The JSON schema to use for validation. Defaults to journal schema
 * @returns {Ajv.ErrorObject[]}
 */
export function validateSchema(
  {
    object,
    schema
  }:
  {
    object: Record<string, unknown>|ICoreJournal|ICoreBaseEntry,
    schema: JSONSchema7
  }
): Ajv.ErrorObject[] {
  const validate = validator.compile(schema);
  validate(object);
  return validate.errors || [];
}
