# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## CPNS GO

**STATUS: DRAFT SEMENTARA**

| | |
| --- | --- |
| **Nama Produk** | CPNS GO |
| **Versi Dokumen** | v0.1 (Detailed PRD) |
| **Disusun oleh** | Senior Product Manager & Technical Architect |
| **Untuk** | Pemilik Produk / Klien |
| **Tanggal** | 1 Oktober 2026 |
| **Tech Stack Terkunci** | Single HTML5 + Vue.js 3 CDN + Tailwind CSS CDN + Google Apps Script REST API + Google Sheets |

---

# 1. Problem Statements

Kondisi persiapan menghadapi seleksi Calon Pegawai Negeri Sipil (CPNS) saat ini masih didominasi oleh metode belajar konvensional yang tidak terstruktur. Calon peserta seringkali terjebak dalam tumpukan materi PDF statis yang tersebar di berbagai grup Telegram atau WhatsApp tanpa adanya kurikulum yang jelas. Ketidakteraturan ini menyebabkan fragmentasi pemahaman, di mana pengguna merasa kewalahan dengan volume data namun tidak memiliki peta jalan (roadmap) yang logis untuk menguasai kompetensi dasar seperti Tes Wawasan Kebangsaan (TWK), Tes Intelegensia Umum (TIU), dan Tes Karakteristik Pribadi (TKP).

Dampak dari proses yang tidak efisien ini sangat signifikan terhadap tingkat kelulusan. Banyak peserta gagal bukan karena kurangnya kecerdasan, melainkan karena kegagalan dalam manajemen waktu dan ketidakmampuan memetakan pola soal yang sering muncul. Tanpa adanya sistem umpan balik instan dan mekanisme penguncian materi (progression lock), peserta cenderung melompat-lompat antar topik tanpa benar-benar menguasai fondasi dasarnya. Hal ini menciptakan rasa percaya diri semu yang berujung pada kegagalan saat menghadapi sistem Computer Assisted Test (CAT) yang sebenarnya.

CPNS GO hadir sebagai solusi digital terintegrasi yang mengadopsi pendekatan *micro-learning* dan *gamified progression*. Aplikasi ini merampingkan seluruh materi ke dalam modul-modul spesifik yang dirancang dengan metodologi "Hacking" dan "Profiling" untuk membedah logika di balik setiap soal. Dengan sistem penguncian modul yang mewajibkan ambang batas kelulusan (passing grade) minimal 3 dari 5 soal benar, aplikasi memastikan pengguna memiliki retensi informasi yang kuat sebelum melanjutkan ke tingkat yang lebih kompleks, sehingga proses belajar menjadi lebih terukur dan disiplin.

Nilai tambah utama CPNS GO terletak pada kedalaman konten dan arsitektur teknisnya yang ringan. Berbeda dengan aplikasi kompetitor yang hanya memberikan kunci jawaban, CPNS GO menyediakan "Bedah Jawaban dengan APS" (Action-Point-Solution) dan alasan mendalam untuk setiap pilihan jawaban. Penggunaan teknologi Google Apps Script dan Google Sheets sebagai backend memastikan aplikasi ini sangat ringan diakses melalui perangkat mobile manapun tanpa memerlukan spesifikasi hardware tinggi, memberikan aksesibilitas maksimal bagi seluruh calon peserta di berbagai pelosok daerah.

# 2. Goals & Success Metrics

| Goal Statement | Measurable Metric (dengan angka spesifik) | Target Timeframe |
| --- | --- | --- |
| Meningkatkan retensi pemahaman materi pengguna melalui sistem modul terstruktur | 85% pengguna aktif berhasil membuka minimal 10 modul dalam 14 hari pertama | 3 Bulan Pasca Rilis |
| Memastikan kesiapan pengguna menghadapi simulasi CAT | Rata-rata skor simulasi CAT pengguna meningkat sebesar 40% setelah menyelesaikan seluruh modul | 6 Bulan Pasca Rilis |
| Mengoptimalkan keterlibatan pengguna harian (Daily Active Users) | Rata-rata durasi sesi pengguna di dalam aplikasi minimal 25 menit per hari | 3 Bulan Pasca Rilis |
| Menjamin performa aplikasi yang responsif pada perangkat mobile | Waktu muat (load time) aplikasi di bawah 2.5 detik pada jaringan 4G | 1 Bulan Pasca Rilis |
| Mencapai tingkat kepuasan pengguna yang tinggi terhadap materi | Skor rating rata-rata feedback modul minimal 4.7 dari 5.0 | 6 Bulan Pasca Rilis |

# 3. Target Users

