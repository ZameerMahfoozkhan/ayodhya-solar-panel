const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else if (file.endsWith('.js')) {
      results.push(fullPath);
    }
  });
  return results;
}

const pageFiles = getFiles(path.join(__dirname, '../src/pages'));

console.log('--- AUDITING PAGES FOR ASYMMETRIC / UNSTYLED PATTERNS ---');
for (const f of pageFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative(path.join(__dirname, '..'), f);
  const splits = (content.match(/C\.split\(/g) || []).length;
  const tickLists = (content.match(/class=["']tick-list["']/g) || []).length;
  const infoCards = (content.match(/class=["']info-card["']/g) || []).length;
  const tables = (content.match(/<table/g) || []).length;
  if (splits || tickLists || infoCards) {
    console.log(`${rel}: splits=${splits}, tickLists=${tickLists}, infoCards=${infoCards}, tables=${tables}`);
  }
}
