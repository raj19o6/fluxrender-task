import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Check } from 'lucide-react';
import { Button } from '../common/Button';

export const DatePickerModal = ({ isOpen, onClose, onSelectDate, selectedDate }) => {
  const dates = [
    { date: 'Wednesday, 26 June 2024', day: '26', month: 'Jun', weekday: 'Wed', status: 'Available' },
    { date: 'Thursday, 27 June 2024', day: '27', month: 'Jun', weekday: 'Thu', status: 'Available' },
    { date: 'Friday, 28 June 2024', day: '28', month: 'Jun', weekday: 'Fri', status: 'Available' },
    { date: 'Saturday, 29 June 2024', day: '29', month: 'Jun', weekday: 'Sat', status: 'Available' },
    { date: 'Monday, 01 July 2024', day: '01', month: 'Jul', weekday: 'Mon', status: 'Available' },
  ];

  const [currentSelected, setCurrentSelected] = useState(selectedDate || dates[0].date);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelectDate(currentSelected);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-5 max-h-[85vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-wice-primary/10 text-wice-primary flex items-center justify-center">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Select Pickup Date</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Date List */}
          <div className="flex flex-col gap-2.5">
            {dates.map((item) => {
              const active = currentSelected === item.date;
              return (
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  key={item.date}
                  onClick={() => setCurrentSelected(item.date)}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    active
                      ? 'border-wice-primary bg-emerald-50/60 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-bold ${
                      active ? 'bg-wice-primary text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      <span className="text-xs font-normal uppercase tracking-wider">{item.weekday}</span>
                      <span className="text-base leading-none">{item.day}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900">{item.date}</h4>
                      <span className="text-xs text-wice-primary font-medium">{item.status} slot</span>
                    </div>
                  </div>

                  {active && (
                    <div className="w-6 h-6 rounded-full bg-wice-primary text-white flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Action */}
          <div className="pt-2">
            <Button onClick={handleConfirm} variant="primary">
              Confirm Date
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
