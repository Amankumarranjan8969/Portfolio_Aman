import React from 'react';
import { Project } from '../../types/project';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import {
  AppWindow,
  ArrowRight
} from 'lucide-react';

interface SoftwareViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const SoftwareView: React.FC<SoftwareViewProps> = ({
  projects,
  onSelectProject,
}) => {
  const softwareProjects = projects.filter(
    (p) => p.category === 'software' || p.id === 'ats-resume-analyzer-mern-ml'
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
          <AppWindow className="w-4 h-4" />
          <span>Full-Stack Engineering & Web Architecture</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Software Applications & Systems
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1 max-w-3xl">
          Production full-stack web platforms, real-time WebSocket applications, MERN stack systems, and front-end utilities built with maintainable TypeScript architectures.
        </p>
      </div>

      {/* Grid of Software Applications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {softwareProjects.map((project) => (
          <Card
            key={project.id}
            hoverable
            onClick={() => onSelectProject(project)}
            className="flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <Badge status={project.status} size="sm" />
                <span className="text-xs font-mono text-slate-400">
                  {project.period}
                </span>
              </div>

              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h2>

              <p className="text-xs text-blue-600 dark:text-cyan-400 font-mono mt-1">
                {project.tagline}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                {project.shortSummary}
              </p>

              <div className="mt-3.5 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-xs font-mono">
                <span className="text-slate-400 dark:text-slate-500 block text-[10px] uppercase mb-0.5">Architecture</span>
                <p className="text-slate-700 dark:text-slate-300 line-clamp-2 text-[11px]">{project.architectureSummary}</p>
              </div>

              <div className="flex flex-wrap gap-1 mt-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">
                {project.organization || 'Independent Application'}
              </span>
              <span className="text-blue-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold text-xs">
                Inspect Specs <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
