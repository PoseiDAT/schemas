import * as z from 'zod';

export const POSEIDAT_SCHEMA_ORIGIN = 'https://poseidat.org/schema';

export const poseidatRegistry = z.registry<{
  id: string;
  title?: string;
  description?: string;
}>();

export const poseidatId = (relativePath: string): string =>
  `${POSEIDAT_SCHEMA_ORIGIN}/${relativePath}`;

export const registerSchema = <T extends z.ZodType>(
  schema: T,
  meta: { id: string; title: string; description: string },
): T => {
  const withMeta = schema.meta(meta) as T;
  poseidatRegistry.add(withMeta, meta);
  return withMeta;
};
