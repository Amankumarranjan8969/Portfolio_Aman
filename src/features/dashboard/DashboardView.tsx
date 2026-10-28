import React from 'react';
import { Project } from '../../types/project';
import { Credential } from '../../types/credential';
import { Publication } from '../../data/publications';
import { candidateProfile } from '../../data/profile';
import { MetricDisplay } from '../../components/ui/MetricDisplay';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { GithubIcon } from '../../components/ui/BrandIcons';
import {
  FolderGit2,
  ShieldCheck,
  Cpu,
  Award,
  FileText,
  Mail,
  ArrowRight,
  Sparkles,
  BarChart3,
  TrendingUp,
  Layers,
  User
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface DashboardViewProps {
  projects: Project[];
  credentials: Credential[];
  publications: Publication[];
  onSelectProject: (project: Project) => void;
  onNavigateTab: (tab: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  projects,
  credentials,
  publications,
  onSelectProject,
  onNavigateTab,
}) => {
  // Real data-derived counts
  const totalProjects = projects.length;
  const verifiedProjects = projects.filter((p) => p.status === 'Verified').length;
  const inProgressProjects = projects.filter((p) => p.status === 'In Progress' || p.status === 'Experimental').length;
  const verifiedCredentials = credentials.filter((c) => c.status === 'Verified' || c.status === 'Document Provided').length;
  const publishedResearch = publications.length;

  // Real model performance benchmark preview
  const topModelsBenchmark = [
    { name: 'Cubist (NIH)', r2: 0.9467, metric: '0.9467 R²', color: '#0284C7' },
    { name: 'Extra Trees (NIH)', r2: 0.9189, metric: '0.9189 R²', color: '#2563EB' },
    { name: 'SuperBlend (CBRI)', r2: 0.9180, metric: '0.9180 R²', color: '#059669' },
    { name: 'CatBoost (CBRI)', r2: 0.9161, metric: '0.9161 R²', color: '#7C3AED' },
    { name: 'XGBoost (CBRI)', r2: 0.9144, metric: '0.9144 R²', color: '#D97706' },
  ];

  // Category distribution data
  const categoryCounts = [
    { name: 'AI / ML', count: projects.filter((p) => p.category === 'ai-ml').length, color: '#0284C7' },
    { name: 'Research', count: projects.filter((p) => p.category === 'research').length, color: '#2563EB' },
    { name: 'Engineering & IoT', count: projects.filter((p) => p.category === 'engineering-iot').length, color: '#059669' },
    { name: 'Software Apps', count: projects.filter((p) => p.category === 'software').length, color: '#7C3AED' },
  ];

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-10">
      {/* Minimalist Hero Section */}
      <div className="p-6 sm:p-10 rounded-2xl bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/80 shadow-sm transition-colors">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-blue-800 border border-blue-200 dark:bg-blue-950/60 dark:text-cyan-300 dark:border-blue-800/80">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
              <span>Haridwar University • B.Tech CSE (Data Science)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {candidateProfile.name}
            </h1>

            <p className="text-base sm:text-lg text-blue-700 dark:text-cyan-300 font-mono font-medium leading-relaxed">
              {candidateProfile.headline}
            </p>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
              I build data-driven systems and software applications, with a focus on forecasting, machine learning, environmental engineering, and practical software development.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                onClick={() => onNavigateTab('projects')}
                icon={<FolderGit2 className="w-4 h-4" />}
              >
                View Projects ({totalProjects})
              </Button>

              <Button
                variant="secondary"
                onClick={() => onNavigateTab('profile')}
                icon={<User className="w-4 h-4" />}
              >
                Profile & Photo
              </Button>

              <Button
                variant="outline"
                onClick={() => onNavigateTab('resume')}
                icon={<FileText className="w-4 h-4" />}
              >
                Curriculum Vitae
              </Button>

              <Button
                variant="ghost"
                onClick={() => onNavigateTab('contact')}
                icon={<Mail className="w-4 h-4" />}
              >
                Contact
              </Button>
            </div>
          </div>

          {/* Portrait Preview Card */}
          <div
            onClick={() => onNavigateTab('profile')}
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 w-full lg:w-64 text-center shadow-sm hover:shadow-md cursor-pointer transition-all group"
          >
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-200 dark:border-cyan-500/50 shadow-md mb-3 bg-slate-100 dark:bg-slate-800">
              <img
                src="./assets/profile.jpg"
                alt="Aman Kumar Ranjan"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/197645375?v=4";
                }}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
              />
            </div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
              Aman Kumar Ranjan
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">Enrolment: 230103001</p>
            <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 w-full text-[11px] text-slate-500 dark:text-slate-400 font-mono">
              <p>📍 Roorkee, Uttarakhand</p>
              <p className="text-blue-600 dark:text-cyan-400 mt-1">View Full Profile &rarr;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Data-Derived Counters */}
      <div>
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
            Verified Portfolio Metrics
          </h2>
          <span className="text-[11px] text-slate-400 font-mono">Data-Derived</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <MetricDisplay
            label="Total Projects"
            value={totalProjects}
            subValue="Audited systems"
            icon={<FolderGit2 className="w-4 h-4" />}
          />
          <MetricDisplay
            label="Verified"
            value={verifiedProjects}
            subValue="Code & docs inspected"
            icon={<ShieldCheck className="w-4 h-4 text-emerald-500" />}
            badge={<Badge status="Verified" size="sm" />}
          />
          <MetricDisplay
            label="Prototypes"
            value={inProgressProjects}
            subValue="In development"
            icon={<Cpu className="w-4 h-4 text-blue-500" />}
            badge={<Badge status="In Progress" size="sm" />}
          />
          <MetricDisplay
            label="Credentials"
            value={verifiedCredentials}
            subValue="NPTEL & Microsoft"
            icon={<Award className="w-4 h-4 text-amber-500" />}
          />
          <MetricDisplay
            label="Public Repos"
            value="14"
            subValue="Confirmed via GitHub"
            icon={<GithubIcon className="w-4 h-4 text-slate-500" />}
          />
          <MetricDisplay
            label="Research Items"
            value={publishedResearch}
            subValue="Thesis & papers"
            icon={<FileText className="w-4 h-4 text-purple-500" />}
          />
        </div>
      </div>

      {/* Visualizations: Category Breakdown & Model Benchmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                Project Domain Distribution
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Breakdown of {totalProjects} projects across technical disciplines
              </p>
            </div>
            <span className="text-xs font-mono text-blue-700 dark:text-cyan-400 bg-blue-50 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-cyan-800">
              {totalProjects} Total
            </span>
          </div>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryCounts} layout="vertical" margin={{ top: 5, right: 20, left: 15, bottom: 5 }}>
                <XAxis type="number" stroke="#94A3B8" fontSize={11} />
                <YAxis dataKey="name" type="category" stroke="#64748B" fontSize={11} width={95} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {categoryCounts.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Top Empirical Model Benchmarks */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Empirical Research Test R² Accuracy
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                Authentic test results from NIH Roorkee & CSIR-CBRI studies
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('ai-ml')}
              className="text-xs text-blue-600 dark:text-cyan-400 hover:underline font-mono flex items-center gap-1"
            >
              <span>View Data</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topModelsBenchmark} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <XAxis dataKey="name" stroke="#64748B" fontSize={10} angle={-20} textAnchor="end" height={35} />
                <YAxis domain={[0.85, 1.0]} stroke="#94A3B8" fontSize={11} tickFormatter={(v) => v.toFixed(2)} />
                <Tooltip
                  formatter={(val: any) => [`${Number(val).toFixed(4)} R²`, 'Test Accuracy']}
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="r2" radius={[4, 4, 0, 0]}>
                  {topModelsBenchmark.map((entry, index) => (
                    <Cell key={`bar-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Featured Projects Spotlight */}
      <div>
        <div className="flex items-center justify-between mb-4 px-1">
          <div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              Featured Engineering Highlights
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              Verified flagship systems backed by primary codebases and dissertations
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigateTab('projects')}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            All Projects ({totalProjects})
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              hoverable
              onClick={() => onSelectProject(project)}
              className="flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <Badge status={project.status} size="sm" />
                  <span className="text-[10px] font-mono text-slate-500 dark:text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors mt-1">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {project.shortSummary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <span className="truncate max-w-[200px]">
                  {project.organization || 'Independent Project'}
                </span>
                <span className="text-blue-600 dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-medium">
                  Details <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
