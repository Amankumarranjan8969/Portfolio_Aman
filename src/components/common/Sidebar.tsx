import React from 'react';
import {
  LayoutDashboard,
  FolderGit2,
  Cpu,
  Radio,
  AppWindow,
  Award,
  Briefcase,
  FileText,
  FileCheck2,
  Mail,
  ShieldCheck,
  X
} from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';

export type TabKey =
  | 'overview'
  | 'projects'
  | 'ai-ml'
  | 'engineering-iot'
  | 'software'
  | 'certificates'
  | 'experience'
  | 'github'
  | 'publications'
  | 'resume'
  | 'contact'
  | 'evidence';

interface SidebarProps {
  activeTab: TabKey;
  onSelectTab: (tab: TabKey) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  projectCount: number;
  credentialCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isOpenMobile,
  onCloseMobile,
  projectCount,
  credentialCount,
}) => {
  const navItems: {
    key: TabKey;
    label: string;
    icon: React.ReactNode;
    badge?: number | string;
  }[] = [
    { key: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { key: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" />, badge: projectCount },
    { key: 'ai-ml', label: 'AI/ML & Research', icon: <Cpu className="w-4 h-4" /> },
    { key: 'engineering-iot', label: 'Engineering & IoT', icon: <Radio className="w-4 h-4" /> },
    { key: 'software', label: 'Software Apps', icon: <AppWindow className="w-4 h-4" /> },
    { key: 'certificates', label: 'Certificates & Awards', icon: <Award className="w-4 h-4" />, badge: credentialCount },
    { key: 'experience', label: 'Experience & Internships', icon: <Briefcase className="w-4 h-4" /> },
    { key: 'github', label: 'GitHub & Activity', icon: <GithubIcon className="w-4 h-4" />, badge: "14 repos" },
    { key: 'publications', label: 'Publications & Reports', icon: <FileText className="w-4 h-4" /> },
    { key: 'resume', label: 'Resume', icon: <FileCheck2 className="w-4 h-4" /> },
    { key: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
    { key: 'evidence', label: 'Evidence & Verification', icon: <ShieldCheck className="w-4 h-4" />, badge: "Audit" },
  ];

  const handleNavClick = (key: TabKey) => {
    onSelectTab(key);
    onCloseMobile();
  };

  const content = (
    <div className="flex flex-col h-full bg-[#0D121F] border-r border-slate-800/80 text-slate-300 w-64 select-none">
      {/* Brand Monogram */}
      <div className="p-5 border-b border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white shadow-md shadow-cyan-500/20">
            AK
          </div>
          <div>
            <h1 className="text-sm font-semibold text-white tracking-tight leading-tight">
              Aman Kumar Ranjan
            </h1>
            <p className="text-xs text-cyan-400 font-mono mt-0.5">
              AI/ML & Systems Eng.
            </p>
          </div>
        </div>
        <button
          onClick={onCloseMobile}
          className="md:hidden p-1 text-slate-400 hover:text-white"
          aria-label="Close navigation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto" aria-label="Main Navigation">
        <div className="px-3 py-1.5 text-[10px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
          Navigation
        </div>
        {navItems.map((item) => {
          const isActive = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-blue-600/15 text-cyan-300 border border-blue-500/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={isActive ? 'text-cyan-400' : 'text-slate-400'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-200'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Environment Footer Badge */}
      <div className="p-3.5 border-t border-slate-800/80 bg-slate-900/40 text-xs">
        <div className="flex items-center gap-2 text-slate-400">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-[11px] text-slate-300">Haridwar University</span>
        </div>
        <p className="text-[10px] text-slate-400 mt-1 font-mono">
          Enrolment: 230103001 | NIH & CBRI
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:block flex-shrink-0 sticky top-0 h-screen z-30">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative z-10 w-64 shadow-2xl animate-in slide-in-from-left duration-200">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
