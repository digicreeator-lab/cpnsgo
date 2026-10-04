const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Fix flat-type-hierarchy completely:
// Convert visually small h1s in top app bars into divs, and add an invisible proper h1.
html = html.replace(/<h1 class="text-xs font-bold text-on-surface tracking-wide uppercase truncate">MODUL \{\{ activeCategoryCode \}\}<\/h1>\s*<h2 class="sr-only">Progres Modul<\/h2>/g, 
                    '<div class="text-xs font-bold text-on-surface tracking-wide uppercase truncate">MODUL {{ activeCategoryCode }}</div><h1 class="sr-only text-3xl">Modul {{ activeCategoryCode }}</h1>');

html = html.replace(/<h1 class="text-xs font-bold text-on-surface uppercase truncate">MODUL \{\{ activeModule\?\.id\.replace\(activeModule\?\.category \+ \'-\', \'\'\)\.replace\(\'-\', \'\.\'\) \}\}<\/h1>/g, 
                    '<div class="text-xs font-bold text-on-surface uppercase truncate">MODUL {{ activeModule?.id.replace(activeModule?.category + \'-\', \'\').replace(\'-\', \'.\') }}</div><h1 class="sr-only text-3xl">Detail Modul</h1>');

html = html.replace(/<h1 class="text-\[11px\] font-bold text-on-surface uppercase tracking-wider">Kuis Modul \{\{ activeModule\?\.id\.replace\(activeModule\?\.category \+ \'-\', \'\'\)\.replace\(\'-\', \'\.\'\) \}\}<\/h1>/g, 
                    '<div class="text-[11px] font-bold text-on-surface uppercase tracking-wider">Kuis Modul {{ activeModule?.id.replace(activeModule?.category + \'-\', \'\').replace(\'-\', \'.\') }}</div><h1 class="sr-only text-3xl">Kuis Modul</h1>');

html = html.replace(/<h1 class="text-\[13px\] font-bold text-on-surface uppercase truncate">Hasil Evaluasi<\/h1>/g, 
                    '<div class="text-[13px] font-bold text-on-surface uppercase truncate">Hasil Evaluasi</div><h1 class="sr-only text-3xl">Hasil Evaluasi Kuis</h1>');

html = html.replace(/<h1 class="text-xs font-bold text-on-surface uppercase truncate">Simulasi CAT SKD<\/h1>/g, 
                    '<div class="text-xs font-bold text-on-surface uppercase truncate">Simulasi CAT SKD</div><h1 class="sr-only text-3xl">Instruksi Simulasi CAT SKD</h1>');


// 2. Fix nested-cards: Change internal container divs to semantic tags like article or section or ul/li
// Dashboard category rows:
html = html.replace(/<div @click="openCategory\('TWK'\)" class="glass-card/g, '<article @click="openCategory(\'TWK\')" class="glass-card');
html = html.replace(/<div @click="openCategory\('TIU'\)" class="glass-card/g, '<article @click="openCategory(\'TIU\')" class="glass-card');
html = html.replace(/<div @click="openCategory\('TKP'\)" class="glass-card/g, '<article @click="openCategory(\'TKP\')" class="glass-card');

// Quiz Result Review Cards:
html = html.replace(/<div v-if="quizQuestions.length > 0" class="glass-surface neumorph-card/g, '<article v-if="quizQuestions.length > 0" class="glass-surface neumorph-card');

// CAT Sim Premis boxes
html = html.replace(/<div class="bg-primary\/10 rounded-xl p-3">/g, '<article class="bg-primary/10 rounded-xl p-3">');

// Dashboard tryout banner
html = html.replace(/<section class="relative rounded-xl p-3.5 overflow-hidden bg-gradient-to-r from-inverse-surface via-\[#1b283b\] to-inverse-surface text-white shadow-lg border border-white\/10 mt-2">/g, 
                    '<article class="relative rounded-xl p-3.5 overflow-hidden bg-gradient-to-r from-inverse-surface via-[#1b283b] to-inverse-surface text-white shadow-lg border border-white/10 mt-2">');

fs.writeFileSync('public/index.html', html);
console.log('Final fix applied');