const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, '../public/assets/css/styles.css'), 'utf8');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const distFiles = getFiles(path.join(__dirname, '../dist'));
const classesInHtml = new Map(); // className -> array of file names where it occurs

for (const f of distFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const matches = content.matchAll(/class=["']([^"']+)["']/g);
  const relFile = path.relative(path.join(__dirname, '..'), f);
  for (const m of matches) {
    m[1].split(/\s+/).forEach(c => {
      if (c) {
        if (!classesInHtml.has(c)) classesInHtml.set(c, []);
        if (!classesInHtml.get(c).includes(relFile)) classesInHtml.get(c).push(relFile);
      }
    });
  }
}

const missing = [];
for (const [c, files] of Array.from(classesInHtml.entries()).sort()) {
  const escClass = c.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp('\\.' + escClass + '(?![\\w-])');
  if (!regex.test(css)) {
    missing.push({ name: c, count: files.length, sample: files.slice(0, 3) });
  }
}

console.log('Total unique classes in HTML:', classesInHtml.size);
console.log('Classes with ZERO rules in styles.css: ' + missing.length);
console.log(JSON.stringify(missing, null, 2));
