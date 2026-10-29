import React, { useState } from 'react';
import { candidateProfile } from '../../data/profile';
import { experienceData } from '../../data/experience';
import { credentialsData } from '../../data/credentials';
import { publicationsData } from '../../data/publications';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import {
  FileText,
  Printer,
  Copy,
  Check,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  GraduationCap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/ui/BrandIcons';

export const ResumeView: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    const resumeText = `
AMAN KUMAR RANJAN
B.Tech Computer Science & Engineering (Data Science)
Haridwar University, Roorkee (CGPA: 6.96 / 10.0) | Enrolment No: 230103001
Email: ${candidateProfile.contact.email} | Location: ${candidateProfile.contact.location}
GitHub: ${candidateProfile.contact.github} | LinkedIn: ${candidateProfile.contact.linkedin}

SUMMARY
${candidateProfile.bio}

EDUCATION
Haridwar University, Roorkee (Sep 2023 - 2027)
B.Tech CSE (Data Science) | CGPA: 6.96 / 10.0
Kendriya Vidyalaya Ramgarh Cantt (2022) | Class XII CBSE (77.0%)

EXPERIENCE & RESEARCH
1. National Institute of Hydrology (NIH), Roorkee (2025 - 2026)
   B.Tech Dissertation Research Fellow
   - Formulated JAL-SETU seasonal groundwater level forecasting pipeline across 7 Rajasthan districts.
   - Tuned Cubist (R²=0.9467), CatBoost, and Extra Trees using Landsat remote sensing (NDVI, NDWI, NDMI).
   - Built deterministic TF-IDF RAG conversational assistant.

2. CSIR–Central Building Research Institute (CBRI), Roorkee (June 2025 - August 2025)
   AI/ML Research Intern
   - Engineered multi-hybrid AQI and PM2.5 forecasting models (CatBoost + ARIMA, SARIMAX + LightGBM).
   - Achieved Test R² = 0.9180 with Bayesian SLSQP SuperBlend.
   - Built 5-year future environmental projections (2023-2028).

3. CertED Technologies (June 2025 - July 2025)
   Data Science Intern
   - Developed fraud detection pipeline on 284K+ transactions with SMOTE (0.95 ROC-AUC).

KEY CERTIFICATIONS & AWARDS
- NPTEL Data Mining (IIT Kharagpur) - 75% Score (Cert ID: NPTEL26CS58S667100046)
- NPTEL Python for Data Science (IIT Madras) - 63% Score (Cert ID: NPTEL26CS80S467100069)
- Microsoft Power BI for Business Applications (Microsoft Learn & FICE) - Dec 2025
- TechSangram 2026 2nd Runner-Up (HydroSense IoT Smart Water Leak Detection)
- SDMEL 2025 Conference Co-Author (Cert ID: SDMEL0335)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
            <FileText className="w-4 h-4" />
            <span>Verified Curriculum Vitae</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Curriculum Vitae
          </h1>
          <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
            Audited against verified institutional dissertations, NPTEL certificates, and GitHub repositories.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleCopyText}
            icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          >
            {copied ? 'Copied to Clipboard' : 'Copy Plaintext CV'}
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => window.print()}
            icon={<Printer className="w-3.5 h-3.5" />}
          >
            Print / Save PDF
          </Button>
        </div>
      </div>

      {/* Printable Sheet Card */}
      <Card className="p-8 sm:p-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-2xl max-w-4xl mx-auto font-sans text-slate-800 dark:text-slate-200 space-y-8 print:p-0 print:border-none print:shadow-none">
        {/* Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {candidateProfile.name}
            </h2>
            <p className="text-sm font-semibold text-blue-600 dark:text-cyan-400 font-mono mt-1">
              B.Tech in Computer Science & Engineering (Data Science)
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Haridwar University, Roorkee • Enrolment No: 230103001
            </p>
          </div>

          <div className="text-xs font-mono text-slate-600 dark:text-slate-400 space-y-1 sm:text-right">
            <p className="flex items-center sm:justify-end gap-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>{candidateProfile.contact.email}</span>
            </p>
            <p className="flex items-center sm:justify-end gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>{candidateProfile.contact.location}</span>
            </p>
            <p className="flex items-center sm:justify-end gap-1.5">
              <GithubIcon className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <a href={candidateProfile.contact.github} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-cyan-400 hover:underline">
                github.com/{candidateProfile.contact.githubUsername}
              </a>
            </p>
          </div>
        </div>

        {/* Professional Summary */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-mono border-b border-slate-200 dark:border-slate-800 pb-1 mb-2">
            Professional Summary
          </h3>
          <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
            {candidateProfile.bio}
          </p>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-mono border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
            Education
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <strong className="text-slate-900 dark:text-white text-sm">Haridwar University</strong>
                <p className="text-slate-700 dark:text-slate-300">Bachelor of Technology (B.Tech) — Computer Science & Engineering (Data Science)</p>
                <p className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">Enrolment No: 230103001 • Roorkee, Uttarakhand</p>
              </div>
              <div className="text-left sm:text-right font-mono">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">CGPA: 6.96 / 10.0</span>
                <span className="text-slate-400 dark:text-slate-500 block text-[11px]">Sep 2023 – Present</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pt-2 border-t border-slate-100 dark:border-slate-900">
              <div>
                <strong className="text-slate-900 dark:text-white">Kendriya Vidyalaya Ramgarh Cantt</strong>
                <p className="text-slate-700 dark:text-slate-300">Higher Secondary Examination (Class XII, CBSE Board)</p>
              </div>
              <div className="text-left sm:text-right font-mono">
                <span className="text-slate-700 dark:text-slate-300">77.0%</span>
                <span className="text-slate-400 dark:text-slate-500 block text-[11px]">2022</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-mono border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
            Research Fellowships & Industrial Internships
          </h3>
          <div className="space-y-5 text-xs">
            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <strong className="text-slate-900 dark:text-white text-sm">{exp.role}</strong>
                    <span className="text-slate-500 dark:text-slate-400 ml-2 font-mono">• {exp.organization}</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 text-[11px] leading-relaxed">
                  {exp.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Certifications & Honors */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-mono border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
            Verified Certifications & Competitive Honors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {credentialsData.filter((c) => c.status === 'Verified').map((c) => (
              <div key={c.id} className="p-2.5 rounded bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80">
                <span className="text-slate-900 dark:text-white font-bold block">{c.title}</span>
                <span className="text-blue-600 dark:text-cyan-400 text-[11px] block">{c.issuingOrg}</span>
                <div className="mt-1 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <span>{c.score || c.issueDate}</span>
                  {c.credentialId && <code className="text-emerald-600 dark:text-emerald-400">{c.credentialId}</code>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 font-mono border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
            Technical Proficiencies
          </h3>
          <div className="space-y-2 text-xs">
            {candidateProfile.skillsByCategory.map((cat) => (
              <div key={cat.category} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                <span className="font-mono text-slate-500 dark:text-slate-400 w-44 font-semibold text-[11px]">{cat.category}:</span>
                <span className="text-slate-700 dark:text-slate-300 font-mono text-[11px]">{cat.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
