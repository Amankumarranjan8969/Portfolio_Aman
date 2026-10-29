import React, { useState } from 'react';
import { candidateProfile } from '../../data/profile';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { GithubIcon, LinkedinIcon } from '../../components/ui/BrandIcons';
import {
  User,
  ShieldCheck,
  Building2,
  Mail,
  MapPin,
  ExternalLink,
  Download,
  Sparkles,
  Award,
  CheckCircle2,
  Code
} from 'lucide-react';

export const ProfileLogoView: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  // Preferred local optimized photo from workspace, fallback to authentic GitHub avatar
  const profilePhotoUrl = imgError
    ? "https://avatars.githubusercontent.com/u/197645375?v=4"
    : "./assets/profile.jpg";

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* Page Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
          <User className="w-4 h-4" />
          <span>Identity & Brand Architecture</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Profile, Identity & Personal Brand
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1">
          Candidate visual identity, official portrait, verified institutional standing, and brand monogram.
        </p>
      </div>

      {/* Main Split: Photo + Monogram + Bio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Photo Column (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="overflow-hidden p-0 border-slate-200 dark:border-slate-800 shadow-md">
            <div className="relative aspect-[3/4] w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <img
                src={profilePhotoUrl}
                alt="Aman Kumar Ranjan"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider bg-blue-600/90 px-2 py-0.5 rounded text-white font-semibold">
                  Verified Candidate Photo
                </span>
                <h2 className="text-lg font-bold mt-1.5">{candidateProfile.name}</h2>
                <p className="text-xs text-slate-200 font-mono">B.Tech CSE (Data Science)</p>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-slate-900/90 text-xs font-mono space-y-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <span>Enrolment ID:</span>
                <span className="font-bold text-slate-900 dark:text-slate-200">230103001</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <span>Institution:</span>
                <span className="text-slate-900 dark:text-slate-200">Haridwar University</span>
              </div>
              <div className="flex items-center justify-between text-slate-600 dark:text-slate-400">
                <span>Academic CGPA:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">6.96 / 10.0</span>
              </div>
            </div>
          </Card>

          {/* Social and Contact Quick Actions */}
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <a
              href={candidateProfile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={candidateProfile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Narrative & Brand Monogram Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Logo & Technical Monogram Showcase */}
          <Card className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                  Personal Engineering Monogram & Logo
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Vector branding symbol representing connected neural nodes & hydrological networks.
                </p>
              </div>
              <Badge status="Verified" size="sm" />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80">
              {/* Scalable Monogram SVG */}
              <div className="w-28 h-28 flex-shrink-0 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center p-3 shadow-lg shadow-blue-500/10">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                  <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" opacity="0.4" />
                  <path d="M 30 70 L 50 25 L 70 70 M 38 54 L 62 54" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="50" cy="25" r="4" fill="white" />
                  <circle cx="30" cy="70" r="4" fill="white" />
                  <circle cx="70" cy="70" r="4" fill="white" />
                </svg>
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <span className="text-base font-bold text-slate-900 dark:text-white">
                  AKR Monogram (Aman Kumar Ranjan)
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  The mark features a clean structural 'A' vertex anchored on three coordinates, symbolizing the union of Machine Learning, Environmental Hydrology, and Full-Stack Systems.
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1 justify-center sm:justify-start text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                    Primary: #2563EB (Sapphire)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300">
                    Accent: #06B6D4 (Cyan)
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Academic Profile & Institutional Affiliations */}
          <Card className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
              Academic Standing & Research Fellowship
            </h3>

            <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              <p>
                I am a final-year Computer Science & Engineering (Data Science) undergraduate at <strong>Haridwar University, Roorkee</strong>, with verified academic research fellows and internships at premier national research laboratories.
              </p>
              
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                  <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>National Institute of Hydrology (NIH), Roorkee</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400">
                  Dissertation Research Fellow under <strong>Dr. Sushindra Kumar Gupta</strong> (Scientist 'C', Ground Water Hydrology Division). Authored 100+ page institutional thesis on JAL-SETU.
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 space-y-1.5 font-mono text-[11px]">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 dark:text-white">
                  <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>CSIR–Central Building Research Institute (CBRI), Roorkee</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400">
                  AI/ML Research Intern (June–August 2025). Developed multi-hybrid air quality forecasting models achieving 0.9180 Test R².
                </p>
              </div>
            </div>
          </Card>

          {/* Core Technical Highlights */}
          <Card className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80">
                <span className="text-blue-600 dark:text-cyan-400 font-bold block">Time-Series & AI</span>
                <span className="text-slate-500 text-[10px]">CatBoost, ARIMA, GRU</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80">
                <span className="text-blue-600 dark:text-cyan-400 font-bold block">Explainable RAG</span>
                <span className="text-slate-500 text-[10px]">TF-IDF, Prompt Defense</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80">
                <span className="text-blue-600 dark:text-cyan-400 font-bold block">Embedded IoT</span>
                <span className="text-slate-500 text-[10px]">ESP8266, Flow Sensors</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80">
                <span className="text-blue-600 dark:text-cyan-400 font-bold block">Full-Stack Web</span>
                <span className="text-slate-500 text-[10px]">React 18/19, TypeScript</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80">
                <span className="text-blue-600 dark:text-cyan-400 font-bold block">Computer Vision</span>
                <span className="text-slate-500 text-[10px]">DenseNet121, CBAM</span>
              </div>
              <div className="p-2.5 rounded bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80">
                <span className="text-blue-600 dark:text-cyan-400 font-bold block">Data Engineering</span>
                <span className="text-slate-500 text-[10px]">SMOTE, Remote Sensing</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
