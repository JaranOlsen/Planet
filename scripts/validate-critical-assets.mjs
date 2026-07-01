import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const criticalAssets = [
  ['Public/assets/textures/diffuse16k.jpg', 10],
  ['Public/assets/textures/normal16k.jpg', 10],
  ['Public/assets/textures/roughness16k.jpg', 10],
  ['Public/assets/textures/diffuse8k.webp', 10],
  ['Public/assets/textures/normal8k.webp', 10],
  ['Public/assets/textures/roughness8k.webp', 10],
  ['Public/assets/textures/clouds8k.webp', 10],
  ['Public/assets/textures/clouds8kNormal.webp', 10],
  ['Public/assets/textures/milkyway.psd', 10],
  ['Public/assets/textures/milkyway.tiff', 10],
];

const errors = [];

criticalAssets.forEach(([assetPath, minSizeMb]) => {
  const absolutePath = path.join(repoRoot, assetPath);
  if (!fs.existsSync(absolutePath)) {
    errors.push(`Missing critical asset: ${assetPath}`);
    return;
  }

  const sizeMb = fs.statSync(absolutePath).size / 1024 / 1024;
  if (sizeMb < minSizeMb) {
    errors.push(`Critical asset is unexpectedly small: ${assetPath} (${sizeMb.toFixed(1)} MB)`);
  }
});

if (errors.length > 0) {
  console.error(errors.map((error) => `Error: ${error}`).join('\n'));
  process.exit(1);
}

console.log(`Critical asset validation passed (${criticalAssets.length} assets).`);
