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
  Calendar,
  ShieldCheck,
  Building2
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
      <div className="space-y-8 text-sm text-slate-200">
        {/* Metadata Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 font-mono text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Domain</span>
            <span className="text-cyan-400 font-semibold uppercase">{project.category}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Period</span>
            <span className="text-slate-200">{project.period}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">My Role</span>
            <span className="text-slate-200 truncate block">{project.role}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Organization</span>
            <span className="text-slate-200 truncate block">{project.organization || 'Independent'}</span>
          </div>
        </div>

        {/* Action Links Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Source Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-blue-200" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-mono border border-slate-700">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Source: Local Workspace (Private/Internal)</span>
            </span>
          )}

          {project.reportUrl && (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs border border-slate-700 transition-colors"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Technical Report</span>
            </a>
          )}

          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application Demo</span>
            </a>
          ) : (
            <span className="text-xs text-slate-400 italic">
              • Static report & reproducible code (No public live demo hosted)
            </span>
          )}
        </div>

        {/* Executive Summary */}
        <div>
          <h3 className="text-base font-semibold text-white mb-2 flex items-center gap-2">
            <span className="w-1.5 h-4 bg-cyan-500 rounded-full" />
            Project Overview & Problem Statement
          </h3>
          <p className="text-slate-300 leading-relaxed">{project.shortSummary}</p>
          <div className="mt-3 p-3.5 rounded-lg bg-slate-900/40 border-l-2 border-cyan-500 text-slate-300">
            <span className="font-semibold text-cyan-300 text-xs block mb-1">Problem Definition:</span>
            {project.problemStatement}
          </div>
        </div>

        {/* Objectives & Contributions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Key Objectives
            </h4>
            <ul className="space-y-1.5">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
              Candidate Contribution
            </h4>
            <div className="p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300 leading-relaxed">
              {project.myContribution}
            </div>
          </div>
        </div>

        {/* Technologies Confirmed */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
            Confirmed Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-800/80 text-cyan-300 border border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Architecture & Methodology */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            System Architecture & Pipeline Flow
          </h4>
          <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800/80 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto">
            {project.architectureSummary}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-slate-200">Methodology: </strong>
            {project.methodology}
          </p>
        </div>

        {/* Data Provenance */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-purple-400" />
            Data Sources & Provenance
          </h4>
          <ul className="space-y-1">
            {project.dataSources.map((source, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-center gap-2 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>{source}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Empirical Evaluation & Baseline Comparison */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Empirical Results & Test Set Evaluation
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {project.evaluation.metrics.map((m, i) => (
              <div key={i} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-mono block">{m.name}</span>
                <span className="text-lg font-bold font-mono text-emerald-400">{m.value}</span>
                {m.ideal && <span className="text-[10px] text-slate-400 block font-mono">Target: {m.ideal}</span>}
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 mb-3 font-mono italic">
            Evaluation Context: {project.evaluation.context}
          </p>

          {project.evaluation.baselineComparison && project.evaluation.baselineComparison.length > 0 && (
            <div className="overflow-x-auto rounded-lg border border-slate-800">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-900 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-2.5">Model / Architecture</th>
                    <th className="p-2.5">Test R²</th>
                    <th className="p-2.5">Test RMSE</th>
                    <th className="p-2.5">Evaluation Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
                  {project.evaluation.baselineComparison.map((b, i) => (
                    <tr key={i} className="hover:bg-slate-800/30">
                      <td className="p-2.5 font-semibold text-slate-200">{b.model}</td>
                      <td className="p-2.5 text-emerald-300">{b.r2 !== undefined ? b.r2.toFixed(4) : '—'}</td>
                      <td className="p-2.5 text-cyan-300">{b.rmse !== undefined ? b.rmse : '—'}</td>
                      <td className="p-2.5 text-slate-400">{b.notes || '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Limitations & Boundary Conditions */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            Engineering Limitations & Known Constraints
          </h4>
          <ul className="space-y-1.5">
            {project.limitations.map((lim, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                <span>{lim}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Setup & Reproduction */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-slate-400" />
            Reproduction & Local Execution Commands
          </h4>
          <div className="p-3.5 rounded-lg bg-black border border-slate-800 space-y-1 font-mono text-xs text-emerald-400">
            {project.setupInstructions.map((cmd, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-slate-600 select-none">$</span>
                <span className="select-all text-slate-200">{cmd}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Evidence Audit Stamp */}
        <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono text-slate-400">
          <div>
            <span className="text-slate-500 block text-[10px]">VERIFIED EVIDENCE SOURCE:</span>
            <span className="text-slate-300">{project.supportingEvidence}</span>
          </div>
          <div className="text-right sm:text-right">
            <span className="text-slate-500 block text-[10px]">LAST AUDITED:</span>
            <span className="text-cyan-400">{project.lastReviewedDate}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
