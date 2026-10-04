const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const match = content.match(/<div v-else-if="currentView === 'module-list'">([\s\S]*?)<!-- VIEW 3:/);
const str = match[0];
const lines = str.split('\n');
console.log(lines.slice(25, 45).join('\n'));
