import { join } from 'path';
import { emitJsonSchema } from './emit-json-schema';

const SRC_SCHEMA = join(process.cwd(), 'src', 'schema');

/**
 * Normal build path: emit JSON Schema 2020-12 into src/schema from Zod.
 * Replaces the previous tree; npm run build / npm test call this via build:schema.
 */
export const generateSrcSchema = (): void => {
  emitJsonSchema({
    target: 'draft-2020-12',
    outDir: SRC_SCHEMA,
  });
};

if (require.main === module) {
  generateSrcSchema();
}
