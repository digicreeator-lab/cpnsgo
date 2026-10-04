---
name: Aspirant Learning System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#464555'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#767586'
  outline-variant: '#c7c4d7'
  surface-tint: '#4849da'
  primary: '#4343d5'
  on-primary: '#ffffff'
  primary-container: '#5d5fef'
  on-primary-container: '#faf7ff'
  inverse-primary: '#c1c1ff'
  secondary: '#6b38d4'
  on-secondary: '#ffffff'
  secondary-container: '#8455ef'
  on-secondary-container: '#fffbff'
  tertiary: '#ad0868'
  on-tertiary: '#ffffff'
  tertiary-container: '#ce2f82'
  on-tertiary-container: '#fff6f7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c1c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2e2bc2'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffd9e4'
  tertiary-fixed-dim: '#ffb0cd'
  on-tertiary-fixed: '#3e0022'
  on-tertiary-fixed-variant: '#8c0053'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 30px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.01em
  label-md:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.015em
  label-sm:
    fontFamily: 'Inter, Material Symbols Outlined'
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 12px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system powers a high-stakes, mobile-first learning experience engineered specifically for civil service aspirants preparing for TWK (Tes Wawasan Kebangsaan), TIU (Tes Inteligensia Umum), and TKP (Tes Karakteristik Pribadi). 

The emotional tone balances high-focus academic rigor with anxiety-reducing, calming visuals. Preparing for civil service exams is intense and repetitive; the user interface softens mental fatigue through an airy, translucent, iOS-native visual atmosphere. 

### Visual Direction: Soft Glassmorphic Neumorphism
The visual architecture pairs frosted glass panels with delicate, tactile soft-shadow depth. Translucent white surfaces sit over subtle pastel mesh gradients�whispers of lavender, soft blush, and morning sky tints�creating luminosity without distracting from high-density question banks and analytical breakdown charts. Crisp indigo accents direct focal energy straight toward progression metrics, timed answers, and critical performance indicators.

## Colors

The color palette utilizes luminous, clinical pastels for canvas atmospheric depth, paired with a saturated digital indigo as the operational anchor. 

