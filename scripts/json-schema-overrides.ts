import type * as z from 'zod';
import {
  fishingCatchSchema,
  POSEIDAT_DATE_TIME_PATTERN,
  poseidatDate,
} from '../src/validators';

type JsonSchemaOverrideContext = Parameters<
  NonNullable<z.core.ToJSONSchemaParams['override']>
>[0];

export const jsonSchemaOverride = (
  ctx: JsonSchemaOverrideContext,
): void => {
  if (ctx.jsonSchema.format === 'date-time') {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'date-time';
    ctx.jsonSchema.pattern = POSEIDAT_DATE_TIME_PATTERN;
  }
  if (ctx.zodSchema === poseidatDate) {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'date';
    delete (ctx.jsonSchema as { pattern?: string }).pattern;
  }
  if (ctx.zodSchema === fishingCatchSchema) {
    ctx.jsonSchema.oneOf = [
      { required: ['weight'] },
      { required: ['number_of_fish'] },
    ];
  }
  if (ctx.jsonSchema.format === 'uuid') {
    ctx.jsonSchema.type = 'string';
    ctx.jsonSchema.format = 'uuid';
    delete (ctx.jsonSchema as { pattern?: string }).pattern;
  }
};
