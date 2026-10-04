const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Update Tailwind config & Style
html = html.replace(/tailwind\.config = \{[\s\S]*?\}<\/script>/, `tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "primary": "#0F172A",
            "primary-container": "#1E293B",
            "on-primary": "#F8FAFC",
            "surface": "#F1F5F9",
            "surface-container": "#E2E8F0",
            "on-surface": "#0F172A",
            "on-surface-variant": "#475569",
            "outline": "#94A3B8",
            "outline-variant": "#CBD5E1",
            "error": "#DC2626",
            "success": "#16A34A",
            "warning": "#D97706"
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
          }
        }
      }
    }
  </script>`);

html = html.replace(/<style>[\s\S]*?<\/style>/, `<style>
    body {
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      user-select: none;
      min-height: max(884px, 100dvh);
      background-color: #F8FAFC;
    }
    .material-symbols-outlined { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; display: inline-block; vertical-align: middle; }
    
    /* Strict Fintech Audit Ledger Tokens */
    .ledger-card {
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-radius: 4px;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      padding: 1rem;
    }
    .ledger-header {
      border-bottom: 1px solid #CBD5E1;
      padding-bottom: 0.75rem;
      margin-bottom: 0.75rem;
    }
    .ledger-row {
      border-bottom: 1px dashed #CBD5E1;
      padding: 0.5rem 0;
    }
    .ledger-row:last-child {
      border-bottom: none;
    }
    .ledger-dock {
      background: #FFFFFF;
      border-top: 1px solid #CBD5E1;
    }
    .stamp-validated {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border: 2px solid #16A34A;
      color: #16A34A;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-radius: 4px;
      transform: rotate(-5deg);
      font-family: monospace;
      opacity: 0.9;
    }
    .stamp-void {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      border: 2px solid #DC2626;
      color: #DC2626;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-radius: 4px;
      transform: rotate(3deg);
      font-family: monospace;
      opacity: 0.9;
    }
    .crouwel-grid {
      display: grid;
      grid-template-columns: 32px 1fr;
      gap: 0;
      border: 1px solid #CBD5E1;
    }
    .crouwel-cell {
      padding: 0.75rem;
      border-bottom: 1px solid #CBD5E1;
      border-right: 1px solid #CBD5E1;
    }
    .crouwel-cell:last-child { border-right: none; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>`);

// 2. Remove ambient mesh
html = html.replace(/<!-- Ambient Pastel Mesh Gradient Backdrop [\s\S]*?<\/div>/, `<!-- Ledger Grid Background -->
    <div class="fixed inset-0 pointer-events-none -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNFMkU4RjAiLz48L3N2Zz4=')]"></div>`);

// 3. Replace Hero SVG section
html = html.replace(/<!-- HERO BANNER CARD [\s\S]*?<\/section>/, `<!-- LEDGER DASHBOARD HERO -->
          <section @click="openModule(modules[0])" class="ledger-card cursor-pointer group">
            <div class="ledger-header flex justify-between items-end">
              <div>
                <span class="text-[10px] font-mono font-bold text-on-surface-variant uppercase tracking-widest">ID: AUDIT-2026</span>
                <h2 class="text-xl font-bold text-on-surface leading-none mt-1">CPNS GO LEDGER</h2>
              </div>
              <span class="stamp-validated text-[10px]">VERIFIED</span>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mt-2">
              <div class="border-l-2 border-primary pl-3">
                <p class="text-[10px] font-mono text-on-surface-variant uppercase">Target SKD</p>
                <p class="text-2xl font-bold font-mono tracking-tight text-on-surface mt-1">420<span class="text-xs text-outline">pts</span></p>
              </div>
              <div class="border-l-2 border-primary pl-3">
                <p class="text-[10px] font-mono text-on-surface-variant uppercase">Clearance</p>
                <p class="text-2xl font-bold font-mono tracking-tight text-success mt-1">{{ Math.round((totalCompletedCount/totalModulesCount)*100) || 0 }}<span class="text-xs text-outline">%</span></p>
              </div>
            </div>
            
            <div class="mt-5 pt-3 border-t border-outline-variant flex items-center justify-between">
              <span class="text-[11px] font-mono text-on-surface">STATUS: <strong class="text-primary">ACTIVE AUDIT</strong></span>
              <button class="bg-primary text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider group-hover:bg-primary-container transition-colors">
                RESUME &rarr;
              </button>
            </div>
          </section>`);

