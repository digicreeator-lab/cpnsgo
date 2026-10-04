const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');

const regex = /const saveProgress = \(\) => \{[\s\S]*?try \{[\s\S]*?localStorage\.setItem\('cpns_go_modules_stitch', JSON\.stringify\(modules\.value\)\);[\s\S]*?\} catch \(e\) \{[\s\S]*?console\.error\('Save failed:', e\);[\s\S]*?\}[\s\S]*?\};/;

const replacement = `const saveProgress = async () => {
          try {
            const dataString = JSON.stringify(modules.value);
            localStorage.setItem('cpns_go_modules_stitch', dataString);
            
            if (!USE_MOCK) {
              // POST to GAS Backend
              try {
                await fetch(API_URL, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'text/plain;charset=utf-8'
                  },
                  body: dataString,
                  redirect: 'follow'
                });
              } catch (apiErr) {
                console.error('Failed to sync progress to backend:', apiErr);
              }
            }
          } catch (e) {
            console.error('Save failed:', e);
          }
        };`;

content = content.replace(regex, replacement);
fs.writeFileSync('public/index.html', content);
console.log('Updated saveProgress');
