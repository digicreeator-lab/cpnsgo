const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');

const matches = [...content.matchAll(/<div v-(if|else-if)="currentView === '[a-z-]+'"/g)];
for (let i = 0; i < matches.length - 1; i++) {
  const current = matches[i];
  const next = matches[i + 1];
  const chunk = content.substring(current.index, next.index);
  
  let depth = 0;
  let lines = chunk.split('\n');
  for (let j = 0; j < lines.length; j++) {
    const opens = (lines[j].match(/<div/gi) || []).length;
    const closes = (lines[j].match(/<\/div/gi) || []).length;
    depth += (opens - closes);
  }
  console.log('Between ' + current[0].substring(0,40) + ' and ' + next[0].substring(0,40) + ' depth is ' + depth);
  
  if (depth !== 0) {
     console.log("Found mismatch!");
     let d = 0;
     for (let j=0; j < lines.length; j++) {
         d += (lines[j].match(/<div/gi) || []).length - (lines[j].match(/<\/div/gi) || []).length;
         if (d < 0) console.log("NEGATIVE at line", j, lines[j]);
     }
  }
}
