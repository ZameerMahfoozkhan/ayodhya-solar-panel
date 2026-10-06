/**
 * Static site generator and SEO validator for Ayodhya Solar Installation.
 *
 * Compiles all pages in /src/pages and /src/blog to clean, static HTML files
 * in /dist, generates sitemap.xml and robots.txt, and validates the entire site.
 *
 * Usage: node scripts/build.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const config = require('../src/config');
const { renderPage } = require('../src/layout');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DIST_DIR = path.join(ROOT, 'dist');
const PAGES_DIR = path.join(ROOT, 'src', 'pages');
const BLOG_DIR = path.join(ROOT, 'src', 'blog');

// Helper to copy directories recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper to calculate file content hash for cache busting
function getFileHash(filePath) {
  if (!fs.existsSync(filePath)) return '1';
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex').slice(0, 8);
}

function loadPages() {
  const pages = [];

  // Core pages
  const pageFiles = fs.readdirSync(PAGES_DIR).filter((f) => f.endsWith('.js'));
  for (const file of pageFiles) {
    const pageMod = require(path.join(PAGES_DIR, file));
    pages.push(pageMod);
  }

  // Blog articles
  if (fs.existsSync(BLOG_DIR)) {
    const blogFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.js'));
    for (const file of blogFiles) {
      const blogMod = require(path.join(BLOG_DIR, file));
      pages.push(blogMod);
    }
  }

  return pages;
}

function generateSitemap(pages) {
  const today = new Date().toISOString().split('T')[0];
  const urls = pages
    .filter((p) => !p.noindex)
    .map((p) => {
      const loc = config.siteUrl + p.path;
      const priority = (p.sitemap && p.sitemap.priority) || (p.path === '/' ? '1.0' : '0.8');
      const changefreq = (p.sitemap && p.sitemap.changefreq) || 'monthly';
      const lastmod = (p.article && p.article.modified) || config.modified || today;

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;
}

function generateRobots() {
  return `User-agent: *
Allow: /

Sitemap: ${config.siteUrl}/sitemap.xml
`;
}

function auditPages(pages, renderedPages) {
  console.log('\n--- Running Automated SEO & Technical Audit ---');
  let errors = 0;
  let warnings = 0;

  const titles = new Set();
  const descriptions = new Set();
  const allPaths = new Set(pages.map((p) => p.path));

  for (const p of pages) {
    // 1. Title validation
    if (!p.title || p.title.length < 15) {
      console.warn(`[WARNING] Short or missing title on: ${p.path}`);
      warnings++;
    }
    if (titles.has(p.title)) {
      console.error(`[ERROR] Duplicate title found: "${p.title}" on ${p.path}`);
      errors++;
    }
    titles.add(p.title);

    // 2. Meta description validation
    if (!p.description || p.description.length < 50) {
      console.warn(`[WARNING] Short or missing description on: ${p.path}`);
      warnings++;
    }
    if (descriptions.has(p.description)) {
      console.error(`[ERROR] Duplicate description found on ${p.path}`);
      errors++;
    }
    descriptions.add(p.description);

    // 3. HTML markup audit
    const html = renderedPages[p.path];
    if (html) {
      // Check H1 count (must be exactly 1)
      const h1Matches = html.match(/<h1[^>]*>/gi);
      if (!h1Matches || h1Matches.length !== 1) {
        console.error(`[ERROR] Page ${p.path} has ${h1Matches ? h1Matches.length : 0} H1 tags (must be exactly 1).`);
        errors++;
      }

      // Check canonical tag exists
      if (!html.includes('<link rel="canonical"')) {
        console.error(`[ERROR] Page ${p.path} missing canonical tag.`);
        errors++;
      }

      // Check JSON-LD validation
      const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
      if (jsonLdMatch) {
        try {
          JSON.parse(jsonLdMatch[1]);
        } catch (err) {
          console.error(`[ERROR] Page ${p.path} has invalid JSON-LD: ${err.message}`);
          errors++;
        }
      } else {
        console.warn(`[WARNING] Page ${p.path} missing JSON-LD structured data.`);
        warnings++;
      }
    }
  }

  console.log(`Audit Summary: ${pages.length} pages inspected.`);
  console.log(`Errors: ${errors}, Warnings: ${warnings}`);
  if (errors > 0) {
    console.error('Audit failed with critical errors!');
    process.exitCode = 1;
  } else {
    console.log('✓ All SEO & Technical checks passed successfully!\n');
  }
}

function build() {
  console.log('Building Ayodhya Solar Installation website...');

  // 1. Clean & prepare dist directory
  if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST_DIR, { recursive: true });

  // 2. Copy static assets from /public to /dist
  console.log('Copying static assets from /public to /dist...');
  copyDirSync(PUBLIC_DIR, DIST_DIR);

  // 3. Asset version hashes for cache busting
  const cssHash = getFileHash(path.join(PUBLIC_DIR, 'assets', 'css', 'styles.css'));
  const jsHash = getFileHash(path.join(PUBLIC_DIR, 'assets', 'js', 'main.js'));
  const assets = { css: cssHash, js: jsHash };

  // 4. Load & render pages
  const pages = loadPages();
  const renderedPages = {};

  console.log(`Rendering ${pages.length} pages to static HTML...`);
  for (const page of pages) {
    const html = renderPage(page, assets);
    renderedPages[page.path] = html;

    // Output path: '/' -> dist/index.html, '/about/' -> dist/about/index.html
    let outPath;
    if (page.path === '/') {
      outPath = path.join(DIST_DIR, 'index.html');
    } else {
      const cleanSub = page.path.replace(/^\/|\/$/g, '');
      const pageDir = path.join(DIST_DIR, cleanSub);
      if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
      outPath = path.join(pageDir, 'index.html');
    }

    fs.writeFileSync(outPath, html, 'utf8');
    console.log(`  ✓ ${page.path} -> ${path.relative(ROOT, outPath)}`);
  }

  // 5. Generate sitemap.xml
  const sitemapContent = generateSitemap(pages);
  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapContent, 'utf8');
  console.log('  ✓ Generated /dist/sitemap.xml');

  // 6. Generate robots.txt
  const robotsContent = generateRobots();
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsContent, 'utf8');
  console.log('  ✓ Generated /dist/robots.txt');

  // 7. Audit pages
  auditPages(pages, renderedPages);

  console.log('Build completed successfully!');
}

build();
