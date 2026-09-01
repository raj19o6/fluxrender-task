import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export const SelectorRow = ({
  icon: Icon,
  label,
  value,
  placeholder = "Select option",
  onClick
}) => {
  const isSelected = Boolean(value);

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full bg-white rounded-2xl border border-slate-200/90 p-3.5 flex items-center justify-between cursor-pointer hover:border-wice-primary/40 shadow-2xs transition-all"
    >
      <div className="flex items-center gap-3 min-w-0">
        {Icon && (
          <div className="w-6 h-6 flex items-center justify-center text-[#7EC9C8] shrink-0">
            <Icon className="w-5 h-5 stroke-[2]" />
          </div>
        )}
        <span className={`text-xs min-w-0 truncate ${
          isSelected ? 'text-slate-900 font-semibold' : 'text-[#C4C4C4] font-normal'
        }`}>
          {value || placeholder}
        </span>
      </div>

      <div className="flex items-center text-[#2A7571] shrink-0">
        <ChevronRight className="w-4 h-4 stroke-[2.2]" />
      </div>
    </motion.div>
  );
};
