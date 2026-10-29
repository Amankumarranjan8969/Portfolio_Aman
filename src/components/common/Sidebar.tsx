import React from 'react';
import {
  User,
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
  | 'profile'
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
    { key: 'profile', label: 'Profile & Brand Logo', icon: <User className="w-4 h-4" />, badge: "Photo" },
    { key: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
    { key: 'projects', label: 'Projects', icon: <FolderGit2 className="w-4 h-4" />, badge: projectCount },
    { key: 'ai-ml', label: 'Research & AI', icon: <Cpu className="w-4 h-4" /> },
    { key: 'engineering-iot', label: 'Engineering & IoT', icon: <Radio className="w-4 h-4" /> },
    { key: 'software', label: 'Software Apps', icon: <AppWindow className="w-4 h-4" /> },
    { key: 'certificates', label: 'Certificates & Awards', icon: <Award className="w-4 h-4" />, badge: credentialCount },
    { key: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { key: 'github', label: 'GitHub Activity', icon: <GithubIcon className="w-4 h-4" />, badge: "14" },
    { key: 'publications', label: 'Publications & Reports', icon: <FileText className="w-4 h-4" /> },
    { key: 'resume', label: 'Curriculum Vitae', icon: <FileCheck2 className="w-4 h-4" /> },
    { key: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
    { key: 'evidence', label: 'Evidence & Audit', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const handleNavClick = (key: TabKey) => {
    onSelectTab(key);
    onCloseMobile();
  };

  const content = (
    <div className="flex flex-col h-full bg-slate-50/80 dark:bg-[#0D121F] border-r border-slate-200 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 w-64 select-none transition-colors">
      {/* Brand Monogram & Photo Avatar */}
      <div
        onClick={() => handleNavClick('profile')}
        className="p-4 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between cursor-pointer hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 dark:border-cyan-500/50 shadow-sm flex-shrink-0 bg-slate-200 dark:bg-slate-800">
            <img
              src="./assets/profile.jpg"
              alt="Aman Kumar Ranjan"
              onError={(e) => {
                // Fallback to GitHub avatar if local asset not rendered
                (e.currentTarget as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/197645375?v=4";
              }}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <h1 className="text-xs font-bold text-slate-900 dark:text-white tracking-tight truncate leading-tight">
              Aman Kumar Ranjan
            </h1>
            <p className="text-[10px] text-blue-600 dark:text-cyan-400 font-mono truncate mt-0.5">
              Haridwar University
            </p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onCloseMobile();
          }}
          className="md:hidden p-1 text-slate-400 hover:text-slate-600 dark:hover:text-white"
          aria-label="Close navigation"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto" aria-label="Main Navigation">
        <div className="px-3 py-1 text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider font-mono">
          Sections
        </div>
        {navItems.map((item) => {
          const isActive = activeTab === item.key;
          return (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.key)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold dark:bg-blue-600/15 dark:text-cyan-300 dark:border-blue-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className={isActive ? 'text-blue-600 dark:text-cyan-400' : 'text-slate-400 dark:text-slate-500'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
              {item.badge !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                    isActive
                      ? 'bg-blue-100 text-blue-800 dark:bg-cyan-500/20 dark:text-cyan-200'
                      : 'bg-slate-200/70 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 text-[11px] font-mono">
        <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>B.Tech CSE (Data Science)</span>
        </div>
        <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">
          ID: 230103001 • NIH Roorkee
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
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
