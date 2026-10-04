# AGENTS.md — 

## Overview
Dokumen ini berisi instruksi, protokol keamanan, dan alur kerja wajib untuk AI agent pada proyek **montrack**. 
**Status Repo Saat Ini:** Proyek ini dimulai dari nol (greenfield). Hanya berisi file dokumentasi awal (`prd.md`, `design.md`, `AGENTS.md`). Belum ada implementasi kode.

## Prerequisites & Local Setup
Karena proyek ini dibangun dari nol, setup awal sangat krusial agar tidak error:
1. **Google Apps Script (CLASP)**
   - Wajib login secara lokal: `clasp login`
   - Inisialisasi awal jika belum ada: `clasp create --type webapp --title "montrack" --rootDir ./backend`
2. **Firebase CLI**
   - Wajib login: `firebase login`
   - Inisialisasi hosting: `firebase init hosting` (pilih direktori `public`)
   - **Local Preview:** Gunakan `firebase serve` atau `firebase emulators:start` untuk testing UI lokal tanpa harus deploy ke production.
3. **Peringatan Build Tools:**
   - Tidak ada perintah `npm run dev`, Vite, atau Node.js dev server khusus. Jalankan web secara statis atau gunakan ekosistem lokal Firebase.

## 1. Tech Stack
- **Frontend**: Single File HTML5 + Vue 3 CDN + Tailwind CSS CDN
- **Backend**: Google Apps Script (CLASP)
- **Database**: Google Sheets
- **FE Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions
- **DILARANG KERAS**: Menggunakan React, Angular, Node.js backend runner, Python, Vite, Webpack, PostCSS, atau memecah komponen ke Single File Components (.vue).

## 2. Frontend Rules (Strict Single File SPA)

### 2.1 Arsitektur Single Page Application (SPA)
- Aplikasi ini ADALAH 1 File SPA murni.
- Seluruh markup HTML, CSS tambahan, Vue components, routing logika, dan API calls wajib berada utuh di dalam **SATU file `public/index.html`**.
- DILARANG memecah komponen ke dalam file `.js` terpisah.
- Routing wajib menggunakan **hash router** murni (`#/path`) tanpa page reload.

### 2.2 Component & Logic Structure
- Seluruh komponen Vue ditulis langsung sebagai JavaScript Object di dalam tag `<script>` pada `index.html`.
- Gunakan `template: \`...\`` template literal untuk render tampilan.
- Dilarang membuat file berekstensi `.vue`.

### 2.3 Aturan Komunikasi API (Google Apps Script Fetch)
- Gunakan **Native `fetch()` API** bawaan browser (dilarang menggunakan Axios, jQuery, atau library HTTP pihak ketiga).
- Selalu gunakan `redirect: 'follow'` pada setiap pemanggilan `fetch` karena endpoint Web App Google Apps Script selalu melakukan 302 redirect.
- Request `POST` ke backend GAS wajib menggunakan header `Content-Type: 'text/plain;charset=utf-8'` dan payload `JSON.stringify(data)` untuk mencegah CORS preflight OPTIONS blocking dari browser.
- Seluruh request wajib dibungkus blok `try/catch` dan di-parse via `.json()`.

### 2.4 Mockup Data System
- Sediakan variabel global `USE_MOCK = true` di dalam script.
- Jika `USE_MOCK === true`, bypass panggilan fetch dan ambil data dari object mockup lokal yang sudah disediakan di script.
- Format respon data tiruan wajib 100% identik dengan respon aktual Backend.

## 3. Design System
- Desain UI wajib mematuhi aturan visual yang didefinisikan secara mendetail pada **`design.md`**.
- Konfigurasikan warna Tailwind melalui script tag di `index.html` berdasarkan design token (tema Dark Mode Fintech) yang ada pada dokumen tersebut.

## 4. Backend Rules (Google Apps Script via CLASP)

### 4.1 Setup & Inisialisasi
- File backend utama: `backend/Code.gs` dan utilitas pendukungnya.
- Dilarang melakukan modifikasi via Web Editor Google Apps Script; seluruh sinkronisasi wajib melalui terminal via `clasp push`.

