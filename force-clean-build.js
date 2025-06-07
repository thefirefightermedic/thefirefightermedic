#!/usr/bin/env node
/**
 * Force Clean Build Script
 * Completely invalidates all cached bundles and assets
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CLEAN_BUILD_ID = `CLEAN_BUILD_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

console.log(`🧹 Force clean build with ID: ${CLEAN_BUILD_ID}`);

// Update package.json to force npm cache invalidation
const packagePath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

if (!packageJson.buildId) {
  packageJson.buildId = CLEAN_BUILD_ID;
} else {
  packageJson.buildId = CLEAN_BUILD_ID;
}

fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));

// Create cache buster file
const cacheBusterPath = path.join(__dirname, 'client/src/cache-buster.ts');
const cacheBusterContent = `// Auto-generated cache buster - DO NOT EDIT
export const BUILD_ID = "${CLEAN_BUILD_ID}";
export const CACHE_VERSION = "${Date.now()}";
console.log("Cache buster active:", BUILD_ID);
`;

fs.writeFileSync(cacheBusterPath, cacheBusterContent);

console.log('✅ Cache invalidation files updated');
console.log('🚀 Ready for deployment with fresh bundle hash');