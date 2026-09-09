import { SchemaId } from "./schema-ids";
import { schemaFixtures } from "./fixtures";
import * as zodSchemas from "../../src/validators";
import { zodBySchemaId } from "../../src/validators/by-id";
import {
  CURRENT_SCHEMA_DIR,
  createSchemaSuite,
} from "./ajv-suite";

describe("Published JSON Schema behaviour (AJV 2020-12 on src/schema)", () => {
  const published = createSchemaSuite({
    name: "src-schema",
    schemaDir: CURRENT_SCHEMA_DIR,
    dialect: "2020-12",
  });

  test("loads every published schema id used by the fixtures", () => {
    for (const schemaId of Object.values(SchemaId)) {
      expect(published.hasSchema(schemaId)).toBe(true);
    }
  });

  test.each(schemaFixtures)("$name", (fixture) => {
    const result = published.validate(fixture.schemaId, fixture.data);
    expect({
      name: fixture.name,
      valid: result.valid,
    }).toEqual({
      name: fixture.name,
      valid: fixture.valid,
    });
  });
});

describe("Zod and published JSON Schema agree", () => {
  const published = createSchemaSuite({
    name: "src-schema",
    schemaDir: CURRENT_SCHEMA_DIR,
    dialect: "2020-12",
  });

  test("loads the public Zod schema barrel", () => {
    expect(Object.values(zodSchemas)).toEqual(
      expect.arrayContaining(Object.values(zodBySchemaId)),
    );
  });

  test.each(schemaFixtures)("$name", (fixture) => {
    const ajvOk = published.validate(fixture.schemaId, fixture.data).valid;
    const zodOk = zodBySchemaId[fixture.schemaId].safeParse(
      fixture.data,
    ).success;

    expect({
      name: fixture.name,
      ajv: ajvOk,
      zod: zodOk,
    }).toEqual({
      name: fixture.name,
      ajv: fixture.valid,
      zod: fixture.valid,
    });
  });
});
