const fs = require('fs');
const htmlPath = 'public/index.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const replacement = `        const twkPool = [
            { category: 'TWK', topic: 'Pengamalan Pancasila', question: 'Sikap menjauhi sifat boros dan gaya hidup mewah merupakan bentuk pengamalan Pancasila, khususnya sila ke...', options: { A: 'Satu', B: 'Dua', C: 'Tiga', D: 'Empat', E: 'Lima' }, correct: 'E', explanation: 'Sila ke-5 mengandung butir larangan menggunakan hak milik untuk hal-hal yang bersifat pemborosan dan gaya hidup mewah.' },
            { category: 'TWK', topic: 'Integritas', question: 'Sebagai seorang ASN, Anda ditugaskan ke luar kota. Panitia penyelenggara memberikan amplop berisi uang saku tambahan di luar ketentuan SPPD instansi Anda. Sikap Anda yang mencerminkan integritas adalah...', options: { A: 'Menerima dan menyumbangkannya ke panti asuhan.', B: 'Menerima sebagai bentuk penghargaan tuan rumah.', C: 'Menolak secara halus dan mengembalikannya ke panitia.', D: 'Menyimpannya dan melaporkan ke atasan setelah tiba di kantor.', E: 'Menerima lalu membaginya dengan rekan kerja.' }, correct: 'C', explanation: 'Menolak pemberian yang tidak sah secara langsung adalah tindakan preventif dan bentuk integritas ASN yang menolak gratifikasi.' },
            { category: 'TWK', topic: 'UUD 1945', question: 'Pasal 29 UUD 1945 ayat (2) menjamin kemerdekaan tiap-tiap penduduk untuk memeluk agamanya masing-masing. Hal ini memiliki keterkaitan erat dengan Pancasila sila ke...', options: { A: 'Satu', B: 'Dua', C: 'Tiga', D: 'Empat', E: 'Lima' }, correct: 'A', explanation: 'Pasal 29 berkaitan langsung dengan Sila Pertama Pancasila: Ketuhanan Yang Maha Esa.' },
            { category: 'TWK', topic: 'Sejarah Nasional', question: 'Latar belakang utama terjadinya peristiwa Rengasdengklok pada tanggal 16 Agustus 1945 adalah...', options: { A: 'Pemberontakan tentara PETA terhadap Jepang.', B: 'Perbedaan pendapat antara golongan tua dan golongan muda mengenai waktu proklamasi.', C: 'Desakan sekutu agar Indonesia segera merdeka.', D: 'Keinginan Soekarno-Hatta memindahkan ibu kota ke Rengasdengklok.', E: 'Penolakan Jepang untuk memberikan kemerdekaan.' }, correct: 'B', explanation: 'Peristiwa Rengasdengklok dipicu oleh perbedaan pandangan; golongan muda ingin proklamasi disegerakan tanpa menunggu PPKI bentukan Jepang.' },
            { category: 'TWK', topic: 'Nasionalisme', question: 'Berikut ini yang BUKAN merupakan unsur yang mempersatukan bangsa Indonesia menurut Moh. Yamin adalah...', options: { A: 'Asal usul keturunan (darah)', B: 'Sejarah masa lalu', C: 'Kemauan untuk bersatu', D: 'Hukum adat', E: 'Bahasa' }, correct: 'A', explanation: 'Nasionalisme Indonesia bersifat inklusif (civic nationalism), didasarkan pada kemauan bersatu, nasib yang sama, dan cita-cita, bukan murni ikatan darah/etnis.' },
            { category: 'TWK', topic: 'Bela Negara', question: 'Contoh tindakan bela negara yang paling relevan dilakukan oleh seorang mahasiswa pada masa kini adalah...', options: { A: 'Mendaftar sebagai prajurit TNI.', B: 'Melakukan demonstrasi menolak kebijakan pemerintah.', C: 'Belajar dengan giat dan berprestasi di kancah internasional.', D: 'Membeli produk impor untuk mendukung perdagangan bebas.', E: 'Menyebarkan berita-berita kritis di media sosial.' }, correct: 'C', explanation: 'Bagi mahasiswa, bela negara diwujudkan melalui profesi dan perannya, yaitu belajar giat dan mengharumkan nama bangsa (prestasi).' }
        ];

        const tiuPool = [
            { category: 'TIU', topic: 'Sinonim', question: 'EPITOM = ...', options: { A: 'Puncak', B: 'Rangkuman', C: 'Evaluasi', D: 'Teladan', E: 'Penutup' }, correct: 'D', explanation: 'Epitom (epitome) berarti perwujudan terbaik, contoh ideal, atau teladan.' },
            { category: 'TIU', topic: 'Analogi', question: 'MATA : TELINGA = ... : ...', options: { A: 'Tangan : Kaki', B: 'Melihat : Mendengar', C: 'Hidung : Cium', D: 'Jari : Cincin', E: 'Lidah : Mengecap' }, correct: 'B', explanation: 'Mata fungsinya untuk melihat, sedangkan telinga fungsinya untuk mendengar.' },
            { category: 'TIU', topic: 'Deret Angka', question: 'Lengkapi deret berikut: 1, 4, 9, 16, 25, ...', options: { A: '30', B: '32', C: '35', D: '36', E: '40' }, correct: 'D', explanation: 'Deret bilangan kuadrat: 1^2, 2^2, 3^2, 4^2, 5^2, selanjutnya 6^2 = 36.' },
            { category: 'TIU', topic: 'Silogisme', question: 'Semua pekerja pabrik memakai helm keselamatan. Sebagian pekerja pabrik adalah wanita. Kesimpulan...', options: { A: 'Semua wanita memakai helm keselamatan.', B: 'Sebagian wanita memakai helm keselamatan.', C: 'Semua pekerja pabrik adalah wanita.', D: 'Sebagian wanita tidak memakai helm keselamatan.', E: 'Sebagian yang memakai helm keselamatan adalah wanita.' }, correct: 'E', explanation: 'Irisan dari kedua pernyataan: ada pekerja pabrik yang wanita dan mereka pasti memakai helm keselamatan.' },
            { category: 'TIU', topic: 'Hitung Cepat', question: 'Hasil dari 0,25 x 4/5 + 1/2 adalah...', options: { A: '0.6', B: '0.7', C: '0.8', D: '0.9', E: '1.0' }, correct: 'B', explanation: '(1/4 x 4/5) + 1/2 = 1/5 + 1/2 = 2/10 + 5/10 = 7/10 = 0.7.' },
            { category: 'TIU', topic: 'Analitis', question: 'A lebih tinggi dari B, namun lebih pendek dari C. D lebih tinggi dari C. Siapakah yang paling tinggi?', options: { A: 'A', B: 'B', C: 'C', D: 'D', E: 'Tidak dapat ditentukan' }, correct: 'D', explanation: 'Urutan dari tinggi ke pendek: D > C > A > B.' }
        ];

        const tkpPool = [
            { category: 'TKP', topic: 'Pelayanan Publik', question: 'Seorang warga datang dengan marah-marah karena merasa berkasnya diabaikan selama berminggu-minggu. Sebagai petugas front-office, tindakan Anda...', options: { A: 'Menyuruhnya diam karena mengganggu pelayanan lain.', B: 'Mendengarkan keluhannya dengan tenang, meminta maaf, lalu segera mengecek status berkasnya di sistem.', C: 'Menjelaskan bahwa itu bukan kesalahan Anda tapi bagian back-office.', D: 'Memanggil satpam untuk menertibkan warga tersebut.', E: 'Mendengarkan keluhannya dan berjanji akan menyelesaikannya bulan depan.' }, correct: null, scores: { A: 1, B: 5, C: 3, D: 2, E: 4 }, explanation: 'Pelayanan publik prima menuntut sikap tenang, empatik, serta responsif dan solutif (poin 5 untuk opsi B).' },
            { category: 'TKP', topic: 'Profesionalisme', question: 'Di akhir pekan, saat Anda sedang berlibur bersama keluarga, atasan menelepon dan meminta Anda merevisi laporan penting yang harus diserahkan ke kementerian hari Senin pagi. Anda...', options: { A: 'Mematikan ponsel karena ini adalah hak cuti liburan Anda.', B: 'Menyanggupi dan segera mengerjakannya dengan membawa laptop ke tempat liburan.', C: 'Menjelaskan bahwa Anda sedang liburan namun bersedia mengerjakannya malam hari setelah acara keluarga selesai.', D: 'Menyarankan rekan lain yang kebetulan sedang tidak liburan untuk mengerjakannya.', E: 'Menerima tugas tersebut namun mengerjakannya asal-asalan.' }, correct: null, scores: { A: 1, B: 4, C: 5, D: 3, E: 2 }, explanation: 'Opsi C (5 poin) menyeimbangkan profesionalisme kerja dengan kehidupan pribadi (work-life balance) secara bertanggung jawab.' },
            { category: 'TKP', topic: 'Jejaring Kerja', question: 'Anda adalah pegawai baru. Di divisi Anda, terdapat kelompok-kelompok senior yang cenderung eksklusif. Untuk memperluas jejaring dan beradaptasi, Anda akan...', options: { A: 'Bekerja sendiri saja asalkan tugas selesai.', B: 'Menunggu sampai ada senior yang menyapa dan mengajak bergabung.', C: 'Berinisiatif menyapa terlebih dahulu, bersikap sopan, dan meminta masukan terkait pekerjaan.', D: 'Melaporkan ke HRD bahwa ada kubu eksklusif di kantor.', E: 'Mencoba ikut campur dalam setiap percakapan mereka agar terlihat aktif.' }, correct: null, scores: { A: 2, B: 3, C: 5, D: 1, E: 4 }, explanation: 'Opsi C menunjukkan inisiatif, kesopanan, dan keinginan belajar (poin 5), yang sangat baik untuk membangun jejaring awal.' },
            { category: 'TKP', topic: 'Teknologi Informasi', question: 'Kantor Anda baru saja mengimplementasikan sistem absensi berbasis lokasi (GPS) dan pengenalan wajah. Beberapa pegawai lama menolak karena menganggapnya merepotkan. Sikap Anda...', options: { A: 'Ikut menolak karena memang aplikasi tersebut masih sering error.', B: 'Tetap menggunakan sistem baru dan perlahan mengedukasi rekan lain tentang kemudahan sistem tersebut.', C: 'Melaporkan pegawai yang menolak ke atasan agar diberi sanksi.', D: 'Menggunakan sistem tersebut hanya jika ada atasan.', E: 'Mengusulkan agar sistem tersebut dibatalkan saja demi keharmonisan.' }, correct: null, scores: { A: 2, B: 5, C: 3, D: 1, E: 4 }, explanation: 'Beradaptasi dengan teknologi baru secara positif dan membantu rekan lain beradaptasi adalah kompetensi unggul (opsi B poin 5).' },
            { category: 'TKP', topic: 'Sosial Budaya', question: 'Rekan kerja Anda yang berbeda agama mengundang Anda untuk hadir di acara syukuran pernikahannya. Di sisi lain, Anda tidak terlalu mengenalnya secara dekat. Anda akan...', options: { A: 'Mengabaikan undangannya karena beda keyakinan.', B: 'Datang sebentar sekadar basa-basi lalu langsung pulang.', C: 'Menitipkan kado lewat teman lain.', D: 'Hadir dengan senang hati, memberikan selamat, dan bersosialisasi secara wajar.', E: 'Hadir dan mencoba mengubah topik pembicaraan ke urusan kantor.' }, correct: null, scores: { A: 1, B: 3, C: 4, D: 5, E: 2 }, explanation: 'Menghargai undangan lintas budaya/agama dan bersosialisasi dengan baik menunjukkan keterbukaan sosial budaya yang tinggi (opsi D poin 5).' }
        ];

        const generateRandomCatBank = () => {
            const bank = [];
            const getRandomItem = (pool) => JSON.parse(JSON.stringify(pool[Math.floor(Math.random() * pool.length)]));

            for (let i = 0; i < 30; i++) {
                let q = getRandomItem(twkPool);
                q.id = 'cat-twk-' + (i+1);
                bank.push(q);
            }
            for (let i = 0; i < 35; i++) {
                let q = getRandomItem(tiuPool);
                q.id = 'cat-tiu-' + (i+1);
                bank.push(q);
            }
            for (let i = 0; i < 45; i++) {
                let q = getRandomItem(tkpPool);
                q.id = 'cat-tkp-' + (i+1);
                bank.push(q);
            }
            return bank;
        };`;

const match = html.match(/(const catQuestionsBank = )(\[[\s\S]*?\]);/);
if (match) {
    const newContent = html.substring(0, match.index) + replacement + html.substring(match.index + match[0].length);
    fs.writeFileSync(htmlPath, newContent);
    console.log('Successfully replaced static bank with dynamic pools and generator.');
} else {
    console.log('Match not found');
}
