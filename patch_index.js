const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Add currentView === 'login' block
const loginHtml = `
      <!-- ======================================================== -->
      <!-- VIEW 0: LOGIN -->
      <!-- ======================================================== -->
      <div v-if="currentView === 'login'" class="min-h-screen flex flex-col items-center justify-center px-6">
        <div class="glass-panel p-8 rounded-3xl w-full max-w-sm space-y-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-container text-primary rounded-2xl mx-auto flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-3xl">school</span>
            </div>
            <h1 class="text-2xl font-bold text-on-surface">CPNS GO</h1>
            <p class="text-xs text-on-surface-variant mt-2">Aspirant Learning System</p>
          </div>
          <form @submit.prevent="doLogin" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-on-surface mb-1">Username / NIK</label>
              <input v-model="loginForm.username" type="text" required class="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
            </div>
            <div>
              <label class="block text-xs font-bold text-on-surface mb-1">Password / Tahun Lahir</label>
              <input v-model="loginForm.password" type="password" required class="w-full bg-surface border border-outline-variant rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all">
            </div>
            <div v-if="loginForm.error" class="text-xs text-error font-medium p-2 bg-error-container/50 rounded-lg text-center">
              {{ loginForm.error }}
            </div>
            <button type="submit" :disabled="loginForm.loading" class="w-full bg-primary text-on-primary rounded-xl px-4 py-3 text-sm font-bold active:scale-95 transition-transform flex items-center justify-center gap-2">
              <span v-if="loginForm.loading" class="material-symbols-outlined animate-spin text-lg">autorenew</span>
              <span>{{ loginForm.loading ? 'Memproses...' : 'Masuk' }}</span>
            </button>
          </form>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- VIEW 1: DASHBOARD UTAMA (Screen: b1bcd92fd186428184ffabd38497a44a) -->
      <!-- ======================================================== -->
      <div v-else-if="currentView === 'dashboard'">
`;

html = html.replace(/<\!-- \={56} -->\s*<\!-- VIEW 1: DASHBOARD UTAMA[^>]+-->\s*<\!-- \={56} -->\s*<div v-if="currentView === 'dashboard'">/, loginHtml);

// 2. Change Profile Name statically to reactive auth.user.username
html = html.replace(/<h1 class="text-2xl font-bold text-on-surface leading-relaxed">Vikram CPNS Aspirant<\/h1>/, `<h1 class="text-2xl font-bold text-on-surface leading-relaxed">{{ auth.user ? auth.user.username : 'User' }}</h1>`);
html = html.replace(/<h1 class="text-base font-bold text-on-surface leading-relaxed">Vikram<\/h1>/, `<h1 class="text-base font-bold text-on-surface leading-relaxed">{{ auth.user ? auth.user.username : 'User' }}</h1>`);
html = html.replace(/<h2 class="text-lg font-bold text-on-surface">Vikram CPNS Aspirant<\/h2>/, `<h2 class="text-lg font-bold text-on-surface">{{ auth.user ? auth.user.username : 'User' }}</h2>`);
html = html.replace(/<h2 class="text-lg font-bold text-on-surface">Vikram<\/h2>/, `<h2 class="text-lg font-bold text-on-surface">{{ auth.user ? auth.user.username : 'User' }}</h2>`);
html = html.replace(/<p class="text-\[11px\] text-on-surface-variant mt-0.5">vikram\.aspirant@cpns\.go\.id<\/p>/, `<p class="text-[11px] text-on-surface-variant mt-0.5">{{ auth.user ? auth.user.role : 'Member' }}</p>`);
html = html.replace(/<p class="text-\[11px\] text-on-surface-variant mt-0.5">vikram@cpns\.go\.id<\/p>/, `<p class="text-[11px] text-on-surface-variant mt-0.5">{{ auth.user ? auth.user.role : 'Member' }}</p>`);

