import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, Truck, Calendar, MapPin, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const SuccessModal = ({ isOpen, onClose, onReset, pickupData }) => {
  useEffect(() => {
    if (isOpen) {
      // Trigger festive confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00C896', '#0E382C', '#F59E0B', '#3B82F6']
        });
      } catch (err) {
        console.log('Confetti burst error:', err);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const trackingId = 'WICE-' + Math.floor(100000 + Math.random() * 900000);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 22, stiffness: 300 }}
          className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col items-center text-center gap-5"
        >
          {/* Animated Success Badge */}
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-emerald-50 text-wice-primary flex items-center justify-center shadow-lg border border-emerald-100 animate-bounce">
              <CheckCircle2 className="w-12 h-12 stroke-[2.2]" />
            </div>
            <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-amber-400 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-wice-primary">Request Submitted</span>
            <h2 className="text-xl font-extrabold text-slate-900 mt-1">Pickup Scheduled!</h2>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Our eco-driver will arrive at your address during the selected time slot.
            </p>
          </div>

          {/* Details Box */}
          <div className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Tracking ID</span>
              <span className="font-mono font-bold text-slate-800 bg-white px-2 py-0.5 rounded border border-slate-200">{trackingId}</span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-700">
              <Calendar className="w-4 h-4 text-wice-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-slate-900">{pickupData?.date || 'Wednesday, 26 June 2024'}</p>
                <p className="text-slate-500">{pickupData?.time || '09:00 AM - 11:00 AM'}</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-wice-primary shrink-0 mt-0.5" />
              <p className="line-clamp-2">{pickupData?.address?.title || 'BSU - Ketupat Pandan'} • {pickupData?.address?.street || 'Jl. H. Muhi, No 1C'}</p>
            </div>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60 font-semibold text-slate-900">
              <span>Est. Waste Weight</span>
              <span className="text-wice-primary font-bold">{pickupData?.totalWeight || '7.5'} Kg</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-2 pt-1">
            <Button onClick={onReset} variant="primary">
              Back to Home
            </Button>
            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 font-medium py-1.5"
            >
              Close Summary
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
