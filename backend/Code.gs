// GAS Backend for CPNS GO
const SPREADSHEET_ID = ''; // placeholder if needed later, or we just mock via script properties/cache

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'getData') {
    // Return all initial mockup data
    const responsePayload = {
      status: 'success',
      data: {
        // We will just return an empty array for now and let the frontend use defaultModules if empty, 
        // OR we can return the defaultModules directly.
        // Let's provide a basic module structure to prove it works.
        modules: [
          {
            id: 'twk-1',
            category: 'TWK',
            code: '1.1',
            order: 1,
            title: 'Pengamalan Butir Pancasila & Sila Radar',
            subtitle: 'Trik eliminasi cepat batas abu-abu Sila 2 vs Sila 5',
            unlocked: true,
            completed: false,
            score: null,
            objectives: [
              'Mengenali 45 butir pengamalan TAP MPR secara kontekstual berbasis studi kasus.',
              'Membedakan tindakan kemanusiaan personal vs keadilan struktural publik.',
              'Mengeliminasi 3 pilihan pengecoh dalam tempo kurang dari 20 detik.'
            ],
            tips: 'Gunakan The Sila Radar: Jika fokus tindakan adalah empati individu -> Sila 2. Jika fokusnya pemerataan fasilitas publik -> Sila 5.',
            sampleQuestion: {
              question: 'Ketika seorang pengusaha dermawan membangun jembatan gantung di pedalaman...',
              correctKey: 'C',
              apsExplanation: 'A (Action): Menganalisis konteks pembangunan (fasilitas umum untuk publik).\nP (Point): Pembangunan jembatan gantung untuk mobilitas anak sekolah adalah wujud keadilan sosial bagi seluruh rakyat (Sila 5), bukan sekadar kemanusiaan (Sila 2).\nS (Solution): Pilih opsi yang berkaitan dengan Sila 5.'
            }
          },
          {
            id: 'tiu-1',
            category: 'TIU',
            code: '2.1',
            order: 1,
            title: 'Silogisme & Penarikan Kesimpulan',
            subtitle: 'Hacking logika deduktif tanpa rumus',
            unlocked: false,
            completed: false,
            score: null,
            objectives: [
              'Mengidentifikasi premis mayor dan minor.',
              'Menerapkan modus ponens dan tollens.'
            ],
            tips: 'Abaikan konteks kalimat, fokus pada operator logika (Semua, Ada, Jika-Maka).',
            sampleQuestion: {
              question: 'Semua CPNS rajin belajar. Sebagian orang yang rajin belajar lulus ujian. Kesimpulan?',
              correctKey: 'D',
              apsExplanation: 'A (Action): Identifikasi tipe silogisme.\nP (Point): Sebagian orang rajin belajar lulus ujian (sebagian CPNS belum tentu lulus).\nS (Solution): Sebagian CPNS lulus ujian.'
            }
          },
          {
            id: 'tkp-1',
            category: 'TKP',
            code: '3.1',
            order: 1,
            title: 'Pelayanan Publik Prima',
            subtitle: 'Membaca ekspektasi instansi terhadap ASN',
            unlocked: false,
            completed: false,
            score: null,
            objectives: [
              'Memilih prioritas tindakan ketika ada konflik kepentingan.',
              'Menjaga profesionalisme di bawah tekanan.'
            ],
            tips: 'Selalu posisikan diri sebagai abdi negara yang mengutamakan SOP namun tetap humanis.',
            sampleQuestion: {
              question: 'Ada warga yang marah karena antrean panjang. Apa yang Anda lakukan?',
              correctKey: 'E',
              apsExplanation: 'A (Action): Tenangkan warga.\nP (Point): Berikan penjelasan sesuai aturan.\nS (Solution): Panggil sekuriti hanya jika tidak terkendali.'
            }
          }
        ]
      }
    };
    return ContentService.createTextOutput(JSON.stringify(responsePayload)).setMimeType(ContentService.MimeType.JSON);
  }
  
  return ContentService.createTextOutput(JSON.stringify({status: 'error', message: 'Unknown action'})).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const postData = JSON.parse(e.postData.contents);
    
    // In a real app, we would write postData to Google Sheets here.
    // For now, return success.
    
    const responsePayload = {
      status: 'success',
      message: 'Data saved successfully',
      savedData: postData
    };
    
    return ContentService.createTextOutput(JSON.stringify(responsePayload)).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
