import React from 'react';
import { experienceData } from '../../data/experience';
import { Card } from '../../components/ui/Card';
import { Badge } from '../../components/ui/Badge';
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  FileText,
  UserCheck
} from 'lucide-react';

export const ExperienceView: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
          <Briefcase className="w-4 h-4" />
          <span>Professional Background & Academic Research</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Internships, Research Fellowships & Honors
        </h1>
        <p className="text-sm text-slate-400 font-mono mt-1 max-w-3xl">
          Timeline of verified institutional research engagements at premier national research laboratories (NIH, CSIR-CBRI) and technical industrial internships.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10 my-6">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline node marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0B0F19] border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors" />

            <Card className="hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <Badge status={exp.status} size="sm" />
                    <span className="text-xs font-mono text-cyan-400">
                      {exp.type}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-white tracking-tight">
                    {exp.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300 mt-1">
                    <span className="flex items-center gap-1 font-semibold text-cyan-300">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.organization}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Supervisors / Mentors */}
              {exp.supervisors && exp.supervisors.length > 0 && (
                <div className="mt-3 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs font-mono text-slate-300 flex items-start gap-2">
                  <UserCheck className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 uppercase text-[10px] block">Supervisors & Mentors</span>
                    {exp.supervisors.join(' • ')}
                  </div>
                </div>
              )}

              {/* Description */}
              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Contributions */}
              <div className="mt-4 space-y-1.5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                  Key Deliverables & Responsibilities
                </h3>
                <ul className="space-y-1.5">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-3 border-t border-slate-800/60">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Verification Evidence */}
              <div className="mt-3 pt-2 text-[11px] font-mono text-slate-500">
                <span>Verified Source: </span>
                <span className="text-slate-400">{exp.verifiedEvidence}</span>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
