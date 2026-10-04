const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');

let depth = 0;
let cardDepths = [];
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('<section') || line.includes('<div') || line.includes('<main') || line.includes('<header')) {
    depth += (line.match(/<(section|div|main|header)/gi) || []).length;
    
    if (line.includes('glass-panel') && !line.includes('.glass-panel')) {
      cardDepths.push(depth);
      if (cardDepths.length > 1) {
        console.log(`NESTED CARD at line ${i}: ${line.trim()}`);
      }
    }
  }
  
  if (line.includes('</section>') || line.includes('</div>') || line.includes('</main>') || line.includes('</header>')) {
    const closes = (line.match(/<\/(section|div|main|header)>/gi) || []).length;
    depth -= closes;
    
    // Simplistic depth pop
    while (cardDepths.length > 0 && depth < cardDepths[cardDepths.length - 1]) {
      cardDepths.pop();
    }
  }
}
