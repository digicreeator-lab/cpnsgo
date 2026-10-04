const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// Fix string literal \n that broke Vue template compilation
html = html.replace(/<\/div>\\n/g, '</div>\n');

fs.writeFileSync('public/index.html', html);
console.log('Fixed \\n artifact');