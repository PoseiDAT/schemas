import Ajv, { ErrorObject } from 'ajv';
import AjvFormats from 'ajv-formats';
import AjvKeywords from 'ajv-keywords';
import { JSONSchema7 } from 'json-schema';
import { schemas } from './schemas';
import { ICoreBaseEntry, ICoreJournal } from './schema-types';

// We will pre-load all the Journal related schemas into our validator
// We need to take namespaces into account (core.equipment, etc)
// Extracting schemas can be done by looking for presence of $schema property
//
const findSchemas = (schemaSection: Record<string, unknown>[]) => {
  const schemas = schemaSection.filter(schema => schema.$schema !== undefined);
  const namespaces = schemaSection.filter(schema => schema.$schema === undefined);

  // Recursively check namespace children
  //
  for ( const namespace of namespaces ) {
    schemas.push(...findSchemas(Object.values(namespace) as Record<string, unknown>[] ));
  }

  return schemas;
}

const jsonSchemas = findSchemas(Object.values(schemas));

// Our validator instance
//
const validator = new Ajv({
  $data: true,
  allErrors: true,
  schemas: jsonSchemas,
});

// Extend AJV with formats and keyword validation
//
AjvFormats(validator);
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
): ErrorObject[] {
  const validate = validator.compile(schema);
  validate(object);
  return validate.errors || [];
}