| Role Name | Description | Primary Needs | Pain Points | Most Used Features |
| --- | --- | --- | --- | --- |
| **Fresh Graduate** | Lulusan baru yang belum pernah mengikuti tes CPNS. | Roadmap belajar yang jelas dan penjelasan logika dasar soal. | Bingung mulai dari mana, merasa materi terlalu luas. | Modul TWK History & TIU Logic. |
| **Honorer/Working Pro** | Pekerja yang memiliki waktu belajar terbatas di sela kesibukan. | Materi ringkas (micro-learning) yang bisa diakses cepat. | Tidak punya waktu membaca buku tebal, kelelahan mental. | Tips APS & Kuis Modul 5 Soal. |
| **Serial Applicant** | Peserta yang pernah gagal dan ingin memperbaiki skor. | Analisis mendalam mengapa pilihan jawaban tertentu salah. | Sering terjebak di soal jebakan (TKP), skor stagnan. | Profiling TKP & Bedah Jawaban. |

# 4. User Stories

| ID | User Story | Acceptance Criteria | Priority |
| --- | --- | --- | --- |
| US-01 | Sebagai Pengguna, saya ingin melihat daftar kategori soal (TWK, TIU, TKP) sehingga saya bisa memilih fokus belajar. | 1. Menampilkan 3 kartu kategori utama. 2. Menampilkan status progres di setiap kartu. | MVP |
| US-02 | Sebagai Pengguna, saya ingin mengakses modul pertama secara gratis sehingga saya bisa mencoba kualitas materi. | 1. Modul 1.1, 2.1, dan 3.1 terbuka secara default. 2. Konten modul dapat dibaca sepenuhnya. | MVP |
| US-03 | Sebagai Pengguna, saya ingin melihat detail modul (tujuan, tips, contoh soal) agar saya paham konsep sebelum kuis. | 1. Terdapat section Tujuan, Baca Tindakan, dan Tips. 2. Contoh soal memiliki bedah jawaban APS. | MVP |
| US-04 | Sebagai Pengguna, saya ingin mengerjakan kuis 5 soal dengan sistem wizard sehingga saya tidak terdistraksi. | 1. Satu soal per layar. 2. Progress bar kuis terlihat jelas. | MVP |
| US-05 | Sebagai Pengguna, saya ingin melihat hasil kuis dan alasan setiap pilihan jawaban agar saya belajar dari kesalahan. | 1. Menampilkan skor akhir. 2. Menampilkan penjelasan untuk opsi A, B, C, D, E. | MVP |
| US-06 | Sebagai Pengguna, saya ingin modul berikutnya terbuka otomatis jika saya benar minimal 3 soal sehingga saya merasa tertantang. | 1. Logika unlock berfungsi jika skor >= 3. 2. Muncul notifikasi sukses/unlock. | MVP |
| US-07 | Sebagai Pengguna, saya ingin melihat visualisasi "The Sila Radar" pada TWK sehingga saya paham keterkaitan antar sila. | 1. Grafik atau ilustrasi radar tampil jelas di mobile. 2. Penjelasan poin-poin radar tersedia. | MVP |
| US-08 | Sebagai Pengguna, saya ingin melakukan simulasi CAT secara keseluruhan untuk menguji kesiapan mental. | 1. Timer simulasi berjalan mundur. 2. Komposisi soal mencakup TWK, TIU, TKP. | MVP |
| US-09 | Sebagai Pengguna, saya ingin menerima notifikasi sukses saat berhasil menyelesaikan satu kategori sehingga saya merasa dihargai. | 1. Modal popup sukses muncul. 2. Animasi sederhana untuk pencapaian. | MVP |
| US-10 | Sebagai Pengguna, saya ingin data progres saya tersimpan secara otomatis sehingga saya bisa melanjutkan belajar nanti. | 1. Integrasi dengan Google Sheets untuk simpan status modul. 2. Data tetap ada saat aplikasi di-refresh. | MVP |

# 5. User Flow

### 5.1 Alur Utama: Belajar & Unlock Modul (Happy Path)
1. **Action Name:** Masuk Aplikasi.
   - **Description:** Pengguna membuka aplikasi berbasis web mobile.
   - **Output:** Dashboard Utama dengan kategori TWK, TIU, TKP.
2. **Action Name:** Pilih Kategori.
   - **Description:** Pengguna memilih kategori TWK.
   - **Output:** Daftar modul 1.1 - 1.7 (1.1 Terbuka, lainnya Terkunci).
3. **Action Name:** Baca Materi Modul.
   - **Description:** Pengguna membaca Tujuan, Tips, dan Bedah Soal APS.
   - **Output:** Pemahaman materi.
4. **Action Name:** Mulai Kuis Modul.
   - **Description:** Pengguna menjawab 5 soal pilihan ganda melalui wizard.
   - **Output:** Skor akhir kuis.
5. **Decision Point:** Apakah Skor >= 3?
   - **Yes:** Muncul Notifikasi Sukses, Modul 1.2 Terbuka.
   - **No:** Muncul Notifikasi Gagal, Pengguna diminta mengulang kuis atau baca materi lagi.

### 5.2 Alur Alternatif: Simulasi CAT
1. **Action Name:** Pilih Menu Simulasi CAT.
   - **Description:** Pengguna memilih menu simulasi dari navigasi bawah.
   - **Output:** Halaman instruksi simulasi dan tombol "Mulai".
