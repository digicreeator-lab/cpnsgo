const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');

const regex = /const \{ createApp, ref, computed, watch, onMounted \} = Vue;/;
const replacement = `const { createApp, ref, computed, watch, onMounted } = Vue;

    // --- API Configuration ---
    const USE_MOCK = true;
    const API_URL = 'https://script.google.com/macros/s/AKfycbyb8QFVDZD5Ca9_afNwwKXFSVk2ofIi2ob13yXJAQNBQUlPo6LEwm4Xsc-1nW3MXTRY/exec';
    // -------------------------`;

content = content.replace(regex, replacement);
fs.writeFileSync('public/index.html', content);
console.log('Added USE_MOCK');
