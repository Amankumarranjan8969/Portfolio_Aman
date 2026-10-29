import React from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { GithubIcon } from '../../components/ui/BrandIcons';
import {
  ExternalLink,
  FolderGit2,
  Bookmark,
  Code
} from 'lucide-react';

interface RepoItem {
  name: string;
  url: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  pinned?: boolean;
}

export const GithubView: React.FC = () => {
  const publicRepositories: RepoItem[] = [
    {
      name: "Groundwater-RAG-forecast",
      url: "https://github.com/Amankumarranjan8969/Groundwater-RAG-forecast",
      description: "RAG-based explainable seasonal groundwater forecasting system featuring TF-IDF retrieval and multi-provider LLM integration.",
      language: "Python",
      stars: 1,
      forks: 0,
      pinned: true
    },
    {
      name: "Groundwater-Level-Prediction-Using-Machine-Learning-and-Remote-Sensing-Data",
      url: "https://github.com/Amankumarranjan8969/Groundwater-Level-Prediction-Using-Machine-Learning-and-Remote-Sensing-Data",
      description: "Data-driven groundwater depth prediction in semi-arid Rajasthan using Landsat 8/9 remote sensing indices and gradient boosting.",
      language: "Jupyter Notebook",
      stars: 0,
      forks: 0,
      pinned: true
    },
    {
      name: "aqi_prediction_using-hybrid_models",
      url: "https://github.com/Amankumarranjan8969/aqi_prediction_using-hybrid_models",
      description: "Air quality (AQI & PM2.5) prediction using hybrid CatBoost and ARIMA/SARIMAX models with Visakhapatnam station data. R²=0.916–0.918.",
      language: "Jupyter Notebook",
      stars: 1,
      forks: 0,
      pinned: true
    },
    {
      name: "Brain-tumor-detection-",
      url: "https://github.com/Amankumarranjan8969/Brain-tumor-detection-",
      description: "Neuro Scanner: AI-powered brain tumor detection dashboard using DenseNet121 + Dual CBAM attention, FastAPI backend, and Grad-CAM visualizations.",
      language: "Jupyter Notebook",
      stars: 1,
      forks: 0,
      pinned: true
    },
    {
      name: "credit_card_fraud_detection_models",
      url: "https://github.com/Amankumarranjan8969/credit_card_fraud_detection_models",
      description: "ML project for detecting fraudulent credit card transactions across 284K+ records using SMOTE resampling and ROC-AUC optimization.",
      language: "Jupyter Notebook",
      stars: 1,
      forks: 0,
      pinned: true
    },
    {
      name: "SLM-",
      url: "https://github.com/Amankumarranjan8969/SLM-",
      description: "Self-learning small language model training architectures and parameter-efficient experiments on synthetic TinyStories.",
      language: "Python",
      stars: 1,
      forks: 1,
      pinned: true
    },
    {
      name: "building-data-genome-project-2",
      url: "https://github.com/Amankumarranjan8969/building-data-genome-project-2",
      description: "Whole building non-residential hourly energy meter data analysis from the Great Energy Predictor III competition.",
      language: "Python",
      stars: 1,
      forks: 0
    },
    {
      name: "app-yolo-factory",
      url: "https://github.com/Amankumarranjan8969/app-yolo-factory",
      description: "YOLO Factory: AI Agent task orchestration platform and workflow automation architecture.",
      language: "TypeScript",
      stars: 0,
      forks: 0
    },
    {
      name: "Brain",
      url: "https://github.com/Amankumarranjan8969/Brain",
      description: "Neural exploration and brain imaging computational experiments.",
      language: "Python",
      stars: 1,
      forks: 0
    },
    {
      name: "Amankumarranjan8969",
      url: "https://github.com/Amankumarranjan8969/Amankumarranjan8969",
      description: "GitHub special configuration repository with Python/SVG interactive profile widgets.",
      language: "Python",
      stars: 0,
      forks: 0
    },
    {
      name: "PRODIGY_WD_01",
      url: "https://github.com/Amankumarranjan8969/PRODIGY_WD_01",
      description: "Precision stopwatch web application with millisecond lap timing.",
      language: "HTML",
      stars: 1,
      forks: 0
    },
    {
      name: "PRODIGY_WD_02",
      url: "https://github.com/Amankumarranjan8969/PRODIGY_WD_02",
      description: "Interactive Tic-Tac-Toe browser game with game-state detection.",
      language: "HTML",
      stars: 1,
      forks: 0
    },
    {
      name: "PRODIGY_WD_03",
      url: "https://github.com/Amankumarranjan8969/PRODIGY_WD_03",
      description: "Accessible, responsive navigation bar component with mobile drawer.",
      language: "HTML",
      stars: 1,
      forks: 0
    },
    {
      name: "PRODIGY_WD_04",
      url: "https://github.com/Amankumarranjan8969/PRODIGY_WD_04",
      description: "Personal portfolio baseline website created during web engineering internship.",
      language: "HTML",
      stars: 1,
      forks: 0
    }
  ];

  const getLanguageColor = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'python': return 'bg-blue-500';
      case 'jupyter notebook': return 'bg-amber-500';
      case 'typescript': return 'bg-cyan-500';
      case 'javascript': return 'bg-yellow-500';
      case 'html': return 'bg-orange-500';
      default: return 'bg-slate-400';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
          <GithubIcon className="w-4 h-4" />
          <span>Open-Source Repositories & Engineering Activity</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          GitHub Repositories & Activity
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1 max-w-3xl">
          Audited directly from <a href="https://github.com/Amankumarranjan8969" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-cyan-400 underline">github.com/Amankumarranjan8969</a>. All 14 public repositories confirmed via GitHub REST API.
        </p>
      </div>

      {/* GitHub Profile Card */}
      <Card className="bg-slate-50/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-200 dark:bg-slate-800">
              <img
                src="./assets/profile.jpg"
                alt="Aman Kumar Ranjan"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/197645375?v=4";
                }}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Aman kumar ranjan</span>
                <span className="text-xs font-mono text-blue-600 dark:text-cyan-400 font-normal">@Amankumarranjan8969</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                B.Tech CSE (Data Science) • 14 Public Repositories • Active since Feb 2025
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Amankumarranjan8969"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />}>
              Open GitHub Profile
            </Button>
          </a>
        </div>
      </Card>

      {/* Recommended Pinned Repositories */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3 flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
          Flagship Pinned Repositories
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {publicRepositories.filter((r) => r.pinned).map((repo) => (
            <Card key={repo.name} className="flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-blue-700 dark:text-cyan-400 font-semibold truncate">
                    <FolderGit2 className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="truncate">{repo.name}</span>
                  </div>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-mono">
                    Public
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                  <span>{repo.language}</span>
                </div>

                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Complete Public Repositories Table */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3 flex items-center gap-2">
          <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          Complete Repository Catalog (14 Repositories)
        </h3>

        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="p-2.5">Repository Name</th>
                <th className="p-2.5">Language</th>
                <th className="p-2.5">Description</th>
                <th className="p-2.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 bg-white dark:bg-slate-900/40">
              {publicRepositories.map((repo) => (
                <tr key={repo.name} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                  <td className="p-2.5 font-semibold text-slate-900 dark:text-white">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1.5"
                    >
                      <FolderGit2 className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span>{repo.name}</span>
                    </a>
                  </td>
                  <td className="p-2.5">
                    <span className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${getLanguageColor(repo.language)}`} />
                      <span className="text-slate-600 dark:text-slate-300">{repo.language}</span>
                    </span>
                  </td>
                  <td className="p-2.5 text-slate-600 dark:text-slate-300 max-w-md truncate">
                    {repo.description}
                  </td>
                  <td className="p-2.5 text-right">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-cyan-400 hover:underline"
                    >
                      GitHub &rarr;
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
