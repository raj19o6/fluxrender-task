import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Building, Phone, Home } from 'lucide-react';
import { Button } from '../common/Button';

export const AddressModal = ({ isOpen, onClose, onSaveAddress, currentAddress }) => {
  const [formData, setFormData] = useState({
    title: currentAddress?.title || '',
    street: currentAddress?.street || '',
    city: currentAddress?.city || '',
    phone: currentAddress?.phone || '',
    isDefault: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveAddress(formData);
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
          className="w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-slate-100 flex flex-col gap-5 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-wice-primary/10 text-wice-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Add Pickup Address</h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Location Title */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Location Name
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. Home / BSU - Ketupat Pandan"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:border-wice-primary focus:ring-1 focus:ring-wice-primary outline-none"
                />
              </div>
            </div>

            {/* Street Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Street Address
              </label>
              <div className="relative">
                <Home className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <textarea
                  required
                  rows={2}
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  placeholder="Jl. H. Muhi, No 1C, Kec. Kebayoran Baru"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:border-wice-primary focus:ring-1 focus:ring-wice-primary outline-none resize-none"
                />
              </div>
            </div>

            {/* District & City */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                City / Region
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Pondok Pening, Jakarta Selatan, Jakarta"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:border-wice-primary focus:ring-1 focus:ring-wice-primary outline-none"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Contact Phone
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0818-1234-1234"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 text-sm focus:border-wice-primary focus:ring-1 focus:ring-wice-primary outline-none"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center gap-3">
              <Button type="submit" variant="primary">
                Save & Use Address
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
