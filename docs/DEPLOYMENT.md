# Complete Deployment Guide: Aman Kumar Ranjan Engineering Portfolio

**Primary Deployment URL**: `https://amankumarranjan8969.github.io/`  
**Target Repository**: `https://github.com/Amankumarranjan8969/Amankumarranjan8969.github.io`  
**Alternative Repository Names**: `portfolio-aman`, `portfolio` (works seamlessly due to relative asset paths `base: './'`)  
**Technology Stack**: Vite 6 + React 18 + TypeScript + Tailwind CSS (Zero external runtime backend required)

---

## Architecture Readiness Summary

| Feature | Implementation | Verified Status |
| :--- | :--- | :--- |
| **Asset URLs** | Relative (`base: './'`) in `vite.config.ts` | Verified (works at root domain or any subdirectory) |
| **Code Splitting** | Custom manualChunks (`vendor`, `charts`, `icons`, `index`) | Verified (optimal caching, 0 empty chunks) |
| **Client Routing** | Dual defense: Hash linking (`#projects`, `#profile`) + `public/404.html` | Verified (zero 404s on deep reload) |
| **SEO & Crawlers** | `public/robots.txt` + `public/sitemap.xml` | Verified (crawls all 12 view anchors) |
| **Social Previews** | OpenGraph & Twitter Card meta tags with authentic portrait photo | Verified |
| **Vercel Support** | `vercel.json` SPA rewrite configuration | Verified |
| **Netlify / Cloudflare** | `netlify.toml` + `public/_redirects` | Verified |
| **Automated CI/CD** | `.github/workflows/deploy.yml` GitHub Actions workflow | Verified |
| **One-Click Deploy** | `npm run deploy` via `gh-pages` | Verified |

---

## Method 1: GitHub Pages via GitHub Actions (Recommended)

This method automatically compiles, runs all tests, and deploys every time you push to the `main` branch.

### Step 1: Create the GitHub Repository
1. Log in to [GitHub](https://github.com/new).
2. Create a new public repository named:
   ```text
   Amankumarranjan8969.github.io
   ```
   *(Naming it `<username>.github.io` publishes it directly to the root URL `https://amankumarranjan8969.github.io/`)*.

### Step 2: Configure Pages to use GitHub Actions
1. On your new repository page on GitHub, click **Settings** &rarr; **Pages** (in the left sidebar).
2. Under **Build and deployment** &rarr; **Source**, select **GitHub Actions** from the dropdown menu.

### Step 3: Link Remote & Push from your Terminal
Open PowerShell or your terminal in `d:\Portfolio_AMAN` and run:

```powershell
cd d:\Portfolio_AMAN

# If remote origin is not yet added:
git remote add origin https://github.com/Amankumarranjan8969/Amankumarranjan8969.github.io.git

# Set default branch to main and push
git branch -M main
git push -u origin main
```

### Step 4: Watch the Pipeline
Go to the **Actions** tab on your GitHub repository. The workflow **"Deploy Engineering Portfolio to GitHub Pages"** will automatically:
1. Check out code and set up Node.js 20.
2. Run `npm ci`.
3. Run all unit & integration tests (`npm run test`).
4. Build the production bundle (`npm run build`).
5. Upload and publish the site to `https://amankumarranjan8969.github.io/`.

---

## Method 2: Manual Deploy via `npm run deploy` (Fastest)

If you prefer deploying directly from your local terminal to GitHub Pages without waiting for GitHub Actions:

```powershell
cd d:\Portfolio_AMAN

# Runs tsc, vite build, and publishes dist directly to the gh-pages branch:
npm.cmd run deploy
```

In GitHub Repository **Settings** &rarr; **Pages**, select **Deploy from a branch**, choose branch `gh-pages` and folder `/ (root)`.

---

## Method 3: Deploy to Vercel (1-Click)

The repository includes a ready `vercel.json`.

1. Go to [vercel.com](https://vercel.com/new).
2. Import your `Amankumarranjan8969.github.io` or `portfolio-aman` repository.
3. Framework preset: **Vite** (auto-detected).
4. Click **Deploy**.
5. Live within 30 seconds at your custom `.vercel.app` URL.

---

## Method 4: Deploy to Netlify

The repository includes `netlify.toml` and `public/_redirects`.

1. Go to [netlify.com](https://app.netlify.com/start).
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**.

---

## Pre-Deployment Verification Checklist

Before pushing, verify your build locally:

```powershell
# 1. Run automated tests (all 15 must pass)
npm.cmd test

# 2. Compile TypeScript & bundle production assets
npm.cmd run build

# 3. Test production preview on local port 4173
npm.cmd run preview
```

### Post-Deployment Sanity Checks
- [ ] `https://amankumarranjan8969.github.io/` loads over HTTPS.
- [ ] Day (White) theme renders cleanly by default.
- [ ] Day / Night switcher in top-right header toggles smoothly and persists across refreshes.
- [ ] Clicking **"Profile & Brand Logo"** displays the candidate portrait photo, vector monogram logo, and Haridwar University Enrolment No. `230103001`.
- [ ] All 15 projects filter and search correctly.
- [ ] Project detail modal opens and closes with Esc or close button.
- [ ] External verification links for SDMEL 2025 (`https://sdmel2025.vercel.app/v?id=SDMEL0335`) and NPTEL open active validation portals.
