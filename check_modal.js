const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const match = content.match(/<div v-if="confirmModal.isOpen"([\s\S]*?)<\/transition>/);
if(match) console.log(match[0].substring(0, 500));