### 4.2 Standar Output Respon Backend
- Setiap respon API dari `doGet(e)` atau `doPost(e)` wajib mengembalikan JSON valid:
  `return ContentService.createTextOutput(JSON.stringify(responsePayload)).setMimeType(ContentService.MimeType.JSON);`

### 4.3 Deployment Management (Dev + Prod)
- Gunakan 1 project GAS dengan 2 Deployment ID tetap (Dev dan Prod).
- JANGAN jalankan `clasp deploy` tanpa flag ID (menghindari spam deployment ID baru).
- **Alur Update:**
  1. Update kode backend di lokal.
  2. Push ke cloud: `clasp push`
  3. Update Dev: `clasp deploy --deploymentId {DEV_DEPLOYMENT_ID} --description "Dev Update"`
  4. Pengujian via endpoint Dev.
  5. Jika valid, update Prod: `clasp deploy --deploymentId {PROD_DEPLOYMENT_ID} --description "Release Prod"`

## 5. CI/CD Otomatis & Firebase Hosting
- Frontend di-deploy secara otomatis setiap kali ada `push` ke branch `main`.
- Autentikasi CI/CD wajib menggunakan **Google Cloud Service Account** via secret `FIREBASE_SERVICE_ACCOUNT`.
- Konfigurasi workflow `.github/workflows/deploy.yml` wajib terpasang dengan step aksi `FirebaseExtended/action-hosting-deploy@v0` yang mendengarkan trigger `push` ke branch `main`.

## 6. Struktur Folder Proyek Standar
Struktur folder wajib bersih, ringkas, dan memisahkan static hosting dengan backend CLASP:

```text
montrack/
├── public/
│   └── index.html          <-- 1 file SPA utuh (HTML, Vue 3, Tailwind, Script)
├── backend/
│   ├── Code.gs             <-- Logika utama GAS & Spreadsheet
│   ├── appsscript.json
│   └── .clasp.json
├── .github/
│   └── workflows/
│       └── deploy.yml      <-- Otomasi deploy Firebase saat git push
├── firebase.json           <-- Config public folder mengarah ke "public"
├── .firebaserc             <-- ID Project Firebase target
├── .gitignore
├── prd.md                  <-- Product Requirements
├── design.md               <-- Design System Tokens
└── AGENTS.md               <-- File ini
```

## 7. Protokol Modifikasi Kode & Keselamatan AI (Strict Rules)
1. **Strict Scope Execution**: AI HANYA mengeksekusi baris atau fungsi yang diminta secara eksplisit. Dilarang merombak, memformat ulang, atau mengubah file dan logika yang tidak berkaitan.
2. **Append-Only Preferred**: Prioritaskan penambahan fungsi baru tanpa menimpa atau menghapus fungsi lama yang sudah berjalan stabil.
3. **Single File Integrity**: Jangan pernah memecah `index.html` menjadi file-file kecil terpisah kecuali ada instruksi langsung dari user.
4. **Zero Unnecessary Packages**: Dilarang menginstal atau menyarankan dependensi npm tambahan di area frontend.
5. **Konfirmasi Perubahan**: Jika sebuah solusi mengharuskan perubahan struktur dasar, AI wajib meminta izin terlebih dahulu sebelum melakukan penulisan kode.

## 8. Commit Conventions
- Format pesan commit: `{type}: {description}`
- Pilihan tipe:
  - `feat`: Penambahan fitur baru
  - `fix`: Perbaikan bug atau galat
  - `chore`: Penyesuaian konfigurasi atau maintenance
  - `docs`: Penambahan atau pembaruan dokumentasi

## 9. PROTOKOL QUALITY CONTROL (QC) FRONTEND (DESIGN & FUNCTIONAL)
Setiap kali Anda selesai menulis, merangkai, atau memperbarui kode Frontend SPA Vue 3 di `public/index.html`, Anda WAJIB melakukan Quality Control (QC) mandiri dua lapis: **Design Quality Gate (Impeccable)** dan **Functional UI (Playwright CLI)**.

