const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// Fix skipped-heading & flat-type-hierarchy
html = html.replace(/<h4/g, '<h3');
html = html.replace(/<\/h4>/g, '</h3>');
html = html.replace(/<h3 class="text-xs font-bold text-on-surface">Wawasan Kebangsaan<\/h3>/g, '<h2 class="text-lg font-bold text-on-surface">Wawasan Kebangsaan</h2>');
html = html.replace(/<h3 class="text-xs font-bold text-on-surface">Inteligensia Umum<\/h3>/g, '<h2 class="text-lg font-bold text-on-surface">Inteligensia Umum</h2>');
html = html.replace(/<h3 class="text-xs font-bold text-on-surface">Karakteristik Pribadi<\/h3>/g, '<h2 class="text-lg font-bold text-on-surface">Karakteristik Pribadi</h2>');

// Fix nested cards (remove bg- from internal divs)
html = html.replace(/bg-surface-container\/40 /g, '');
html = html.replace(/bg-surface-container-lowest\/90 /g, '');
html = html.replace(/bg-emerald-50 /g, '');
html = html.replace(/bg-error\/5 /g, '');
html = html.replace(/bg-primary\/5 /g, '');
html = html.replace(/bg-primary\/10 /g, '');

fs.writeFileSync('public/index.html', html);
