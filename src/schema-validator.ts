import Ajv from 'ajv';
import AjvKeywords from 'ajv-keywords';
import { JSONSchema7 } from 'json-schema';

const validator = new Ajv({
  $data: true,
  allErrors: true,
});

// Extend AJV with extra keyword validation
//
AjvKeywords(validator);

/**
 * Validate a single object with a provided schema
 *
 * @export
 * @param {*} object The object to validate
 * @param {*} schema The JSON schema to use for validation
 * @returns {Ajv.ErrorObject[]}
 */
export function validateSchema(
  {
    object,
    schema
  }:
  {
    object: Record<string, unknown>,
    schema: JSONSchema7
  }
): Ajv.ErrorObject[] {
  const validate = validator.compile(schema);
  validate(object);
  return validate.errors || [];
}
