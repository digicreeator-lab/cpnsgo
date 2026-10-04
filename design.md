---
design_system:
  colors:
    background:
      primary: '#F3F4F8'
      mesh_gradient:
      - '#E0E7FF'
      - '#FDF2F8'
      - '#FEF3C7'
    surface:
      glass: rgba(255, 255, 255, 0.5)
      glass_border: rgba(255, 255, 255, 0.8)
      card_inner: '#FFFFFF'
    text:
      primary: '#111827'
      secondary: '#6B7280'
      tertiary: '#9CA3AF'
    accent:
      primary: '#5D5FEF'
      success: '#22C55E'
      danger: '#DC2626'
      warning: '#FBBF24'
      info: '#3B82F6'
    status:
      today: '#FFEDD5'
      today_text: '#D97706'
  typography:
    font_family: Inter, system-ui, sans-serif
    scale:
      h1:
        size: 32px
        weight: '700'
        tracking: -0.02em
      h2:
        size: 20px
        weight: '600'
        tracking: -0.01em
      body_lg:
        size: 16px
        weight: '600'
      body_md:
        size: 14px
        weight: '400'
      caption:
        size: 12px
        weight: '500'
  spacing:
    container_padding: 20px
    element_gap: 16px
    stack_gap: 12px
    inline_gap: 8px
  radius:
    full: 9999px
    xl: 32px
    lg: 24px
    md: 16px
  shadows:
    soft: 0 10px 25px -5px rgba(0, 0, 0, 0.05)
    glow_purple: 0 8px 20px rgba(93, 95, 239, 0.3)
    glow_red: 0 8px 20px rgba(220, 38, 38, 0.2)
name: Glassmorphic Finance & Learning
---

## Brand & Style
This design system embraces a **Glassmorphism** aesthetic tailored for modern financial and productivity applications (such as CPNS GO). It evokes a feeling of calm clarity, sophistication, and effortless control. By utilizing translucent frosted glass surfaces layered over soft, organic mesh gradients, the UI achieves a sense of depth and lightness. The visual tone is approachable yet authoritative, designed to instill trust while maintaining an engaging, contemporary edge.

## Layout & Spacing
The layout model employs a flexible, fluid grid system designed around a 20px outer margin and consistent 16px structural gutters. Spacing is governed by a predictable rhythm based on multiples of 4px and 8px, promoting dense yet breathable information architecture. 

Containers scale fluidly across form factors: on mobile devices, outer margins collapse to 16px to maximize canvas width, while desktop layouts lock containers into centered, max-width glass panels that float gracefully above the mesh gradient background. Stacks and inline elements maintain tight, intentional proximity (`12px` and `8px` gaps respectively) to group related financial metrics and actions logically.

## Elevation & Depth
Elevation is achieved primarily through **Glassmorphism** and atmospheric layering rather than harsh drop shadows. 

- **Translucent Surfaces:** Cards use semi-transparent white fills (`50%` opacity) paired with a subtle backdrop blur (`blur(20px)` where supported) to create physical separation from the background mesh gradient.
- **Luminous Borders:** Elements utilize high-opacity white inner borders (`rgba(255, 255, 255, 0.8)`) at top-left edges to simulate directional lighting.
- **Ambient Glows:** Floating action buttons and primary triggers make use of colored ambient glows (e.g., purple shadow diffusion `0 8px 20px rgba(93, 95, 239, 0.3)`) to lift interactive focal points off the glass plane without relying on heavy black drop shadows.

## Components

### Buttons
Primary buttons feature the vibrant purple/blue fill (`#5D5FEF`), full pill rounding (`9999px`), and a signature purple glow shadow on hover. Secondary buttons adopt a semi-transparent glass surface with high-contrast text and a subtle border. Disabled states reduce opacity to `40%` and neutralize shadows.

### Chips & Badges
Badges use the `caption` typography scale with tight padding. Status variants (such as `today` with its light orange background `#FFEDD5` and amber text) provide instant contextual feedback without visual clutter.

### Lists
List items use `body-lg` for primary names and `body-md` for secondary metadata. Rows sit cleanly within glass card containers, separated by subtle `1px` translucent dividers, incorporating generous touch targets for mobile usability.

### Checkboxes & Radio Buttons
Selection controls maintain rounded geometry. Unchecked states present a translucent glass well with a white border, while checked states fill entirely with the primary accent color (`#5D5FEF`), housing a crisp white checkmark or dot.

### Input Fields
Inputs are styled as recessed or semi-opaque glass wells with `16px` border-radius. Focus states trigger a smooth transition to a solid white background accompanied by a primary accent border and a soft glow.

### Cards
Cards are the foundational building block of this design system. Built using the `xl` (32px) or `lg` (24px) radius, they combine `surface-glass` backgrounds, `glass_border` outlines, and the `soft` shadow token (`0 10px 25px -5px rgba(0, 0, 0, 0.05)`) to create a floating, layered dashboard aesthetic.
