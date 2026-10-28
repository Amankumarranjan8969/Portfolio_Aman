import React from 'react';
import { Menu, ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { TabKey } from './Sidebar';

interface HeaderProps {
  activeTab: TabKey;
  onOpenMobile: () => void;
  onNavigateToEvidence: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onOpenMobile,
  onNavigateToEvidence,
}) => {
  const getTabTitle = (tab: TabKey): string => {
    switch (tab) {
      case 'overview': return 'Executive Overview';
      case 'projects': return 'Project Catalog & Evidence';
      case 'ai-ml': return 'AI/ML & Atmospheric Research';
      case 'engineering-iot': return 'Engineering Systems & IoT';
      case 'software': return 'Software Applications';
      case 'certificates': return 'Certificates & Awards';
      case 'experience': return 'Experience & Internships';
      case 'github': return 'GitHub & Public Repositories';
      case 'publications': return 'Publications & Technical Reports';
      case 'resume': return 'Curriculum Vitae';
      case 'contact': return 'Contact & Inquiries';
      case 'evidence': return 'Authenticity & Verification Register';
      default: return 'Portfolio';
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
          aria-label="Open mobile navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400 hidden sm:inline">Portfolio</span>
          <span className="text-slate-500 hidden sm:inline">/</span>
          <span className="text-cyan-400 font-semibold">{getTabTitle(activeTab)}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Verification Status Quick Button */}
        <button
          onClick={onNavigateToEvidence}
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-800/70 hover:bg-emerald-900/60 transition-colors"
          title="Inspect verified evidence register"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Evidence Verified</span>
        </button>

        {/* GitHub Direct Link */}
        <a
          href="https://github.com/Amankumarranjan8969"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/80 hover:text-white hover:border-slate-600 transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden sm:inline font-mono">Amankumarranjan8969</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    </header>
  );
};
