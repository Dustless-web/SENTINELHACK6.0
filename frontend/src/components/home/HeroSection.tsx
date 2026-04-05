import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/use-mobile';
import CountdownTimer from './CountdownTimer';
import AnimatedSquidBackground from './AnimatedSquidBackground';

// Fallback for testing, replace with your actual import
// import { REGISTRATION_FORM_URL } from '@/config/links';
const REGISTRATION_FORM_URL = "#register";

const HeroSection = () => {
  const [glitching, setGlitching] = useState(false);
  const isMobile = useIsMobile();
  const targetDate = new Date('2026-04-24T09:00:00');

  useEffect(() => {
    if (isMobile) return;
    
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 250);
    }, 4500);

    return () => clearInterval(glitchInterval);
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-8 overflow-hidden bg-[#020202]">
      
      {/* Background Layers - FIXED Z-INDEX */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* The radial gradient is now safely behind the animations at z-0 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(2,2,2,1)_100%)] z-0"></div>
        
        {/* The Animated Background is now sitting in front at z-10 with higher opacity */}
        {!isMobile && <AnimatedSquidBackground density="high" className="z-10 opacity-70" />}
      </div>
      
      <motion.div 
        className="container mx-auto px-4 z-20 mt-4 md:mt-8 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        {/* Header: Institution & Club */}
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center mb-6 md:mb-10 w-full max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 bg-black/40 p-4 md:p-6 rounded-2xl border border-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex-shrink-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              <img 
                src="/lovable-uploads/492532dc-e4ce-49f8-8c94-b287bed8e7d8.png" 
                alt="KSIT Logo" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="text-center">
              <h2 className="text-base sm:text-lg md:text-2xl font-cyber tracking-widest mb-1 text-white">
                K S INSTITUTE OF TECHNOLOGY
              </h2>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 mb-3 md:mb-4 uppercase tracking-[0.2em]">
                Department of Computer Science and Engineering
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-squid-pink/40 bg-squid-pink/10 shadow-[0_0_15px_rgba(255,0,91,0.2)]">
                <div className="w-2 h-2 rounded-full bg-squid-pink animate-pulse"></div>
                <p className="text-xs sm:text-sm md:text-base text-squid-pink font-cyber tracking-widest">
                  FIREFOX CLUB PRESENTS
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sentinel Hack Main Logo PNG */}
        <motion.div variants={itemVariants} className="w-full max-w-[120px] sm:max-w-[160px] md:max-w-[200px] mx-auto mb-6 drop-shadow-[0_0_20px_rgba(255,0,91,0.4)]">
          <img 
            src="/lovable-uploads/4a4281f1-17f9-45e0-ad93-43017c48b04d.png" 
            alt="Sentinel Hack 6.0" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Main Typography & Details */}
        <div className="flex flex-col items-center text-center w-full max-w-5xl">
          
          <motion.div variants={itemVariants} className="mb-6 md:mb-8 relative w-full">
            <h1 
              className={`text-center text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-cyber mb-2 md:mb-4 leading-[0.9] tracking-wider relative z-10 ${glitching ? 'glitch' : ''}`}
              data-text="SENTINEL HACK 6.0"
            >
              <span className="text-squid-pink drop-shadow-[0_0_15px_rgba(255,0,91,0.5)]">SENTINEL</span> 
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"> HACK</span> 
              <span className="text-squid-teal drop-shadow-[0_0_15px_rgba(0,191,165,0.5)]"> 6.0</span>
            </h1>
            
            <p className="text-center text-xs sm:text-sm md:text-lg max-w-2xl mx-auto mt-4 text-gray-300 px-2 uppercase tracking-[0.2em] font-light">
              24-Hour State-Level Hackathon <br className="sm:hidden" /> <span className="hidden sm:inline">|</span> Only the strongest code will win
            </p>
          </motion.div>

          {/* Jackpot UI */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative overflow-hidden bg-black/60 backdrop-blur-md border border-squid-pink/50 px-8 py-4 md:px-12 md:py-6 rounded-xl shadow-[0_0_30px_rgba(255,0,91,0.2)] group">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,91,0.1)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none"></div>
              <span className="relative z-10 text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-[0.3em] font-bold block mb-1">Total Prize Pool</span>
              <p className="relative z-10 text-3xl sm:text-5xl md:text-6xl font-cyber text-squid-pink drop-shadow-[0_0_10px_rgba(255,0,91,0.8)] group-hover:scale-105 transition-transform duration-500">
                1Lakh
              </p>
            </div>
          </motion.div>

          {/* Countdown Area */}
          <motion.div variants={itemVariants} className="w-full mb-10">
            <div className="flex items-center justify-center gap-4 mb-4 opacity-50">
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-squid-teal"></div>
              <p className="text-xs md:text-sm text-squid-teal uppercase tracking-[0.3em] font-bold">Registration Closes In</p>
              <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-squid-teal"></div>
            </div>
            <CountdownTimer targetDate={targetDate} />
          </motion.div>
          
          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 md:gap-6 mt-2 w-full sm:w-auto px-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCF9SGlPBZCZ8rTXKwjvAXHV14BBcKWy16FSkqST61GADn3Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden w-full sm:w-auto font-cyber text-lg md:text-xl font-bold tracking-[0.15em] uppercase text-[#050505] bg-squid-pink px-10 py-4 md:px-12 md:py-5 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,91,0.6)] rounded-sm text-center"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></span>
              <span className="relative z-10">REGISTER NOW</span>
            </a>
            
            <button 
              onClick={() => scrollToSection('tracks')}
              className="relative overflow-hidden w-full sm:w-auto font-cyber text-lg md:text-xl tracking-[0.15em] uppercase text-white border-2 border-white/20 bg-black/50 backdrop-blur-sm px-10 py-4 md:px-12 md:py-5 group transition-all duration-300 hover:border-squid-teal hover:text-squid-teal hover:shadow-[0_0_20px_rgba(0,191,165,0.3)] rounded-sm text-center"
            >
              <span className="absolute inset-0 w-full h-[2px] bg-squid-teal bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">EXPLORE TRACKS</span>
            </button>
          </motion.div>
          

        </div>
      </motion.div>
      
    </section>
  );
};

export default HeroSection;