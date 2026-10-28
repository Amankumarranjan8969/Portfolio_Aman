import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5",
    md: "text-xs sm:text-sm px-4 py-2",
    lg: "text-sm sm:text-base px-5 py-2.5",
  }[size];

  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 border border-slate-200 dark:border-slate-700",
    outline: "bg-transparent border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/50",
    ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100",
    danger: "bg-rose-600 hover:bg-rose-500 text-white",
  }[variant];

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="w-4 h-4 flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};
