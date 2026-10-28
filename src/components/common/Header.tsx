import React from 'react';
import { Menu, ExternalLink, ShieldCheck, Sun, Moon } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { TabKey } from './Sidebar';
import { ThemeMode } from '../../hooks/useTheme';

interface HeaderProps {
  activeTab: TabKey;
  onOpenMobile: () => void;
  onNavigateToEvidence: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onOpenMobile,
  onNavigateToEvidence,
  theme,
  onToggleTheme,
}) => {
  const getTabTitle = (tab: TabKey): string => {
    switch (tab) {
      case 'profile': return 'Profile & Brand Identity';
      case 'overview': return 'Executive Overview';
      case 'projects': return 'Project Catalog & Evidence';
      case 'ai-ml': return 'Atmospheric & Hydrological Research';
      case 'engineering-iot': return 'Engineering Systems & IoT';
      case 'software': return 'Software Applications';
      case 'certificates': return 'Certificates & Awards';
      case 'experience': return 'Experience & Internships';
      case 'github': return 'GitHub Repositories';
      case 'publications': return 'Publications & Reports';
      case 'resume': return 'Curriculum Vitae';
      case 'contact': return 'Contact & Inquiries';
      case 'evidence': return 'Authenticity Register';
      default: return 'Portfolio';
    }
  };

  return (
    <header className="sticky top-0 z-20 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between transition-colors">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobile}
          className="md:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
          aria-label="Open mobile navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400 dark:text-slate-500 hidden sm:inline">Portfolio</span>
          <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">/</span>
          <span className="text-blue-600 dark:text-cyan-400 font-semibold">{getTabTitle(activeTab)}</span>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Day / Night Theme Toggle */}
        <button
          onClick={onToggleTheme}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all"
          title={`Switch to ${theme === 'light' ? 'Night (Dark)' : 'Day (White)'} Mode`}
          aria-label="Toggle theme mode"
        >
          {theme === 'light' ? (
            <>
              <Moon className="w-3.5 h-3.5 text-slate-700" />
              <span className="hidden sm:inline">Night Mode</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Day Mode</span>
            </>
          )}
        </button>

        {/* Verification Status Quick Button */}
        <button
          onClick={onNavigateToEvidence}
          className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/70 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
          title="Inspect verified evidence register"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Evidence Verified</span>
        </button>

        {/* GitHub Direct Link */}
        <a
          href="https://github.com/Amankumarranjan8969"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
          <span className="hidden sm:inline font-mono">GitHub</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>
    </header>
  );
};
