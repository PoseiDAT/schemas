import * as z from 'zod';

// Case-insensitive RFC3339 date-time, including lowercase z. Matches AJV format: date-time
// closely enough for PoseiDAT fixtures (offset required, seconds required).
const DATE_TIME =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:z|Z|[+-]\d{2}:\d{2})$/;

const DATE = /^\d{4}-\d{2}-\d{2}$/;

export const poseidatDateTime = z.string().regex(DATE_TIME).meta({
  format: 'date-time',
});

export const poseidatDate = z.string().regex(DATE).meta({
  format: 'date',
});

// AJV `format: uuid` accepts any hex UUID shape, not only RFC version/variant nibbles.
const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const poseidatUuid = z.string().regex(UUID).meta({
  format: 'uuid',
});
