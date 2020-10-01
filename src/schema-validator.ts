import Ajv from 'ajv';
import AjvKeywords from 'ajv-keywords';
import { JSONSchema7 } from 'json-schema';
import { schemas } from './core-schema';

// We will pre-load all the Journal related schemas into our validator
//
const jsonSchemas = [];
for (const [, schema] of Object.entries(schemas)) {
  jsonSchemas.push(schema);
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
    object: Record<string, unknown>,
    schema?: JSONSchema7
  }
): Ajv.ErrorObject[] {
  const validate = validator.compile(schema || schemas.journal);
  validate(object);
  return validate.errors || [];
}
