import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '../../hooks/use-mobile';

interface CountdownTimerProps {
  startDate: Date;
  endDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  phase: 'upcoming' | 'active' | 'ended';
}

const calculateTimeLeft = (startDate: Date, endDate: Date): TimeLeft => {
  const now = new Date().getTime();
  const start = startDate.getTime();
  const end = endDate.getTime();
  
  let difference = 0;
  let phase: 'upcoming' | 'active' | 'ended' = 'upcoming';

  if (now < start) {
    difference = start - now; // Counting down to the start
    phase = 'upcoming';
  } else if (now < end) {
    difference = end - now; // Counting down to the end
    phase = 'active';
  } else {
    difference = 0; // Event is over
    phase = 'ended';
  }
  
  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      phase
    };
  }
  
  return {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    phase: 'ended'
  };
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ startDate, endDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(startDate, endDate));
  const isMobile = useIsMobile();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(startDate, endDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate, endDate]);

  const timeBoxes = [
    { label: 'DAYS', value: timeLeft.days, color: 'teal' },
    { label: 'HOURS', value: timeLeft.hours, color: 'teal' },
    { label: 'MINUTES', value: timeLeft.minutes, color: 'teal' },
    // Seconds get the pink color to highlight the urgency of time running out
    { label: 'SECONDS', value: timeLeft.seconds, color: 'pink' } 
  ];

  // Framer motion variants for the ticking numbers
  const tickVariants = {
    initial: { y: 15, opacity: 0, filter: "blur(4px)" },
    animate: { y: 0, opacity: 1, filter: "blur(0px)" },
    exit: { y: -15, opacity: 0, filter: "blur(4px)", position: "absolute" as const }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      
      {/* Dynamic Phase Indicator Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <span className={`text-xs md:text-sm font-cyber tracking-[0.2em] px-4 py-1.5 rounded-full border ${
          timeLeft.phase === 'active' ? 'text-squid-pink border-squid-pink/40 bg-squid-pink/10 shadow-[0_0_10px_rgba(255,0,91,0.2)]' :
          timeLeft.phase === 'upcoming' ? 'text-squid-teal border-squid-teal/40 bg-squid-teal/10 shadow-[0_0_10px_rgba(0,191,165,0.2)]' :
          'text-gray-500 border-gray-500/40 bg-gray-500/10'
        }`}>
          {timeLeft.phase === 'active' ? 'HACKATHON IN PROGRESS' : 
           timeLeft.phase === 'upcoming' ? 'COUNTDOWN TO START' : 
           'HACKATHON CONCLUDED'}
        </span>
      </motion.div>

      {/* Timer Grid */}
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5">
        {timeBoxes.map((box, index) => {
          const isPink = box.color === 'pink';
          const borderColor = isPink ? 'border-squid-pink/40' : 'border-squid-teal/30';
          const shadowColor = isPink ? 'shadow-[0_0_15px_rgba(255,0,91,0.15)]' : 'shadow-[0_0_15px_rgba(0,191,165,0.1)]';
          const textColor = isPink ? 'text-squid-pink drop-shadow-[0_0_8px_rgba(255,0,91,0.8)]' : 'text-white drop-shadow-[0_0_8px_rgba(0,191,165,0.5)]';
          
          return (
            <React.Fragment key={index}>
              {/* The Timer Panel */}
              <div 
                className={`relative bg-[#050505] border ${borderColor} ${shadowColor} rounded-lg px-3 py-4 sm:px-5 sm:py-6 flex flex-col items-center min-w-[75px] sm:min-w-[100px] md:min-w-[120px] overflow-hidden group`}
              >
                {/* Scanline overlay for screen effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-10 pointer-events-none opacity-50"></div>
                
                {/* Ambient inner glow */}
                <div className={`absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${isPink ? 'bg-squid-pink' : 'bg-squid-teal'}`}></div>

                {/* Ticking Numbers */}
                <div className="relative h-10 sm:h-12 md:h-16 flex items-center justify-center overflow-hidden w-full z-20">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={`${box.label}-${box.value}`} // Changing key triggers the animation
                      variants={tickVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cyber font-bold tracking-widest ${textColor}`}
                    >
                      {String(box.value).padStart(2, '0')}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Labels */}
                <span className={`text-[10px] sm:text-xs md:text-sm mt-2 font-cyber tracking-[0.2em] relative z-20 ${isPink ? 'text-squid-pink/80' : 'text-gray-400'}`}>
                  {box.label}
                </span>
              </div>

              {/* Glowing Separator Dots (hidden on last item or mobile wrap) */}
              {!isMobile && (index < timeBoxes.length - 1) && (
                <div className="hidden sm:flex flex-col gap-2 md:gap-3 mx-1 md:mx-2">
                  <motion.div 
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-squid-teal shadow-[0_0_8px_rgba(0,191,165,0.8)]"
                  ></motion.div>
                  <motion.div 
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-squid-teal shadow-[0_0_8px_rgba(0,191,165,0.8)]"
                  ></motion.div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CountdownTimer;
