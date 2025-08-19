#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const {
  ensureDir,
  walk,
  detectLangFromFilename,
  parseResxFile,
  normalizeForIndex,
} = require('./utils');

function buildIndex(resxRoot) {
  const files = walk(resxRoot, f => f.toLowerCase().endsWith('.resx'));
  const byFamilyKey = {}; // family -> key -> lang -> value
  const englishValueToPairs = {}; // normalized EN value -> [{ family, key }]

  for (const file of files) {
    const lang = detectLangFromFilename(file);
    const family = path.basename(file).replace(/\.[a-z]{2}(?:-[A-Z]{2})?\.resx$/,'').replace(/\.resx$/,'');
    const entries = parseResxFile(file);
    for (const { key, value } of entries) {
      if (!key) continue;
      byFamilyKey[family] = byFamilyKey[family] || {};
      byFamilyKey[family][key] = byFamilyKey[family][key] || {};
      byFamilyKey[family][key][lang] = value;
      if (lang === 'en') {
        const norm = normalizeForIndex(value);
        if (!englishValueToPairs[norm]) englishValueToPairs[norm] = [];
        englishValueToPairs[norm].push({ family, key });
      }
    }
  }

  return { byFamilyKey, englishValueToPairs };
}

function main() {
  const resxRoot = process.argv[2] || 'D:/Work/Gitea/www/Web/App_GlobalResources';
  const outDir = process.argv[3] || path.join(__dirname, '.cache');
  ensureDir(outDir);
  const outFile = path.join(outDir, 'resx-index.json');
  const idx = buildIndex(resxRoot);
  fs.writeFileSync(outFile, JSON.stringify(idx, null, 2), 'utf8');
  console.log(`Index written: ${outFile}`);
}

if (require.main === module) main();

module.exports = { buildIndex };
