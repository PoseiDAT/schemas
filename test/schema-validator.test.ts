import { JSONSchema7 } from 'json-schema';
import { validateSchema } from '../src/index';

const minimalSchema: JSONSchema7 = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'https://poseidat.org/schema/unit-test.json',
  title: 'UnitTest',
  description: 'A minimal schema for unit testing purposes',
  properties: {
    test: {
      type: 'string',
      description: 'Any string value will do'
    }
  }
};

describe('Schema-validator', () => {

  test('Validate function needs to be defined', () => {
    expect(validateSchema).toBeDefined();
  });

  test('Validate a minimal JSON schema with valid data', () => {
    const testData = {
      test: "yes"
    };
    const validationErrors = validateSchema( { object: testData, schema: minimalSchema } );
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(0);
  });

  test('Validate a minimal JSON schema with invalid data', () => {
    const testData = {
      test: 0
    };
    const validationErrors = validateSchema( { object: testData, schema: minimalSchema } );
    expect(validationErrors).toBeDefined();
    expect(validationErrors.length).toEqual(1);
    expect(validationErrors[0].message).toEqual('should be string');
    expect(validationErrors[0].schemaPath).toEqual('#/properties/test/type');
    expect(validationErrors[0].dataPath).toEqual('/test');
  });
});
