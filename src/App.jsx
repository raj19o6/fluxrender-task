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
    <main className="min-h-screen w-full bg-white flex flex-col justify-between overflow-x-hidden selection:bg-wice-primary selection:text-white font-sans antialiased">
      <AnimatePresence mode="wait" custom={getDirection(currentScreen)}>
        {currentScreen === 'welcome' && (
          <motion.div
            key="welcome"
            custom={getDirection('welcome')}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen"
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
            className="w-full min-h-screen"
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
            className="w-full min-h-screen"
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
  );
}

export default App;
