#!/usr/bin/env node
/**
 * Generates responsive image variants for all project images.
 * Run: node scripts/generate-responsive-images.mjs
 *
 * Output sizes: 640w, 960w, 1280w (originals kept as-is for largest breakpoint)
 */

import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const PUBLIC_DIR = path.resolve('public');
const PROJECTS_DIR = path.join(PUBLIC_DIR, 'projects');
const WIDTHS = [640, 960, 1280];

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
    } else if (entry.name.endsWith('.webp') && !entry.name.match(/-\d+w\.webp$/)) {
      // Only process original files, skip already-generated variants
      files.push(fullPath);
    }
  }
  return files;
}

async function generateVariants(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);

  const metadata = await sharp(filePath).metadata();
  const originalWidth = metadata.width;

  for (const width of WIDTHS) {
    if (width >= originalWidth) continue; // Skip if target >= original

    const outPath = path.join(dir, `${base}-${width}w${ext}`);

    // Check if variant already exists and is up to date
    try {
      const srcStat = await stat(filePath);
      const dstStat = await stat(outPath);
      if (dstStat.mtimeMs >= srcStat.mtimeMs) {
        console.log(`  SKIP ${path.relative(PUBLIC_DIR, outPath)} (up to date)`);
        continue;
      }
    } catch {
      // File doesn't exist yet, generate it
    }

    await sharp(filePath)
      .resize(width)
      .webp({ quality: 80 })
      .toFile(outPath);

    console.log(`  DONE ${path.relative(PUBLIC_DIR, outPath)}`);
  }
}

async function main() {
  console.log('Generating responsive image variants...\n');

  const files = await getImageFiles(PROJECTS_DIR);
  console.log(`Found ${files.length} source images.\n`);

  for (const file of files) {
    console.log(`Processing ${path.relative(PUBLIC_DIR, file)}`);
    await generateVariants(file);
    console.log();
  }

  console.log('Done!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
