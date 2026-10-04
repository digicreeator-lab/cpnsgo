# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS (Single-file SPA using Vue 3 CDN, Tailwind CSS CDN, and Google Apps Script backend)

## Users

- **Fresh Graduates:** First-time applicants who need a clear roadmap and foundational logic to avoid feeling overwhelmed.
- **Honorer / Working Professionals:** Busy individuals needing quick, micro-learning sessions (e.g., 5-question quizzes) on the go.
- **Serial Applicants:** Candidates who have failed previously and need deep analysis of tricky questions (especially TKP).

## Product Purpose

CPNS GO is a structured, micro-learning platform designed to prepare candidates for the CPNS selection exams. It replaces unstructured, static PDF studying with a gamified progression system to ensure foundational mastery and high retention. Success is defined by active module completion and significantly improved scores in CAT simulations.

## Positioning

Unlike traditional platforms that provide simple answer keys, CPNS GO utilizes an **Action-Point-Solution (APS)** breakdown to explain the underlying logic of every choice. It enforces a progression lock (requiring a score of ≥ 3 out of 5) to guarantee users master foundational concepts before advancing, ensuring true competence rather than false confidence.

## Operating Context

Used primarily on mobile devices (smartphones) by individuals studying on the go or during short breaks. The app must remain exceptionally lightweight and accessible across various network conditions, relying on a Google Apps Script/Google Sheets backend.

## Capabilities and Constraints

- **Single-File SPA:** Entire frontend (HTML, Vue logic, Tailwind styling, routing) must reside in a single `public/index.html` file. No build tools.
- **Progression Lock:** System requires passing a module (score ≥ 3) to unlock the next.
- **Modules:** Covers TWK, TIU, and TKP categories, plus a full CAT Simulator with timers.
- **Backend Constraints:** Uses Google Sheets as a database via GAS. No relational database; state and relations are managed via frontend logic.
- **Data Mocking:** Must support a `USE_MOCK` toggle for local development/testing without hitting the GAS API.

## Brand Commitments

- **Aesthetic:** Modern, premium "Glassmorphism / Neumorphism Hybrid" with a Dark Mode Fintech feel (as established in the incumbent design system).
- **Tone:** Encouraging, analytical, and structured. 

## Evidence on Hand

- Documented PRD, architectural rules (`AGENTS.md`), and an existing design token system (`design.md`).
- Using placeholders for module content (TWK, TIU, TKP) and brand assets until real content is provided.

## Product Principles

1. **Mastery over Completion:** Progression is locked behind actual understanding; users cannot skip ahead without passing.
2. **Logic over Memorization:** Every answer must provide the *why* using the APS methodology.
3. **Frictionless Access:** The experience must be instant, lightweight, and single-page, respecting the user's limited time and device capabilities.

## Accessibility & Inclusion

- Adherence to WCAG 2.0 contrast standards.
- Minimum 16px font size to ensure readability of long material.
- Thumb-zone optimized navigation (Next/Back buttons) for mobile users.