// Add logout button in Profile
const logoutHtml = `
            <div class="h-[1px] bg-outline-variant/20 mx-4"></div>

            <button @click="doLogout()" class="w-full flex items-center justify-between px-4 py-3 hover:bg-surface-container/50 transition-colors active:bg-surface-variant">
              <div class="flex items-center gap-3 text-error">
                <span class="material-symbols-outlined text-[18px]">logout</span>
                <span class="text-xs font-bold">Logout</span>
              </div>
            </button>
          </section>`;
html = html.replace(/<\/button>\s*<\/section>\s*<\!-- App Info -->/s, logoutHtml + '\n\n          <!-- App Info -->');

// 3. Add getScores list to Statistik view
const riwayatHtml = `
          <!-- Riwayat Skor -->
          <section class="mt-6 space-y-3 pb-6">
            <h2 class="text-xs font-bold text-on-surface px-1">Riwayat Aktivitas</h2>
            <div v-if="!riwayatSkor || riwayatSkor.length === 0" class="text-center py-6 text-on-surface-variant text-xs">Belum ada riwayat aktivitas.</div>
            <div v-else class="space-y-2">
              <div v-for="(item, i) in riwayatSkor" :key="i" class="glass-panel p-3 rounded-xl border border-outline-variant flex justify-between items-center">
                <div class="flex gap-3 items-center">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px]" :class="item.tipe === 'CAT' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'">
                    {{ item.tipe }}
                  </div>
                  <div>
                    <p class="text-xs font-bold text-on-surface">{{ item.kategori || (item.tipe==='CAT' ? 'Simulasi CAT' : 'Kuis') }}</p>
                    <p class="text-[9px] text-on-surface-variant mt-0.5">{{ new Date(item.timestamp).toLocaleString('id-ID') }}</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-sm font-bold" :class="item.lulus ? 'text-emerald-600' : 'text-amber-600'">{{ item.skor }} / {{ item.maks }}</p>
                  <p v-if="item.lulus" class="text-[9px] bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded inline-block mt-0.5">Lulus</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>`;
html = html.replace(/<\/main>\s*<\/div>\s*<\!-- \={56} -->\s*<\!-- VIEW 8: PROFIL PENGGUNA -->/, riwayatHtml + '\n\n      <!-- ======================================================== -->\n      <!-- VIEW 8: PROFIL PENGGUNA -->');


