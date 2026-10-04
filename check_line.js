const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const match = content.match(/<div v-if="currentView === 'dashboard'">([\s\S]*?)<!-- VIEW 2:/);
const str = match[0];
const lines = str.split('\n');
console.log(lines[75]);
