const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. REWRITE CAT RESULT (VIEW 8)
const catResultNew = `
      <!-- ======================================================== -->
      <!-- VIEW 8: HASIL SIMULASI CAT SKD -->
      <!-- ======================================================== -->
      <div v-else-if="currentView === 'cat-result'" class="soft-mesh">
        <!-- Top App Bar -->
        <header class="w-full max-w-lg mx-auto px-4 h-14 flex items-center justify-between border-b border-white/60 sticky top-0 z-40 bg-surface/80 backdrop-blur-md">
          <button @click="currentView = 'dashboard'" aria-label="Kembali ke Dashboard" class="w-9 h-9 min-w-[36px] bg-white rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container active:scale-95 transition-all flex-shrink-0 shadow-sm border border-outline-variant/30">
            <span class="material-symbols-outlined text-[22px]">chevron_left</span>
          </button>
          <div class="flex-1 flex flex-col items-center justify-center text-center px-2 min-w-0">
            <h1 class="text-[13px] font-bold text-on-surface uppercase truncate">Hasil Simulasi CAT</h1>
            <span class="text-[10px] font-medium text-primary leading-relaxed mt-0.5 truncate">Laporan Nilai Standar BKN</span>
          </div>
          <div class="w-9 flex-shrink-0" aria-hidden="true"></div>
        </header>

        <main class="px-margin space-y-4 pt-3 pb-24 max-w-lg mx-auto relative z-10">
          <!-- Main Result Card -->
          <section 
            class="glass-surface p-6 text-center rounded-3xl relative overflow-hidden shadow-sm"
          >
            <div class="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                 :class="catResult?.isPassed ? 'bg-emerald-500/20' : 'bg-error/20'"></div>
            
            <div 
              class="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-3 border shadow-sm"
              :class="catResult?.isPassed ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 'bg-error/10 text-error border-error/20'"
            >
              <span class="material-symbols-outlined text-[32px]">
                {{ catResult?.isPassed ? 'verified' : 'priority_high' }}
              </span>
            </div>

            <div 
              class="inline-flex px-3 py-1 text-[10px] font-bold rounded-full mb-3 tracking-wide"
              :class="catResult?.isPassed ? 'bg-emerald-100 text-emerald-800' : 'bg-error-container text-error'"
            >
              {{ catResult?.isPassed ? 'MEMENUHI PASSING GRADE NASIONAL' : 'BELUM MEMENUHI PASSING GRADE' }}
            </div>

            <h2 class="text-xs font-bold uppercase tracking-wider text-outline mb-1">Total Nilai CAT SKD</h2>
            <div class="flex items-baseline justify-center gap-1.5 mb-2">
              <span class="text-display" :class="catResult?.isPassed ? 'text-primary' : 'text-error'">{{ catResult?.totalScore }}</span>
              <span class="text-sm font-bold text-on-surface-variant">/ 550</span>
            </div>
            <p class="text-[11px] text-on-surface-variant max-w-xs mx-auto mb-4 leading-relaxed font-medium">
              {{ catResult?.isPassed 
                ? 'Selamat! Seluruh sub-tes (TWK, TIU, TKP) berhasil melampaui batas nilai kelulusan BKN.' 
                : 'Ada sub-tes yang belum mencapai batas minimal. Periksa pembahasan di bawah untuk evaluasi materi.' }}
            </p>

            <!-- 3 Category Breakdown inside Card -->
            <div class="grid grid-cols-3 gap-2 pt-3 border-t border-outline-variant/30">
              <!-- TWK -->
              <div class="bg-surface-container-low rounded-xl p-2.5">
                <span class="text-[10px] font-bold text-primary block">TWK</span>
                <span class="text-[10px] text-outline block mb-1">Min 65</span>
                <div class="text-sm font-bold" :class="catResult?.twk.passed ? 'text-on-surface' : 'text-error'">{{ catResult?.twk.score }}</div>
                <span v-if="catResult?.twk.passed" class="material-symbols-outlined text-[14px] text-emerald-500 mt-1">check_circle</span>
                <span v-else class="material-symbols-outlined text-[14px] text-error mt-1">cancel</span>
              </div>
              <!-- TIU -->
              <div class="bg-surface-container-low rounded-xl p-2.5">
                <span class="text-[10px] font-bold text-secondary block">TIU</span>
                <span class="text-[10px] text-outline block mb-1">Min 80</span>
                <div class="text-sm font-bold" :class="catResult?.tiu.passed ? 'text-on-surface' : 'text-error'">{{ catResult?.tiu.score }}</div>
                <span v-if="catResult?.tiu.passed" class="material-symbols-outlined text-[14px] text-emerald-500 mt-1">check_circle</span>
                <span v-else class="material-symbols-outlined text-[14px] text-error mt-1">cancel</span>
              </div>
              <!-- TKP -->
              <div class="bg-surface-container-low rounded-xl p-2.5">
                <span class="text-[10px] font-bold text-tertiary block">TKP</span>
                <span class="text-[10px] text-outline block mb-1">Min 166</span>
                <div class="text-sm font-bold" :class="catResult?.tkp.passed ? 'text-on-surface' : 'text-error'">{{ catResult?.tkp.score }}</div>
                <span v-if="catResult?.tkp.passed" class="material-symbols-outlined text-[14px] text-emerald-500 mt-1">check_circle</span>
                <span v-else class="material-symbols-outlined text-[14px] text-error mt-1">cancel</span>
              </div>
            </div>
          </section>

          <!-- Analytics Summary -->
          <section class="grid grid-cols-2 gap-3 mt-3">
            <div class="glass-surface rounded-2xl p-3 flex items-center gap-2.5 border border-white/80">
              <div class="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                <span class="material-symbols-outlined text-base">timer</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-outline uppercase tracking-wider">Waktu Sisa</span>
                <p class="text-xs font-bold text-on-surface mt-0.5">{{ formatTime(catResult?.timeRemaining) }}</p>
              </div>
            </div>
            <div class="glass-surface rounded-2xl p-3 flex items-center gap-2.5 border border-white/80">
              <div class="w-8 h-8 rounded-lg bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                <span class="material-symbols-outlined text-base">analytics</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-outline uppercase tracking-wider">Akurasi</span>
                <p class="text-xs font-bold text-on-surface mt-0.5">{{ Math.round((catResult?.totalCorrect / catQuestions.length) * 100) }}%</p>
              </div>
            </div>
            <div class="glass-surface rounded-2xl p-3 flex items-center gap-2.5 border border-white/80">
              <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <span class="material-symbols-outlined text-base">check_circle</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-outline uppercase tracking-wider">Benar</span>
                <p class="text-xs font-bold text-on-surface mt-0.5">{{ catResult?.totalCorrect }} Soal</p>
              </div>
            </div>
            <div class="glass-surface rounded-2xl p-3 flex items-center gap-2.5 border border-white/80">
              <div class="w-8 h-8 rounded-lg bg-error/10 flex items-center justify-center text-error">
                <span class="material-symbols-outlined text-base">cancel</span>
              </div>
              <div>
                <span class="text-[9px] font-bold text-outline uppercase tracking-wider">Salah / Kosong</span>
                <p class="text-xs font-bold text-on-surface mt-0.5">{{ catQuestions.length - catResult?.totalCorrect }} Soal</p>
              </div>
            </div>
          </section>

          <!-- Navigation Action -->
          <div class="pt-4 flex flex-col gap-3">
            <button @click="currentView = 'dashboard'" class="w-full bg-primary-container text-white py-3.5 rounded-full font-bold text-sm btn-glow hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2">
              Kembali ke Dashboard <span class="material-symbols-outlined text-sm">home</span>
            </button>
            <button class="w-full glass-pill text-primary py-3.5 rounded-full font-bold text-sm active:scale-95 transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined text-sm">visibility</span> Pembahasan Soal
            </button>
          </div>
        </main>
      </div>`;

