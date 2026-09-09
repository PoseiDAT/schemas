import { join } from 'path';
import { emitJsonSchema } from './emit-json-schema';

const SRC_SCHEMA = join(process.cwd(), 'src', 'schema');

export const generateSrcSchema = (): void => {
  emitJsonSchema({
    target: 'draft-2020-12',
    outDir: SRC_SCHEMA,
  });
};

if (require.main === module) {
  generateSrcSchema();
}
