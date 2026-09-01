import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Check } from 'lucide-react';
import { Button } from '../common/Button';

export const TimePickerModal = ({ isOpen, onClose, onSelectTime, selectedTime }) => {
  const slots = [
    { time: '09:00 AM - 11:00 AM', label: 'Morning Slot', recommended: true },
    { time: '11:00 AM - 01:00 PM', label: 'Mid-day Slot', recommended: false },
    { time: '02:00 PM - 04:00 PM', label: 'Afternoon Slot', recommended: false },
    { time: '04:00 PM - 06:00 PM', label: 'Evening Slot', recommended: false }
  ];

  const [currentSelected, setCurrentSelected] = useState(selectedTime || slots[0].time);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelectTime(currentSelected);
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
          className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-5"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-wice-primary/10 text-wice-primary flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Select Pickup Time Window</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Time Slots */}
          <div className="grid grid-cols-1 gap-2.5">
            {slots.map((item) => {
              const active = currentSelected === item.time;
              return (
                <motion.div
                  whileTap={{ scale: 0.98 }}
                  key={item.time}
                  onClick={() => setCurrentSelected(item.time)}
                  className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                    active
                      ? 'border-wice-primary bg-emerald-50/60 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.time}</h4>
                    <p className="text-xs text-slate-500">{item.label}</p>
                  </div>

                  {active ? (
                    <div className="w-6 h-6 rounded-full bg-wice-primary text-white flex items-center justify-center">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                  ) : item.recommended ? (
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold">
                      Popular
                    </span>
                  ) : null}
                </motion.div>
              );
            })}
          </div>

          {/* Action */}
          <div className="pt-2">
            <Button onClick={handleConfirm} variant="primary">
              Confirm Time
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
