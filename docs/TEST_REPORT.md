# Automated Test & Quality Assurance Report

**Candidate**: Aman Kumar Ranjan  
**Test Framework**: Vitest v2.1.8 + React Testing Library v16.1.0 + JSDOM  
**Date of Execution**: October 28, 2026  
**Test Suite Result**: **13 PASSED, 0 FAILED** (100% Passing)  

---

## 1. Test Execution Summary

```
 RUN  v2.1.9 D:/Portfolio_AMAN

 ✓ tests/unit/filtering.test.ts (4 tests) 6ms
 ✓ tests/unit/dataIntegrity.test.ts (6 tests) 8ms
 ✓ tests/integration/appNavigation.test.tsx (3 tests) 388ms

 Test Files  3 passed (3)
      Tests  13 passed (13)
   Duration  3.69s
```

---

## 2. Test Suite Breakdown

### Suite 1: `tests/unit/dataIntegrity.test.ts` (6 Tests)
- **Schema Validation**: Confirms that all 15 cataloged projects adhere to strict TypeScript interfaces with non-empty titles, summaries, contributions, setup commands, and verified evidence sources.
- **Credential Integrity**: Verifies authentic NPTEL Data Mining roll number `NPTEL26CS58S667100046` (75%), NPTEL Python roll number `NPTEL26CS80S467100069` (63%), and SDMEL 2025 Certificate ID `SDMEL0335`.
- **Dynamic Metric Computation**: Confirms that the portfolio computes exactly 10 Verified projects, 4 In Progress / Experimental prototypes, and 1 Needs Verification entry, matching the total count of 15.
- **NIH Roorkee Empirical Metrics**: Validates that Table 19 dissertation metrics match exact recorded values (Cubist Post-Monsoon $R^2 = 0.9467$, RMSE = 2.6328m, MAE = 1.8326m, WI = 0.9851).
- **CSIR-CBRI AQI Metrics**: Validates that the Bayesian SuperBlend model reflects Test $R^2 = 0.9180$ and RMSE = 7.2997 $\mu g/m^3$.
- **Candidate Profile**: Validates authentic profile fields, contact email `amankumar89669@gmail.com`, and enrolment number `230103001`.

### Suite 2: `tests/unit/filtering.test.ts` (4 Tests)
- **Category Filtering**: Validates multi-category filtering across AI/ML, Research, Engineering & IoT, and Software Applications.
- **Status Filtering**: Validates filtering by evidence status (`Verified`, `In Progress`, `Needs Verification`).
- **Full-Text Search Matching**: Tests substring search matching against project titles, technologies (e.g. `CatBoost`, `ESP8266`), and short summaries.
- **Empty Search Fallback**: Confirms that unmatchable search queries return an empty list gracefully without runtime exceptions.

### Suite 3: `tests/integration/appNavigation.test.tsx` (3 Tests)
- **Initial Render Smoke Test**: Confirms that the executive hero, verified metric counters, and featured project cards render on mount.
- **Sidebar Tab Switching**: Simulates user navigation clicks to the Projects and Evidence registers, asserting that view titles and content dynamically mount.
- **Project Modal Interaction**: Simulates clicking a project card, verifies modal dialog appearance with complete technical details, and verifies closure via the close button.

---

## 3. Production Build Smoke Test

Command executed: `npm.cmd run build` (`tsc && vite build`)
Result:
- **TypeScript Compiler (`tsc`)**: Passed with zero diagnostic errors.
- **Vite Production Bundler**: Bundled in 4.04s.
- **Asset Code-Splitting**:
  - `dist/index.html` (2.09 kB)
  - `dist/assets/index-D1Ym5cun.css` (34.94 kB)
  - `dist/assets/index-CamqnNWT.js` (181.58 kB)
  - `dist/assets/icons-Cvt3zVwK.js` (31.53 kB)
  - `dist/assets/charts-DEKHQvAH.js` (512.32 kB)
  - `dist/404.html` (0.75 kB)
  - `dist/favicon.svg` (0.80 kB)

**QA VERDICT: ALL QUALITY GATES PASSED**
