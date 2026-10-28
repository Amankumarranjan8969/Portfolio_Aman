import React from 'react';

interface MetricDisplayProps {
  label: string;
  value: string | number;
  subValue?: string;
  badge?: React.ReactNode;
  icon?: React.ReactNode;
  trend?: 'positive' | 'neutral' | 'subdued';
  className?: string;
}

export const MetricDisplay: React.FC<MetricDisplayProps> = ({
  label,
  value,
  subValue,
  badge,
  icon,
  className = '',
}) => {
  return (
    <div className={`p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between ${className}`}>
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {label}
        </span>
        {icon && <span className="text-slate-400">{icon}</span>}
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold font-mono text-slate-100 tracking-tight">
          {value}
        </span>
        {badge}
      </div>
      {subValue && (
        <span className="text-xs text-slate-400 mt-1.5 font-sans">
          {subValue}
        </span>
      )}
    </div>
  );
};
