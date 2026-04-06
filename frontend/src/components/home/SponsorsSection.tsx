import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/use-mobile';

const SponsorsSection = () => {
  const isMobile = useIsMobile();
  
  // Data structure simplified to just represent visual assets
  const sponsors = [
    {
      name: "Suveechi technologies Private Limited",
      logo: "frontend/public/Uploads/suveechi.png",
      website: "#"
    }
  ];

  // Uniform visual physics for all cards
  const cardVisuals = {
    border: 'border-white/10 hover:border-squid-pink/70',
    bg: 'bg-[#050505]',
    shadow: 'hover:shadow-[0_0_30px_rgba(255,0,91,0.25)]'
  };

  // Parallax animation for background environment
  const floatingVariant = {
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
    <section id="sponsors" className="py-16 md:py-28 relative overflow-hidden bg-[#020202] border-t border-white/5">
      
      {/* Immersive Environment Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-20 mix-blend-screen"></div>
        {/* Deep background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-squid-pink/5 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Animated Background Shapes - Consistency across sections */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            custom={{ yOffset: 50, rotation: 60, duration: 18 }}
            animate="animate"
            variants={floatingVariant}
            className="absolute top-[20%] left-[8%] w-16 md:w-24 opacity-10"
          >
            <svg viewBox="0 0 100 100" className="text-squid-pink overflow-visible">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </motion.div>
          
          <motion.div 
            custom={{ yOffset: -60, rotation: -120, duration: 22 }}
            animate="animate"
            variants={floatingVariant}
            className="absolute bottom-[25%] right-[5%] w-24 md:w-36 opacity-10 blur-[1px]"
          >
            <svg viewBox="0 0 100 100" className="text-white overflow-visible">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3" rx="4"/>
            </svg>
          </motion.div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        
        {/* Standard Retained Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-cyber tracking-widest mb-4">
            OUR <span className="text-squid-pink drop-shadow-[0_0_15px_rgba(255,0,91,0.6)]">SPONSORS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 font-light tracking-wide leading-relaxed">
            These sponsors provide the critical resources fueling the 24-hour survival challenge. Their support makes the ultimate prize possible.
          </p>
          
          {/* Minimalist Divider */}
          <div className="flex items-center justify-center gap-3 mt-10 opacity-60">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-squid-pink"></div>
            <div className="w-2 h-2 border border-squid-pink rounded-full transform rotate-45"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-squid-pink"></div>
          </div>
        </motion.div>

        {/* Responsive, Aesthetic-First Asset Grid */}
        <div className="flex justify-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="w-full max-w-sm"
            >
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`block relative group h-full ${cardVisuals.bg} rounded-xl border ${cardVisuals.border} ${cardVisuals.shadow} transition-all duration-500 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]`}
              >
                {/* Visual Glare Sweep Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000 z-20"></div>
                
                {/* Asset Container with Internal Data Grid */}
                <div className="relative p-8 h-56 md:h-64 flex flex-col items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] overflow-hidden">
                  
                  {/* Internal ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent z-10 group-hover:from-squid-pink/5 transition-colors duration-500"></div>
                  
                  {/* The Logo: The Sole Focus */}
                  <img 
                    src={sponsor.logo} 
                    // Using standard textual name for accessibility/alt, not visual display
                    alt={`${sponsor.name} visual asset`} 
                    className="max-w-full max-h-32 md:max-h-40 object-contain relative z-20 filter brightness-90 contrast-125 group-hover:brightness-110 group-hover:scale-105 transition-all duration-500 ease-in-out mb-4"
                    loading="lazy"
                  />
                  
                  {/* Sponsor Name */}
                  <h3 className="text-center text-white font-semibold text-sm md:text-base tracking-wide relative z-20">
                    {sponsor.name}
                  </h3>
                  
                  {/* Data overlay element - Purely decorative */}
                  <div className="absolute bottom-2 right-3 font-code text-[8px] text-white/10 uppercase tracking-widest z-20">
                    Asset_Verified // ID: {index.toString().padStart(3, '0')}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