2. **Action Name:** Pengerjaan Soal.
   - **Description:** Pengguna menjawab soal campuran dengan batasan waktu.
   - **Output:** Lembar jawaban digital.
3. **Action Name:** Submit Simulasi.
   - **Description:** Pengguna menekan tombol selesai atau waktu habis.
   - **Output:** Skor total dan breakdown per kategori.

# 6. Functional Requirements

| Feature ID | Feature Name | Detailed Description | Inputs | Outputs | Validation Rules | Data Structure (Sheets) |
| --- | --- | --- | --- | --- | --- | --- |
| FR-01 | Module Engine | Sistem untuk menampilkan konten modul dinamis dari database. | Module ID | Konten (Tujuan, Tips, APS) | Harus sesuai kategori | Sheet: `Master_Modules` |
| FR-02 | Quiz Wizard | Antarmuka kuis per soal dengan navigasi Next/Prev. | User Answer (A-E) | Skor & Feedback | Wajib isi semua soal | Sheet: `Master_Questions` |
| FR-03 | Progression Logic | Logika untuk membuka modul berikutnya berdasarkan skor. | Quiz Score | Status Lock/Unlock | Score >= 3 to unlock | Sheet: `User_Progress` |
| FR-04 | APS Breakdown | Menampilkan bedah jawaban dengan metode Action-Point-Solution. | Question ID | Teks Penjelasan APS | Muncul setelah kuis | Sheet: `Master_Questions` |
| FR-05 | CAT Simulator | Simulasi ujian dengan timer dan pembobotan nilai asli CPNS. | All Answers | Final Score Report | Timer otomatis berhenti | Sheet: `CAT_Results` |
| FR-06 | User Auth (Simple) | Login sederhana menggunakan Email/ID untuk simpan progres. | Email | User Session | Format email valid | Sheet: `Users` |

# 7. Non-Functional Requirements

- **UX/Design:**
    - Desain wajib Mobile-First (Viewport 360px - 414px).
    - Menggunakan Tailwind CSS untuk styling agar konsisten.
    - Ukuran font minimal 16px untuk keterbacaan materi yang panjang.
    - Tombol navigasi (Next/Back) harus mudah dijangkau jempol (Thumb Zone).
    - Loading state menggunakan skeleton screen saat menarik data dari Google Sheets.
    - Kontras warna memenuhi standar WCAG 2.0 untuk aksesibilitas.
- **Performance:**
    - First Contentful Paint (FCP) < 1.5 detik.
    - Ukuran bundle JavaScript (Vue.js + Logic) < 200KB (Gzipped).
    - Optimasi API Google Apps Script untuk merespon dalam < 800ms.
- **Security:**
    - Validasi Input di sisi client dan server (GAS) untuk mencegah injection.
    - Penggunaan API Key/Token sederhana untuk akses ke Google Apps Script.
    - Data sensitif pengguna tidak disimpan secara plain di localStorage.
- **Compatibility:**
    - Mendukung Chrome Mobile, Safari (iOS), dan Samsung Internet.
    - Responsif pada rasio layar 16:9 hingga 21:9.
- **Technical Constraints:**
    - Batasan kuota eksekusi Google Apps Script (6 menit/run).
    - Batasan baris Google Sheets (5 juta sel) - perlu pengarsipan data jika user membludak.
    - Tidak ada database relasional (SQL), semua relasi data dikelola secara manual di logic Vue.js.

# 8. Scope

## 8.1 In Scope (MVP)
| Feature | Description | Reason for Priority |
| --- | --- | --- |
| Core Modules (TWK, TIU, TKP) | Total 20 modul sesuai spesifikasi ide dasar. | Fondasi utama produk. |
| Quiz & Unlock System | Mekanisme kuis 5 soal dan syarat skor >= 3. | Diferensiasi utama aplikasi. |
| APS Explanation | Penjelasan detail jawaban Action-Point-Solution. | Nilai edukasi utama. |
| Mobile Web App | Aplikasi berbasis browser yang dioptimalkan untuk HP. | Aksesibilitas cepat tanpa install. |
| Simple Progress Tracking | Penyimpanan status modul yang sudah selesai. | Retensi pengguna. |

## 8.2 Out of Scope (Phase 2)
| Feature | Description | Reason for Delay |
| --- | --- | --- |
| CMS Panel Khusus | Dashboard admin untuk input soal tanpa buka Google Sheets. | Fokus pada user-facing feature dulu. |
| Payment Gateway | Integrasi Midtrans/Xendit untuk modul premium. | Validasi market di fase awal. |
| Pihak Ketiga (Tryout Nasional) | Integrasi dengan penyedia soal eksternal. | Kompleksitas teknis tinggi. |
| Leaderboard Global | Peringkat antar pengguna secara real-time. | Membutuhkan resource database lebih kuat. |