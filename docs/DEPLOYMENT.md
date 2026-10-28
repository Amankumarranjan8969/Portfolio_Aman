# Deployment Guide: GitHub Pages CI/CD

**Target Repository**: `https://github.com/Amankumarranjan8969/Amankumarranjan8969.github.io`  
**Target Live URL**: `https://amankumarranjan8969.github.io/`  
**Build Tool**: Vite 6 + React 18 + TypeScript  

---

## 1. Automated Deployment via GitHub Actions (Recommended)

The repository includes a production-grade CI/CD workflow at [`.github/workflows/deploy.yml`](file:///d:/Portfolio_AMAN/.github/workflows/deploy.yml).

### Step-by-Step Setup:
1. **Create the GitHub Pages Repository**:
   - Go to GitHub and create a new public repository named:
     `Amankumarranjan8969.github.io`
   - *Note*: Naming the repository `<username>.github.io` configures it as a user-level site, served directly from the root domain `https://amankumarranjan8969.github.io/`.

2. **Configure GitHub Pages Source**:
   - In the repository settings on GitHub, navigate to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.

3. **Push the Workspace to GitHub**:
   ```bash
   cd d:\Portfolio_AMAN
   git remote add origin https://github.com/Amankumarranjan8969/Amankumarranjan8969.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Automated Pipeline Execution**:
   - The workflow will automatically trigger on push to `main`.
   - The `build-and-test` job will install dependencies, execute the 13 automated Vitest tests, compile TypeScript, and bundle production assets with Vite.
   - The `deploy` job will publish the static output to GitHub Pages with HTTPS enabled.

---

## 2. Local Manual Build & Preview

To verify the production build locally before pushing:

```bash
# 1. Install dependencies
npm.cmd install

# 2. Run automated test suite
npm.cmd test

# 3. Compile TypeScript & bundle production assets
npm.cmd run build

# 4. Preview the production build locally (Port 4173)
npm.cmd run preview
```

---

## 3. SPA Routing Configuration on GitHub Pages

Because GitHub Pages is a static file host, navigating directly to deep client routes can result in a 404 error if not handled properly.
This portfolio implements a dual-defense solution:
1. **Hash-Based Deep Linking**: The application uses URL hashes (`#projects`, `#ai-ml`, `#evidence`, `#certificates`) which are parsed purely client-side by React.
2. **`404.html` Redirection Script**: A standard SPA redirect fallback is bundled in `public/404.html` and automatically copied to `dist/404.html` during the build process.

---

## 4. Post-Deployment Verification Checklist

Once the repository is pushed and the Actions run completes, verify:
- [ ] `https://amankumarranjan8969.github.io/` loads with HTTP 200.
- [ ] Dark technical theme renders correctly.
- [ ] All 15 cataloged projects can be searched and filtered.
- [ ] Project detail modals open and display evaluation metrics.
- [ ] Recharts graphs render smoothly without layout shift.
- [ ] Verification links for SDMEL 2025 and NPTEL open active external portals.
- [ ] GitHub Pages enforces HTTPS automatically.
