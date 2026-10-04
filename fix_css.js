const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');

// Fix text sizes
content = content.replace(/text-\[10px\]/g, 'text-[11px]');
content = content.replace(/font-size: 10px/g, 'font-size: 11px');
content = content.replace(/text-\[9px\]/g, 'text-[11px]');

// Fix cramped padding on sections by adding p-5
// Wait, impeccable says: <section> "glass-panel": children flush against border+bg
// glass-panel should have padding. 
// I'll make sure all elements with glass-panel have p-5, glass-panel-sm have p-4
content = content.replace(/class="([^"]*glass-panel[^"]*)"/g, (match, classes) => {
    if (!classes.includes('p-')) {
        return `class="${classes} p-5"`;
    }
    return match;
});

content = content.replace(/class="([^"]*bg-white\/40[^"]*)"/g, (match, classes) => {
    if (!classes.includes('p-') && classes.includes('border')) {
        return `class="${classes} p-4"`;
    }
    return match;
});

// Remove crouwel-cell backgrounds to fix nested cards
content = content.replace(/background: rgba\(255,255,255,0\.4\);/g, '');

fs.writeFileSync('public/index.html', content, 'utf8');
