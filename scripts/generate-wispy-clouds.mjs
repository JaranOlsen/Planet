import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const textureDir = path.resolve('Public/assets/textures');
const sourcePath = path.join(textureDir, 'clouds8k.webp');
const sourceBuffer = await readFile(sourcePath);
const sourceDataUrl = `data:image/webp;base64,${sourceBuffer.toString('base64')}`;

const specs = [
  { name: 'cloudsWispy8k.webp', width: 8192, height: 4096, quality: 0.88 },
  { name: 'cloudsWispy4k.webp', width: 4096, height: 2048, quality: 0.88 },
  { name: 'cloudsWispy1k.webp', width: 1024, height: 512, quality: 0.86 },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const results = await page.evaluate(async ({ sourceDataUrl, specs }) => {
  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function smoothstep(edge0, edge1, value) {
    const t = Math.min(Math.max((value - edge0) / (edge1 - edge0), 0), 1);
    return t * t * (3 - 2 * t);
  }

  function hash2(x, y, seed = 0) {
    let h = Math.imul(x + seed * 101, 374761393) ^ Math.imul(y + seed * 307, 668265263);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
  }

  function drawWrapped(ctx, image, x, y, width, height) {
    ctx.drawImage(image, x, y, width, height);
    ctx.drawImage(image, x + width, y, width, height);
    ctx.drawImage(image, x - width, y, width, height);
  }

  const image = await loadImage(sourceDataUrl);
  const outputs = [];

  for (const spec of specs) {
    const canvas = document.createElement('canvas');
    canvas.width = spec.width;
    canvas.height = spec.height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const offsetA = Math.round(spec.width * 0.37);
    const offsetB = Math.round(spec.width * 0.68);
    const blurA = Math.max(2, spec.width / 900);
    const blurB = Math.max(4, spec.width / 380);

    ctx.clearRect(0, 0, spec.width, spec.height);
    ctx.filter = `blur(${blurA}px) contrast(128%)`;
    drawWrapped(ctx, image, -offsetA, 0, spec.width, spec.height);
    ctx.globalCompositeOperation = 'screen';
    ctx.globalAlpha = 0.44;
    ctx.filter = `blur(${blurB}px) contrast(112%)`;
    drawWrapped(ctx, image, -offsetB, 0, spec.width, spec.height);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.filter = 'none';

    const imageData = ctx.getImageData(0, 0, spec.width, spec.height);
    const data = imageData.data;
    const width = spec.width;
    const height = spec.height;

    for (let y = 0; y < height; y += 1) {
      const yBlock = Math.floor(y / Math.max(4, height / 192));
      for (let x = 0; x < width; x += 1) {
        const i = (y * width + x) * 4;
        const lum = (data[i] * 0.22 + data[i + 1] * 0.52 + data[i + 2] * 0.26) / 255;
        const xBlock = Math.floor(x / Math.max(4, width / 384));
        const broadNoise = hash2(xBlock, yBlock, 11);
        const fineNoise = hash2(Math.floor(x / 5), Math.floor(y / 5), 23);
        const streak = 0.76 + broadNoise * 0.34;
        let alpha = smoothstep(0.28, 0.76, lum * streak);
        alpha = smoothstep(0.04, 0.96, alpha);
        alpha *= 0.64 + fineNoise * 0.32;
        alpha = alpha < 0.025 ? 0 : Math.min(alpha, 0.72);

        data[i] = 244;
        data[i + 1] = 248;
        data[i + 2] = 252;
        data[i + 3] = Math.round(alpha * 255);
      }
    }

    ctx.putImageData(imageData, 0, 0);
    const softened = document.createElement('canvas');
    softened.width = spec.width;
    softened.height = spec.height;
    const softCtx = softened.getContext('2d');
    softCtx.filter = `blur(${Math.max(0.7, spec.width / 4096)}px)`;
    softCtx.drawImage(canvas, 0, 0);
    ctx.clearRect(0, 0, spec.width, spec.height);
    ctx.drawImage(softened, 0, 0);
    outputs.push({
      name: spec.name,
      dataUrl: canvas.toDataURL('image/webp', spec.quality),
    });
  }

  return outputs;
}, { sourceDataUrl, specs });

await browser.close();

for (const result of results) {
  const base64 = result.dataUrl.slice(result.dataUrl.indexOf(',') + 1);
  await writeFile(path.join(textureDir, result.name), Buffer.from(base64, 'base64'));
  console.log(`wrote ${result.name}`);
}
