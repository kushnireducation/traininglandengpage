import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CountdownTimerProps {
  onAction: () => void;
}

export function CountdownTimer({ onAction }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('countdown_end_time');
    if (saved) {
      const endTime = parseInt(saved);
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      return remaining > 0 ? remaining : 600; // Reset if expired
    }
    return 600; // 10 minutes in seconds
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Set initial end time if not set
    const saved = localStorage.getItem('countdown_end_time');
    if (!saved) {
      const endTime = Date.now() + 600000; // 10 minutes from now
      localStorage.setItem('countdown_end_time', endTime.toString());
    }
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setIsExpired(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 1;
        if (newTime <= 0) {
          setIsExpired(true);
          return 0;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = timeLeft <= 120; // Last 2 minutes
  const isCritical = timeLeft <= 60; // Last minute

  if (isExpired) {
    return (
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 border-b border-zinc-800"
      >
        <div className="container mx-auto px-4 py-4 text-center">
          <p className="text-zinc-400">Бонус більше недоступний</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-950 border-b border-lime-500/30 shadow-2xl backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
          <div className="flex items-center gap-3 flex-1">
            <div className="flex gap-2">
              <div className={`bg-zinc-900 px-3 py-2 rounded-lg border ${
                isCritical ? 'border-red-500 animate-pulse' : 
                isUrgent ? 'border-orange-500' : 
                'border-lime-500/50'
              }`}>
                <span className={`text-2xl md:text-3xl font-bold tabular-nums ${
                  isCritical ? 'text-red-500' : 
                  isUrgent ? 'text-orange-500' : 
                  'text-lime-400'
                }`}>
                  {String(minutes).padStart(2, '0')}
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-bold text-lime-400">:</span>
              </div>
              <div className={`bg-zinc-900 px-3 py-2 rounded-lg border ${
                isCritical ? 'border-red-500 animate-pulse' : 
                isUrgent ? 'border-orange-500' : 
                'border-lime-500/50'
              }`}>
                <motion.span
                  key={seconds}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className={`text-2xl md:text-3xl font-bold tabular-nums ${
                    isCritical ? 'text-red-500' : 
                    isUrgent ? 'text-orange-500' : 
                    'text-lime-400'
                  }`}
                >
                  {String(seconds).padStart(2, '0')}
                </motion.span>
              </div>
            </div>
            <p className="text-sm md:text-base text-zinc-300 hidden md:block">
              Забирай місце за <span className="font-bold text-lime-400">{minutes} хвилин</span> і отримай бонус — запис 2-годинної стратегічної сесії для масажистів
            </p>
            <p className="text-xs text-zinc-300 md:hidden text-center">
              Забирай місце і отримай бонус — запис стратегічної сесії
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={isCritical ? { scale: [1, 1.05, 1] } : {}}
            transition={isCritical ? { repeat: Infinity, duration: 0.8 } : {}}
            onClick={onAction}
            className="bg-lime-400 hover:bg-lime-500 text-zinc-950 font-bold px-6 md:px-8 py-3 rounded-lg transition-all shadow-lg shadow-lime-500/30 whitespace-nowrap"
          >
            Зайняти місце
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
