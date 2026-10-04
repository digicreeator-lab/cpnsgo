const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const match = content.match(/<div v-if="currentView === 'dashboard'">([\s\S]*?)<!-- VIEW 2:/);
if(!match) { console.log('not found'); process.exit(1); }
const str = match[0];
let depth = 0;
const lines = str.split('\n');
for(let i=0; i<lines.length; i++) {
  const line = lines[i];
  const opens = (line.match(/<div/gi) || []).length;
  const closes = (line.match(/<\/div/gi) || []).length;
  depth += (opens - closes);
  console.log(`L${i}: open=${opens} close=${closes} depth=${depth} | ${line.trim().substring(0, 30)}`);
}
