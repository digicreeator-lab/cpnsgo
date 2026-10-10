# Rencana: Perbaikan UI Semua Halaman CPNSGO

## Context
User melaporkan tampilan beberapa halaman "kurang rapi". Audit statis lengkap terhadap 11 view di `public/index.html` (login, dashboard, module-list, module-detail, quiz, quiz-result, cat-intro, cat-sim, cat-result, statistik, profile) menghasilkan daftar defect konkret di bawah. Mode plan aktif — eksekusi menyusul setelah approval.

## Daftar Defect (hasil audit statis)

### A. HTML/Class Rusak (prioritas tinggi)
1. **profile ~1794–1801**: tombol "Reset Semua Progres Modul" tidak ditutup `</button>` → divider & tombol Logout jadi nested/invalid.
2. **cat-sim 1282/1286/1290**: `hover:` kosong (class yatim) pada tab kategori non-aktif.
3. **module-detail 760**: `class="/30 ..."` → `bg-primary-fixed/30` (banding sibling 771: `bg-secondary-fixed/30`).
4. **module-detail 775**: `class="/35 ..."` → kembalikan bg (mis. `bg-surface-container-highest/40`), verifikasi visual.
5. **cat-result 1456**: `flex-shrink-0  /30` → buang `/30` yatim.
6. **dashboard 460**: `py-0.2` invalid → `py-0.5`.

### B. Padding Duplikat/Konflik (Tailwind menentukan menang via urutan CSS, bukan urutan atribut → hasil tidak terprediksi)
Aturan: pertahankan SATU nilai (yang kedua / lebih kecil = override yang diinginkan), hapus yang pertama.
- `p-6 p-4 rounded-xl px-4 py-3` → `px-4 py-3` (361, 388, 415, 453)
- `p-6 p-4` → `p-4` (1153, 1604, 1736)
- `p-6 p-6` → `p-6` (1469)
- `p-6 ... p-3` → `p-3` (1637, 1658, 1679, 1752, 1761, 1637-block)
- `p-6 ... p-3.5` → `p-3.5` (782, 1003)
- `p-6 ... p-4` → `p-4` (676, 880, 1532/1541/1550/1559, 1773)
- `p-6 ... p-5` → `p-5` (967)
- `p-3 p-3` → `p-3` (1183, 1197, 1211)
- `p-3 rounded-full p-1.5` → `p-1.5` (928 nav dock quiz)

### C. Background/Elemen Visual Hilang (kemungkinan ter-strip oleh `fix_*.js` lama)
Pulihkan dengan membandingkan elemen sibling yang utuh + verifikasi visual:
- 306: blur circle hero dashboard tanpa warna.
- 364, 1185, 1588, 1639: chip ikon TWK tanpa bg (TIU/TKP punya `bg-secondary-fixed`/`bg-tertiary-fixed`) → beri `bg-primary-fixed` dsb.
- 752, 763: kotak sub-poin tanpa bg.
- 788, 796, 804: step APS tanpa bg.
- 832, 892: header & info box quiz tanpa bg (menembus konten).
- 955, 984, 1003: header quiz-result & kapsul passing grade tanpa bg.
- 1112, 1256, 1272, 1338, 1342: elemen cat-sim/cat-intro tanpa bg.
- 1737: avatar profile ring hilang.

### D. Layout/UX Per View
- **quiz (827)**: judul header `text-2xl` wrap 2 baris + node progress "5" terpotong tepi kanan → turunkan judul ke `text-base/sm`, beri `overflow-x-auto no-scrollbar` pada baris node (861), atau kurangi jumlah node.
- **quiz**: opsi E tertutup sticky footer → `main` 828 tambah padding bawah (mis. `pb-28`), footer 928 `bottom-4` dipastikan tidak overlap.
- **quiz-result**: "Lihat Semua" terpotong tepi kanan (perlu cek blok ~1100).
- **cat-result**: area kosong besar di bawah konten sebelum bottom nav (main `pb-24` vs konten pendek) → cek spacing/`min-h`.
- **dashboard 280**: sisa class `dark:` (tidak relevan, tema terang) → bersihkan.
- **Semua header sticky** (`bg-surface/80`) menembus konten saat scroll → tambah `backdrop-blur-xl` bila belum ada (beberapa sudah).

## Langkah Eksekusi

1. **Screenshot segar dulu (baseline)** — jalankan capture Playwright untuk semua view (login → dashboard → module-list → module-detail → quiz → quiz-result → cat-intro → cat-sim → cat-result → statistik → profile) ke `screenshots/before/`. (File capture baru = file sementara; akan dihapus saat cleanup.)
2. **Perbaikan kelas A+B** di `public/index.html` (edit presisi per baris, tanpa refactor lain — mengikuti aturan scope ketat AGENTS.md).
3. **Perbaikan kelas C** (pulihkan bg) — verifikasi per elemen dengan membanding sibling + screenshot.
4. **Perbaikan kelas D** (layout quiz, spacing, header) — putuskan nilai final berdasarkan screenshot before/after.
5. **Screenshot after** → bandingkan per view, iterasi bila ada yang masih janggal.
6. **QC wajib (AGENTS.md §9)**:
   - `npx impeccable detect public/index.html` → harus exit 0.
   - Setup QC: `npm init -y` bila perlu, `npm i -D @playwright/test`, `npx playwright install`.
   - Tulis `qc-test.spec.js` (render tiap view + interaksi + cek console error), jalankan `npx playwright test qc-test.spec.js --headed` (tanpa `--ui`).
   - PASS → hapus `qc-test.spec.js` + `test-results/`; FAIL → perbaiki hanya baris bermasalah, minta izin, ulangi.
7. **Rapikan artefak** (perlu approval): `fix_*.js`, `temp.html`, `capture.js` lama, `screenshots/` basi bertanda salah, `index_test.html` (diff?). Jangan hapus tanpa izin.
8. **Commit** (hanya bila user minta): `fix: rapikan UI semua view` — file: `public/index.html` saja.

## File Terkait
- `public/index.html` — satu-satunya target edit.
- `AGENTS.md` — protocol QC.
- `screenshots/`, `qc-test.spec.js`, `test-results/` — siklus QC (dibersihkan setelah).

## Keputusan User (sudah dikonfirmasi)
1. Urutan: **baseline screenshot dulu** → fix → screenshot after.
2. **Cleanup artefak sekarang** (sebelum mulai): `fix_*.js`, `temp.html`, screenshot basi; `index_test.html` diflag dulu sebelum dihapus.
3. Defect layout: **boleh ubah struktur kecil** (judul, padding, overflow) — tanpa merombak komponen.

## Persetujuan
- [ ] User menyetujui rencana → eksekusi dimulai.
