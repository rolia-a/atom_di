#!/usr/bin/env node
/**
 * Lossless image optimization. Converts PNGs in public/figma/product/ to
 * lossless WebP. Keeps originals if WebP turns out larger.
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const DIR = path.resolve(process.argv[2] || "public/figma/product");

const files = (await fs.readdir(DIR)).filter((f) => f.endsWith(".png"));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const inputPath = path.join(DIR, file);
  const outputPath = path.join(DIR, file.replace(/\.png$/, ".webp"));

  const beforeSize = (await fs.stat(inputPath)).size;
  totalBefore += beforeSize;

  // Lossless WebP at near-max effort
  await sharp(inputPath)
    .webp({ lossless: true, effort: 6, alphaQuality: 100 })
    .toFile(outputPath);

  const afterSize = (await fs.stat(outputPath)).size;

  if (afterSize >= beforeSize) {
    // WebP bigger — drop it, keep PNG
    await fs.unlink(outputPath);
    totalAfter += beforeSize;
    console.log(`= ${file.padEnd(28)} ${(beforeSize / 1024 / 1024).toFixed(1)} MB (kept PNG)`);
  } else {
    totalAfter += afterSize;
    const ratio = ((1 - afterSize / beforeSize) * 100).toFixed(0);
    console.log(
      `→ ${file.padEnd(28)} ${(beforeSize / 1024 / 1024).toFixed(1)} → ${(afterSize / 1024 / 1024).toFixed(1)} MB  (-${ratio}%)`
    );
  }
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(1)} → ${(totalAfter / 1024 / 1024).toFixed(1)} MB ` +
    `(-${((1 - totalAfter / totalBefore) * 100).toFixed(0)}%)`
);
