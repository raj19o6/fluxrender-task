import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const Header = ({ title, onBack, rightAction }) => {
  return (
    <header className="sticky top-0 z-30 w-full px-4 py-3.5 flex items-center justify-between glass-header border-b border-slate-100/80 transition-all relative">
      {/* Back Button on Left */}
      <div className="w-9">
        {onBack && (
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onBack}
            className="w-9 h-9 rounded-full bg-slate-100/80 hover:bg-slate-200/80 flex items-center justify-center text-slate-700 transition-colors focus:outline-none"
            aria-label="Go back"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.2]" />
          </motion.button>
        )}
      </div>

      {/* Title Centered in Middle */}
      {title && (
        <h1 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight text-center absolute left-1/2 -translate-x-1/2">
          {title}
        </h1>
      )}

      {/* Right Action Slot */}
      <div className="w-9 flex justify-end">
        {rightAction || null}
      </div>
    </header>
  );
};
