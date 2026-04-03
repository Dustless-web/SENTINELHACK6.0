import React from 'react';
import { motion } from 'framer-motion';

const SponsorsSection = () => {
  // Sponsor data - replace with actual sponsor information
  const sponsors = [
    {
      name: "Samartha InfoSolutions Pvt. Ltd.",
      logo: "/lovable-uploads/samartha.png",
      tier: "Gold",
      website: "#"
    },
    
  ];

  const getTierColor = (tier: string) => {
    switch (tier.toLowerCase()) {
      case 'gold': return 'border-yellow-400/60 text-yellow-400';
      case 'silver': return 'border-gray-400/60 text-gray-400';
      case 'bronze': return 'border-orange-400/60 text-orange-400';
      default: return 'border-squid-teal/60 text-squid-teal';
    }
  };

  return (
    <section id="sponsors" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 cyber-grid opacity-10"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[8%] w-16 h-16 md:w-22 md:h-22 border-3 border-squid-pink/15 rounded-full squid-shape-float squid-shape-pulse"></div>
        <div className="absolute bottom-[18%] left-[4%] w-12 h-12 md:w-18 md:h-18 border-2 border-squid-teal/20 squid-shape-spin-reverse squid-shape-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[35%] left-[6%] squid-shape-drift-right squid-shape-pulse" style={{animationDelay: '2s'}}>
          <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[31px] md:border-l-[25px] md:border-r-[25px] md:border-b-[43px] border-l-transparent border-r-transparent border-b-squid-pink/15"></div>
        </div>
        <div className="absolute bottom-[30%] right-[5%] w-14 h-14 md:w-18 md:h-18 border-2 border-squid-teal/15 rounded-full squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 squid-section-frame">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-3 sm:mb-4 md:mb-6">
            OUR <span className="neon-text-pink">SPONSORS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            Sentinel Hack 6.0 is proudly supported by leading tech companies and organizations committed to fostering innovation.
          </p>
          
          {/* Squid Game Shapes */}
          <div className="squid-symbol-divider" aria-hidden="true">
            <div className="w-4 h-4 border-2 border-squid-pink rounded-full squid-shape-float squid-shape-pulse"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-squid-pink squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '0.3s'}}></div>
            <div className="w-4 h-4 border-2 border-squid-pink squid-shape-spin squid-shape-pulse" style={{animationDelay: '0.6s'}}></div>
          </div>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="flex justify-center">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="squid-card border-2 border-squid-pink/40 rounded-xl p-6 text-center animate-border-pulse card-hover-effect group max-w-md"
            >
              <a 
                href={sponsor.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="mb-4 flex justify-center">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="max-w-full max-h-32 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <h3 className="text-lg font-cyber text-white mb-2 group-hover:text-squid-pink transition-colors duration-300">
                  {sponsor.name}
                </h3>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
