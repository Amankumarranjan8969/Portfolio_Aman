import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800/80 rounded-xl p-5 sm:p-6 transition-all duration-150 ${
        hoverable ? 'hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-md cursor-pointer' : 'shadow-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};
