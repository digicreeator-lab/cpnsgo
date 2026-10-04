const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');

const regex = /<div[^>]*class="[^"]*(bg-[a-z]+)[^"]*shadow[^"]*"[^>]*>([\s\S]*?)<\/div>/gi;
let m;
while((m = regex.exec(content)) !== null) {
   let inner = m[2];
   if (inner.match(/<div[^>]*class="[^"]*(bg-[a-z]+)[^"]*shadow[^"]*"[^>]*>/gi)) {
      console.log('Nested card div found at index ' + m.index);
      console.log(m[0].substring(0, 100));
   }
}

// Check for section containing div
const regexSec = /<section[^>]*class="[^"]*(bg-[a-z]+)[^"]*shadow[^"]*"[^>]*>([\s\S]*?)<\/section>/gi;
let m2;
while((m2 = regexSec.exec(content)) !== null) {
   let inner = m2[2];
   if (inner.match(/<div[^>]*class="[^"]*(bg-[a-z]+)[^"]*shadow[^"]*"[^>]*>/gi)) {
      console.log('Nested card div inside section found at index ' + m2.index);
      console.log(m2[0].substring(0, 100));
   }
}