// 4. Inject script logic
const scriptInject = `
    // --- IPN API Integration ---
    const IPN_API_URL = 'https://ipn-api-proxy.digicreeator.workers.dev';
    
    // Helper API
    const ipnApi = async (action, args) => {
      if (USE_MOCK) {
        if (action === 'loginUser') return { success: true, token: 'mock-token', data: { username: args[0], role: 'Member' } };
        if (action === 'validateToken') return { valid: true, user: { username: 'mock_user', role: 'Member' } };
        if (action === 'saveScore') { console.log('Mock saveScore:', args); return { success: true }; }
        if (action === 'getScores') return { success: true, data: [] };
      }
      const response = await fetch(IPN_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, args }),
        redirect: 'follow'
      });
      if (!response.ok) throw new Error('API Error ' + response.status);
      return response.json();
    };
    // -------------------------

    createApp({
      setup() {
        const auth = ref({ token: '', user: null, isLoggedIn: false });
        const loginForm = ref({ username: '', password: '', loading: false, error: '' });
        const riwayatSkor = ref([]);
        const lastCatHash = ref('');
`;
html = html.replace(/createApp\(\{\s*setup\(\)\s*\{/, scriptInject);

// Gate and Methods
const logicInject = `
        const doLogin = async () => {
          if (!loginForm.value.username || !loginForm.value.password) return;
          loginForm.value.loading = true;
          loginForm.value.error = '';
          try {
            const res = await ipnApi('loginUser', [loginForm.value.username, loginForm.value.password]);
            if (res.success) {
              auth.value = { token: res.token, user: res.data, isLoggedIn: true };
              localStorage.setItem('cpnsgo_auth', JSON.stringify(auth.value));
              currentView.value = 'dashboard';
              showToast('Login berhasil!');
              loadProgress();
            } else {
              loginForm.value.error = res.message || 'Login gagal';
            }
          } catch (e) {
            loginForm.value.error = 'Kesalahan jaringan. Coba lagi.';
          } finally {
            loginForm.value.loading = false;
          }
        };

        const doLogout = () => {
          auth.value = { token: '', user: null, isLoggedIn: false };
          localStorage.removeItem('cpnsgo_auth');
          currentView.value = 'login';
          modules.value = JSON.parse(JSON.stringify(defaultModules)); // reset local view
        };

        const saveScore = async (payload) => {
          if (!auth.value.isLoggedIn) return;
          try {
            await ipnApi('saveScore', [payload, auth.value.token]);
          } catch(e) {
            console.error('Failed to sync score:', e);
          }
        };

        const fetchRiwayat = async () => {
          if (!auth.value.isLoggedIn) return;
          try {
            const res = await ipnApi('getScores', [auth.value.token, 10]);
            if (res.success) riwayatSkor.value = res.data;
          } catch(e) {}
        };

        // Check Auth on Mount
        onMounted(async () => {
          const savedAuth = localStorage.getItem('cpnsgo_auth');
          if (savedAuth) {
            const parsed = JSON.parse(savedAuth);
            auth.value = parsed;
            // Validate token
            try {
              const res = await ipnApi('validateToken', [parsed.token]);
              if (!res.valid) {
                showToast(res.message);
                doLogout();
                return;
              }
            } catch(e) {}
            loadProgress();
          } else {
            currentView.value = 'login';
          }
        });
`;
html = html.replace(/onMounted\(\(\) => \{\s*loadProgress\(\);\s*\}\);/, logicInject);

// Inject saveScore into finishQuiz
const saveQuizInject = `
            saveProgress();
            // Sync to IPN Backend
            saveScore({
              tipe: 'QUIZ',
              refId: targetMod.id,
              kategori: targetMod.category,
              skor: score,
              maks: 5,
              lulus: score >= 3
            });
          }

          currentView.value = 'quiz-result';`;
html = html.replace(/saveProgress\(\);\s*\}\s*currentView\.value = 'quiz-result';/, saveQuizInject);

// Inject saveScore into finishCat
const saveCatInject = `
          catResult.value = finalRes;
          localStorage.setItem('cpns_go_last_cat', JSON.stringify(finalRes));
          
          // Sync to IPN Backend
          saveScore({
            tipe: 'CAT',
            refId: 'CAT-SIM',
            kategori: 'SKD',
            skor: totalScore,
            maks: 550,
            lulus: isPassed,
            detail: finalRes
          });
          lastCatHash.value = Date.now().toString(); // trigger stat refresh

          currentView.value = 'cat-result';
`;
html = html.replace(/catResult\.value = finalRes;\s*localStorage\.setItem\('cpns_go_last_cat', JSON\.stringify\(finalRes\)\);\s*currentView\.value = 'cat-result';/, saveCatInject);

// Fetch riwayat when opening statistik
const viewWatchInject = `
        watch(currentView, (newView) => {
          if (newView === 'cat-sim' && (!catQuestions.value || catQuestions.value.length === 0)) {
            startCatSimulation();
          }
          if (newView === 'statistik') {
            fetchRiwayat();
          }
        });
`;
html = html.replace(/watch\(currentView, \(newView\) => \{\s*if \(newView === 'cat-sim' && \(!catQuestions\.value \|\| catQuestions\.value\.length === 0\)\) \{\s*startCatSimulation\(\);\s*\}\s*\}\);/, viewWatchInject);

// Add to return
const returnInject = `return {
          auth,
          loginForm,
          doLogin,
          doLogout,
          riwayatSkor,
          currentView,`;
html = html.replace(/return\s*\{\s*currentView,/, returnInject);

fs.writeFileSync('public/index.html', html);
console.log('Patch complete.');
