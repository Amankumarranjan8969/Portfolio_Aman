import React from 'react';
import { Project } from '../../types/project';
import { Credential } from '../../types/credential';
import { Publication } from '../../data/publications';
import { candidateProfile } from '../../data/profile';
import { MetricDisplay } from '../../components/ui/MetricDisplay';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import {
  FolderGit2,
  ShieldCheck,
  Cpu,
  Award,
  FileText,
  Mail,
  ArrowRight,
  ExternalLink,
  Sparkles,
  BarChart3,
  TrendingUp,
  Layers
} from 'lucide-react';
import { GithubIcon } from '../../components/ui/BrandIcons';
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
    { name: 'Cubist (NIH)', r2: 0.9467, metric: '0.9467 R²', color: '#06B6D4' },
    { name: 'Extra Trees (NIH)', r2: 0.9189, metric: '0.9189 R²', color: '#3B82F6' },
    { name: 'SuperBlend (CBRI)', r2: 0.9180, metric: '0.9180 R²', color: '#10B981' },
    { name: 'CatBoost (CBRI)', r2: 0.9161, metric: '0.9161 R²', color: '#8B5CF6' },
    { name: 'XGBoost (CBRI)', r2: 0.9144, metric: '0.9144 R²', color: '#F59E0B' },
    { name: 'AdaBoost (NIH)', r2: 0.9073, metric: '0.9073 R²', color: '#EC4899' },
  ];

  // Category distribution data
  const categoryCounts = [
    { name: 'AI / ML', count: projects.filter((p) => p.category === 'ai-ml').length, color: '#06B6D4' },
    { name: 'Research', count: projects.filter((p) => p.category === 'research').length, color: '#3B82F6' },
    { name: 'Engineering & IoT', count: projects.filter((p) => p.category === 'engineering-iot').length, color: '#10B981' },
    { name: 'Software Apps', count: projects.filter((p) => p.category === 'software').length, color: '#8B5CF6' },
  ];

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#0F172A] to-[#0A0E17] border border-slate-800 p-6 sm:p-10 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-800/80">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Haridwar University • B.Tech CSE (Data Science)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              {candidateProfile.name}
            </h1>

            <p className="text-base sm:text-lg text-cyan-300/90 font-medium font-mono leading-relaxed">
              {candidateProfile.headline}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              I build data-driven systems and software applications, with a focus on forecasting, machine learning, environmental engineering, and practical software development.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                variant="primary"
                onClick={() => onNavigateTab('projects')}
                icon={<FolderGit2 className="w-4 h-4" />}
              >
                View Project Catalog ({totalProjects})
              </Button>

              <a
                href={candidateProfile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" icon={<GithubIcon className="w-4 h-4" />}>
                  GitHub Profile
                </Button>
              </a>

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
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Technical Monogram & Quick Details */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/80 border border-slate-800/90 w-full lg:w-72 text-center shadow-lg">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center font-mono text-3xl font-bold text-white shadow-lg shadow-cyan-500/20 mb-4">
              AKR
            </div>
            <h3 className="text-base font-bold text-white">Aman Kumar Ranjan</h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">Enrolment: 230103001</p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 w-full text-xs text-slate-400 space-y-1 font-mono">
              <p>📍 Roorkee, Uttarakhand</p>
              <p>🏛️ NIH Roorkee • CSIR-CBRI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Data-Derived Counters */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-cyan-400" />
            Verified Portfolio Metrics (Data-Derived)
          </h2>
          <span className="text-xs text-slate-500 font-mono">Computed directly from primary records</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          <MetricDisplay
            label="Total Cataloged"
            value={totalProjects}
            subValue="Audited projects"
            icon={<FolderGit2 className="w-4 h-4" />}
          />
          <MetricDisplay
            label="Verified Projects"
            value={verifiedProjects}
            subValue="Code & docs inspected"
            icon={<ShieldCheck className="w-4 h-4 text-emerald-400" />}
            badge={<Badge status="Verified" size="sm" />}
          />
          <MetricDisplay
            label="In Progress / Exp."
            value={inProgressProjects}
            subValue="Active prototypes"
            icon={<Cpu className="w-4 h-4 text-cyan-400" />}
            badge={<Badge status="In Progress" size="sm" />}
          />
          <MetricDisplay
            label="Verified Credentials"
            value={verifiedCredentials}
            subValue="NPTEL & Microsoft"
            icon={<Award className="w-4 h-4 text-amber-400" />}
          />
          <MetricDisplay
            label="Public Repos"
            value="14"
            subValue="Confirmed via GitHub API"
            icon={<GithubIcon className="w-4 h-4 text-blue-400" />}
          />
          <MetricDisplay
            label="Research Items"
            value={publishedResearch}
            subValue="Thesis & conference"
            icon={<FileText className="w-4 h-4 text-purple-400" />}
          />
        </div>
      </div>

      {/* Visualizations: Category Breakdown & Model Benchmarks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Distribution */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Project Domain Distribution
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Breakdown of {totalProjects} projects across technical disciplines
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800">
              {totalProjects} Total
            </span>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={categoryCounts} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                <XAxis type="number" stroke="#64748B" fontSize={11} />
                <YAxis dataKey="name" type="category" stroke="#94A3B8" fontSize={11} width={100} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#E2E8F0', fontSize: '12px' }}
                />
                <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                  {categoryCounts.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 pt-3 border-t border-slate-800/80 text-xs font-mono text-center">
            {categoryCounts.map((cat) => (
              <div key={cat.name} className="p-2 rounded bg-slate-950/40">
                <span className="text-slate-400 block text-[10px]">{cat.name}</span>
                <span className="font-bold text-white text-sm">{cat.count}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Empirical Model Benchmarks */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Empirical Research Test R² Accuracy
              </h3>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                Authentic test results from NIH Roorkee & CSIR-CBRI studies
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('ai-ml')}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-mono hover:underline flex items-center gap-1"
            >
              <span>All Tables</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="h-56 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topModelsBenchmark} margin={{ top: 10, right: 10, left: -20, bottom: 25 }}>
                <XAxis dataKey="name" stroke="#94A3B8" fontSize={10} angle={-25} textAnchor="end" height={40} />
                <YAxis domain={[0.85, 1.0]} stroke="#64748B" fontSize={11} tickFormatter={(v) => v.toFixed(2)} />
                <Tooltip
                  formatter={(val: any) => [`${Number(val).toFixed(4)} R²`, 'Test Accuracy']}
                  contentStyle={{ backgroundColor: '#0F172A', borderColor: '#334155', borderRadius: '8px' }}
                  itemStyle={{ color: '#E2E8F0', fontSize: '12px' }}
                />
                <Bar dataKey="r2" radius={[4, 4, 0, 0]}>
                  {topModelsBenchmark.map((entry, index) => (
                    <Cell key={`bar-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-400 font-mono flex items-center justify-between">
            <span>Peak: Cubist 0.9467 R² (NIH Post-Monsoon)</span>
            <span>SuperBlend: 0.9180 R² (CBRI AQI)</span>
          </div>
        </Card>
      </div>

      {/* Featured Projects Spotlight */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-cyan-400" />
              Featured Engineering & Research Highlights
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Verified flagship systems backed by primary codebases and dissertations
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigateTab('projects')}
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Explore All ({totalProjects})
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
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mt-1">
                  {project.title}
                </h3>

                <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {project.shortSummary}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="truncate max-w-[200px]">
                  {project.organization || 'Independent Project'}
                </span>
                <span className="text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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
