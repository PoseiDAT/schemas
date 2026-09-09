import { mkdirSync, writeFileSync, rmSync } from "fs";
import { dirname, join } from "path";
import * as z from "zod";
import {
  POSEIDAT_DATE_TIME_PATTERN,
  poseidatDate,
  poseidatRegistry,
} from "../src/validators";
import "../src/validators";

const ORIGIN = "https://poseidat.org/schema/";
const ROOT = join(process.cwd(), "generated", "json-schema");

const dialects = [
  { dir: "draft-07", target: "draft-07" as const },
  { dir: "2020-12", target: "draft-2020-12" as const },
];

const pathFromId = (id: string): string => {
  if (!id.startsWith(ORIGIN)) {
    throw new Error(`Refusing to write schema with unexpected $id: ${id}`);
  }
  return id.slice(ORIGIN.length);
};

export const generateJsonSchema = (outputRoot = ROOT): void => {
  const generated = dialects.map((dialect) => {
    const result = z.toJSONSchema(poseidatRegistry, {
      target: dialect.target,
      uri: (id) => id,
      override: (ctx) => {
        if (ctx.jsonSchema.format === "date-time") {
          ctx.jsonSchema.type = "string";
          ctx.jsonSchema.format = "date-time";
          ctx.jsonSchema.pattern = POSEIDAT_DATE_TIME_PATTERN;
        }
        if (ctx.zodSchema === poseidatDate) {
          ctx.jsonSchema.type = "string";
          ctx.jsonSchema.format = "date";
          delete (ctx.jsonSchema as { pattern?: string }).pattern;
        }
        if (ctx.jsonSchema.format === "uuid") {
          ctx.jsonSchema.type = "string";
          ctx.jsonSchema.format = "uuid";
          delete (ctx.jsonSchema as { pattern?: string }).pattern;
        }
      },
    });

    const schemas = result.schemas as Record<string, { $id?: string }>;
    const files = Object.entries(schemas)
      .filter(([key]) => key !== "__shared")
      .map(([key, schema]) => ({
        rel: pathFromId(schema.$id ?? key),
        schema,
      }));

    return { dialect, files };
  });

  for (const { dialect, files } of generated) {
    const outRoot = join(outputRoot, dialect.dir);
    rmSync(outRoot, { recursive: true, force: true });

    for (const { rel, schema } of files) {
      const file = join(outRoot, rel);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, `${JSON.stringify(schema, null, 2)}\n`, "utf8");
    }
  }
};

if (require.main === module) {
  generateJsonSchema();
}
