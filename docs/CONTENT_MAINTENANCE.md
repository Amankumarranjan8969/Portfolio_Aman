# Content Maintenance & Schema Extension Guide

**Candidate**: Aman Kumar Ranjan  
**Purpose**: Standard operating procedures for updating project entries, adding verified credentials, and registering new empirical research benchmarks.

---

## 1. Central Data Architecture

All content is decoupled from presentation components and resides strictly in typed data modules under `src/data/`:
- `src/data/projects.ts`: Complete project catalog and detail specifications.
- `src/data/credentials.ts`: Official certifications, awards, and degrees.
- `src/data/experience.ts`: Institutional research and industrial internship timelines.
- `src/data/researchMetrics.ts`: Empirical model evaluation tables and district hyperparameter grids.
- `src/data/publications.ts`: Conference papers, dissertations, and technical reports.
- `src/data/profile.ts`: Candidate biography, skills, and contact metadata.

---

## 2. Adding a New Project

To add a new project, append an object adhering to the `Project` interface in [`src/data/projects.ts`](file:///d:/Portfolio_AMAN/src/data/projects.ts):

```typescript
{
  id: "my-new-system",
  title: "My New System Title",
  tagline: "Short technical subtitle",
  shortSummary: "2-3 sentence overview of what the system does.",
  category: "ai-ml", // 'ai-ml' | 'engineering-iot' | 'software' | 'research'
  status: "Verified", // 'Verified' | 'In Progress' | 'Experimental' | 'Needs Verification'
  featured: false,
  role: "Lead Developer",
  period: "2026",
  organization: "Haridwar University / Independent",
  problemStatement: "Precise engineering problem addressed.",
  objectives: [
    "Specific objective 1",
    "Specific objective 2"
  ],
  myContribution: "Detailed breakdown of candidate's individual code/architecture contribution.",
  technologies: ["Python", "PyTorch", "FastAPI"],
  architectureSummary: "Input -> Pipeline -> Output",
  dataSources: ["Dataset description and source"],
  methodology: "Validation protocol and algorithmic approach.",
  implementationDetails: [
    "Specific technical detail 1",
    "Specific technical detail 2"
  ],
  evaluation: {
    metrics: [
      { name: "Test Accuracy", value: "95.4%", ideal: "100%" }
    ],
    context: "Evaluated on held-out test split",
    baselineComparison: [
      { model: "Baseline Model", r2: 0.88, notes: "Comparative baseline" }
    ]
  },
  limitations: [
    "Known limitation 1"
  ],
  setupInstructions: [
    "git clone https://github.com/Amankumarranjan8969/repo-name",
    "pip install -r requirements.txt",
    "python main.py"
  ],
  githubUrl: "https://github.com/Amankumarranjan8969/repo-name",
  supportingEvidence: "Source code repository and commit log.",
  lastReviewedDate: "2026-10-28"
}
```

*Note*: Because all dashboard metrics and category distributions are computed dynamically, adding an entry to `projects.ts` automatically updates all counters and charts!

---

## 3. Adding a Verified Credential

To register a new certificate or honor in [`src/data/credentials.ts`](file:///d:/Portfolio_AMAN/src/data/credentials.ts):

```typescript
{
  id: "unique-credential-id",
  title: "Advanced Deep Learning Specialization",
  issuingOrg: "DeepLearning.AI / Coursera",
  credentialType: "Certification", // 'Certification' | 'Course' | 'Degree' | 'Award' | 'Conference'
  issueDate: "Nov 2026",
  credentialId: "CERT-XYZ-12345",
  verificationUrl: "https://coursera.org/verify/CERT-XYZ-12345",
  status: "Verified", // 'Verified' | 'Document Provided' | 'Needs Verification'
  score: "100% Grade",
  notes: "Coursework covering transformer architectures, attention mechanisms, and optimization.",
  evidenceSource: "Official verification URL and digital certificate PDF.",
  verificationDate: "2026-11-01"
}
```

---

## 4. Quality Gate Checklist Before Committing

Before committing and pushing changes:
1. Run `npm.cmd test` to ensure all schema validation tests pass.
2. Run `npm.cmd run build` to verify TypeScript types and production bundling.
3. Ensure no private keys or personal government IDs are introduced.
