const fs = require('fs');
const path = require('path');

const pages = fs.readdirSync(path.join(__dirname, '../src/pages')).filter(f => f.endsWith('.js'));
for (const p of pages) {
  const content = fs.readFileSync(path.join(__dirname, '../src/pages', p), 'utf8');
  if (content.includes('split')) {
    console.log('\n=== Page: ' + p + ' ===');
    const lines = content.split('\n');
    lines.forEach((l, i) => {
      if (l.includes('C.split') || l.includes('class="split"')) {
        console.log(`  Line ${i+1}: ${l.trim()}`);
      }
    });
  }
}
