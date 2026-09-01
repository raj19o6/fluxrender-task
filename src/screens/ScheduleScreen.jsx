import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Info, MapPin, Edit2, ArrowRight } from 'lucide-react';
import { Header } from '../components/common/Header';
import { SelectorRow } from '../components/common/SelectorRow';
import { Button } from '../components/common/Button';
import { TrashTruckIcon, EmptyAddressIllustration } from '../assets/vectors';
import { DatePickerModal } from '../components/modals/DatePickerModal';
import { TimePickerModal } from '../components/modals/TimePickerModal';
import { AddressModal } from '../components/modals/AddressModal';

export const ScheduleScreen = ({
  onBack,
  onNavigateNext,
  scheduleData,
  setScheduleData
}) => {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const handleSelectDate = (date) => {
    setScheduleData((prev) => ({ ...prev, date }));
  };

  const handleSelectTime = (time) => {
    setScheduleData((prev) => ({ ...prev, time }));
  };

  const handleSaveAddress = (address) => {
    setScheduleData((prev) => ({ ...prev, address }));
  };

  // Check if user has made any selection (Date, Time, or Address)
  const hasSelection = Boolean(scheduleData.date || scheduleData.time || scheduleData.address);

  return (
    <div className="min-h-screen w-full bg-[#F8F8FB] flex flex-col justify-between font-sans">
      {/* Header matching Figma */}
      <Header title="Schedule" onBack={onBack} />

      {/* Main Content Body */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col gap-5 overflow-y-auto pb-24">
        {/* Service Card matching Figma */}
        <div className="bg-white rounded-2xl p-4 shadow-xs border border-slate-100/90 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <TrashTruckIcon className="w-14 h-14" />
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-800">Trash Pick Up</h3>
            </div>
          </div>
          <button
            onClick={() => setIsAddressModalOpen(true)}
            className="border border-[#7EC9C8] text-[#00A896] bg-white hover:bg-[#E6FAF4] px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all focus:outline-none shadow-2xs"
          >
            Change
          </button>
        </div>

        {/* Info Banner Row matching Figma */}
        <div className="flex items-start gap-2.5 px-1 py-1 text-xs text-[#2A7571]">
          <div className="w-4 h-4 rounded-full border border-[#00C896] text-[#00C896] flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
            !
          </div>
          <p className="font-medium leading-relaxed">
            This method must have minimum of 5kg of waste weight
          </p>
        </div>

        {/* Schedule Request Section */}
        <div className="py-1 flex flex-col gap-3">
          <h3 className="text-sm font-bold text-slate-800 tracking-tight">
            Schedule your request for trash pickup!
          </h3>

          {/* Date & Time Pickers */}
          <div className="flex flex-col gap-2.5">
            <SelectorRow
              icon={Calendar}
              label="Date Pickup"
              value={scheduleData.date}
              placeholder="Select your date pickup"
              onClick={() => setIsDatePickerOpen(true)}
            />

            <SelectorRow
              icon={Clock}
              label="Time Pickup"
              value={scheduleData.time}
              placeholder="Select your time pickup"
              onClick={() => setIsTimePickerOpen(true)}
            />
          </div>
        </div>

        {/* Address Section */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-800 tracking-tight">
              Address
            </h3>
            <button
              onClick={() => setIsAddressModalOpen(true)}
              className="text-xs font-semibold text-[#00C896] hover:underline"
            >
              Add
            </button>
          </div>

          {scheduleData.address ? (
            /* Selected Address Card */
            <div className="bg-white rounded-2xl p-4 border border-[#00C896]/30 shadow-xs flex flex-col gap-2 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00C896]" />
                  <span className="text-sm font-bold text-slate-800">{scheduleData.address.title}</span>
                </div>
                <button
                  onClick={() => setIsAddressModalOpen(true)}
                  className="w-7 h-7 rounded-full bg-slate-100 text-slate-600 hover:bg-[#00C896] hover:text-white flex items-center justify-center transition-colors"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                {scheduleData.address.street}, {scheduleData.address.city}
              </p>
              
              <div className="text-xs text-slate-500 pl-6 font-mono font-medium">
                {scheduleData.address.phone}
              </div>
            </div>
          ) : (
            /* Empty State Container matching Figma Screen 2 */
            <div className="flex flex-col items-center justify-center p-4 text-center space-y-2.5">
              <EmptyAddressIllustration />
              
              <div className="space-y-1 pt-1">
                <h4 className="text-sm font-bold text-slate-800">
                  No address added
                </h4>
                <p className="text-xs text-slate-400 font-normal">
                  Click the add address to continue
                </p>
              </div>

              <div className="pt-1">
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setIsAddressModalOpen(true)}
                  className="border border-[#7EC9C8] text-[#00C896] bg-white hover:bg-emerald-50 px-5 py-2 rounded-xl text-xs font-semibold transition-all focus:outline-none shadow-2xs"
                >
                  add address
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Bottom Action Bar - Hidden in default state per Figma spec, slides up when user selects options */}
      <AnimatePresence>
        {hasSelection && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="sticky bottom-0 z-20 w-full p-4 bg-white/95 backdrop-blur-md border-t border-slate-100 shadow-sheet"
          >
            <Button
              onClick={onNavigateNext}
              variant="primary"
              size="lg"
              icon={ArrowRight}
            >
              Continue to Confirmation
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <DatePickerModal
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        onSelectDate={handleSelectDate}
        selectedDate={scheduleData.date}
      />

      <TimePickerModal
        isOpen={isTimePickerOpen}
        onClose={() => setIsTimePickerOpen(false)}
        onSelectTime={handleSelectTime}
        selectedTime={scheduleData.time}
      />

      <AddressModal
        isOpen={isAddressModalOpen}
        onClose={() => setIsAddressModalOpen(false)}
        onSaveAddress={handleSaveAddress}
        currentAddress={scheduleData.address}
      />
    </div>
  );
};
