
import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
        <div className="cyber-grid opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Squid Game Shapes */}
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="w-12 h-12 border-3 border-squid-pink rounded-full"></div>
            <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[31px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
            <div className="w-12 h-12 border-3 border-squid-pink rotate-45"></div>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-cyber mb-3 sm:mb-4 md:mb-6 glitch" data-text="LET THE GAMES BEGIN!">
            LET THE <span className="neon-text-pink">GAMES</span> BEGIN!
          </h2>
          <p className="text-sm sm:text-base md:text-xl mb-4 sm:mb-6 md:mb-10 text-gray-300 px-2">
            Join hundreds of innovators at Sentinel Hack 6.0 and be part of a transformative tech experience. Are you ready to play?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <span 
              className="font-cyber bg-squid-pink/80 px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded clip-slant shadow-neon-pink text-sm sm:text-base md:text-lg uppercase tracking-wider cursor-default"
            >
              Registration Starts Soon
            </span>
            <a 
              href="mailto:sentinelhack@ksit.edu.in" 
              className="font-cyber border border-squid-teal px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4 rounded clip-slant hover:shadow-neon-teal transition-all duration-300 text-sm sm:text-base md:text-lg uppercase tracking-wider"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Squid Game elements */}
      <div className="absolute left-0 top-1/4 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 squid-shape-float squid-shape-pulse">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-squid-pink">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="8"/>
        </svg>
      </div>
      
      <div className="absolute right-0 bottom-1/4 w-20 sm:w-32 md:w-40 h-20 sm:h-32 md:h-40 squid-shape-drift-right squid-shape-pulse" style={{animationDelay: '1s'}}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-squid-teal">
          <polygon points="100,20 180,180 20,180" fill="none" stroke="currentColor" strokeWidth="8"/>
        </svg>
      </div>
      
      <div className="absolute left-1/4 bottom-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 squid-shape-spin squid-shape-pulse" style={{animationDelay: '2s'}}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-squid-pink">
          <rect x="30" y="30" width="140" height="140" fill="none" stroke="currentColor" strokeWidth="8"/>
        </svg>
      </div>
      
      <div className="absolute right-1/4 top-10 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '3s'}}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-squid-teal">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="6"/>
        </svg>
      </div>
    </section>
  );
};

export default CtaSection;
