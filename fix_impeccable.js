const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// Fix: remove animate-pulse and timer-pulse
html = html.replace(/animate-pulse/g, '');
html = html.replace(/timer-pulse/g, '');

// Fix: leading (tight-leading error)
html = html.replace(/leading-tight/g, 'leading-relaxed');
html = html.replace(/leading-none/g, 'leading-relaxed');
html = html.replace(/leading-snug/g, 'leading-relaxed');

// Fix: cramped padding (add padding to cards without it, change p-3 -> p-4/pt-3 where missing)
html = html.replace(/class="glass-card(.*?)p-3/g, 'class="glass-card$1px-4 py-3');
html = html.replace(/class="glass-surface(.*?)p-3/g, 'class="glass-surface$1px-4 py-3');
html = html.replace(/class="glass-surface(.*?)p-4/g, 'class="glass-surface$1px-4 py-4');

// Nested cards flatting
// bg-white/80 rounded-2xl p-2.5 flex flex-col border border-white
html = html.replace(/bg-white\/80 rounded-2xl p-2.5 flex flex-col border border-white/g, 'flex flex-col py-2');

// Other common nested inner cards
html = html.replace(/bg-surface-container-lowest\/60 rounded-lg p-2.5 flex items-start gap-2 border border-white\/40/g, 'flex items-start gap-2 py-2');
html = html.replace(/bg-primary\/5 border border-primary\/10 rounded-lg p-2.5/g, 'py-2');
html = html.replace(/bg-surface-container\/60 p-1 rounded-lg/g, 'py-2');
html = html.replace(/border border-primary\/25 bg-white\/50 rounded-lg p-2/g, 'py-2');
html = html.replace(/border border-secondary\/25 bg-white\/50 rounded-lg p-2/g, 'py-2');
html = html.replace(/bg-primary-fixed\/35 border border-primary\/20 rounded-lg p-2/g, 'py-2');
html = html.replace(/bg-surface-container-lowest\/90 rounded-xl p-2.5 border border-outline-variant\/30/g, 'py-2');
html = html.replace(/bg-error\/5 border border-error\/30 rounded-lg p-2.5/g, 'py-2');
html = html.replace(/bg-emerald-50 border border-emerald-400 rounded-lg p-2.5/g, 'py-2');
html = html.replace(/bg-surface-container-low border border-primary\/20 rounded-lg p-2.5/g, 'py-2');
html = html.replace(/bg-surface-container-high\/40 rounded-2xl p-2.5/g, 'py-2');

// Fix: Small padding in chips causing cramped-padding
html = html.replace(/px-2 py-0\.5/g, 'px-3 py-2');
html = html.replace(/px-1\.5 py-0\.5/g, 'px-3 py-2');

// Fix skipped headings
html = html.replace(/<h4/g, '<h3');
html = html.replace(/<\/h4>/g, '</h3>');
html = html.replace(/<h1 class="text-xs font-bold text-on-surface tracking-wide uppercase truncate">MODUL {{ activeCategoryCode }}<\/h1>/g, '<h1 class="text-xs font-bold text-on-surface tracking-wide uppercase truncate">MODUL {{ activeCategoryCode }}</h1>\n            <h2 class="sr-only">Kategori</h2>');
html = html.replace(/<h1 class="text-\[13px\] font-bold text-on-surface uppercase truncate">Hasil Evaluasi<\/h1>/g, '<h1 class="text-[13px] font-bold text-on-surface uppercase truncate">Hasil Evaluasi</h1>\n              <h2 class="sr-only">Skor Evaluasi</h2>');

fs.writeFileSync('public/index.html', html);
console.log('Fixed applied');