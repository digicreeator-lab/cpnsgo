const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Fix flat-type-hierarchy
// Change the Dashboard H1 to text-xl (20px) which creates a 1.25x ratio over 16px
html = html.replace(/<h1 class="text-sm font-bold text-on-surface leading-tight">Vikram CPNS Aspirant<\/h1>/g, 
                    '<h1 class="text-xl font-bold text-on-surface leading-tight">Vikram CPNS Aspirant</h1>');
html = html.replace(/<h1 class="text-\[11px\] font-bold text-on-surface leading-relaxed">Simulasi CAT SKD<\/h1>/g, 
                    '<h1 class="text-xl font-bold text-on-surface leading-relaxed">Simulasi CAT SKD</h1>');
                    
// 2. Fix skipped-heading (Module List missing h2)
html = html.replace(/<h1 class="text-xs font-bold text-on-surface tracking-wide uppercase truncate">MODUL \{\{ activeCategoryCode \}\}<\/h1>/g, 
                    '<h1 class="text-xs font-bold text-on-surface tracking-wide uppercase truncate">MODUL {{ activeCategoryCode }}</h1>\n            <h2 class="sr-only">Progres Modul</h2>');

// 3. Fix nested-cards (Remove explicit border classes on internal div containers that already have bg color)
// Module List - Progres Overview Card inner items
html = html.replace(/bg-white\/80 rounded-2xl p-2.5 flex flex-col border border-white/g, 
                    'bg-white/80 rounded-2xl p-2.5 flex flex-col');
// Module Detail - Tujuan Pembelajaran items
html = html.replace(/bg-surface-container-lowest\/60 rounded-lg p-2.5 flex items-start gap-2 border border-white\/40/g, 
                    'bg-surface-container-lowest/60 rounded-lg p-2.5 flex items-start gap-2');
// Module Detail - Radar comparison cards
html = html.replace(/border border-primary\/25 bg-white\/50/g, 'bg-white/50');
html = html.replace(/border border-secondary\/25 bg-white\/50/g, 'bg-white/50');
// Module Detail - Rule of thumb
html = html.replace(/bg-primary-fixed\/35 border border-primary\/20/g, 'bg-primary-fixed/35');
// Module Detail - Framework APS steps
html = html.replace(/bg-surface-container-lowest\/90 rounded-xl p-2.5 border border-outline-variant\/30/g, 
                    'bg-surface-container-lowest/90 rounded-xl p-2.5');
// Quiz Wizard - info card
html = html.replace(/bg-primary\/5 border border-primary\/10 rounded-lg p-2.5/g, 
                    'bg-primary/5 rounded-lg p-2.5');
// Quiz Result - explanation and answers
html = html.replace(/bg-error\/5 border border-error\/30 rounded-lg p-2.5/g, 'bg-error/5 rounded-lg p-2.5');
html = html.replace(/bg-emerald-50 border border-emerald-400 rounded-lg p-2.5/g, 'bg-emerald-50 rounded-lg p-2.5');
html = html.replace(/bg-surface-container-low border border-primary\/20 rounded-lg p-2.5/g, 'bg-surface-container-low rounded-lg p-2.5');
// CAT Sim - Premis cards
html = html.replace(/bg-primary\/10 rounded-xl p-3 border border-primary\/20/g, 'bg-primary/10 rounded-xl p-3');

fs.writeFileSync('public/index.html', html);
console.log('Precision fix applied');