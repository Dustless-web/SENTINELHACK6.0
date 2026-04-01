
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const sponsors = [
  { name: 'TechGiant', level: 'Platinum', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'QuantumSoft', level: 'Gold', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'CyberSystems', level: 'Gold', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'Datarithm', level: 'Silver', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'InnovateLabs', level: 'Silver', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'NexGen', level: 'Bronze', image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'ByteCraft', level: 'Bronze', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&auto=format&fit=crop&q=80' },
  { name: 'CloudPeak', level: 'Bronze', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&auto=format&fit=crop&q=80' },
];

const SponsorsSection = () => {
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
      
      <div className="container mx-auto px-4 relative z-10">
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
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-4 h-4 border-2 border-squid-pink rounded-full"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
            <div className="w-4 h-4 border-2 border-squid-pink rotate-45"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center rounded-lg overflow-hidden border border-squid-pink/30 hover:border-squid-pink/60 transition-all duration-300"
            >
              <Card className="w-full h-full bg-transparent border-0">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center">
                    <div className="w-full h-16 sm:h-20 md:h-24 mb-2 bg-black/20 overflow-hidden">
                      <img 
                        src={sponsor.image} 
                        alt={`${sponsor.name} logo`} 
                        className="w-full h-full object-cover object-center" 
                      />
                    </div>
                    <div className="p-3 text-center">
                      <span className="text-sm sm:text-base md:text-xl font-cyber">{sponsor.name}</span>
                      <span className="block text-xs mt-1 md:mt-2 text-gray-400">{sponsor.level} Sponsor</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-6 sm:mt-8 md:mt-16"
        >
          <a 
            href="https://forms.google.com/sponsor-sentinel-hack" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-cyber inline-flex items-center border border-squid-pink px-4 py-2 sm:px-6 sm:py-3 rounded hover:shadow-neon-pink transition-all duration-300 text-xs sm:text-sm md:text-base"
          >
            Become a Sponsor
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3 w-3 sm:h-4 sm:w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
