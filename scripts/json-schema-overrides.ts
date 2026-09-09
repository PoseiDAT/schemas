import type * as z from 'zod';
import {
  fishingCatchSchema,
  POSEIDAT_DATE_TIME_PATTERN,
  poseidatDate,
} from '../src/validators';

type JsonSchemaOverrideContext = Parameters<
  NonNullable<z.core.ToJSONSchemaParams['override']>
>[0];

/**
 * Adjusts Zod's JSON Schema output so AJV and Zod accept the same values.
 * Each branch fixes one known mismatch between z.toJSONSchema and PoseiDAT rules.
 */
export const jsonSchemaOverride = (
  ctx: JsonSchemaOverrideContext,
): void => {
  // Zod emits date-time without our strict pattern. AJV `format: date-time` alone
  // still allows lowercase z/t, offsets without a colon, and leap seconds (…:60).
  // Keep format for AJV's calendar checks, and add POSEIDAT_DATE_TIME_PATTERN so
  // JSON Schema matches Zod's uppercase T/Z, ±HH:MM, and seconds 00–59 rules.
  if (ctx.jsonSchema.format === 'date-time') {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'date-time';
    ctx.jsonSchema.pattern = POSEIDAT_DATE_TIME_PATTERN;
  }

  // Zod may emit a regex pattern for poseidatDate. AJV should use `format: date`
  // only (same as our Zod meta), so drop any generated pattern.
  if (ctx.zodSchema === poseidatDate) {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'date';
    delete (ctx.jsonSchema as { pattern?: string }).pattern;
  }

  // Zod stores fishing-catch XOR as a refine. z.toJSONSchema does not turn that
  // refine into JSON Schema, so both weight and number_of_fish would be optional.
  // Inject oneOf so AJV requires exactly one of those two keys, like Zod.
  if (ctx.zodSchema === fishingCatchSchema) {
    ctx.jsonSchema.oneOf = [
      { required: ['weight'] },
      { required: ['number_of_fish'] },
    ];
  }

  // Zod's UUID regex is stricter in the emitted pattern than AJV `format: uuid`.
  // We want AJV's hex UUID shape (any version/variant nibbles). Keep format: uuid
  // and remove the generated pattern so both sides match poseidatUuid.
  if (ctx.jsonSchema.format === 'uuid') {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'uuid';
    delete (ctx.jsonSchema as { pattern?: string }).pattern;
  }
};
