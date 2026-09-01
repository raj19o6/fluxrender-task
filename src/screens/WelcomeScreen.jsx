import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import bgImg from '../assets/images/bg.png';
import { GoogleLogoIcon } from '../assets/vectors';

export const WelcomeScreen = ({ onNavigateNext }) => {
  return (
    <div className="relative min-h-[100dvh] h-full w-full flex flex-col justify-between overflow-hidden font-sans select-none">
      {/* Full Bleed Figma Background Image */}
      <img
        src={bgImg}
        alt="Wice Waste Management Background"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
      />

      {/* Subtle Gradient Overlay for enhanced text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/10 to-emerald-950/40 pointer-events-none" />

      {/* Top Spacer */}
      <div className="relative z-10 pt-12 sm:pt-16 px-6" />

      {/* Main Content & Action Area floating directly on bg.png */}
      <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-6 pb-8 sm:pb-10 max-w-lg mx-auto w-full">
        {/* Headline & Description matching Figma Screen 1 */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="font-jakarta text-3xl sm:text-4xl font-extrabold text-white leading-[1.2] tracking-tight">
            Smart Waste<br />
            management Made<br />
            Easy
          </h1>
          
          <p className="text-sm sm:text-base text-white/90 font-medium leading-relaxed max-w-sm">
            Let AI sort your waste, earn rewards for recycling, and schedule hassle-free pickups—all in one app
          </p>
        </motion.div>

        {/* Action Buttons Area */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3.5 pt-2"
        >
          {/* Continue with Email Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onNavigateNext}
            className="w-full bg-[#5EBBBA]/90 hover:bg-[#5EBBBA] text-[#0E382C] font-bold py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2.5 shadow-md border border-[#7EC9C8]/40 transition-all text-sm sm:text-base focus:outline-none"
          >
            <Mail className="w-5 h-5 text-[#0E382C] stroke-[2.2]" />
            <span>Continue with Email</span>
          </motion.button>

          {/* Continue with Google Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={onNavigateNext}
            className="w-full bg-white hover:bg-slate-50 text-[#2A7571] font-bold py-3.5 px-5 rounded-2xl flex items-center justify-center gap-2.5 shadow-lg transition-all text-sm sm:text-base focus:outline-none"
          >
            <GoogleLogoIcon className="w-5 h-5 shrink-0" />
            <span>Continue with Google</span>
          </motion.button>

          {/* Bottom Sign In Link */}
          <div className="pt-2 text-center">
            <p className="text-xs text-white/90 font-medium">
              Already have an account?{' '}
              <button
                onClick={onNavigateNext}
                className="font-bold text-white underline underline-offset-2 hover:text-emerald-100 transition-colors"
              >
                Sign In
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
