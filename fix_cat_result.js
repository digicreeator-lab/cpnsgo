const fs = require('fs');

let html = fs.readFileSync('public/index.html', 'utf8');

// Perbaiki bug pemanggilan properti objek pada view 'cat-result'
html = html.replace(/catResult\?\.twk\.passed/g, 'catResult?.twkScore >= 65');
html = html.replace(/catResult\?\.twk\.score/g, 'catResult?.twkScore');
html = html.replace(/catResult\?\.tiu\.passed/g, 'catResult?.tiuScore >= 80');
html = html.replace(/catResult\?\.tiu\.score/g, 'catResult?.tiuScore');
html = html.replace(/catResult\?\.tkp\.passed/g, 'catResult?.tkpScore >= 166');
html = html.replace(/catResult\?\.tkp\.score/g, 'catResult?.tkpScore');

// Perbaiki catResult?.timeRemaining (karena catResult.value di javascript tidak punya timeRemaining)
// Format catTimer sebelum diakhiri, atau cukup tulis Waktu Sisa statis untuk prototipe
html = html.replace(/catResult\?\.timeRemaining/g, 'catTimer');

// Perbaiki catResult?.totalCorrect (gunakan answeredCount)
html = html.replace(/catResult\?\.totalCorrect \/ catQuestions\.length/g, 'catResult?.answeredCount / catQuestions.length');
html = html.replace(/catResult\?\.totalCorrect/g, 'catResult?.answeredCount');

fs.writeFileSync('public/index.html', html);
console.log('Fixed Vue Rendering Data Binds for cat-result');