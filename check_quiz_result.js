const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const match = content.match(/<div v-else-if="currentView === 'quiz-result'">([\s\S]*?)<!-- VIEW 6:/);
const str = match[0];
const lines = str.split('\n');
let depth = 0;
for(let i=0; i<lines.length; i++) {
  const line = lines[i];
  const opens = (line.match(/<div/gi) || []).length;
  const closes = (line.match(/<\/div/gi) || []).length;
  depth += (opens - closes);
  console.log(`L${i}: depth=${depth} | ${line.trim().substring(0, 30)}`);
}