// 2. REWRITE STATISTIK (VIEW 9)
const statistikNew = `
      <!-- ======================================================== -->
      <!-- VIEW 7: STATISTIK & EVALUASI BELAJAR -->
      <!-- ======================================================== -->
      <div v-else-if="currentView === 'statistik'">
        <header class="w-full max-w-lg mx-auto px-4 h-14 flex items-center justify-between border-b border-white/60 sticky top-0 z-40 bg-surface/80 backdrop-blur-md">
          <div class="flex items-center space-x-2.5">
            <div class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-[20px]">bar_chart</span>
            </div>
            <div>
              <h1 class="text-xs font-bold text-on-surface uppercase truncate">Statistik Belajar</h1>
              <span class="text-[10px] font-medium text-emerald-600 leading-relaxed truncate">Analisis Kesiapan SKD 2026</span>
            </div>
          </div>
          <div class="flex items-center space-x-1.5 bg-emerald-50 border border-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-[9px] font-bold">Passing Ready</span>
          </div>
        </header>

        <main class="px-margin space-y-3 pt-3 pb-24 max-w-lg mx-auto">
          <!-- Card 1: Ringkasan Skor CAT -->
          <section class="glass-surface p-4 rounded-2xl shadow-sm border border-white/80">
            <div class="flex justify-between items-center mb-2">
              <h2 class="text-[11px] font-bold text-on-surface uppercase tracking-wider">Prediksi Skor CAT</h2>
              <span class="text-[9px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">Lolos Passing Grade</span>
            </div>

            <div class="flex items-baseline justify-between mb-2">
              <div class="flex items-baseline gap-1.5">
                <span class="text-3xl font-extrabold text-primary">{{ 350 + (totalCompletedCount * 5) }}</span>
                <span class="text-[11px] text-on-surface-variant font-medium">/ 550</span>
              </div>
              <div class="text-right">
                <p class="text-[10px] text-outline font-medium">Naik <strong class="text-emerald-500">+12 Poin</strong></p>
                <p class="text-[9px] text-outline">dari Simulasi sebelumnya</p>
              </div>
            </div>

            <div class="w-full bg-surface-container h-1.5 rounded-full overflow-hidden mt-3 relative">
              <!-- Passing grade line at approx 56% (311/550) -->
              <div class="absolute top-0 bottom-0 left-[56%] w-0.5 bg-error z-10"></div>
              <div class="h-full rounded-full bg-gradient-to-r from-primary via-primary-container to-secondary" style="width: 70%;"></div>
            </div>
            <div class="flex justify-between mt-1 px-0.5">
              <span class="text-[9px] font-medium text-outline">0</span>
              <span class="text-[9px] font-bold text-error ml-2">PG: 311</span>
              <span class="text-[9px] font-medium text-outline">550</span>
            </div>
          </section>

          <!-- Card 2: 3 Pilar Kategori Breakdown -->
          <section class="space-y-2 mt-4">
            <h2 class="text-xs font-bold text-on-surface px-1">Penguasaan Sub-Tes</h2>
            
            <article class="glass-card p-3 rounded-2xl flex items-center justify-between border border-white/80">
              <div class="flex items-center gap-3 w-full">
                <div class="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  TWK
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-end mb-1">
                    <h3 class="text-xs font-bold text-on-surface truncate">Wawasan Kebangsaan</h3>
                    <span class="text-[10px] font-bold text-primary">85/150</span>
                  </div>
                  <div class="w-full bg-surface-container h-1 rounded-full overflow-hidden relative">
                    <div class="absolute top-0 bottom-0 left-[43%] w-0.5 bg-error z-10"></div>
                    <div class="h-full rounded-full bg-primary" style="width: 56%;"></div>
                  </div>
                  <p class="text-[9px] text-on-surface-variant mt-1.5 leading-relaxed">
                    Unggul di <strong>Pilar Negara</strong>. Lemah di <strong class="text-error">Bela Negara</strong>.
                  </p>
                </div>
              </div>
            </article>

            <article class="glass-card p-3 rounded-2xl flex items-center justify-between border border-white/80">
              <div class="flex items-center gap-3 w-full">
                <div class="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  TIU
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-end mb-1">
                    <h3 class="text-xs font-bold text-on-surface truncate">Inteligensia Umum</h3>
                    <span class="text-[10px] font-bold text-secondary">110/175</span>
                  </div>
                  <div class="w-full bg-surface-container h-1 rounded-full overflow-hidden relative">
                    <div class="absolute top-0 bottom-0 left-[45%] w-0.5 bg-error z-10"></div>
                    <div class="h-full rounded-full bg-secondary" style="width: 62%;"></div>
                  </div>
                  <p class="text-[9px] text-on-surface-variant mt-1.5 leading-relaxed">
                    Sangat Cepat di <strong>Silogisme</strong>. Lambat di <strong class="text-error">Deret Angka</strong>.
                  </p>
                </div>
              </div>
            </article>

            <article class="glass-card p-3 rounded-2xl flex items-center justify-between border border-white/80">
              <div class="flex items-center gap-3 w-full">
                <div class="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary font-bold shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                  TKP
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex justify-between items-end mb-1">
                    <h3 class="text-xs font-bold text-on-surface truncate">Karakteristik Pribadi</h3>
                    <span class="text-[10px] font-bold text-tertiary">182/225</span>
                  </div>
                  <div class="w-full bg-surface-container h-1 rounded-full overflow-hidden relative">
                    <div class="absolute top-0 bottom-0 left-[73%] w-0.5 bg-error z-10"></div>
                    <div class="h-full rounded-full bg-tertiary" style="width: 80%;"></div>
                  </div>
                  <p class="text-[9px] text-on-surface-variant mt-1.5 leading-relaxed">
                    Konsisten menjawab <strong>Opsi 5 Poin</strong>.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </main>
      </div>`;

