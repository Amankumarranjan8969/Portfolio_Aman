import React from 'react';
import { ShieldCheck, GitBranch, Terminal } from 'lucide-react';

interface FooterProps {
  onNavigateToEvidence: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToEvidence }) => {
  return (
    <footer className="mt-16 border-t border-slate-800/80 bg-[#0B0F19] text-slate-400 py-8 px-4 sm:px-8 text-xs font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="text-slate-300 font-semibold font-sans">
            Aman Kumar Ranjan
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>B.Tech CSE (Data Science), Haridwar University</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>Roorkee, Uttarakhand</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <button
            onClick={onNavigateToEvidence}
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 hover:underline transition-colors"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Audit Transparency Register</span>
          </button>

          <span className="text-slate-700">|</span>

          <span className="flex items-center gap-1 text-slate-400">
            <GitBranch className="w-3 h-3 text-cyan-400" />
            <span>main @ 2026</span>
          </span>

          <span className="text-slate-700">|</span>

          <span className="flex items-center gap-1 text-slate-400">
            <Terminal className="w-3 h-3 text-blue-400" />
            <span>React 18 + Vite</span>
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-4 pt-4 border-t border-slate-800/40 text-[10px] text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>No fabricated metrics, certificates, or unverified claims. All entries reflect audited source repositories and institutional records.</p>
        <p>Deployed on GitHub Pages • Target: Amankumarranjan8969.github.io</p>
      </div>
    </footer>
  );
};
