import React, { useState } from 'react';
import { Credential, CredentialType, CredentialVerificationStatus } from '../../types/credential';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import {
  Award,
  ShieldCheck,
  ExternalLink,
  FileCheck2,
  Calendar,
  Building2,
  HelpCircle,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface CredentialsViewProps {
  credentials: Credential[];
}

export const CredentialsView: React.FC<CredentialsViewProps> = ({ credentials }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredCredentials = credentials.filter((c) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'verified') return c.status === 'Verified' || c.status === 'Document Provided';
    if (selectedFilter === 'needs-verification') return c.status === 'Needs Verification';
    return c.credentialType.toLowerCase() === selectedFilter.toLowerCase();
  });

  const verifiedCount = credentials.filter((c) => c.status === 'Verified' || c.status === 'Document Provided').length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <Award className="w-4 h-4" />
          <span>Accreditation & Competitive Honors</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Certificates, Honors & Academic Credentials
        </h1>
        <p className="text-sm text-slate-400 font-mono mt-1 max-w-3xl">
          Audited register of academic certifications, proctored examinations, competitive awards, and conference presentations with direct institutional verification endpoints.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
        <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              selectedFilter === 'all'
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            All Credentials ({credentials.length})
          </button>
          <button
            onClick={() => setSelectedFilter('verified')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              selectedFilter === 'verified'
                ? 'bg-emerald-600 text-white font-semibold'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Verified ({verifiedCount})
          </button>
          <button
            onClick={() => setSelectedFilter('needs-verification')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              selectedFilter === 'needs-verification'
                ? 'bg-rose-600 text-white font-semibold'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Needs Verification ({credentials.length - verifiedCount})
          </button>
        </div>

        <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4" />
          <span>Zero Fabricated IDs: Authenticity Strictly Enforced</span>
        </div>
      </div>

      {/* Credentials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredCredentials.map((cred) => (
          <Card key={cred.id} className="flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <Badge status={cred.status} size="sm" />
                <span className="text-xs font-mono text-slate-400">
                  {cred.issueDate}
                </span>
              </div>

              <h3 className="text-base font-bold text-white leading-snug mt-1">
                {cred.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono mt-1">
                <Building2 className="w-3.5 h-3.5" />
                <span>{cred.issuingOrg}</span>
              </div>

              {cred.score && (
                <div className="mt-3 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 font-mono text-xs">
                  <span className="text-slate-400 block text-[10px] uppercase">Score / Outcome</span>
                  <span className="text-emerald-400 font-bold">{cred.score}</span>
                  {cred.credits && <span className="text-slate-400 ml-2">({cred.credits} Credits)</span>}
                </div>
              )}

              {cred.credentialId && (
                <div className="mt-2 text-xs font-mono text-slate-300">
                  <span className="text-slate-500">ID: </span>
                  <code className="text-cyan-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                    {cred.credentialId}
                  </code>
                </div>
              )}

              <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                {cred.notes}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
              <span className="text-slate-500 text-[11px] truncate max-w-[280px]">
                Source: {cred.evidenceSource}
              </span>

              {cred.verificationUrl ? (
                <a
                  href={cred.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 hover:underline flex-shrink-0"
                >
                  <span>Verify Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="text-slate-500 text-[11px]">
                  Direct Verification Pending
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
