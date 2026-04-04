
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';
import CountdownTimer from './CountdownTimer';
import { REGISTRATION_FORM_URL } from '@/config/links';

const HeroSection = () => {
  const [glitching, setGlitching] = useState(false);
  const isMobile = useIsMobile();
  const targetDate = new Date('2026-04-24T09:00:00');

  useEffect(() => {
    // Only create glitch effect on desktop
    if (isMobile) return;
    
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, [isMobile]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.86))]"></div>
      
      {!isMobile && (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-20 h-20 md:w-28 md:h-28 border-4 border-squid-pink/45 rounded-full"></div>
        <div className="absolute top-[62%] left-[8%] w-12 h-12 md:w-16 md:h-16 border-3 border-squid-teal/35 rounded-full"></div>
        <div className="absolute top-[35%] right-[3%] w-24 h-24 md:w-32 md:h-32 border-4 border-squid-pink/30 rounded-full"></div>
        <div className="absolute bottom-[14%] right-[12%] w-14 h-14 md:w-20 md:h-20 border-3 border-squid-teal/30 rounded-full"></div>

        <div className="absolute top-[25%] left-[15%]">
          <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[42px] md:border-l-[36px] md:border-r-[36px] md:border-b-[62px] border-l-transparent border-r-transparent border-b-squid-pink/30"></div>
        </div>
        <div className="absolute bottom-[35%] left-[25%]">
          <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] md:border-l-[26px] md:border-r-[26px] md:border-b-[45px] border-l-transparent border-r-transparent border-b-squid-teal/25"></div>
        </div>
      </div>
      )}
      
      <div className="container mx-auto px-4 z-10 mt-8">
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0">
              <img 
                src="/lovable-uploads/492532dc-e4ce-49f8-8c94-b287bed8e7d8.png" 
                alt="KSIT Logo" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-cyber tracking-wide mb-2 md:mb-2 text-white">
                K S INSTITUTE OF TECHNOLOGY
              </h2>
              <p className="text-xs sm:text-sm md:text-lg text-gray-300 mb-3 md:mb-2 uppercase tracking-wide">
                Department of Computer Science and Engineering
              </p>
              <p className={`inline-block text-sm sm:text-base md:text-2xl text-squid-pink font-cyber tracking-wide px-3 sm:px-4 py-1 rounded-md border border-squid-pink/60 bg-black/50 ${!isMobile ? 'shadow-[0_0_22px_rgba(255,31,127,0.35)]' : ''}`}>
                FIREFOX CLUB PRESENTS
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[220px] mx-auto mb-5 sm:mb-7">
          <img 
            src="/lovable-uploads/4a4281f1-17f9-45e0-ad93-43017c48b04d.png" 
            alt="Sentinel Hack 6.0" 
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <div
            className="mb-5 sm:mb-8"
          >
            <h1 
              className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cyber mb-3 sm:mb-4 leading-[0.9] tracking-wide ${glitching ? 'glitch' : ''}`}
              data-text="SENTINEL HACK 6.0"
            >
              <span className="neon-text-pink">SENTINEL</span> 
              <span className="text-white"> HACK</span> 
              <span className="neon-text-teal">6.0</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-4 sm:mb-6 text-gray-300 px-2 uppercase tracking-[0.14em]">
              24-HOUR SURVIVAL HACKATHON - ONLY THE STRONGEST CODE WILL WIN
            </p>
            <div className="squid-symbol-divider mb-4" aria-hidden="true"></div>

            <div
              className="inline-block squid-card border-2 border-squid-pink/50 px-6 py-3 rounded-lg mb-4"
            >
              <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest">Prize Pool</span>
              <p className="text-3xl sm:text-4xl md:text-5xl font-cyber neon-text-pink">₹1,00,000+</p>
            </div>

            <p className="text-sm md:text-base text-gray-300 uppercase tracking-[0.22em]">Registration Closes In</p>
            <CountdownTimer targetDate={targetDate} />

            {!isMobile && (
            <div className="flex items-center justify-center gap-4 sm:gap-6 my-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-squid-pink rounded-full"></div>
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[21px] sm:border-l-[18px] sm:border-r-[18px] sm:border-b-[31px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-squid-pink rotate-45"></div>
            </div>
            )}
          </div>
          
          <div
            className="flex flex-col sm:flex-row gap-4 mt-5 sm:mt-8"
          >
            <a
              href={REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="squid-button-primary px-6 sm:px-8 py-3 text-xl sm:text-2xl animate-gradient"
              style={{ backgroundSize: '200% 200%' }}
            >
              Register Now
            </a>
            <button 
              onClick={() => scrollToSection('tracks')}
              className="squid-button-outline px-6 sm:px-8 py-3 text-xl sm:text-2xl"
            >
              Explore Tracks
            </button>
          </div>
          
          <p
            className={`text-base md:text-lg font-bold neon-text-teal mt-6 px-4 py-2 border-2 border-squid-teal rounded-lg bg-squid-teal/10 squid-game-alert ${!isMobile ? 'shadow-[0_0_15px_rgba(0,255,200,0.3)]' : ''}`}
          >
            ⚠️ READ THE RULES CAREFULLY - VIOLATIONS LEAD TO ELIMINATION
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <button 
          onClick={() => scrollToSection('about')}
          className="cursor-pointer bg-transparent border-none text-squid-pink hover:text-white transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
