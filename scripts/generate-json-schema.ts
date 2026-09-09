import { join } from 'path';
import { emitJsonSchema } from './emit-json-schema';

const ROOT = join(process.cwd(), 'generated', 'json-schema');

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
