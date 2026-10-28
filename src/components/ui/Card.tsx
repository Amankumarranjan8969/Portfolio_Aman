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
      className={`bg-slate-900/60 backdrop-blur-md border border-slate-800/80 rounded-xl p-5 transition-all duration-200 ${
        hoverable ? 'hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-lg cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