**Langkah-langkah QC yang harus Anda jalankan berurutan:**
1. **Quality Gate Desain (Impeccable Anti-Pattern Detection):**
   - Jalankan verifikasi desain di terminal: `npx impeccable detect public/index.html`
   - **Wajib Exit Code 0 (0 anti-patterns).**
   - Jika ditemukan temuan (Exit Code 2): Analisis temuan (e.g. `nested-cards`, `cramped-padding`, `skipped-heading`, `overused-font`), perbaiki kode `public/index.html` agar sesuai design token, lalu jalankan ulang sampai bersih (Exit Code 0).
2. **Persiapan Dependensi Fungsional (Eksekusi via Terminal):**
   - Periksa apakah `package.json` ada di root proyek. Jika tidak, jalankan `npm init -y`.
   - Periksa apakah `@playwright/test` terinstal. Jika belum, jalankan `npm install -D @playwright/test`.
   - Pastikan browser engine siap dengan menjalankan `npx playwright install`.
3. **Pembuatan Skrip Tes Sementara:**
   - Buat file pengujian terpisah bernama `qc-test.spec.js`.
   - Tulis skenario tes untuk memverifikasi render UI utama pada `public/index.html`, interaksi elemen (klik tombol, kemunculan modal), dan memastikan tidak ada error pada console browser.
4. **Eksekusi Pengujian Fungsional:**
   - Jalankan tes di terminal menggunakan perintah: `npx playwright test qc-test.spec.js --headed`
   - Dilarang keras menggunakan bendera `--ui` agar proses terminal tidak menggantung (hang).
5. **Evaluasi, Cleanup, dan Pelaporan:**
   - **Jika LULUS (PASS):** Hapus file `qc-test.spec.js` dan folder artifact pengujian (`test-results/`) dari workspace untuk mempertahankan struktur statis proyek, lalu laporkan hasil pengujian dalam format tabel ringkas.
   - **Jika GAGAL (FAIL) / Ditemukan Bugs:** Analisis log terminal untuk mencari penyebab error. Selesaikan HANYA baris kode di `public/index.html` yang bermasalah tanpa merubah struktur kode yang sudah ada. Konfirmasi izin perbaikan kode kepada saya, lalu ulangi eksekusi pengujian.
---

# Ponytail, lazy senior dev mode (Ruleset)

You are a lazy senior developer. Lazy means efficient, not careless. The best code is the code never written.

Before writing any code, stop at the first rung that holds:

1. Does this need to be built at all? (YAGNI)
2. Does it already exist in this codebase? Reuse the helper, util, or pattern that's already here, don't re-write it.
3. Does the standard library already do this? Use it.
4. Does a native platform feature cover it? Use it.
5. Does an already-installed dependency solve it? Use it.
6. Can this be one line? Make it one line.
7. Only then: write the minimum code that works.

The ladder runs after you understand the problem, not instead of it: read the task and the code it touches, trace the real flow end to end, then climb.

Bug fix = root cause, not symptom: a report names a symptom. Grep every caller of the function you touch and fix the shared function once � one guard there is a smaller diff than one per caller, and patching only the path the ticket names leaves a sibling caller still broken.

Rules:

- No abstractions that weren't explicitly requested.
- No new dependency if it can be avoided.
- No boilerplate nobody asked for.
- Deletion over addition. Boring over clever. Fewest files possible.
- Shortest working diff wins, but only once you understand the problem. The smallest change in the wrong place isn't lazy, it's a second bug.
- Question complex requests: "Do you actually need X, or does Y cover it?"
- Pick the edge-case-correct option when two stdlib approaches are the same size, lazy means less code, not the flimsier algorithm.
- Mark deliberate simplifications that cut a real corner with a known ceiling (global lock, O(n�) scan, naive heuristic) with a \ponytail:\ comment naming the ceiling and upgrade path.

Not lazy about: understanding the problem (read it fully and trace the real flow before picking a rung, a small diff you don't understand is just laziness dressed up as efficiency), input validation at trust boundaries, error handling that prevents data loss, security, accessibility, the calibration real hardware needs (the platform is never the spec ideal, a clock drifts, a sensor reads off), anything explicitly requested. Lazy code without its check is unfinished: non-trivial logic leaves ONE runnable check behind, the smallest thing that fails if the logic breaks (an assert-based demo/self-check or one small test file; no frameworks, no fixtures). Trivial one-liners need no test.
