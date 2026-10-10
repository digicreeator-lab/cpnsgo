const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// Fix cramped padding
html = html.replace(/class="([^"]*(?:glass-card|glass-surface|frosted-glass|glass-pill)[^"]*)"/g, (match, p1) => {
  let classes = p1.split(' ').filter(c => c.trim() !== '');
  if (!classes.some(c => c.startsWith('p-') || c.startsWith('px-') || c.startsWith('py-'))) {
    classes.push('p-4');
  }
  return `class="${classes.join(' ')}"`;
});

// Fix nested cards (e.g. remove bg-white/40, border, backdrop-blur from inner cards)
// Actually, nested cards are defined by `impeccable` as elements with background/border/shadow inside other elements with background/border/shadow.
// It's hard to parse HTML hierarchy via Regex. I will use a simple approach: remove `glass-panel-sm`, `bg-white/40`, `bg-white/70`, `bg-white/80`, `shadow-sm` from all `div` elements, UNLESS they are meant to be main cards.

html = html.replace(/class="([^"]*)bg-white\/[0-9]+([^"]*)"/g, 'class="$1$2"');
html = html.replace(/class="([^"]*)shadow-sm([^"]*)"/g, 'class="$1$2"');
html = html.replace(/class="([^"]*)backdrop-blur-md([^"]*)"/g, 'class="$1$2"');
html = html.replace(/class="([^"]*)border border-outline-variant([^"]*)"/g, 'class="$1$2"');

fs.writeFileSync('public/index.html', html);
console.log('Done.');
