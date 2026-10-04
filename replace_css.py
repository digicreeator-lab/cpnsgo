import re

with open('public/index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Replace Tailwind config
tailwind_config = '''<script id="tailwind-config">
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
  </script>'''
content = re.sub(r'<script id="tailwind-config">.*?</script>', tailwind_config, content, flags=re.DOTALL)

# 2. Replace custom styles
style_config = '''<style>
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
  </style>'''
content = re.sub(r'<style>.*?</style>', style_config, content, flags=re.DOTALL)

# 3. Replace background mesh gradient
mesh_bg = '''    <!-- Mesh Gradient Background -->
    <div class="fixed inset-0 pointer-events-none -z-10 bg-background overflow-hidden">
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#E0E7FF] blur-[100px] opacity-70"></div>
      <div class="absolute top-[30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#FDF2F8] blur-[120px] opacity-70"></div>
      <div class="absolute bottom-[-10%] left-[10%] w-[50%] h-[50%] rounded-full bg-[#FEF3C7] blur-[100px] opacity-70"></div>
    </div>'''
content = re.sub(r'<!-- Ledger Grid Background -->.*?</div>', mesh_bg, content, flags=re.DOTALL)

# 4. Class replacements for glassmorphism
# Replace old borders and backgrounds with glass panels
content = content.replace('bg-surface', '')
content = content.replace('bg-white', 'bg-white/70 backdrop-blur-md')
content = content.replace('border border-outline-variant p-4', 'glass-panel p-5')
content = content.replace('border border-outline-variant', 'border border-outline-variant rounded-2xl bg-white/40')
content = content.replace('p-2.5 border border-outline-variant', 'p-3 glass-panel-sm')
content = content.replace('p-3.5 flex items-center justify-between border border-outline-variant', 'p-4 flex items-center justify-between glass-panel-sm mb-3')
content = content.replace('bg-primary/10', 'bg-primary/15')

# Bottom nav bar
content = content.replace('ledger-dock  shadow-sm border border-outline-variant', 'glass-dock')

# Buttons
content = content.replace('bg-primary hover:bg-primary-container', 'bg-primary hover:bg-primary-hover shadow-glow-primary rounded-full')
content = content.replace('bg-primary hover:bg-primary-dark', 'bg-primary hover:bg-primary-hover shadow-glow-primary rounded-full')
content = content.replace('bg-primary text-white font-bold', 'bg-primary text-white font-bold shadow-glow-primary rounded-full border-none')
content = content.replace('bg-primary text-on-primary font-bold', 'bg-primary text-white font-bold shadow-glow-primary rounded-full border-none')
content = content.replace('bg-emerald-600 hover:bg-emerald-700', 'bg-success hover:bg-success/90 shadow-glow-success rounded-full border-none text-white')
content = content.replace('bg-rose-600 hover:bg-rose-700', 'bg-danger hover:bg-danger/90 shadow-glow-danger rounded-full border-none text-white')

# Ensure we haven't doubled rounded-full
content = content.replace('rounded-full rounded-full', 'rounded-full')

# Fix text colors
content = content.replace('text-on-surface-variant', 'text-gray-500')
content = content.replace('text-on-surface', 'text-gray-900')

with open('public/index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced CSS successfully")
