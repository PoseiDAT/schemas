import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "fs";
import { tmpdir } from "os";
import { join } from "path";
import * as z from "zod";
import { generateJsonSchema } from "../../scripts/generate-json-schema";
import { poseidatRegistry } from "../../src/validators";

describe("generateJsonSchema", () => {
  let outputRoot: string;

  beforeEach(() => {
    outputRoot = mkdtempSync(join(tmpdir(), "poseidat-json-schema-"));
  });

  afterEach(() => {
    rmSync(outputRoot, { recursive: true, force: true });
  });

  test("writes draft-07 and 2020-12 reason-arrival schemas with poseidat $id", () => {
    generateJsonSchema(outputRoot);
    for (const dialect of ["draft-07", "2020-12"]) {
      const file = join(outputRoot, dialect, "enum", "reason-arrival.json");
      const schema = JSON.parse(readFileSync(file, "utf8")) as {
        $id: string;
        enum: string[];
      };
      expect(schema.$id).toBe(
        "https://poseidat.org/schema/enum/reason-arrival.json",
      );
      expect(schema.enum).toContain("ECY");
    }
  });

  test("rejects a foreign $id before deleting output", () => {
    const draftOutput = join(outputRoot, "draft-07");
    const marker = join(draftOutput, "existing.json");
    mkdirSync(draftOutput, { recursive: true });
    writeFileSync(marker, "existing output", "utf8");

    const unexpectedSchema = z.string();
    poseidatRegistry.add(unexpectedSchema, {
      id: "https://example.com/unexpected.json",
      title: "Unexpected schema",
      description: "Schema with a non-Poseidat id",
    });

    try {
      expect(() => generateJsonSchema(outputRoot)).toThrow(
        "Refusing to write schema with unexpected $id: https://example.com/unexpected.json",
      );
      expect(readFileSync(marker, "utf8")).toBe("existing output");
    } finally {
      poseidatRegistry.remove(unexpectedSchema);
    }
  });
});
