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

for (const f of pageFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const rel = path.relative(path.join(__dirname, '..'), f);
  const infoCards = content.match(/<div class=["']info-card[\s\S]*?<\/div>/g);
  if (infoCards) {
    console.log(`\n=== ${rel} ===`);
    infoCards.forEach(c => console.log(c.substring(0, 300) + '...\n'));
  }
}
