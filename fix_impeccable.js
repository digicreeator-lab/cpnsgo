const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');

// Add padding explicitly to CSS classes to satisfy Impeccable
content = content.replace(/\.glass-panel {/g, '.glass-panel {\n      padding: 20px;');
content = content.replace(/\.glass-panel-sm {/g, '.glass-panel-sm {\n      padding: 16px;');

// Remove background from crouwel-cell and crouwel-grid to fix nested cards
content = content.replace(/background: rgba\(255,255,255,0\.4\);/g, '');

fs.writeFileSync('public/index.html', content, 'utf8');
