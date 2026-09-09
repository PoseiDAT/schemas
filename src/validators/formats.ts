import * as z from 'zod';

export const POSEIDAT_DATE_TIME_PATTERN =
  '^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?(?:Z|[+-]\\d{2}:\\d{2})$';

const isRealCalendarDate = (value: string): boolean => {
  const datePart = value.split('T')[0];
  const [year, month, day] = datePart.split('-').map(Number);
  const utc = new Date(0);
  utc.setUTCHours(0, 0, 0, 0);
  utc.setUTCFullYear(year, month - 1, day);
  return (
    utc.getUTCFullYear() === year &&
    utc.getUTCMonth() === month - 1 &&
    utc.getUTCDate() === day
  );
};

export const poseidatDateTime = z.iso
  .datetime({ offset: true })
  .refine((value) => new RegExp(POSEIDAT_DATE_TIME_PATTERN).test(value), {
    message: 'Date-time must use uppercase T and Z or ±HH:MM',
  })
  .refine(isRealCalendarDate, { message: 'Date-time must be a real calendar date' })
  .meta({
    format: 'date-time',
    pattern: POSEIDAT_DATE_TIME_PATTERN,
  });

const DATE = /^\d{4}-\d{2}-\d{2}$/;

export const poseidatDate = z.string().regex(DATE).meta({
  format: 'date',
});

// AJV `format: uuid` accepts any hex UUID shape, not only RFC version/variant nibbles.
const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export const poseidatUuid = z.string().regex(UUID).meta({
  format: 'uuid',
});
