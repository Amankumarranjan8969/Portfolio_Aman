import React from 'react';
import { Project } from '../../types/project';
import { Modal } from '../../components/ui/Modal';
import { Badge } from '../../components/ui/Badge';
import { GithubIcon } from '../../components/ui/BrandIcons';
import {
  ExternalLink,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Layers,
  Terminal,
  Database,
  ShieldCheck
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <Modal
      isOpen={!!project}
      onClose={onClose}
      title={project.title}
      subtitle={project.tagline}
      badge={<Badge status={project.status} size="md" />}
      maxWidth="4xl"
    >
      <div className="space-y-7 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
        {/* Metadata Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 font-mono text-xs">
          <div>
            <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase">Domain</span>
            <span className="text-blue-600 dark:text-cyan-400 font-semibold uppercase">{project.category}</span>
          </div>
          <div>
            <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase">Period</span>
            <span className="text-slate-800 dark:text-slate-200">{project.period}</span>
          </div>
          <div>
            <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase">My Role</span>
            <span className="text-slate-800 dark:text-slate-200 truncate block">{project.role}</span>
          </div>
          <div>
            <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase">Organization</span>
            <span className="text-slate-800 dark:text-slate-200 truncate block">{project.organization || 'Independent'}</span>
          </div>
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center gap-2.5 pt-1">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs transition-colors shadow-sm"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source Repository</span>
              <ExternalLink className="w-3 h-3 text-blue-200" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs font-mono border border-slate-200 dark:border-slate-700">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source: Local Workspace</span>
            </span>
          )}

          {project.reportUrl && (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-medium text-xs border border-slate-200 dark:border-slate-700 transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Technical Report</span>
            </a>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Application</span>
            </a>
          ) : (
            <span className="text-xs text-slate-400 dark:text-slate-500 italic">
              • Static report & reproducible code
            </span>
          )}
        </div>

        {/* Overview & Problem */}
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
            <span className="w-1.5 h-3.5 bg-blue-600 dark:bg-cyan-500 rounded-full" />
            Project Overview & Problem Statement
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.shortSummary}</p>
          <div className="mt-2.5 p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border-l-2 border-blue-600 dark:border-cyan-500 text-slate-600 dark:text-slate-300 text-xs">
            <span className="font-semibold text-blue-700 dark:text-cyan-300 text-[11px] block mb-0.5">Problem Definition:</span>
            {project.problemStatement}
          </div>
        </div>

        {/* Objectives & Contributions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
              Key Objectives
            </h4>
            <ul className="space-y-1.5">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono">
              Candidate Contribution
            </h4>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.myContribution}
            </div>
          </div>
        </div>

        {/* Technologies Confirmed */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2">
            Confirmed Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800/80 text-blue-700 dark:text-cyan-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & Methodology */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            System Architecture
          </h4>
          <div className="p-3 rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-800 dark:text-slate-300 leading-relaxed overflow-x-auto">
            {project.architectureSummary}
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            <strong>Methodology: </strong>
            {project.methodology}
          </p>
        </div>

        {/* Empirical Results */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2.5 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Empirical Results & Test Set Evaluation
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-3">
            {project.evaluation.metrics.map((m, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-mono block">{m.name}</span>
                <span className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">{m.value}</span>
                {m.ideal && <span className="text-[10px] text-slate-400 block font-mono">Ideal: {m.ideal}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Reproduction */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-500" />
            Reproduction Commands
          </h4>
          <div className="p-3 rounded-lg bg-slate-900 dark:bg-black border border-slate-800 space-y-1 font-mono text-xs text-emerald-400">
            {project.setupInstructions.map((cmd, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-slate-500 select-none">$</span>
                <span className="select-all text-slate-100">{cmd}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Evidence Audit Stamp */}
        <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <div>
            <span className="text-slate-400 block text-[10px]">EVIDENCE SOURCE:</span>
            <span>{project.supportingEvidence}</span>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-slate-400 block text-[10px]">AUDITED:</span>
            <span className="text-blue-600 dark:text-cyan-400">{project.lastReviewedDate}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
