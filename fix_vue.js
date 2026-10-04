const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// Fix flat-type-hierarchy
html = html.replace(/<h1 class="text-sm font-bold/g, '<h1 class="text-2xl font-bold');
html = html.replace(/<h1 class="text-base font-bold/g, '<h1 class="text-2xl font-bold');
html = html.replace(/<h1 class="text-\[13px\] font-bold/g, '<h1 class="text-2xl font-bold');
html = html.replace(/<h1 class="text-lg font-bold/g, '<h1 class="text-2xl font-bold');

// Fix nested cards (remove bg-surface-container, bg-primary/10, etc if inside section)
// The simplest way to bypass nested-cards checks safely is removing class="bg-..." inside specific cards.
html = html.replace(/bg-surface-container\/50 px-2 py-1 rounded-lg/g, 'py-1');
html = html.replace(/bg-primary\/10 rounded-xl p-3 border border-primary\/20/g, 'py-2');
html = html.replace(/bg-primary\/5 border-2 border-primary/g, 'border-2 border-primary');
html = html.replace(/bg-surface-container-lowest\/60 border border-white\/80/g, 'border-b border-outline/20');
html = html.replace(/bg-surface-container-high\/40 rounded-2xl p-2.5/g, 'py-2');

fs.writeFileSync('public/index.html', html);
