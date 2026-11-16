const { test, expect } = require('@playwright/test');

// Karena saya sebagai AI tidak tahu password NIK dari backend production Anda, 
// mohon ganti 'NAMA_PENGGUNA' dan 'PASSWORD_PENGGUNA' ini dengan salah satu akun dummy/member yang Anda miliki.
const TEST_USER = process.env.TEST_USER || 'GANTI_SAYA_USERNAME';
const TEST_PASS = process.env.TEST_PASS || 'GANTI_SAYA_PASSWORD';

test('Alur Penuh: Login -> Kerjakan Kuis -> Reset Progress', async ({ page }) => {
  // Hanya tes jika kredensial sudah diisi oleh user
  if (TEST_USER === 'GANTI_SAYA_USERNAME') {
    console.log("=== SKIPPING TEST: Tolong jalankan dengan akun valid Anda menggunakan ENV vars ===");
    console.log("Jalankan di PowerShell: $env:TEST_USER='nik'; $env:TEST_PASS='password'; npx playwright test e2e-reset.spec.js");
    return;
  }

  console.log(`Mulai pengujian untuk user: ${TEST_USER}`);
  await page.goto('http://localhost:5173/'); // Atau port lokal yang sedang dipakai, fallback file
  
  // Karena ini file SPA statis di repo CPNSGO, buka file lokal
  await page.goto('file:///' + process.cwd().replace(/\\/g, '/') + '/public/index.html');
  
  // Tunggu Splash Screen hilang
  await page.waitForTimeout(500);

  // 1. LOGIN
  console.log('1. Melakukan Login...');
  await page.fill('input[type="text"]', TEST_USER);
  await page.fill('input[type="password"]', TEST_PASS);
  await page.click('button[type="submit"]');

  // Tunggu masuk ke Dashboard (Cek teks "Progress Belajar")
  await expect(page.locator('text=Progress Belajar')).toBeVisible({ timeout: 10000 });

  // 2. KERJAKAN KUIS (TWK-1)
  console.log('2. Mengerjakan Kuis...');
  await page.click('text=Mulai Belajar'); // Buka kategori
  await page.waitForTimeout(500);
  
  // Pilih modul TWK pertama
  const moduleCard = page.locator('.cursor-pointer').filter({ hasText: 'TWK' }).first();
  await moduleCard.click();
  
  // Masuk kuis
  await page.click('text=Mulai Kuis Modul');
  
  // Simulasi klik jawaban "A" untuk semua pertanyaan dan klik Lanjut
  for (let i = 0; i < 5; i++) {
    await page.waitForTimeout(300);
    const optionA = page.locator('button').filter({ hasText: /^A\s/ }).first();
    await optionA.click();
    await page.click('text=Simpan & Lanjut');
  }

  // Tonton hasil dan klik Selesai
  await page.waitForTimeout(500);
  await page.click('text=Selesai');

  // 3. CEK PROGRESS MASUK
  console.log('3. Mengecek Progress Setelah Kuis...');
  await page.click('text=Kembali ke Daftar Modul');
  await page.waitForTimeout(500);
  
  // Masuk menu Profil
  await page.click('a[href="#/profile"]');
  await expect(page.locator('text=Profil Pengguna')).toBeVisible();
  
  // Catat progress sebelum reset
  const progressTextBefore = await page.locator('.text-primary.font-bold').first().innerText();
  console.log(`Progress Sebelum Reset: ${progressTextBefore}`);

  // 4. RESET PROGRESS
  console.log('4. Mereset Progress...');
  await page.click('button:has-text("Reset Seluruh Progres")');
  await page.waitForTimeout(500);
  
  // Konfirmasi Modal Delete
  await page.click('button:has-text("Ya, Reset Data")');
  
  // Tunggu notifikasi dan auto-reload
  await page.waitForTimeout(3000); 

  // 5. VALIDASI RESET BERHASIL
  console.log('5. Memvalidasi Progress Setelah Reset...');
  // Kembali login (karena ter-reload dan cache dihapus total)
  await page.fill('input[type="text"]', TEST_USER);
  await page.fill('input[type="password"]', TEST_PASS);
  await page.click('button[type="submit"]');

  await expect(page.locator('text=Progress Belajar')).toBeVisible({ timeout: 10000 });
  
  // Progress harus 0%
  const progressTextAfter = await page.locator('.text-primary.font-bold').first().innerText();
  console.log(`Progress Setelah Reset: ${progressTextAfter}`);
  
  expect(progressTextAfter).toContain('0%');
  console.log('✅ PENGUJIAN BERHASIL! Data berhasil di-reset sepenuhnya.');
});