// 4. Replace TWK/TIU/TKP cards with Ledger rows
html = html.replace(/<!-- TWK Card -->[\s\S]*?<!-- UPCOMING \/ RECENT MODULE LIST -->/, `<!-- LEDGER CATEGORY ROWS -->
            <div class="ledger-card p-0">
              <div class="p-3 bg-surface border-b border-outline-variant flex justify-between items-center">
                <span class="text-xs font-bold uppercase tracking-widest">Compliance Status</span>
                <span @click="showToast('Ambang Batas SKD: TWK 65, TIU 80, TKP 166')" class="text-[10px] font-mono text-primary cursor-pointer border-b border-primary border-dashed">Thresholds</span>
              </div>
              
              <!-- TWK Row -->
              <div @click="openCategory('TWK')" class="flex items-center justify-between p-3 border-b border-outline-variant hover:bg-surface cursor-pointer">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-surface-container flex items-center justify-center font-mono font-bold text-xs">TWK</div>
                  <div>
                    <h3 class="text-xs font-bold">Wawasan Kebangsaan</h3>
                    <p class="text-[10px] font-mono text-on-surface-variant">Cleared: {{ getCategoryCompleted('TWK') }}/7</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="font-mono text-xs font-bold" :class="getCategoryCompleted('TWK') >= 7 ? 'text-success' : 'text-on-surface'">{{ Math.round((getCategoryCompleted('TWK')/7)*100) }}%</span>
                </div>
              </div>

              <!-- TIU Row -->
              <div @click="openCategory('TIU')" class="flex items-center justify-between p-3 border-b border-outline-variant hover:bg-surface cursor-pointer">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-surface-container flex items-center justify-center font-mono font-bold text-xs">TIU</div>
                  <div>
                    <h3 class="text-xs font-bold">Inteligensia Umum</h3>
                    <p class="text-[10px] font-mono text-on-surface-variant">Cleared: {{ getCategoryCompleted('TIU') }}/8</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="font-mono text-xs font-bold" :class="getCategoryCompleted('TIU') >= 8 ? 'text-success' : 'text-on-surface'">{{ Math.round((getCategoryCompleted('TIU')/8)*100) }}%</span>
                </div>
              </div>

              <!-- TKP Row -->
              <div @click="openCategory('TKP')" class="flex items-center justify-between p-3 hover:bg-surface cursor-pointer">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-surface-container flex items-center justify-center font-mono font-bold text-xs">TKP</div>
                  <div>
                    <h3 class="text-xs font-bold">Karakteristik Pribadi</h3>
                    <p class="text-[10px] font-mono text-on-surface-variant">Cleared: {{ getCategoryCompleted('TKP') }}/6</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="font-mono text-xs font-bold" :class="getCategoryCompleted('TKP') >= 6 ? 'text-success' : 'text-on-surface'">{{ Math.round((getCategoryCompleted('TKP')/6)*100) }}%</span>
                </div>
              </div>
            </div>
          </section>

          <!-- UPCOMING / RECENT MODULE LIST -->`);

// 5. Replace Result APS section (Crouwel Grid)
html = html.replace(/<div class="bg-primary-fixed\/30 p-3 rounded-xl flex flex-col gap-1 text-\[11px\]">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, `<div class="mt-3 crouwel-grid text-[10px] font-mono">
                <div class="crouwel-cell font-bold bg-surface flex items-center justify-center border-r border-outline-variant">A</div>
                <div class="crouwel-cell text-on-surface">{{ q.apsExplanation.match(/A \\(Action\\): (.*?)(?= P \\(Point\\):)/)?.[1] || q.apsExplanation }}</div>
                
                <div class="crouwel-cell font-bold bg-surface flex items-center justify-center border-r border-outline-variant">P</div>
                <div class="crouwel-cell text-on-surface">{{ q.apsExplanation.match(/P \\(Point\\): (.*?)(?= S \\(Solution\\):)/)?.[1] || '-' }}</div>
                
                <div class="crouwel-cell font-bold bg-surface flex items-center justify-center border-r border-outline-variant text-primary border-b-0">S</div>
                <div class="crouwel-cell font-bold text-primary border-b-0">{{ q.apsExplanation.match(/S \\(Solution\\): (.*)/)?.[1] || '-' }}</div>
              </div>
            </div>
          </div>`);

// 6. Replace Validation Stamps on Quiz Result
html = html.replace(/<div \s*class="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-3"[\s\S]*?<\/h2>/, `
            <div class="mb-6 mt-2 flex justify-center">
              <span v-if="quizScore >= 3" class="stamp-validated text-2xl px-6 py-2 border-4">PASSED</span>
              <span v-else class="stamp-void text-2xl px-6 py-2 border-4">FAILED</span>
            </div>
            <h2 class="text-sm font-bold uppercase tracking-widest mb-1" :class="quizScore >= 3 ? 'text-success' : 'text-error'">
              {{ quizScore >= 3 ? 'Audit Cleared' : 'Audit Failed' }}
            </h2>`);

// Replace classes
html = html.replace(/glass-card/g, 'ledger-card');
html = html.replace(/glass-dock/g, 'ledger-dock');
html = html.replace(/glass-pill/g, 'border border-outline-variant px-2 py-1 rounded bg-white text-[10px] font-mono');

fs.writeFileSync('public/index.html', html);
console.log('Done redesigning.');
