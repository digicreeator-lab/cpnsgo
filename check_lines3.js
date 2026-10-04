const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const match = content.match(/<div v-else-if="currentView === 'quiz-result'">([\s\S]*?)<!-- VIEW 6:/);
const str = match[0];
const lines = str.split('\n');
console.log(lines.slice(62, 79).join('\n'));