// 3. REWRITE PROFILE (VIEW 10)
const profileNew = `
      <!-- ======================================================== -->
      <!-- VIEW 8: PROFIL PENGGUNA -->
      <!-- ======================================================== -->
      <div v-else-if="currentView === 'profile'">
        <header class="w-full max-w-lg mx-auto px-4 h-14 flex items-center justify-center border-b border-white/60 sticky top-0 z-40 bg-surface/80 backdrop-blur-md">
          <h1 class="text-xs font-bold text-on-surface uppercase tracking-wider">Profil Pengguna</h1>
        </header>

        <main class="px-margin space-y-4 pt-4 pb-28 max-w-lg mx-auto relative z-10">
          <!-- Profile Identity Header -->
          <section class="glass-surface p-4 rounded-3xl flex items-center gap-4 shadow-sm border border-white/80">
            <div class="w-16 h-16 rounded-full bg-primary/10 p-1">
              <img alt="User avatar" class="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80">
            </div>
            <div class="flex-1">
              <h2 class="text-lg font-bold text-on-surface">Vikram CPNS Aspirant</h2>
              <p class="text-[11px] text-on-surface-variant mt-0.5">vikram.aspirant@cpns.go.id</p>
              <div class="mt-2 inline-flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded text-[10px] font-bold text-primary">
                <span class="material-symbols-outlined text-[12px]">military_tech</span>
                Level 12 • Pejuang NIP
              </div>
            </div>
          </section>

          <!-- Stats/Streaks Grid -->
          <section class="grid grid-cols-2 gap-3">
            <div class="glass-card p-3 rounded-2xl flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500">
                <span class="material-symbols-outlined text-lg">local_fire_department</span>
              </div>
              <div>
                <p class="text-[10px] font-medium text-outline uppercase tracking-wider">Streak</p>
                <p class="text-sm font-bold text-on-surface">14 Hari</p>
              </div>
            </div>
            <div class="glass-card p-3 rounded-2xl flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                <span class="material-symbols-outlined text-lg">workspace_premium</span>
              </div>
              <div>
                <p class="text-[10px] font-medium text-outline uppercase tracking-wider">Total XP</p>
                <p class="text-sm font-bold text-on-surface">12,450</p>
              </div>
            </div>
          </section>

          <!-- Settings List -->
          <section class="glass-surface rounded-2xl overflow-hidden shadow-sm border border-white/80">
            <h3 class="text-[10px] font-bold text-outline px-4 pt-3 pb-1 uppercase tracking-wider">Pengaturan Akun</h3>
            
            <button class="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-container/50 transition-colors active:bg-surface-variant">
              <div class="flex items-center gap-3 text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-outline">notifications</span>
                <span class="text-xs font-semibold">Notifikasi & Pengingat Belajar</span>
              </div>
              <span class="material-symbols-outlined text-[18px] text-outline-variant">chevron_right</span>
            </button>
            <div class="h-[1px] bg-outline-variant/20 mx-4"></div>
            
            <button class="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-container/50 transition-colors active:bg-surface-variant">
              <div class="flex items-center gap-3 text-on-surface">
                <span class="material-symbols-outlined text-[18px] text-outline">edit_document</span>
                <span class="text-xs font-semibold">Ubah Instansi / Formasi Target</span>
              </div>
              <span class="material-symbols-outlined text-[18px] text-outline-variant">chevron_right</span>
            </button>
            <div class="h-[1px] bg-outline-variant/20 mx-4"></div>
            
            <button @click="resetProgress()" class="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-container/50 transition-colors active:bg-surface-variant">
              <div class="flex items-center gap-3 text-error">
                <span class="material-symbols-outlined text-[18px]">restart_alt</span>
                <span class="text-xs font-bold">Reset Semua Progres Modul</span>
              </div>
              <span class="text-[9px] bg-error/10 text-error px-1.5 py-0.5 rounded font-bold">DANGER</span>
            </button>
          </section>

          <!-- App Info -->
          <p class="text-center text-[10px] text-outline font-medium pt-2 pb-6">
            CPNS GO v2.1.0 (Aspirant Learning System)<br>
            Design by Stitch System
          </p>
        </main>
      </div>`;


