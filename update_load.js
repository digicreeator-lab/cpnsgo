const fs = require('fs');
let content = fs.readFileSync('public/index.html', 'utf8');

const regex = /const loadProgress = \(\) => \{[\s\S]*?catch \(e\) \{[\s\S]*?modules\.value = defaultModules;[\s\S]*?\}[\s\S]*?\};/;

const replacement = `const loadProgress = async () => {
          try {
            if (USE_MOCK) {
              const saved = localStorage.getItem('cpns_go_modules_stitch');
              if (saved) {
                modules.value = JSON.parse(saved);
              } else {
                modules.value = defaultModules;
                saveProgress();
              }
            } else {
              // Fetch from GAS Backend
              try {
                const response = await fetch(API_URL + '?action=getData', {
                  method: 'GET',
                  redirect: 'follow'
                });
                const result = await response.json();
                if (result.status === 'success' && result.data && result.data.modules) {
                  // In a real app we might merge backend modules with local progress or rely fully on backend.
                  // Here we just use the backend data.
                  modules.value = result.data.modules;
                  saveProgress();
                } else {
                  throw new Error('Invalid data format from API');
                }
              } catch (apiErr) {
                console.error('API Fetch Failed, falling back to mock/local:', apiErr);
                const saved = localStorage.getItem('cpns_go_modules_stitch');
                modules.value = saved ? JSON.parse(saved) : defaultModules;
              }
            }
          } catch (e) {
            console.error('loadProgress error:', e);
            modules.value = defaultModules;
          }
        };`;

content = content.replace(regex, replacement);
fs.writeFileSync('public/index.html', content);
console.log('Updated loadProgress');
