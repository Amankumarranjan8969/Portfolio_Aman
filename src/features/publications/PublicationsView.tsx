import React from 'react';
import { publicationsData } from '../../data/publications';
import { Card } from '../../components/ui/Card';
import {
  ExternalLink,
  BookOpen,
  Users,
  Tag
} from 'lucide-react';

export const PublicationsView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-cyan-400 uppercase tracking-wider mb-1">
          <BookOpen className="w-4 h-4" />
          <span>Scholarly Communications & Technical Reports</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Publications, Dissertations & Research Reports
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono mt-1 max-w-3xl">
          Peer-reviewed conference presentations, institutional degree dissertations (NIH Roorkee), and laboratory technical reports with authentic citation metadata.
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-5">
        {publicationsData.map((pub) => (
          <Card key={pub.id} className="hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800">
                    {pub.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {pub.year}
                  </span>
                </div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                  {pub.title}
                </h2>
                <p className="text-xs text-blue-600 dark:text-cyan-400 font-mono mt-0.5">
                  {pub.venue}
                </p>
              </div>

              {pub.verificationUrl && (
                <a
                  href={pub.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-colors self-start sm:self-auto flex-shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Portal (ID: {pub.certificateId})</span>
                </a>
              )}
            </div>

            {/* Authors */}
            <div className="mt-2.5 flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-300">
              <Users className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
              <span>Authors: {pub.authors.join(' • ')}</span>
            </div>

            {/* Abstract */}
            <div className="mt-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-mono mb-1">
                Executive Abstract
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800/80">
                {pub.abstract}
              </p>
            </div>

            {/* Keywords */}
            <div className="mt-3.5 flex flex-wrap items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-slate-400 mr-1" />
              {pub.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                >
                  {kw}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
