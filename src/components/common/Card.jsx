import React from 'react';

export const Card = ({
  children,
  className = '',
  onClick,
  interactive = false,
  padding = 'p-4'
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-transparent rounded-2xl border border-slate-200/60 
        ${padding} 
        ${interactive ? 'cursor-pointer transition-all hover:border-wice-primary/40 active:scale-[0.99]' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
