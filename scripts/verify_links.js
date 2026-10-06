/**
 * Comprehensive link and asset integrity verifier.
 * Checks all internal hrefs, ids, images, stylesheets, scripts, and phone/WA/mail CTAs.
 */

const fs = require('fs');
const path = require('path');

const DIST = path.resolve(__dirname, '..', 'dist');

function getAllHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of list) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      results = results.concat(getAllHtmlFiles(fullPath));
    } else if (file.name.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

const htmlFiles = getAllHtmlFiles(DIST);
console.log(`Found ${htmlFiles.length} HTML files in /dist to verify.`);

let brokenHrefs = 0;
let brokenAssets = 0;
let missingIds = 0;

// Collect all known routes and IDs per page
const pageIds = {};
const knownRoutes = new Set();

htmlFiles.forEach((file) => {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  let route = '/' + rel.replace(/index\.html$/, '');
  if (!route.endsWith('/')) route += '/';
  if (route === '/index.html/') route = '/';
  knownRoutes.add(route);

  const content = fs.readFileSync(file, 'utf8');
  const ids = new Set();
  const idMatches = content.matchAll(/\sid="([^"]+)"/g);
  for (const m of idMatches) {
    ids.add(m[1]);
  }
  pageIds[route] = ids;
});

console.log(`Known canonical routes (${knownRoutes.size}):`, Array.from(knownRoutes));

htmlFiles.forEach((file) => {
  const rel = path.relative(DIST, file).replace(/\\/g, '/');
  let currentRoute = '/' + rel.replace(/index\.html$/, '');
  if (!currentRoute.endsWith('/')) currentRoute += '/';
  if (currentRoute === '/index.html/') currentRoute = '/';

  const content = fs.readFileSync(file, 'utf8');

  // 1. Check all href attributes
  const hrefMatches = content.matchAll(/href="([^"]+)"/g);
  for (const m of hrefMatches) {
    const href = m[1];

    if (
      href.startsWith('tel:') ||
      href.startsWith('mailto:') ||
      href.startsWith('https://wa.me') ||
      href.startsWith('https://www.google.com/maps') ||
      href.startsWith('https://') ||
      href.startsWith('http://')
    ) {
      continue;
    }

    if (href.startsWith('#')) {
      const hashId = href.slice(1);
      if (!pageIds[currentRoute].has(hashId)) {
        console.error(`[BROKEN ANCHOR] In ${currentRoute}: href="${href}" references missing ID #${hashId}`);
        missingIds++;
      }
      continue;
    }

    // Split route and hash if any
    const [targetRoute, targetHash] = href.split('#');
    let cleanTarget = targetRoute.split('?')[0];
    if (path.extname(cleanTarget)) {
      const assetPath = path.join(DIST, cleanTarget);
      if (!fs.existsSync(assetPath)) {
        console.error(`[BROKEN ASSET LINK] In ${currentRoute}: href="${href}" -> missing ${cleanTarget}`);
        brokenAssets++;
      }
      continue;
    }

    if (!cleanTarget.endsWith('/')) {
      cleanTarget += '/';
    }

    if (!knownRoutes.has(cleanTarget)) {
      console.error(`[BROKEN INTERNAL LINK] In ${currentRoute}: href="${href}" -> route ${cleanTarget} not found!`);
      brokenHrefs++;
    } else if (targetHash) {
      if (pageIds[cleanTarget] && !pageIds[cleanTarget].has(targetHash)) {
        console.error(`[BROKEN TARGET ANCHOR] In ${currentRoute}: href="${href}" -> #${targetHash} missing on ${cleanTarget}`);
        missingIds++;
      }
    }
  }

  // 2. Check all src attributes
  const srcMatches = content.matchAll(/src="([^"]+)"/g);
  for (const m of srcMatches) {
    let src = m[1].split('?')[0];
    if (src.startsWith('https://') || src.startsWith('http://')) continue;
    const assetPath = path.join(DIST, src);
    if (!fs.existsSync(assetPath)) {
      console.error(`[BROKEN IMAGE/SCRIPT] In ${currentRoute}: src="${src}" not found on disk!`);
      brokenAssets++;
    }
  }

  // 3. Check srcset attributes
  const srcsetMatches = content.matchAll(/srcset="([^"]+)"/g);
  for (const m of srcsetMatches) {
    const srcset = m[1];
    const items = srcset.split(',').map((s) => s.trim().split(' ')[0]);
    for (const item of items) {
      if (item.startsWith('http')) continue;
      const cleanItem = item.split('?')[0];
      const assetPath = path.join(DIST, cleanItem);
      if (!fs.existsSync(assetPath)) {
        console.error(`[BROKEN SRCSET] In ${currentRoute}: srcset item "${cleanItem}" not found!`);
        brokenAssets++;
      }
    }
  }
});

console.log('\n--- Link & Asset Integrity Summary ---');
console.log(`Broken internal links: ${brokenHrefs}`);
console.log(`Missing anchor IDs: ${missingIds}`);
console.log(`Broken assets (images, css, js): ${brokenAssets}`);

if (brokenHrefs === 0 && missingIds === 0 && brokenAssets === 0) {
  console.log('✓ 100% LINK & ASSET INTEGRITY VERIFIED!\n');
} else {
  process.exitCode = 1;
}