### Semantic Roles & Palette Mapping
- **Primary (#5D5FEF)**: Directs key interactions, active navigation states, primary buttons, and overall completion statuses.
- **Secondary (#8B5CF6)**: Accents mastery states, specialty category badges, and analytical highlight tracks.
- **Tertiary (#EC4899)**: Used selectively for streak milestones, motivational alerts, and personal target progress.
- **Success (#22C55E)**: Indicates correct exam answers, passing threshold met (passing grade/passing score), and positive progress deltas.
- **Warning (#FBBF24)**: Flags near-limit countdown timers, questions marked for review, and warning thresholds.
- **Danger (#EF4444)**: Highlights incorrect responses, exhausted time buffers, and high-priority revision needs.
- **Background Atmosphere**: An ambient blend of multi-stop radial gradients: #F8FAFC base tinted with soft lavender (#EEF2FF), subtle blush (#FDF2F8), and airy peach-blue glow (#F0FDF4).
- **Surface Translucency**: Pristine white milk-glass (gba(255, 255, 255, 0.78) to gba(255, 255, 255, 0.92)) layered with fine semi-transparent perimeter highlights (gba(255, 255, 255, 0.85)).

## Typography

Typography relies entirely on the structural precision of Inter. In an exam preparation context where test takers read dense case studies, legal texts (UUD 1945), and mathematical reasoning problems, legibility and information hierarchy are non-negotiable.

### Typographic Hierarchy Rules
- **Display & Large Headlines**: Reserved strictly for performance scores, high-level mock exam results, and welcome titles. Use tight negative letter spacing (-0.025em) for modern crispness.
- **Section Headers (headline-md, headline-sm)**: Semi-bold weights organize sub-tests (TWK, TIU, TKP) and diagnostic analytics.
- **Body (ody-lg, ody-md)**: Optimized for reading long exam passages and detailed explanations. Maintain relaxed line heights (1.5 ratio) to reduce eye fatigue across sustained study intervals.
- **Labels & Badges (label-lg, label-md, label-sm)**: Elevated tracking paired with medium and bold weights for categorized tags, status chips, timer readouts, and question grid navigators.

## Layout & Spacing

The system is constructed with a mobile-first fluid layout architecture anchored to an 8pt vertical rhythm, with 4pt baseline substeps for micro-alignments.

### Layout Mechanics
- **Canvas Boundaries**: Mobile viewport utilizes a consistent margin of 1rem (16px) to maximize screen real estate while protecting comfortable finger targets. Tablet and desktop viewports constrain the reading canvas to a centered 480px�720px safe enclosure.
- **Gutters**: A uniform gutter of 1rem (16px) separates card groups and split module paths.
- **Safe Areas**: Top containers account for an iOS status bar allowance of 44px to 54px. Bottom containers clear 88px to guarantee zero overlap with the floating navigation dock and system home indicators.
- **Rhythm**: Element stacks inside exam modules utilize space-md (16px) for distinct separation of questions and options, while answer choices bundle internal content with space-sm (8px) to space-md (16px) padding.

## Elevation & Depth

Visual depth combines frosted glassmorphism with delicate neumorphic rim lighting. Interfaces feel clean, physical, and layered without heavy drop shadows.

### Glassmorphic Surfaces
- **Frosted Translucency**: Glass containers use ackdrop-filter: blur(16px) with a fill of gba(255, 255, 255, 0.78). This allows background mesh gradients to diffuse softly beneath question cards and bottom sheets.
- **Luminous Edge Strokes**: All glass panels feature a hairline border 1px solid rgba(255, 255, 255, 0.75). On elevated cards, a supplemental gradient stroke shifts from pure white (gba(255, 255, 255, 0.9)) at the top edge to subtle opacity (gba(255, 255, 255, 0.3)) at the bottom edge.

### Elevation Levels
- **Level 0 (Flat Canvas)**: Dynamic pastel gradient backdrop with zero box shadow.
- **Level 1 (Module & Assessment Cards)**: ox-shadow: 0 4px 20px -2px rgba(93, 95, 239, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.03). Soft, expansive, indigo-tinted shadow.
- **Level 2 (Active Elements & Floating Nav Dock)**: ox-shadow: 0 12px 32px -4px rgba(93, 95, 239, 0.14), 0 4px 12px -2px rgba(0, 0, 0, 0.04). Raised status bar, modal sheets, and persistent bottom dock.
- **Level 3 (Pressed / Interactive Neumorphic State)**: Inset shadows for unselected/selected radio options: ox-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(255, 255, 255, 0.8).

## Shapes

The shape system adopts a balanced rounded framework (Level 2). This standardizes  .5rem (8px) for minor controls, 1rem (16px) for primary exam cards, and full-radius pill silhouettes for call-to-action buttons, question indexes, and navigation indicators.

### Shape Hierarchy
- **Pill Geometry (ounded-full)**: Applied to high-priority interactive touchpoints, including primary quiz submit buttons, filter pills, question jump chips, and category tags.
- **Standard Containers (ounded-lg / 16px)**: Applied to quiz question containers, diagnostic charts, passing score gauges, and review cards.
- **Floating Shelves (ounded-xl / 24px)**: Applied to bottom navigation containers, persistent test timer displays, and full-screen modal sheets.

## Components

### Buttons
- **Primary Pill**: Filled with #5D5FEF, white text (Inter label-lg), with a subtle top rim highlight. Includes an ambient glow shadow:   8px 20px -4px rgba(93, 95, 239, 0.35).
- **Secondary Glass Pill**: Translucent white fill (gba(255, 255, 255, 0.85)), hairline border (gba(255, 255, 255, 0.9)), text colored #5D5FEF. Active touch states compress scale to  .98.
- **Icon Actions**: 44x44px circular or pill containers ensuring effortless touch targets under time-pressured mock exam conditions.

### Quiz Wizard Cards & Options
- **Question Card**: Frosted glass panel with ackdrop-filter: blur(20px), rounded to 20px, framed with a 1px border (gba(255, 255, 255, 0.8)). Holds question numbering, timer badge, question stem, and optional stimulus graphic.
- **Multiple-Choice Option Tiles**: Translucent container (gba(255, 255, 255, 0.6)) with a dedicated circular alphabet index indicator (A�E).
  - *Default*: Border 1px solid rgba(255, 255, 255, 0.7).
  - *Selected*: Background shifts to indigo tint (gba(93, 95, 239, 0.08)), border to #5D5FEF, and indicator fills #5D5FEF with white text.
  - *Answer Review (Correct)*: Border #22C55E, background gba(34, 197, 94, 0.08).
  - *Answer Review (Incorrect)*: Border #EF4444, background gba(239, 68, 68, 0.08).

### Module & APS Progress Cards
- **Module Tile (TWK / TIU / TKP)**: Features an upper icon badge, title, questions completed count, and an integrated slim progress bar.
- **Progress Track**: Track background uses gba(93, 95, 239, 0.1) with a filled gradient bar (#5D5FEF to #8B5CF6).
- **Passing Score Indicator (Passing Grade)**: A micro-marker badge displaying passing score alignment (e.g., "Passing Grade: 65 | Current: 80") using success green or warning amber pills.

### Chips & Badges
- **Question Grid Jump Chips**: 36x36px rounded-full chips. Unanswered items use frosted white; answered items use primary indigo; marked-for-review items use a warning amber top indicator dot.
- **Category Chips**: Micro-pill shape (padding: 4px 10px) utilizing low-opacity tints representing TWK (indigo), TIU (purple), and TKP (pink).

### Floating Navigation Bar
- A suspended glass dock placed 16px above the bottom screen safe area.
- Glass styling: ackground: rgba(255, 255, 255, 0.85), ackdrop-filter: blur(24px), rounded to 9999px (full pill), with perimeter stroke 1px solid rgba(255, 255, 255, 0.8).
- Icon items feature subtle haptic feedback transitions; active item displays an indigo glow node underneath the icon.

### Form Inputs
- Frosted input fields with soft inset depth, 12px vertical padding, rounded to 12px, with focused states highlighted by an indigo halo (  0 0 3px rgba(93, 95, 239, 0.15)).
