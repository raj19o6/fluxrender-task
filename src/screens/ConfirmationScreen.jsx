import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, CheckCircle2 } from 'lucide-react';
import { Header } from '../components/common/Header';
import { SuccessModal } from '../components/modals/SuccessModal';

export const ConfirmationScreen = ({
  onBack,
  scheduleData,
  onResetApp
}) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  // Dynamic calculations or Figma default fallbacks
  const addressDetails = scheduleData.address || {
    title: 'BSU – Ketupat Pandan',
    street: 'Jl. H. Muhi, No 1C, Kec. Kebayoran Baru, Pondok Pening, Jakarta Selatan',
    city: 'Jakarta',
    phone: '0818 – 1234 –1234'
  };

  const selectedDate = scheduleData.date || 'Wednesday, 26 June 2024';

  const [items] = useState([
    { id: 'plastic', label: 'Plastic bottle', detail: '- 3 Liter', weight: 0.5 },
    { id: 'glass', label: 'Glass', detail: '- 2 Item', weight: 1.0 },
    { id: 'electronic', label: 'Electronic', detail: '- 3 Item', weight: 3.0 },
    { id: 'oil', label: 'Oil', detail: '- 2 Liter', weight: 2.0 }
  ]);

  const totalWeight = items.reduce((acc, curr) => acc + curr.weight, 0);

  const handleProcess = () => {
    setIsSuccessOpen(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F8FB] flex flex-col justify-between font-sans">
      {/* Header with Centered Title */}
      <Header title="Confirmation" onBack={onBack} />

      {/* Main Content Body */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col gap-6 overflow-y-auto pb-28">

        {/* Trash Bank / Pickup Location Section matching Figma Screen 3 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 tracking-tight">
              Trash Bank
            </h3>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-[#7EC9C8] hover:underline"
            >
              Edit
            </button>
          </div>

          {/* Details floating directly on background per Figma */}
          <div className="flex flex-col gap-2 pt-0.5">
            {/* Title with MapPin */}
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#5EBBBA] shrink-0 stroke-[2.2]" />
              <h4 className="text-sm font-bold text-slate-800">
                {addressDetails.title}
              </h4>
            </div>

            {/* Address Lines */}
            <p className="text-xs text-slate-400 font-normal leading-relaxed pl-6">
              {addressDetails.street}, {addressDetails.city}
            </p>

            {/* Phone */}
            <div className="flex items-center gap-2 pl-6 text-xs text-slate-600 font-medium">
              <Phone className="w-3.5 h-3.5 text-[#5EBBBA] shrink-0 stroke-[2]" />
              <span>{addressDetails.phone}</span>
            </div>

            {/* Pickup Date */}
            <div className="pl-6 pt-1">
              <p className="text-xs font-bold text-slate-800">
                {selectedDate}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200/60" />

        {/* Total Weight Section matching Figma Screen 3 */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight">
            Total Weight
          </h3>

          {/* White Summary Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100/90 shadow-2xs space-y-3">
            {/* Item Rows */}
            <div className="flex flex-col gap-2.5 text-xs">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="font-semibold text-slate-500 min-w-[90px]">
                      {item.label}
                    </span>
                    <span className="text-slate-400 font-normal">
                      {item.detail}
                    </span>
                  </div>
                  <span className="font-semibold text-slate-700 shrink-0">
                    {item.weight} Kg
                  </span>
                </div>
              ))}
            </div>

            {/* Divider line */}
            <div className="border-t border-slate-100 pt-3" />

            {/* Estimated Total Weight Row */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800">
              <span>Estimated total weight</span>
              <span className="text-slate-900">{totalWeight} Kg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar matching Figma Screen 3 */}
      <div className="sticky bottom-0 z-20 w-full p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-sheet">
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleProcess}
          className="w-full bg-[#5EBBBA] hover:bg-[#4FA9A8] text-[#0A443E] font-bold py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2.5 shadow-md transition-all text-sm focus:outline-none"
        >
          <CheckCircle2 className="w-5 h-5 text-[#0A443E] stroke-[2.2]" />
          <span>Process</span>
        </motion.button>
      </div>

      {/* Celebration Success Modal */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        onReset={onResetApp}
        scheduleData={{ ...scheduleData, date: selectedDate, address: addressDetails }}
      />
    </div>
  );
};
