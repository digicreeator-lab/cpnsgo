const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('E2E Workflow CPNS GO', () => {
  test.use({ viewport: { width: 390, height: 844 } }); // iPhone 12 Pro dimensions

  test('Simulasi alur pengguna penuh', async ({ page }) => {
    const filePath = `file://${path.resolve(__dirname, 'public/index.html')}`;
    await page.goto(filePath);

    // 1. DASHBOARD
    await expect(page.locator('h1').filter({ hasText: 'Vikram CPNS Aspirant' })).toBeVisible();
    await page.screenshot({ path: 'screenshots/1-dashboard.png', fullPage: true });
    console.log('✅ Dashboard berhasil dirender.');

    // 2. NAVIGASI KE DAFTAR MODUL
    // Klik "Semua" di Lanjutkan Belajar
    await page.locator('button', { hasText: 'Semua' }).click();
    await expect(page.locator('h1', { hasText: 'MODUL TWK' }).first()).toBeVisible();
    await page.screenshot({ path: 'screenshots/2-module-list.png', fullPage: true });
    console.log('✅ Daftar Modul berhasil dirender.');

    // 3. BUKA DETAIL MODUL
    // Pilih modul pertama (yang terbuka)
    await page.locator('article.glass-card').first().click();
    await expect(page.locator('h3', { hasText: 'Tujuan Pembelajaran' }).first()).toBeVisible();
    await page.screenshot({ path: 'screenshots/3-module-detail.png', fullPage: true });
    console.log('✅ Detail Modul berhasil dirender.');

    // 4. MULAI KUIS
    await page.locator('button', { hasText: 'Mulai Kuis Modul' }).click();
    await expect(page.locator('span', { hasText: 'Soal 1' }).first()).toBeVisible();
    await page.screenshot({ path: 'screenshots/4-quiz-wizard.png', fullPage: true });
    console.log('✅ Kuis Wizard berhasil dirender.');

    // Jawab 5 pertanyaan
    for (let i = 0; i < 5; i++) {
      // Pilih opsi pertama (A)
      await page.locator('label.cursor-pointer').first().click();
      // Klik Selanjutnya atau Selesaikan
      if (i < 4) {
        await page.locator('button', { hasText: 'Selanjutnya' }).click();
      } else {
        await page.locator('button', { hasText: 'Selesaikan Kuis' }).click();
      }
    }

    // 5. HASIL KUIS
    await expect(page.locator('h1', { hasText: 'Hasil Evaluasi' }).first()).toBeVisible();
    await page.screenshot({ path: 'screenshots/5-quiz-result.png', fullPage: true });
    console.log('✅ Hasil Kuis berhasil dirender.');

    // Kembali ke Daftar Modul
    await page.locator('button', { hasText: 'Kembali ke Daftar Modul' }).click();

    // Kembali ke Dashboard lewat bottom nav
    await page.locator('nav').locator('a').filter({ hasText: 'Home' }).click();

    // 6. MULAI SIMULASI CAT
    await page.locator('button', { hasText: 'Daftar' }).click();
    
    // Halaman intro CAT
    await expect(page.locator('span', { hasText: 'SIMULASI NASIONAL SKD' }).first()).toBeVisible();
    await page.screenshot({ path: 'screenshots/6-cat-intro.png', fullPage: true });
    
    // Mulai Tryout
    await page.locator('button', { hasText: 'Mulai Tryout Sekarang' }).click();
    
    // Halaman Simulasi CAT
    await expect(page.locator('h1', { hasText: 'Simulasi CAT SKD' }).first()).toBeVisible();
    // Buka palet
    await page.locator('button', { hasText: 'Palet' }).click();
    await page.waitForTimeout(500); // Tunggu modal terbuka
    await page.screenshot({ path: 'screenshots/7-cat-sim-palette.png', fullPage: true });
    console.log('✅ Simulasi CAT berhasil dirender beserta modal palet.');
  });
});
