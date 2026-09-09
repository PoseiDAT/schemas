import { join } from 'path';
import { emitJsonSchema } from './emit-json-schema';

const ROOT = join(process.cwd(), 'generated', 'json-schema');

/**
 * CI/CD helper: emit both JSON Schema dialects under generated/json-schema/.
 * Writes draft-07 and 2020-12 trees for release artefacts (gitignored locally).
 */
export const generateJsonSchema = (outputRoot = ROOT): void => {
  emitJsonSchema({
    target: 'draft-07',
    outDir: join(outputRoot, 'draft-07'),
  });
  emitJsonSchema({
    target: 'draft-2020-12',
    outDir: join(outputRoot, '2020-12'),
  });
};

if (require.main === module) {
  generateJsonSchema();
}
