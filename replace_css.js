const fs = require('fs');

let content = fs.readFileSync('public/index.html', 'utf8');

const tailwindConfig = `<script id="tailwind-config">
    tailwind.config = {
      darkMode: "class",
      theme: {
        extend: {
          colors: {
            "background": "#F3F4F8",
            "surface-glass": "rgba(255, 255, 255, 0.5)",
            "glass-border": "rgba(255, 255, 255, 0.8)",
            "card-inner": "#FFFFFF",
            "primary": "#5D5FEF",
            "primary-hover": "#4343d5",
            "secondary": "#8B5CF6",
            "tertiary": "#EC4899",
            "success": "#22C55E",
            "warning": "#FBBF24",
            "danger": "#DC2626",
            "on-surface": "#111827",
            "on-surface-variant": "#6B7280",
            "outline": "#9CA3AF",
            "outline-variant": "rgba(255, 255, 255, 0.8)"
          },
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            mono: ['SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
            display: ['Inter', 'sans-serif'],
          },
          boxShadow: {
            'glass': '0 8px 32px 0 rgba(31,38,135,0.07)',
            'glow-primary': '0 8px 20px rgba(93, 95, 239, 0.3)',
            'glow-success': '0 8px 20px rgba(34, 197, 94, 0.3)',
            'glow-danger': '0 8px 20px rgba(220, 38, 38, 0.3)',
            'glow-warning': '0 8px 20px rgba(251, 191, 36, 0.3)'
          }
        }
      }
    }
  </script>`;
content = content.replace(/<script id="tailwind-config">[\s\S]*?<\/script>/, tailwindConfig);

const styleConfig = `<style>
    body {
      font-family: 'Inter', sans-serif;
      -webkit-font-smoothing: antialiased;
      user-select: none;
      min-height: max(884px, 100dvh);
      background-color: #F3F4F8;
    }
    .material-symbols-outlined { font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24; display: inline-block; vertical-align: middle; }
    
    /* Soft Glassmorphism Tokens */
    .glass-panel {
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.8);
      box-shadow: 0 8px 32px 0 rgba(31,38,135,0.07);
      border-radius: 24px;
    }
    .glass-panel-sm {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-radius: 16px;
    }
    .glass-dock {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.9);
      border-radius: 9999px;
      box-shadow: 0 12px 32px -4px rgba(93, 95, 239, 0.14);
    }
    
    .ledger-header {
      border-bottom: 1px solid rgba(255, 255, 255, 0.6);
      padding-bottom: 0.75rem;
      margin-bottom: 0.75rem;
    }
    .stamp-validated {
      display: inline-block;
      padding: 0.3rem 0.8rem;
      background: rgba(34, 197, 94, 0.1);
      border: 1px solid #22C55E;
      color: #22C55E;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-radius: 9999px;
      font-size: 10px;
    }
    .stamp-void {
      display: inline-block;
      padding: 0.3rem 0.8rem;
      background: rgba(220, 38, 38, 0.1);
      border: 1px solid #DC2626;
      color: #DC2626;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-radius: 9999px;
      font-size: 10px;
    }
    .crouwel-grid {
      display: grid;
      grid-template-columns: 32px 1fr;
      gap: 8px;
    }
    .crouwel-cell {
      padding: 0.75rem;
      background: rgba(255,255,255,0.4);
      border-radius: 8px;
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  
    h1 { font-size: 1.875rem !important; }
    h2 { font-size: 1.5rem !important; }
    h3 { font-size: 1.25rem !important; }
  </style>`;
content = content.replace(/<style>[\s\S]*?<\/style>/, styleConfig);

const meshBg = `    <!-- Mesh Gradient Background -->
    <div class="fixed inset-0 pointer-events-none -z-10 bg-background overflow-hidden">
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#E0E7FF] blur-[100px] opacity-70"></div>
      <div class="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#FDF2F8] blur-[120px] opacity-70"></div>
      <div class="absolute bottom-[-10%] left-[10%] w-[50%] h-[50%] rounded-full bg-[#FEF3C7] blur-[100px] opacity-70"></div>
    </div>`;
content = content.replace(/<!-- Ledger Grid Background -->[\s\S]*?<\/div>/, meshBg);

content = content.replace(/bg-surface/g, '');
content = content.replace(/bg-white/g, 'bg-white/70 backdrop-blur-md');
content = content.replace(/border border-outline-variant p-4/g, 'glass-panel p-5');
content = content.replace(/border border-outline-variant/g, 'border border-outline-variant rounded-2xl bg-white/40 shadow-sm');
content = content.replace(/p-2.5 border border-outline-variant/g, 'p-3 glass-panel-sm');
content = content.replace(/p-3.5 flex items-center justify-between border border-outline-variant/g, 'p-4 flex items-center justify-between glass-panel-sm mb-3');
content = content.replace(/bg-primary\/10/g, 'bg-primary/15');

content = content.replace(/ledger-dock  shadow-sm border border-outline-variant/g, 'glass-dock');

content = content.replace(/bg-primary hover:bg-primary-container/g, 'bg-primary hover:bg-primary-hover shadow-glow-primary rounded-full');
content = content.replace(/bg-primary hover:bg-primary-dark/g, 'bg-primary hover:bg-primary-hover shadow-glow-primary rounded-full');
content = content.replace(/bg-primary text-white font-bold/g, 'bg-primary text-white font-bold shadow-glow-primary rounded-full border-none');
content = content.replace(/bg-primary text-on-primary font-bold/g, 'bg-primary text-white font-bold shadow-glow-primary rounded-full border-none');
content = content.replace(/bg-emerald-600 hover:bg-emerald-700/g, 'bg-success hover:bg-success/90 shadow-glow-success rounded-full border-none text-white');
content = content.replace(/bg-rose-600 hover:bg-rose-700/g, 'bg-danger hover:bg-danger/90 shadow-glow-danger rounded-full border-none text-white');

content = content.replace(/rounded-full rounded-full/g, 'rounded-full');

content = content.replace(/text-on-surface-variant/g, 'text-gray-500');
content = content.replace(/text-on-surface/g, 'text-gray-900');

fs.writeFileSync('public/index.html', content, 'utf8');

console.log("Replaced CSS successfully");
