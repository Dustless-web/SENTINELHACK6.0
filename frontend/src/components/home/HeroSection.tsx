
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
    // Create random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 z-0 cyber-grid opacity-35"></div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.86))]"></div>
      
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-20 h-20 md:w-28 md:h-28 border-4 border-squid-pink/45 rounded-full squid-shape-float squid-shape-pulse"></div>
        <div className="absolute top-[62%] left-[8%] w-12 h-12 md:w-16 md:h-16 border-3 border-squid-teal/35 rounded-full squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[35%] right-[3%] w-24 h-24 md:w-32 md:h-32 border-4 border-squid-pink/30 rounded-full squid-shape-drift-right squid-shape-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-[14%] right-[12%] w-14 h-14 md:w-20 md:h-20 border-3 border-squid-teal/30 rounded-full squid-shape-float squid-shape-pulse" style={{animationDelay: '3s'}}></div>

        <div className="absolute top-[25%] left-[15%] squid-shape-drift-left squid-shape-pulse" style={{animationDelay: '0.5s'}}>
          <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[42px] md:border-l-[36px] md:border-r-[36px] md:border-b-[62px] border-l-transparent border-r-transparent border-b-squid-pink/30"></div>
        </div>
        <div className="absolute bottom-[35%] left-[25%] squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '1.5s'}}>
          <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] md:border-l-[26px] md:border-r-[26px] md:border-b-[45px] border-l-transparent border-r-transparent border-b-squid-teal/25"></div>
        </div>
        <div className="absolute top-[50%] right-[8%] squid-shape-drift-right squid-shape-pulse" style={{animationDelay: '2.5s'}}>
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] md:border-l-[32px] md:border-r-[32px] md:border-b-[56px] border-l-transparent border-r-transparent border-b-squid-pink/35"></div>
        </div>

        <div className="absolute top-[45%] left-[3%] w-12 h-12 md:w-18 md:h-18 border-4 border-squid-pink/30 squid-shape-spin squid-shape-pulse"></div>
        <div className="absolute top-[15%] right-[15%] w-14 h-14 md:w-20 md:h-20 border-4 border-squid-teal/25 squid-shape-spin-reverse squid-shape-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-[25%] right-[5%] w-10 h-10 md:w-16 md:h-16 border-3 border-squid-pink/35 squid-shape-spin squid-shape-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-[10%] left-[20%] w-16 h-16 md:w-22 md:h-22 border-4 border-squid-teal/30 squid-shape-spin-reverse squid-shape-pulse" style={{animationDelay: '3s'}}></div>

        <div className="absolute top-[70%] right-[25%] w-8 h-8 md:w-12 md:h-12 border-2 border-squid-pink/20 rounded-full squid-shape-float squid-shape-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-[5%] left-[40%] w-10 h-10 md:w-14 md:h-14 border-2 border-squid-teal/20 squid-shape-drift-left squid-shape-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 mt-8">
        <div className="flex flex-col items-center justify-center mb-8 md:mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0">
              <img 
                src="/lovable-uploads/492532dc-e4ce-49f8-8c94-b287bed8e7d8.png" 
                alt="KSIT Logo" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-cyber tracking-wide mb-2 md:mb-2 text-white">
                K S INSTITUTE OF TECHNOLOGY
              </h2>
              <p className="text-xs sm:text-sm md:text-lg text-gray-300 mb-3 md:mb-2 uppercase tracking-wide">
                Department of Computer Science and Engineering
              </p>
              <p className="inline-block text-sm sm:text-base md:text-2xl text-squid-pink font-cyber tracking-wide px-3 sm:px-4 py-1 rounded-md border border-squid-pink/60 bg-black/50 shadow-[0_0_22px_rgba(255,31,127,0.35)]">
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="mb-5 sm:mb-8"
          >
            <h1 
              className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-cyber mb-3 sm:mb-4 leading-[0.9] tracking-wide ${glitching ? 'glitch' : ''} animate-scale-pulse`}
              data-text="SENTINEL HACK 6.0"
            >
              <span className="neon-text-pink">SENTINEL</span> 
              <span className="text-white"> HACK</span> 
              <span className="neon-text-teal">6.0</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-4 sm:mb-6 text-gray-300 px-2 uppercase tracking-[0.14em]">
              Welcome to the 24-hour ultimate hackathon showdown
            </p>
            <div className="squid-symbol-divider mb-4" aria-hidden="true"></div>

            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="inline-block squid-card border-2 border-squid-pink/50 px-6 py-3 rounded-lg mb-4 animate-border-pulse"
            >
              <span className="text-xs sm:text-sm text-gray-300 uppercase tracking-widest">Prize Pool</span>
              <p className="text-3xl sm:text-4xl md:text-5xl font-cyber neon-text-pink">₹1,00,000+</p>
            </motion.div>

            <p className="text-sm md:text-base text-gray-300 uppercase tracking-[0.22em]">Registration Closes In</p>
            <CountdownTimer targetDate={targetDate} />

            <div className="flex items-center justify-center gap-4 sm:gap-6 my-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-squid-pink rounded-full squid-shape-float squid-shape-pulse"></div>
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[21px] sm:border-l-[18px] sm:border-r-[18px] sm:border-b-[31px] border-l-transparent border-r-transparent border-b-squid-pink squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-squid-pink squid-shape-spin squid-shape-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
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
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <motion.button 
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 1.5 
          }}
          className="cursor-pointer bg-transparent border-none text-squid-pink hover:text-white transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ChevronDown size={30} strokeWidth={2.5} />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
