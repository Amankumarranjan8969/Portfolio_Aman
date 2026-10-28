import React from 'react';
import { ProjectEvidenceStatus } from '../../types/project';
import { CredentialVerificationStatus } from '../../types/credential';

interface BadgeProps {
  status: ProjectEvidenceStatus | CredentialVerificationStatus | string;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ status, size = 'sm', className = '' }) => {
  let colorStyles = "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
  let dotColor = "bg-slate-500";

  switch (status) {
    case 'Verified':
      colorStyles = "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800/80";
      dotColor = "bg-emerald-500";
      break;
    case 'In Progress':
      colorStyles = "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800/80";
      dotColor = "bg-sky-500";
      break;
    case 'Experimental':
      colorStyles = "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800/80";
      dotColor = "bg-amber-500";
      break;
    case 'Document Provided':
      colorStyles = "bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/80";
      dotColor = "bg-blue-500";
      break;
    case 'Needs Verification':
      colorStyles = "bg-rose-50 text-rose-800 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800/70";
      dotColor = "bg-rose-500";
      break;
    case 'Planned':
      colorStyles = "bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:border-purple-800/70";
      dotColor = "bg-purple-500";
      break;
    default:
      colorStyles = "bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";
      dotColor = "bg-slate-500";
  }

  const sizeStyles = size === 'sm' ? "text-[11px] px-2.5 py-0.5" : "text-xs px-3 py-1";

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border transition-colors ${sizeStyles} ${colorStyles} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
      <span>{status}</span>
    </span>
  );
};
