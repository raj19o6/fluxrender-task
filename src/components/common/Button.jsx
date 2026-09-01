import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  onClick,
  variant = 'primary', // 'primary' | 'secondary' | 'dark' | 'ghost'
  fullWidth = true,
  icon: Icon,
  disabled = false,
  className = '',
  size = 'md' // 'sm' | 'md' | 'lg'
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'px-3.5 py-2 text-xs gap-1.5',
    md: 'px-5 py-3.5 text-sm gap-2.5 shadow-sm',
    lg: 'px-6 py-4 text-base gap-3 shadow-md'
  };

  const variantStyles = {
    primary: 'bg-wice-primary hover:bg-wice-primary-hover text-white shadow-btn border border-wice-primary-hover/20',
    secondary: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm',
    dark: 'bg-wice-dark hover:bg-wice-dark-surface text-white shadow-md',
    ghost: 'bg-transparent hover:bg-slate-100/60 text-slate-700 border border-transparent'
  };

  return (
    <motion.button
      whileTap={disabled ? undefined : { scale: 0.96 }}
      whileHover={disabled ? undefined : { scale: 1.01 }}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {Icon && <Icon className="w-5 h-5 shrink-0" />}
      <span>{children}</span>
    </motion.button>
  );
};
