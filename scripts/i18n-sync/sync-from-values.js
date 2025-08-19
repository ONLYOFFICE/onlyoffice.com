#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { normalizeValue, toI18nPlaceholders, ensureDir, normalizeForIndex } = require('./utils');

function readJSON(p) { return JSON.parse(fs.readFileSync(p, 'utf8')); }

function orderedKeys(obj) { return Object.keys(obj); }

function buildValueToKeyMap(enJson) {
  // Map normalized EN value -> list of keys (in case of duplicates)
  const map = new Map();
  for (const k of orderedKeys(enJson)) {
    const v = normalizeForIndex(enJson[k]);
    if (!map.has(v)) map.set(v, []);
    map.get(v).push(k);
  }
  return map;
}

function findTranslationsForValue(index, enValue, targetLangs) {
  const pairs = index.englishValueToPairs[normalizeForIndex(enValue)] || [];
  const out = {};
  for (const lang of targetLangs) out[lang] = undefined;
  for (const { family, key } of pairs) {
    for (const lang of targetLangs) {
      const v = index.byFamilyKey?.[family]?.[key]?.[lang];
      if (v) {
        // Use normalization only for matching; output original with i18n placeholders preserved
        const vvOut = toI18nPlaceholders(v);
        out[lang] = out[lang] || vvOut; // first match wins
      }
    }
  }
  return out;
}

function findTranslationsByKeyAliases(index, keyAliases, targetLangs, enBaseline) {
  const out = {};
  for (const lang of targetLangs) out[lang] = undefined;
  if (!keyAliases || keyAliases.length === 0) return out;
  const baseline = normalizeForIndex(enBaseline || '');
  const baselineLoose = baseline.replace(/[.!?…]+$/u, '');
  // For each alias key, scan families and prefer those whose EN matches current EN baseline
  for (const aliasKey of keyAliases) {
    // First pass: matching EN
    for (const family of Object.keys(index.byFamilyKey || {})) {
      const fam = index.byFamilyKey[family];
      const entry = fam && fam[aliasKey];
      if (!entry) continue;
      const enNorm = normalizeForIndex(entry.en || '');
      const enLoose = enNorm.replace(/[.!?…]+$/u, '');
      const enMatch = (enNorm === baseline) || (enLoose === baselineLoose);
      if (!enMatch) continue;
      for (const lang of targetLangs) {
        if (!out[lang] && entry[lang]) {
          out[lang] = toI18nPlaceholders(entry[lang]);
        }
      }
    }
    // Second pass: any EN (fallback if nothing matched baseline)
    for (const family of Object.keys(index.byFamilyKey || {})) {
      const fam = index.byFamilyKey[family];
      const entry = fam && fam[aliasKey];
      if (!entry) continue;
      for (const lang of targetLangs) {
        if (!out[lang] && entry[lang]) {
          out[lang] = toI18nPlaceholders(entry[lang]);
        }
      }
    }
  }
  return out;
}

function main() {
  const enJsonPath = process.argv[2];
  const indexPath = process.argv[3] || path.join(__dirname, '.cache', 'resx-index.json');
  const localesRoot = process.argv[4] || path.join(process.cwd(), 'public', 'locales');
  const langsArg = process.argv[5] || 'de,fr,es,pt,it,ja,zh,sr,ru';
  const skipArg = process.argv[6] || 'nl,cs';

  if (!enJsonPath) {
    console.error('Usage: node sync-from-values.js <path-to-en-json> [indexPath] [localesRoot] [langs] [skipLangs]');
    process.exit(1);
  }

  const en = readJSON(enJsonPath);
  const index = readJSON(indexPath);
  // Optional aliases file
  const aliasesPath = path.join(path.dirname(__filename), 'aliases.json');
  let aliases = { byKey: {} };
  if (fs.existsSync(aliasesPath)) {
    try { aliases = readJSON(aliasesPath); } catch {}
  }
  const allKeys = orderedKeys(en);
  const valueToKey = buildValueToKeyMap(en);
  const fileName = path.basename(enJsonPath);

  const targetLangs = langsArg.split(',').map(s=>s.trim()).filter(Boolean);
  const skip = new Set(skipArg.split(',').map(s=>s.trim()).filter(Boolean));

  for (const lang of targetLangs) {
    if (skip.has(lang)) continue;
    const out = {};
    for (const k of allKeys) {
      const enVal = normalizeValue(toI18nPlaceholders(en[k]));
      // First, try aliases (per-file take precedence over global byKey)
      const perFileAliases = aliases.byFile?.[fileName]?.[k] || [];
      const keyAliases = [...perFileAliases, ...(aliases.byKey?.[k] || [])];
      let viaKey = findTranslationsByKeyAliases(index, keyAliases, [lang], enVal);
      let val = viaKey[lang];
      // If not found via aliases, fall back to english-value-based matching
      if (!val) {
        const found = findTranslationsForValue(index, enVal, [lang]);
        val = found[lang];
      }
      out[k] = val || en[k];
    }
    const targetDir = path.join(localesRoot, lang);
    ensureDir(targetDir);
    const targetFile = path.join(targetDir, path.basename(enJsonPath));
    fs.writeFileSync(targetFile, JSON.stringify(out, null, 2), 'utf8');
    console.log(`Wrote ${targetFile}`);
  }
}

if (require.main === module) main();
