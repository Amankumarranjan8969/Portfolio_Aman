import React from 'react';
import { ProjectEvidenceStatus } from '../../types/project';
import { CredentialVerificationStatus } from '../../types/credential';

interface BadgeProps {
  status: ProjectEvidenceStatus | CredentialVerificationStatus | string;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, size = 'sm', className = '' }) => {
  let colorStyles = "bg-slate-800 text-slate-300 border-slate-700";
  let dotColor = "bg-slate-400";

  switch (status) {
    case 'Verified':
      colorStyles = "bg-emerald-950/70 text-emerald-300 border-emerald-800/80";
      dotColor = "bg-emerald-400";
      break;
    case 'In Progress':
      colorStyles = "bg-cyan-950/70 text-cyan-300 border-cyan-800/80";
      dotColor = "bg-cyan-400";
      break;
    case 'Experimental':
      colorStyles = "bg-amber-950/70 text-amber-300 border-amber-800/80";
      dotColor = "bg-amber-400";
      break;
    case 'Document Provided':
      colorStyles = "bg-blue-950/70 text-blue-300 border-blue-800/80";
      dotColor = "bg-blue-400";
      break;
    case 'Needs Verification':
      colorStyles = "bg-rose-950/60 text-rose-300 border-rose-800/70";
      dotColor = "bg-rose-400";
      break;
    case 'Planned':
      colorStyles = "bg-purple-950/60 text-purple-300 border-purple-800/70";
      dotColor = "bg-purple-400";
      break;
    default:
      colorStyles = "bg-slate-900/80 text-slate-300 border-slate-700";
      dotColor = "bg-slate-400";
  }

  const sizeStyles = size === 'sm' ? "text-xs px-2.5 py-0.5" : "text-sm px-3 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors ${sizeStyles} ${colorStyles} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{status}</span>
    </span>
  );
};
