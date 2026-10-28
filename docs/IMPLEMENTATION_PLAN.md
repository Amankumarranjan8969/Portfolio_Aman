# Implementation Plan: Professional Engineering Portfolio

**Candidate**: Aman Kumar Ranjan  
**Primary Target**: Software Engineering Recruiters, AI/ML Teams, Research Supervisors, Technical Interviewers  
**Target Repository**: `Amankumarranjan8969.github.io`  
**Expected URL**: `https://amankumarranjan8969.github.io`  
**Date**: October 28, 2026  

---

## 1. Technical Stack & Architectural Decisions

### Frontend Framework
- **React 19 + TypeScript**: Modern, type-safe reactive frontend for high performance and stability.
- **Vite**: Ultra-fast build tool with optimized production chunking and asset hashing.
- **Tailwind CSS**: Utility-first CSS framework adhering to the dark technical design system.
- **React Router (HashRouter or SPA 404 trick for GitHub Pages)**: Enables seamless deep-linking to specific views without server-side routing failures on GitHub Pages.
- **Lucide React**: Clean, lightweight technical iconography.
- **Recharts**: Responsive SVG data visualizations for model comparison charts, error residuals, and metric distributions.
- **Vitest + React Testing Library**: Robust automated unit and component testing.

### Directory Structure
```
d:\Portfolio_AMAN/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions CI/CD for GitHub Pages
├── docs/                           # Architecture, audit, security, and verification docs
│   ├── WORKSPACE_AUDIT.md
│   ├── PROJECT_INVENTORY.md
│   ├── VERIFICATION_REGISTER.md
│   ├── IMPLEMENTATION_PLAN.md
│   ├── SECURITY_REVIEW.md
│   ├── DEPLOYMENT.md
│   ├── TEST_REPORT.md
│   └── CONTENT_MAINTENANCE.md
├── public/
│   ├── 404.html                    # SPA redirect fallback for GitHub Pages
│   ├── favicon.svg                 # Technical branded monogram favicon
│   └── assets/                     # Safe static diagrams and placeholders
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Core layout, sidebar, router, theme provider
│   │   └── routes.tsx              # Application routing definitions
│   ├── components/
│   │   ├── common/                 # Header, Sidebar, Footer, Navigation, Modal, Breadcrumb
│   │   └── ui/                     # Badge, Button, Card, Tabs, MetricDisplay, SearchInput
│   ├── features/
│   │   ├── dashboard/              # Executive overview, live metric counters, distribution charts
│   │   ├── projects/               # Filterable catalog, project card, comprehensive detail modal
│   │   ├── research/               # NIH Roorkee dissertation & CSIR-CBRI AQI deep-dives
│   │   ├── engineering/            # IoT HydroSense & Grandmaster Arena Chess platform
│   │   ├── software/               # Full-stack apps (ATS Resume Analyzer, Web Dev series)
│   │   ├── credentials/            # Official certificates with verification links & modal
│   │   ├── experience/             # NIH Roorkee, CSIR-CBRI, CertED internship timelines
│   │   ├── github/                 # Live public repository feed & contributions showcase
│   │   ├── publications/           # SDMEL 2025 paper & technical reports
│   │   ├── resume/                 # Interactive resume viewer with verified achievements
│   │   ├── contact/                # Direct contact methods, public social links, secure form
│   │   └── evidence/               # Evidence & Verification Center with audit matrix
│   ├── data/
│   │   ├── profile.ts              # Candidate profile, headline, biography, social links
│   │   ├── projects.ts             # Typed catalog of all 15 audited projects
│   │   ├── credentials.ts          # Typed certifications with IDs, scores, verification URLs
│   │   ├── experience.ts           # Academic research & industrial internship timelines
│   │   ├── researchData.ts         # Authentic empirical test metrics from NIH & CBRI studies
│   │   └── publications.ts         # Conference papers and research writeups
│   ├── types/
│   │   ├── project.ts              # Strict TypeScript interfaces for projects
│   │   ├── credential.ts           # Interfaces for certificates & verification statuses
│   │   └── experience.ts           # Interfaces for internships, roles, and education
│   ├── styles/
│   │   └── index.css               # Tailwind directives and custom scrollbars
│   ├── main.tsx                    # React entrypoint
│   └── vite-env.d.ts
├── tests/
│   ├── unit/                       # Component and data calculation tests
│   └── integration/                # Filter, search, and navigation tests
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── README.md
```

---

## 2. Design System: Dark Technical Engineering Dashboard

- **Color Palette**:
  - Background: Deep Navy / Charcoal Slate (`#0B0F19`, `#0F172A`, `#1E293B`)
  - Surface Cards: `#111827`, `#1E293B` with border `#334155`
  - Accent Colors: Technical Cyan (`#06B6D4`), Sapphire Blue (`#3B82F6`), Emerald Green (`#10B981` for Verified), Amber (`#F59E0B` for In Progress / Experimental)
  - Text: High contrast off-white (`#F8FAFC`), subdued slate (`#94A3B8`)
- **Typography**: Clean, geometric sans-serif (`Inter`, `system-ui`) with monospace numerals (`JetBrains Mono`, `ui-monospace`) for metrics and code snippets.
- **Accessibility & Performance**:
  - WCAG AA contrast compliance.
  - Keyboard accessible navigation with explicit `:focus-visible` styling.
  - Reduced-motion queries respected in CSS transitions.
  - Zero bloated external image dependencies; self-contained vector icons and local SVG charts.

---

## 3. Strict Authenticity & Metric Policy

- **Zero Fabricated Claims**:
  - All project counts are derived dynamically from `projects.ts` and `credentials.ts`.
  - Research metrics are taken directly from inspected dissertation tables (`D:\AMAN REPORT NIH ROORKEE222222.docx` Table 19: Cubist $R^2 = 0.9467$, CatBoost $R^2 = 0.9041$, AdaBoost $R^2 = 0.9073$) and CSIR-CBRI reports (SuperBlend $R^2 = 0.9180$, CatBoost $R^2 = 0.9161$).
  - NPTEL scores are exact: 75% for Data Mining (`NPTEL26CS58S667100046`) and 63% for Python for Data Science (`NPTEL26CS80S467100069`).
  - Conference certificate ID `SDMEL0335` links directly to its official verification endpoint `https://sdmel2025.vercel.app/v?id=SDMEL0335`.
  - Unconfirmed items (IBM SkillsBuild badges, SINET conference certificates, FitMove) are truthfully marked `Needs Verification`.

---

## 4. Execution Phases

1. **Scaffold Toolchain**: Initialize Vite React TypeScript project, Tailwind CSS, dependencies, and TypeScript configs.
2. **Data & Schema Layer**: Write strictly typed data files in `src/data/` and `src/types/`.
3. **Core Shell & Navigation**: Implement responsive sidebar, top bar, dynamic breadcrumbs, and search.
4. **Feature Modules**:
   - Executive Dashboard with Recharts visualization.
   - Comprehensive Project Catalog with instant search, multi-category filters, and detail modal.
   - AI/ML & Research Hub with interactive model comparison tables.
   - Engineering & IoT Showcase (HydroSense architecture & Chess engine).
   - Software Applications Showcase.
   - Credential & Verification Center.
   - Experience & Timeline.
   - GitHub & Public Repositories section.
   - Publications & Technical Writing.
   - Resume & Contact.
5. **Testing Suite**: Configure Vitest and write automated tests for filters, search, data consistency, and component rendering.
6. **Production Build & CI/CD**: Verify `npm run build`, generate GitHub Actions workflow `deploy.yml`, and write full documentation.
