
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

// Squid Game themed hackathon
const HeroSection = () => {
  const [glitching, setGlitching] = useState(false);
  const isMobile = useIsMobile();

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
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-10">
      <div className="absolute inset-0 z-0 cyber-grid opacity-30"></div>
      
      {/* Animated Squid Game Shapes Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div className="absolute top-[10%] left-[5%] w-16 h-16 md:w-24 md:h-24 border-4 border-squid-pink/40 rounded-full squid-shape-float squid-shape-pulse"></div>
        <div className="absolute top-[60%] left-[8%] w-12 h-12 md:w-16 md:h-16 border-3 border-squid-teal/30 rounded-full squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-[30%] right-[3%] w-20 h-20 md:w-28 md:h-28 border-4 border-squid-pink/25 rounded-full squid-shape-drift-right squid-shape-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-[15%] right-[12%] w-14 h-14 md:w-20 md:h-20 border-3 border-squid-teal/35 rounded-full squid-shape-float squid-shape-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-[25%] left-[15%] squid-shape-drift-left squid-shape-pulse" style={{animationDelay: '0.5s'}}>
          <div className="w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43px] md:border-l-[40px] md:border-r-[40px] md:border-b-[69px] border-l-transparent border-r-transparent border-b-squid-pink/30"></div>
        </div>
        <div className="absolute bottom-[35%] left-[25%] squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '1.5s'}}>
          <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[31px] md:border-l-[30px] md:border-r-[30px] md:border-b-[52px] border-l-transparent border-r-transparent border-b-squid-teal/25"></div>
        </div>
        <div className="absolute top-[50%] right-[8%] squid-shape-drift-right squid-shape-pulse" style={{animationDelay: '2.5s'}}>
          <div className="w-0 h-0 border-l-[22px] border-r-[22px] border-b-[38px] md:border-l-[35px] md:border-r-[35px] md:border-b-[60px] border-l-transparent border-r-transparent border-b-squid-pink/35"></div>
        </div>
        
        {/* Floating Squares */}
        <div className="absolute top-[45%] left-[3%] w-12 h-12 md:w-18 md:h-18 border-4 border-squid-pink/30 squid-shape-spin squid-shape-pulse"></div>
        <div className="absolute top-[15%] right-[15%] w-14 h-14 md:w-20 md:h-20 border-4 border-squid-teal/25 squid-shape-spin-reverse squid-shape-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-[25%] right-[5%] w-10 h-10 md:w-16 md:h-16 border-3 border-squid-pink/35 squid-shape-spin squid-shape-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-[10%] left-[20%] w-16 h-16 md:w-22 md:h-22 border-4 border-squid-teal/30 squid-shape-spin-reverse squid-shape-pulse" style={{animationDelay: '3s'}}></div>
        
        {/* Additional ambient shapes */}
        <div className="absolute top-[70%] right-[25%] w-8 h-8 md:w-12 md:h-12 border-2 border-squid-pink/20 rounded-full squid-shape-float squid-shape-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-[5%] left-[40%] w-10 h-10 md:w-14 md:h-14 border-2 border-squid-teal/20 squid-shape-drift-left squid-shape-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 mt-12">
        {/* Institution header - Now centered */}
        <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
          <div className="flex flex-row items-center justify-center gap-4 md:gap-6 lg:gap-10">
            {/* Left logo (KSIT) - Updated with new image */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img 
                src="/lovable-uploads/492532dc-e4ce-49f8-8c94-b287bed8e7d8.png" 
                alt="KSIT Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Center text - Now properly centered */}
            <div className="text-center">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber font-bold mb-1 md:mb-2">
                K S INSTITUTE OF TECHNOLOGY
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-1 md:mb-2">
                Department of Computer Science and Engineering
              </p>
              <p className="text-base sm:text-lg md:text-xl text-squid-pink font-cyber">
                Firefox Club Presents
              </p>
            </div>
            
            {/* Right logo (25 years) */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <img 
                src="/lovable-uploads/92996f96-6f31-4d68-9605-95e799b79c7d.png" 
                alt="25 Years Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Sentinel Hack 6.0 Logo - Made smaller */}
        <div className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[220px] mx-auto mb-6 sm:mb-8">
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
            className="mb-6 sm:mb-8"
          >
            <h1 
              className={`text-3xl sm:text-5xl md:text-7xl font-cyber font-black mb-3 sm:mb-4 ${glitching ? 'glitch' : ''}`}
              data-text="SENTINEL HACK 6.0"
            >
              <span className="neon-text-pink">SENTINEL</span> 
              <span className="text-white"> HACK </span> 
              <span className="neon-text-teal">6.0</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-4 sm:mb-6 text-gray-300 px-2">
              24-hour state level hackathon.<br /> Let the games begin!
            </p>
            
            {/* Squid Game Shapes Decoration */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 my-6">
              <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-squid-pink rounded-full"></div>
              <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[21px] sm:border-l-[18px] sm:border-r-[18px] sm:border-b-[31px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 border-2 border-squid-pink rotate-45"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8"
          >
            <div 
              className="font-cyber bg-squid-pink/80 px-6 sm:px-8 py-3 rounded clip-slant shadow-neon-pink text-sm sm:text-lg uppercase tracking-wider cursor-default"
            >
              Registration Starts Soon
            </div>
            <button 
              onClick={() => scrollToSection('tracks')}
              className="font-cyber border border-squid-teal/50 px-6 sm:px-8 py-3 rounded clip-slant hover:shadow-neon-teal transition-all duration-300 text-sm sm:text-lg uppercase tracking-wider"
            >
              Explore Tracks
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
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
