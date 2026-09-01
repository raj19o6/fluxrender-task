import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { ScheduleScreen } from './screens/ScheduleScreen';
import { ConfirmationScreen } from './screens/ConfirmationScreen';

export function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // 'welcome' | 'schedule' | 'confirmation'

  // Central Schedule State starting completely empty per Figma Default State
  const [scheduleData, setScheduleData] = useState({
    date: null,
    time: null,
    address: null
  });

  const handleResetApp = () => {
    setScheduleData({
      date: null,
      time: null,
      address: null
    });
    setCurrentScreen('welcome');
  };

  // Screen transition variants
  const pageVariants = {
    initial: (direction) => ({
      x: direction > 0 ? 250 : -250,
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 250 : -250,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 320, damping: 32 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const screenOrder = ['welcome', 'schedule', 'confirmation'];
  const getDirection = (newScreen) => {
    const currentIndex = screenOrder.indexOf(currentScreen);
    const nextIndex = screenOrder.indexOf(newScreen);
    return nextIndex - currentIndex;
  };

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 md:bg-slate-900 flex items-center justify-center md:py-6 md:px-4 selection:bg-wice-primary selection:text-white font-sans antialiased">
      {/* 
        Full Bleed edge-to-edge container on all mobile viewports (Pixel 7 Pro 480px, iPhone Pro Max 430px, etc.)
        Only caps on tablet/desktop displays (md: >= 768px)
      */}
      <main className="w-full md:max-w-[440px] min-h-screen md:min-h-[860px] md:h-[860px] md:max-h-[92vh] bg-white md:rounded-[32px] md:shadow-2xl flex flex-col justify-between overflow-hidden relative">
        <AnimatePresence mode="wait" custom={getDirection(currentScreen)}>
          {currentScreen === 'welcome' && (
            <motion.div
              key="welcome"
              custom={getDirection('welcome')}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full min-h-screen md:min-h-full flex flex-col"
            >
              <WelcomeScreen
                onNavigateNext={() => navigateTo('schedule')}
              />
            </motion.div>
          )}

          {currentScreen === 'schedule' && (
            <motion.div
              key="schedule"
              custom={getDirection('schedule')}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full min-h-screen md:min-h-full flex flex-col"
            >
              <ScheduleScreen
                onBack={() => navigateTo('welcome')}
                onNavigateNext={() => navigateTo('confirmation')}
                scheduleData={scheduleData}
                setScheduleData={setScheduleData}
              />
            </motion.div>
          )}

          {currentScreen === 'confirmation' && (
            <motion.div
              key="confirmation"
              custom={getDirection('confirmation')}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full min-h-screen md:min-h-full flex flex-col"
            >
              <ConfirmationScreen
                onBack={() => navigateTo('schedule')}
                scheduleData={scheduleData}
                onResetApp={handleResetApp}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
