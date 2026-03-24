import { existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = fileURLToPath(new URL('../dist/', import.meta.url));

const filesToRemove = [
  'assets/textures/milkyway.psd',
  'assets/textures/milkyway.tiff',
  'assets/textures/milkyway2.webp',
  'assets/images/background/frostedGlass.png',
  'assets/images/background/frostedGlass.webp',
  'assets/images/background/frostedGlass2.png',
];

let removedCount = 0;

for (const relativePath of filesToRemove) {
  const targetPath = join(distDir, relativePath);
  if (!existsSync(targetPath)) continue;
  rmSync(targetPath, { force: true });
  removedCount += 1;
  console.log(`pruned ${relativePath}`);
}

console.log(`pruned ${removedCount} unused deploy asset${removedCount === 1 ? '' : 's'}`);
