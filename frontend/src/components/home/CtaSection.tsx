import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/use-mobile';

const CtaSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax animation variants for background shapes
  const parallaxVariant = {
    animate: (custom: any) => ({
      y: [0, custom.yOffset, 0],
      rotate: [0, custom.rotation],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut",
      }
    })
  };

  return (
    <section id="contact" className="py-8 sm:py-20 md:py-32 relative overflow-hidden bg-[#020202] border-t border-squid-pink/20">
      
      {/* Immersive Background Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Core dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#0a0a0a] to-[#020202] z-10"></div>
        {/* Subtle cyber grid */}
        <div className="absolute inset-0 cyber-grid opacity-10 mix-blend-screen z-10"></div>
        {/* Threatening central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-squid-pink/10 rounded-full blur-[100px] z-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Squid Game Symbols - The Command */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-8 md:mb-12 opacity-90">
            {/* Circle */}
            <motion.svg whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 15px #FF005B)" }} className="w-12 h-12 md:w-16 md:h-16 text-squid-pink overflow-visible" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
            </motion.svg>
            {/* Triangle */}
            <motion.svg whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 15px #FF005B)" }} className="w-12 h-12 md:w-16 md:h-16 text-squid-pink overflow-visible" viewBox="0 0 100 100">
              <polygon points="50,10 95,90 5,90" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
            </motion.svg>
            {/* Square */}
            <motion.svg whileHover={{ scale: 1.1, filter: "drop-shadow(0 0 15px #FF005B)" }} className="w-12 h-12 md:w-16 md:h-16 text-squid-pink overflow-visible" viewBox="0 0 100 100">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="6" rx="4" />
            </motion.svg>
          </div>
          
          {/* Main Headline */}
          <div className="relative inline-block mb-6 md:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-cyber tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
              LET THE <span className="text-squid-pink drop-shadow-[0_0_20px_rgba(255,0,91,0.6)]">GAMES</span> BEGIN
            </h2>
            {/* Glitch sub-layer (Optional if you have custom glitch CSS, otherwise this adds a subtle echo) */}
            <h2 className="absolute top-0 left-[2px] -z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-cyber tracking-widest text-squid-teal opacity-50 blur-[1px]">
              LET THE GAMES BEGIN
            </h2>
            <h2 className="absolute top-0 -left-[2px] -z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-cyber tracking-widest text-squid-pink opacity-50 blur-[1px]">
              LET THE GAMES BEGIN
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-10 md:mb-14 text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Join hundreds of innovators at Sentinel Hack 6.0 and be part of a transformative tech experience. <br className="hidden md:block"/> Are you ready to play?
          </p>
          
          {/* Cinematic Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-8">
            {/* Primary Action */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeCF9SGlPBZCZ8rTXKwjvAXHV14BBcKWy16FSkqST61GADn3Q/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden w-full sm:w-auto font-cyber text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-[#050505] bg-squid-pink px-8 py-4 md:px-12 md:py-5 group transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,91,0.6)] rounded-sm"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                REGISTER NOW
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </a>
            
            {/* Secondary Action */}
            <a 
              href="mailto:sentinelhack@ksit.edu.in" 
              className="relative overflow-hidden w-full sm:w-auto font-cyber text-lg md:text-xl tracking-[0.15em] uppercase text-white border-2 border-white/20 bg-black/50 backdrop-blur-sm px-8 py-4 md:px-12 md:py-5 group transition-all duration-300 hover:border-squid-teal hover:text-squid-teal hover:shadow-[0_0_20px_rgba(0,191,165,0.3)] rounded-sm"
            >
              <span className="absolute inset-0 w-full h-[2px] bg-squid-teal bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative z-10">CONTACT US</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Animated Background Geometries */}
      {!isMobile && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Top Left Circle */}
          <motion.div 
            custom={{ yOffset: 40, rotation: 0, duration: 15 }}
            animate="animate"
            variants={parallaxVariant}
            className="absolute left-[5%] top-[15%] w-24 md:w-32 opacity-20 blur-[2px]"
          >
            <svg viewBox="0 0 100 100" className="text-squid-pink overflow-visible">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </motion.div>

          {/* Bottom Right Triangle */}
          <motion.div 
            custom={{ yOffset: -50, rotation: 360, duration: 25 }}
            animate="animate"
            variants={parallaxVariant}
            className="absolute right-[5%] bottom-[15%] w-32 md:w-48 opacity-10 blur-[1px]"
          >
            <svg viewBox="0 0 100 100" className="text-squid-teal overflow-visible">
              <polygon points="50,10 95,90 5,90" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
            </svg>
          </motion.div>

          {/* Bottom Left Square */}
          <motion.div 
            custom={{ yOffset: -30, rotation: -90, duration: 20 }}
            animate="animate"
            variants={parallaxVariant}
            className="absolute left-[20%] bottom-[10%] w-20 md:w-28 opacity-15"
          >
            <svg viewBox="0 0 100 100" className="text-squid-pink overflow-visible">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="4" rx="4"/>
            </svg>
          </motion.div>

          {/* Top Right Circle */}
          <motion.div 
            custom={{ yOffset: 60, rotation: 0, duration: 18 }}
            animate="animate"
            variants={parallaxVariant}
            className="absolute right-[20%] top-[10%] w-16 md:w-20 opacity-20 blur-[3px]"
          >
            <svg viewBox="0 0 100 100" className="text-squid-teal overflow-visible">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="5"/>
            </svg>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default CtaSection;