let content = html;

// Ganti view 8: cat-result
const startCatResult = content.indexOf("<div v-else-if=\"currentView === 'cat-result'\">");
const startStatistik = content.indexOf("<div v-else-if=\"currentView === 'statistik'\">");
if (startCatResult !== -1 && startStatistik !== -1) {
  content = content.substring(0, startCatResult) + catResultNew + "\\n" + content.substring(startStatistik);
}

// Ganti view 9: statistik
const startProfile = content.indexOf("<div v-else-if=\"currentView === 'profile'\">");
if (startStatistik !== -1 && startProfile !== -1) {
  // need to re-find startStatistik because content length changed
  const newStartStatistik = content.indexOf("<div v-else-if=\"currentView === 'statistik'\">");
  content = content.substring(0, newStartStatistik) + statistikNew + "\\n" + content.substring(startProfile);
}

// Ganti view 10: profile
const startNav = content.indexOf("<!-- SHARED COMPONENT: BottomNavBar");
if (startProfile !== -1 && startNav !== -1) {
  const newStartProfile = content.indexOf("<div v-else-if=\"currentView === 'profile'\">");
  content = content.substring(0, newStartProfile) + profileNew + "\\n" + content.substring(startNav);
}

fs.writeFileSync('public/index.html', content);
console.log('Restructured extra views applied.');