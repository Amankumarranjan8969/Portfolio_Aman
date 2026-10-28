import React from 'react';
import { publicationsData } from '../../data/publications';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import {
  FileText,
  ExternalLink,
  BookOpen,
  Award,
  Users,
  Calendar,
  Tag
} from 'lucide-react';

export const PublicationsView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <BookOpen className="w-4 h-4" />
          <span>Scholarly Communications & Technical Reports</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Publications, Dissertations & Research Reports
        </h1>
        <p className="text-sm text-slate-400 font-mono mt-1 max-w-3xl">
          Peer-reviewed conference presentations, institutional degree dissertations (NIH Roorkee), and laboratory technical reports with authentic citation metadata.
        </p>
      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {publicationsData.map((pub) => (
          <Card key={pub.id} className="hover:border-slate-700 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-950 text-blue-300 border border-blue-800">
                    {pub.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {pub.year}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  {pub.title}
                </h2>
                <p className="text-xs text-cyan-400 font-mono mt-1">
                  {pub.venue}
                </p>
              </div>

              {pub.verificationUrl && (
                <a
                  href={pub.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800 hover:bg-emerald-900 transition-colors self-start sm:self-auto flex-shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Verify Portal (ID: {pub.certificateId})</span>
                </a>
              )}
            </div>

            {/* Authors */}
            <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-300">
              <Users className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <span>Authors: {pub.authors.join(' • ')}</span>
            </div>

            {/* Abstract */}
            <div className="mt-4">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-1.5">
                Executive Abstract
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                {pub.abstract}
              </p>
            </div>

            {/* Keywords */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-slate-500 mr-1" />
              {pub.keywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300 border border-slate-700/60"
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
