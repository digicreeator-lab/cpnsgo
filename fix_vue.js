const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');

// Fix the Vue :class binding syntax error
content = content.replace(/:class="([^"]*) p-4"/g, (match, p1) => {
    // If it has ] at the end, the p-4 was appended outside the array
    if (p1.trim().endsWith(']')) {
        return `class="p-4" :class="${p1}"`;
    }
    return match;
});

// Same for p-5 if it happened
content = content.replace(/:class="([^"]*) p-5"/g, (match, p1) => {
    if (p1.trim().endsWith(']')) {
        return `class="p-5" :class="${p1}"`;
    }
    return match;
});

// Also there is a place where I might have replaced class="... hover: ... " and left an empty hover:
content = content.replace(/hover: text-xs/g, 'hover:bg-white/80 text-xs');
content = content.replace(/hover: font-bold/g, 'hover:bg-white/80 font-bold');

fs.writeFileSync('public/index.html', content, 'utf8');
