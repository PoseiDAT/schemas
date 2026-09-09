import { existsSync, readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import Ajv, { AnySchemaObject, ErrorObject } from 'ajv';
import Ajv2020 from 'ajv/dist/2020';
import AjvFormats from 'ajv-formats';
import AjvKeywords from 'ajv-keywords';

// JSON import of the draft-07 meta-schema is rejected by this repo's rootDir=src tsconfig.
// eslint-disable-next-line @typescript-eslint/no-require-imports
const draft7MetaSchema = require('ajv/dist/refs/json-schema-draft-07.json') as AnySchemaObject;

export type SchemaDialect = 'draft-07' | '2020-12';

export type SchemaValidationResult = {
  valid: boolean;
  errors: ErrorObject[];
};

export type SchemaSuite = {
  name: string;
  dialect: SchemaDialect;
  hasSchema: (schemaId: string) => boolean;
  validate: (schemaId: string, data: unknown) => SchemaValidationResult;
};

export const CURRENT_SCHEMA_DIR = join(process.cwd(), 'src', 'schema');
export const GENERATED_2020_12_DIR = join(process.cwd(), 'generated', 'json-schema', '2020-12');
export const GENERATED_DRAFT_07_DIR = join(process.cwd(), 'generated', 'json-schema', 'draft-07');

const ajvOptions = {
  $data: true,
  allErrors: true,
  strict: false as const,
};

const listJsonFiles = (dir: string): string[] => {
  const files: string[] = [];

  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listJsonFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.json')) {
      files.push(fullPath);
    }
  }

  return files;
};

export const schemaDirReady = (dir: string): boolean => {
  if (!existsSync(dir) || !statSync(dir).isDirectory()) {
    return false;
  }

  return listJsonFiles(dir).length > 0;
};

const createAjv = (dialect: SchemaDialect): Ajv => {
  const ajv = dialect === '2020-12'
    ? new Ajv2020(ajvOptions)
    : new Ajv(ajvOptions);

  if (dialect === '2020-12' && !ajv.getSchema('http://json-schema.org/draft-07/schema#')) {
    ajv.addMetaSchema(draft7MetaSchema);
  }

  AjvFormats(ajv);
  AjvKeywords(ajv);

  return ajv as Ajv;
};

const loadSchemas = (ajv: Ajv, schemaDir: string): void => {
  for (const file of listJsonFiles(schemaDir)) {
    const schema = JSON.parse(readFileSync(file, 'utf8')) as { $id?: unknown };
    if (typeof schema.$id !== 'string' || schema.$id.length === 0) {
      throw new Error(`JSON Schema file is missing $id: ${file}`);
    }
    ajv.addSchema(schema as AnySchemaObject);
  }
};

export const createSchemaSuite = (
  {
    name,
    schemaDir,
    dialect,
  }:
  {
    name: string;
    schemaDir: string;
    dialect: SchemaDialect;
  },
): SchemaSuite => {
  if (!schemaDirReady(schemaDir)) {
    throw new Error(`Schema directory is not ready for suite "${name}": ${schemaDir}`);
  }

  const ajv = createAjv(dialect);
  loadSchemas(ajv, schemaDir);

  return {
    name,
    dialect,
    hasSchema: (schemaId: string) => Boolean(ajv.getSchema(schemaId)),
    validate: (schemaId: string, data: unknown): SchemaValidationResult => {
      const validate = ajv.getSchema(schemaId);
      if (!validate) {
        throw new Error(`Schema ${schemaId} is not loaded in suite "${name}"`);
      }

      const valid = Boolean(validate(JSON.parse(JSON.stringify(data))));
      return {
        valid,
        errors: validate.errors ? [...validate.errors] : [],
      };
    },
  };
};
