const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('glass-panel')) {
    console.log(i + ': ' + lines[i].trim().substring(0, 80));
  }
}
