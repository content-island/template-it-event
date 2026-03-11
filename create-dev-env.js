import fs from 'node:fs';
import path from 'node:path';

const file = path.join(import.meta.dirname, '.env');
const exampleFile = path.join(import.meta.dirname, '.env-sample');

if (!fs.existsSync(file)) {
  fs.copyFileSync(exampleFile, file);
}