import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory, ProjectEvidenceStatus } from '../../types/project';
import { SearchInput } from '../../components/ui/SearchInput';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import {
  FolderGit2,
  ExternalLink,
  Filter,
  ArrowUpDown,
  Sparkles,
  Building2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GithubIcon } from '../../components/ui/BrandIcons';

interface ProjectsViewProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  projects,
  onSelectProject,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<ProjectEvidenceStatus | 'all'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'title' | 'status'>('featured');

  const categories: { key: ProjectCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'All Disciplines' },
    { key: 'ai-ml', label: 'AI & Machine Learning' },
    { key: 'research', label: 'Atmospheric & Hydrological Research' },
    { key: 'engineering-iot', label: 'Engineering & IoT' },
    { key: 'software', label: 'Software Applications' },
  ];

  const statuses: { key: ProjectEvidenceStatus | 'all'; label: string }[] = [
    { key: 'all', label: 'All Statuses' },
    { key: 'Verified', label: 'Verified Only' },
    { key: 'In Progress', label: 'In Progress' },
    { key: 'Experimental', label: 'Experimental' },
    { key: 'Needs Verification', label: 'Needs Verification' },
  ];

  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        // Category filter
        if (selectedCategory !== 'all' && project.category !== selectedCategory) {
          return false;
        }
        // Status filter
        if (selectedStatus !== 'all' && project.status !== selectedStatus) {
          return false;
        }
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = project.title.toLowerCase().includes(q);
          const matchSummary = project.shortSummary.toLowerCase().includes(q);
          const matchTech = project.technologies.some((t) => t.toLowerCase().includes(q));
          const matchProblem = project.problemStatement.toLowerCase().includes(q);
          const matchOrg = (project.organization || '').toLowerCase().includes(q);
          return matchTitle || matchSummary || matchTech || matchProblem || matchOrg;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        if (sortBy === 'status') {
          return a.status.localeCompare(b.status);
        }
        return 0;
      });
  }, [projects, searchQuery, selectedCategory, selectedStatus, sortBy]);

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <FolderGit2 className="w-6 h-6 text-cyan-400" />
          Technical Project Catalog & Evidence Register
        </h1>
        <p className="text-sm text-slate-400 font-mono mt-1">
          Explore {projects.length} audited systems across AI/ML, environmental hydrology, IoT, and full-stack software.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex-1 w-full">
            <SearchInput
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by name, model, framework (e.g. CatBoost, ESP8266, React)..."
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as any)}
              className="bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500 w-full sm:w-auto"
            >
              {statuses.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-2 text-xs font-mono text-slate-200 focus:outline-none focus:border-cyan-500 w-full sm:w-auto"
            >
              <option value="featured">Sort: Featured First</option>
              <option value="title">Sort: Alphabetical (A-Z)</option>
              <option value="status">Sort: Evidence Status</option>
            </select>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-mono text-[11px] mr-1 hidden sm:inline">Category:</span>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors ${
                  isSelected
                    ? 'bg-blue-600 text-white font-semibold shadow-sm'
                    : 'bg-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Meta Info */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
        <span>
          Showing <strong className="text-cyan-400">{filteredProjects.length}</strong> of {projects.length} systems
        </span>
        {(searchQuery || selectedCategory !== 'all' || selectedStatus !== 'all') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedStatus('all');
            }}
            className="text-cyan-400 hover:underline"
          >
            Reset Filters
          </button>
        )}
      </div>

      {/* Project Cards Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <AlertCircle className="w-10 h-10 text-slate-500 mx-auto" />
          <h3 className="text-base font-bold text-white">No Matching Projects Found</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            No projects matched your search criteria "{searchQuery}". Try searching for a broader term or resetting active filters.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedStatus('all');
            }}
          >
            Clear Search & Filters
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              hoverable
              onClick={() => onSelectProject(project)}
              className="flex flex-col justify-between group h-full"
            >
              <div>
                {/* Header row: badge + category */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <Badge status={project.status} size="sm" />
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs text-cyan-400/80 font-mono mt-1 line-clamp-1">
                  {project.tagline}
                </p>

                <p className="text-xs text-slate-300 mt-2.5 line-clamp-3 leading-relaxed">
                  {project.shortSummary}
                </p>

                {/* Key metric pill if exists */}
                {project.evaluation.metrics.length > 0 && (
                  <div className="mt-3 p-2 rounded bg-slate-950/60 border border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 truncate text-[11px]">{project.evaluation.metrics[0].name}</span>
                    <span className="text-emerald-400 font-bold ml-2">
                      {project.evaluation.metrics[0].value}
                    </span>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="truncate max-w-[160px] text-[11px]">
                  {project.organization || 'Independent'}
                </span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                  Inspect &rarr;
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
