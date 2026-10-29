import React from 'react';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import {
  ShieldCheck,
  FileCheck,
  Search,
  ExternalLink,
  AlertTriangle,
  FolderLock,
  FileText,
  CheckCircle2,
  Terminal
} from 'lucide-react';

export const EvidenceView: React.FC = () => {
  const auditEntries = [
    {
      category: "Academic Dissertation",
      title: "NAYA-PANI: Seasonal Groundwater Forecasting & RAG Framework",
      institution: "National Institute of Hydrology (NIH), Roorkee",
      status: "Verified",
      evidence: "100+ page institutional thesis writeup (D:\\AMAN REPORT NIH ROORKEE222222.docx) supervised by Dr. Sushindra Kumar Gupta (Scientist 'C'). 30 empirical result tables across 7 districts.",
      verificationUrl: undefined
    },
    {
      category: "Government Research Lab Internship",
      title: "Multi-Hybrid Air Quality Index (AQI) & PM2.5 Prediction System",
      institution: "CSIR–Central Building Research Institute (CBRI), Roorkee",
      status: "Verified",
      evidence: "Complete project directory, code notebooks, serialized model weights (.cbm, .h5), and formal internship report in D:\\CBRI_project - Copy.",
      verificationUrl: "https://github.com/Amankumarranjan8969/aqi_prediction_using-hybrid_models"
    },
    {
      category: "Proctored National Certification",
      title: "Data Mining (8-Week Course, Jan–Mar 2026)",
      institution: "NPTEL / SWAYAM (IIT Kharagpur)",
      status: "Verified",
      evidence: "Official certificate PDF. Score: 75% (Assignment: 23.58/25, Exam: 51.75/75). Recommended credits: 3. Cert ID: NPTEL26CS58S667100046.",
      verificationUrl: "https://nptel.ac.in/noc/"
    },
    {
      category: "Proctored National Certification",
      title: "Python for Data Science (4-Week Course, Jan–Feb 2026)",
      institution: "NPTEL / SWAYAM (IIT Madras)",
      status: "Verified",
      evidence: "Official certificate PDF. Score: 63% (Assignment: 24.58/25, Exam: 38.25/75). Recommended credits: 2. Cert ID: NPTEL26CS80S467100069.",
      verificationUrl: "https://nptel.ac.in/noc/"
    },
    {
      category: "International Conference Presentation",
      title: "Inclusive Voice-AI for Rural India: A Deep Learning Framework",
      institution: "SDMEL International Conference",
      status: "Verified",
      evidence: "Certificate ID SDMEL0335 with active online verification portal and certificate PDF in workspace.",
      verificationUrl: "https://sdmel2025.vercel.app/v?id=SDMEL0335"
    },
    {
      category: "International Conference Participation",
      title: "SDMEL 2026 Conference Participant & Delegate",
      institution: "SDMEL International Conference",
      status: "Verified",
      evidence: "Active delegate and research co-author on sustainable development, machine learning, and emerging AI technologies.",
      verificationUrl: "https://sdmel2025.vercel.app/v?id=SDMEL0335"
    },
    {
      category: "Corporate Technology Certification",
      title: "AI Fundamentals & Introduction to Artificial Intelligence",
      institution: "IBM SkillsBuild",
      status: "Verified",
      evidence: "Official IBM SkillsBuild foundational certifications covering artificial intelligence paradigms, cognitive systems, and ethical AI.",
      verificationUrl: undefined
    },
    {
      category: "Corporate Technology Training",
      title: "Power BI - For Business Applications (20-Hour Course)",
      institution: "Microsoft Learn in collab with FICE",
      status: "Verified",
      evidence: "Official certificate issued Dec 10, 2025 signed by Gunjan Patel (Director, Microsoft Elevate & Philanthropies, Microsoft India). Email: amankumar89669@gmail.com.",
      verificationUrl: undefined
    },
    {
      category: "Hardware & IoT Competition",
      title: "HydroSense: Smart Water Leakage & IoT Monitoring",
      institution: "TechSangram 2026, Haridwar University",
      status: "Verified",
      evidence: "2nd Runner-Up award won April 2026. Arduino/ESP8266 firmware (.ino), 900KB+ continuous telemetry logs (data.csv), and event photography.",
      verificationUrl: undefined
    },
    {
      category: "Full-Stack Software Monorepo",
      title: "Grandmaster Arena: Authoritative Full-Stack Chess Platform",
      institution: "Independent Software Engineering Project",
      status: "Verified",
      evidence: "Complete monorepo in D:\\chess containing @chess/core (15/15 tests passed, FIDE rules, minimax AI), @chess/web, @chess/server.",
      verificationUrl: undefined
    },
    {
      category: "Open-Source Exploration",
      title: "Self-Learning Small Language Model (SLM)",
      institution: "Independent Research",
      status: "In Progress",
      evidence: "Local training runs in D:\\SelfLearningLLM and public GitHub repository SLM- on TinyStories dataset.",
      verificationUrl: "https://github.com/Amankumarranjan8969/SLM-"
    },
    {
      category: "Collaborative Hydrology Simulation",
      title: "Punpun River Basin Digital Twin",
      institution: "National Institute of Hydrology (Collaborative Study)",
      status: "Experimental",
      evidence: "Data and pipeline scripts (punpun_et_pipeline.py, Punpun_Merged_Dataset_New.csv) in D:\\NIH_Suhani. Collaborative numerical simulation; no physical river IoT hardware deployed.",
      verificationUrl: undefined
    },
    {
      category: "Distributed Emergency Systems",
      title: "Blue Alert: Distributed Blockchain Flood Warning System",
      institution: "Independent Engineering / GitHub Deployed",
      status: "Verified",
      evidence: "Fully working and fully minted decentralized application. Authoritative SHA-256 blockchain engine (blueAlertBlockchain.js), Express API (server.js), frontend client, and GitHub deployment.",
      verificationUrl: "https://github.com/Amankumarranjan8969"
    },
    {
      category: "Conceptual Dashboard",
      title: "FitMove Dashboard",
      institution: "Historical Proposal",
      status: "Needs Verification",
      evidence: "Referenced in historical requirements but no matching code found on disk or public repositories. Truthfully marked as Needs Verification.",
      verificationUrl: undefined
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
          <ShieldCheck className="w-4 h-4" />
          <span>Authenticity & Evidence Register</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Evidence Verification Center
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 font-mono mt-1 max-w-3xl">
          Complete transparent register distinguishing verified institutional evidence from user-reported claims, in-progress prototypes, and planned proposals.
        </p>
      </div>

      {/* Audit Policy Statement */}
      <Card className="bg-gradient-to-r from-emerald-50/80 to-slate-50 dark:from-emerald-950/30 dark:to-slate-900 border-emerald-200 dark:border-emerald-900/50">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs font-mono text-slate-700 dark:text-slate-300">
            <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Zero-Fabrication Engineering Standard
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-xs">
              This portfolio adheres to strict evidence auditing. All empirical model metrics ($R^2$, RMSE, MAE) are derived from inspected dissertation tables at the National Institute of Hydrology (NIH) Roorkee and CSIR-CBRI reports. NPTEL certificate scores and IDs reflect verified proctored records. No fictional user statistics, stars, or unverified claims are presented.
            </p>
          </div>
        </div>
      </Card>

      {/* Evidence Register Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40">
        <table className="w-full text-left text-xs font-mono">
          <thead className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
            <tr>
              <th className="p-3">Category & Title</th>
              <th className="p-3">Institution / Context</th>
              <th className="p-3">Audit Status</th>
              <th className="p-3">Primary Evidence Inspected</th>
              <th className="p-3 text-right">Verification</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60">
            {auditEntries.map((entry, idx) => (
              <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td className="p-3">
                  <span className="text-[10px] text-blue-600 dark:text-cyan-400 block uppercase font-mono">
                    {entry.category}
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {entry.title}
                  </span>
                </td>
                <td className="p-3 text-slate-700 dark:text-slate-300 whitespace-nowrap">
                  {entry.institution}
                </td>
                <td className="p-3 whitespace-nowrap">
                  <Badge status={entry.status} size="sm" />
                </td>
                <td className="p-3 text-slate-600 dark:text-slate-400 max-w-md text-[11px] leading-relaxed">
                  {entry.evidence}
                </td>
                <td className="p-3 text-right whitespace-nowrap">
                  {entry.verificationUrl ? (
                    <a
                      href={entry.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 hover:underline"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-slate-400 dark:text-slate-500 text-[11px]">Local Document</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Security & Confidentiality Audit */}
      <Card className="space-y-3">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono flex items-center gap-2">
          <FolderLock className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
          Security, PII & Secret Handling Compliance
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-slate-700 dark:text-slate-300">
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">✔ PII Excluded</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px]">
              Personal government identity cards (Aadhar, caste certificates) located on disk are strictly excluded from git staging and portfolio assets.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">✔ Secrets Protected</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px]">
              No private API keys, service credentials, or passwords embedded in client bundles. LLM keys handled via environment variables.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">✔ External Repos Intact</span>
            <p className="text-slate-500 dark:text-slate-400 text-[11px]">
              All research directories on D:\ held strictly read-only. Zero non-portfolio files modified or deleted.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
