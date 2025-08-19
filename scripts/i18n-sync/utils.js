const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function walk(dir, filterFn = () => true, out = []) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) walk(full, filterFn, out);
    else if (filterFn(full)) out.push(full);
  }
  return out;
}

function detectLangFromFilename(file) {
  // Examples:
  // ConnectorOdooResource.resx -> en
  // ConnectorOdooResource.ru.resx -> ru
  // Resource.zh-CN.resx -> zh-CN
  const base = path.basename(file);
  const m = base.match(/\.([a-z]{2}(?:-[A-Z]{2})?)\.resx$/);
  return m ? m[1] : 'en';
}

function parseResxFile(file) {
  const xml = fs.readFileSync(file, 'utf8');
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
    trimValues: false,
    preserveOrder: false,
  });
  const json = parser.parse(xml);
  // .resx root is usually <root><data name="..."><value>...</value></data>...</root>
  const root = json.root || json;
  const data = Array.isArray(root.data) ? root.data : (root.data ? [root.data] : []);
  const entries = [];
  for (const d of data) {
    if (!d || !d.name) continue;
    const name = d.name;
    let value = '';
    if (d.value != null) value = typeof d.value === 'string' ? d.value : (d.value['#text'] || '');
    entries.push({ key: name, value });
  }
  return entries;
}

function normalizeValue(v) {
  if (v == null) return '';
  return String(v).replace(/\r\n/g, '\n').replace(/\s+/g, ' ').trim();
}

function toI18nPlaceholders(v) {
  if (!v) return v;
  // Handle special nested placeholders like in OdooHeader: {0} ... {1} ... {2} ... {3}
  // For this pattern, remove outer wrappers {0} and {3}, and map {1}->{<0>, {2}->{</0}
  if (v.includes('{0}') && v.includes('{1}') && v.includes('{2}') && v.includes('{3}')) {
    return v
      .replace(/\{0\}/g, '')
      .replace(/\{3\}/g, '')
      .replace(/\{1\}/g, '<0>')
      .replace(/\{2\}/g, '</0>');
  }
  // Default: Replace {0} -> <0>, {1} -> </0>
  return v.replace(/\{0\}/g, '<0>').replace(/\{1\}/g, '</0>');
}

// Strong, but safe normalization used for indexing and lookups.
// Does NOT remove punctuation or tags; only canonicalizes harmless unicode/spacing/quotes/dashes
// and applies placeholder normalization, then collapses whitespace.
function normalizeForIndex(v) {
  if (v == null) return '';
  let s = String(v);
  // First, bring placeholders to i18n form so sides match
  s = toI18nPlaceholders(s);
  // Unicode canonicalization
  try { s = s.normalize('NFKC'); } catch {}
  // Replace NBSP and zero-width chars
  s = s.replace(/\u00A0/g, ' ').replace(/[\u200B-\u200D\uFEFF]/g, '');
  // Normalize dashes to hyphen-minus
  s = s.replace(/[–—−]/g, '-');
  // Normalize quotes to straight equivalents
  s = s.replace(/[“”«»„‟]/g, '"').replace(/[’‚‛]/g, "'");
  // Normalize Windows newlines and collapse spaces
  s = s.replace(/\r\n/g, '\n');
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

module.exports = {
  ensureDir,
  walk,
  detectLangFromFilename,
  parseResxFile,
  normalizeValue,
  toI18nPlaceholders,
  normalizeForIndex,
};
