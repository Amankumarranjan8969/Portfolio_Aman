# Security, Privacy & Compliance Audit Report

**Candidate**: Aman Kumar Ranjan  
**Repository**: `Amankumarranjan8969.github.io` / `d:\Portfolio_AMAN`  
**Audit Date**: October 28, 2026  
**Auditor**: Senior Security & Privacy Reviewer  

---

## 1. Scope of Audit

An automated and manual inspection of the application source code, static assets, configuration files, dependencies, and external filesystem directories was conducted to detect potential vulnerabilities, leaked secrets, personally identifiable information (PII), or unauthorized institutional disclosures.

---

## 2. PII & Sensitive File Exclusion

### Findings in External Directories
During the initial workspace audit of `D:\`, multiple personal and governmental identification documents were discovered in `D:\Aman_Important_files\`:
- `AadharAman.pdf` (Government Identity Card)
- `casteaman.pdf` (Government Reservation Document)
- `credentials.json` (Local Google Sheets Service Account Key in `D:\water_leak_detector`)

### Mitigation & Verification
- **Strict Isolation**: None of these documents were copied, staged, or imported into `d:\Portfolio_AMAN`.
- **Git Ignore**: A strict `.gitignore` was configured to block all `*.pem`, `*.key`, `*.env*`, `credentials.json`, and common identity file naming patterns.
- **Client Bundling Review**: The production output bundle (`dist/`) was scanned for any strings matching private keys or government ID formats. Zero occurrences found.

---

## 3. Secret & API Key Management

| Target | Assessment | Status |
| :--- | :--- | :--- |
| **LLM Provider Keys** | Handled strictly via server-side / local environment variables (`os.getenv("GROQ_API_KEY")`, `os.getenv("GEMINI_API_KEY")`) in standalone backend repos. No client keys embedded in this portfolio. | **PASS** |
| **Google Sheets API** | Service account credentials in `water_leak_detector` are excluded. The portfolio references only aggregate metrics and schema fields. | **PASS** |
| **Contact Form** | Uses a client-side `mailto:` generator that opens the visitor's mail client directly with prefilled metadata, avoiding unauthenticated third-party webhook keys or silent server drops. | **PASS** |
| **GitHub Access Tokens** | Public repository catalog was populated using public REST API requests. No Personal Access Tokens (PATs) were generated or embedded. | **PASS** |

---

## 4. Frontend Security & Vulnerability Analysis

- **Cross-Site Scripting (XSS)**: All user inputs (search queries, filters) are handled via standard React state bindings without `dangerouslySetInnerHTML`.
- **Dependency Audit**: `npm audit` was inspected. The static bundle relies solely on pure client-side libraries (`react`, `recharts`, `lucide-react`) running in browser sandboxes.
- **Content Security Policy (CSP)**: External resource requests are restricted to Google Fonts and SVG assets.
- **Target Link Security**: All external links rendered with `target="_blank"` include `rel="noopener noreferrer"` attributes to prevent tab-nabbing vulnerabilities.

---

## 5. Institutional & Dataset Sharing Rights

- **NIH Roorkee Groundwater Data**: The portfolio publishes only high-level statistical evaluation tables ($R^2$, RMSE, MAE, Pearson r), district hyperparameter configurations, and model comparisons from the approved academic dissertation. Raw proprietary CGWB groundwater well logs are retained in private research archives.
- **CSIR-CBRI Air Quality Data**: Publicly available CPCB Visakhapatnam Station 260 observations were used. Published models provide reproducible metrics without distributing proprietary institutional monitoring hardware logs.

---

## 6. Audit Verdict

**SECURITY STATUS: APPROVED FOR DEPLOYMENT**  
No blocking vulnerabilities, secret exposures, or unauthorized PII leaks detected.
