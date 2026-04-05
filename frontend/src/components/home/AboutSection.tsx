import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../../hooks/use-mobile';

const AboutSection = () => {
  const isMobile = useIsMobile();

  // Floating animation variants for background shapes
  const floatingAnimation = {
    y: ["-10px", "15px", "-10px"],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="about" className="py-8 sm:py-16 md:py-20 relative overflow-hidden bg-[#050505]">
      {/* Animated Background Shapes - Floating Parallax Effect */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={floatingAnimation}
            className="absolute top-[15%] left-[2%] w-14 h-14 md:w-20 md:h-20 border-[3px] border-squid-teal/20 rounded-full shadow-[0_0_15px_rgba(0,191,165,0.1)]"
          />
          <motion.div 
            animate={{ ...floatingAnimation, transition: { duration: 7, repeat: Infinity, delay: 1 } }}
            className="absolute bottom-[25%] right-[4%]"
          >
            <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[31px] md:border-l-[25px] md:border-r-[25px] md:border-b-[43px] border-l-transparent border-r-transparent border-b-squid-pink/20 drop-shadow-[0_0_10px_rgba(255,0,91,0.1)]"></div>
          </motion.div>
          <motion.div 
            animate={{ ...floatingAnimation, transition: { duration: 5, repeat: Infinity, delay: 2 } }}
            className="absolute top-[60%] right-[8%] w-12 h-12 md:w-16 md:h-16 border-[3px] border-squid-teal/15 shadow-[0_0_15px_rgba(0,191,165,0.1)]"
          />
          <motion.div 
            animate={{ ...floatingAnimation, transition: { duration: 8, repeat: Infinity, delay: 0.5 } }}
            className="absolute bottom-[10%] left-[6%] w-10 h-10 md:w-14 md:h-14 border-[3px] border-squid-pink/20 rounded-full shadow-[0_0_15px_rgba(255,0,91,0.1)]"
          />
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="squid-section-frame grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-cyber mb-4 md:mb-6 tracking-wide text-white">
              ABOUT <span className="text-squid-pink drop-shadow-[0_0_8px_rgba(255,0,91,0.6)]">SENTINEL HACK 6.0</span>
            </h2>
            <div className="squid-symbol-divider mb-6 w-24 h-1 bg-gradient-to-r from-squid-pink to-transparent" aria-hidden="true"></div>
            
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light">
              Sentinel Hack 6.0 is the ultimate 24-hour survival challenge where only the strongest coders will emerge victorious.
              This high-stakes hackathon pits participants against impossible deadlines, complex challenges, and the pressure of competition.
            </p>
            <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed font-light">
              With elite mentorship from industry veterans, tactical workshops on bleeding-edge technologies, and 
              networking opportunities with tech titans, Sentinel Hack 6.0 is your arena to prove your worth. Choose your weapon wisely—the games await.
            </p>
            
            {/* Thematic Stat Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {/* Circle Card */}
              <div className="relative group overflow-hidden bg-black/40 backdrop-blur-sm p-3 md:p-5 text-center border border-squid-teal/20 hover:border-squid-teal/80 hover:shadow-[0_0_20px_rgba(0,191,165,0.2)] transition-all duration-300 rounded-sm">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-squid-teal/10 rounded-full group-hover:border-squid-teal/20 transition-all"></div>
                <div className="relative z-10 text-xl sm:text-2xl md:text-4xl font-cyber text-squid-teal drop-shadow-[0_0_5px_rgba(0,191,165,0.8)] mb-1">250+</div>
                <div className="relative z-10 text-[10px] sm:text-xs md:text-sm text-gray-400 tracking-widest font-semibold">PARTICIPANTS</div>
              </div>
              
              {/* Triangle Card */}
              <div className="relative group overflow-hidden bg-black/40 backdrop-blur-sm p-3 md:p-5 text-center border border-squid-pink/20 hover:border-squid-pink/80 hover:shadow-[0_0_20px_rgba(255,0,91,0.2)] transition-all duration-300 rounded-sm">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-0 h-0 border-l-[25px] border-r-[25px] border-b-[43px] border-l-transparent border-r-transparent border-b-squid-pink/10 group-hover:border-b-squid-pink/20 transition-all"></div>
                <div className="relative z-10 text-xl sm:text-2xl md:text-4xl font-cyber text-squid-pink drop-shadow-[0_0_5px_rgba(255,0,91,0.8)] mb-1">24</div>
                <div className="relative z-10 text-[10px] sm:text-xs md:text-sm text-gray-400 tracking-widest font-semibold">HOURS</div>
              </div>
              
              {/* Square Card */}
              <div className="relative group overflow-hidden bg-black/40 backdrop-blur-sm p-3 md:p-5 text-center border border-squid-teal/20 hover:border-squid-teal/80 hover:shadow-[0_0_20px_rgba(0,191,165,0.2)] transition-all duration-300 rounded-sm">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border-2 border-squid-teal/10 group-hover:border-squid-teal/20 transition-all"></div>
                <div className="relative z-10 text-xl sm:text-2xl md:text-4xl font-cyber text-squid-teal drop-shadow-[0_0_5px_rgba(0,191,165,0.8)] mb-1">₹1L+</div>
                <div className="relative z-10 text-[10px] sm:text-xs md:text-sm text-gray-400 tracking-widest font-semibold">PRIZES</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Terminal Screen & Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-[#0a0a0a] p-5 md:p-8 border border-squid-pink/30 shadow-[0_0_30px_rgba(255,0,91,0.05)] rounded-xl mt-6 lg:mt-0 relative overflow-hidden"
          >
            {/* Front Man Screen Placeholder */}
            <div className="relative w-full aspect-video mb-8 bg-[#050505] rounded-lg border border-squid-teal/40 overflow-hidden group">
              <div className="absolute inset-0 bg-squid-teal/5 group-hover:bg-squid-teal/10 transition-colors duration-500"></div>
              <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
                {/* Glowing Symbols */}
                <div className="flex items-center justify-center gap-5 mb-4 opacity-80">
                  <div className="w-8 h-8 md:w-10 md:h-10 border-[3px] border-squid-pink rounded-full shadow-[0_0_10px_rgba(255,0,91,0.5)]"></div>
                  <div className="w-0 h-0 border-l-[14px] border-r-[14px] border-b-[24px] border-l-transparent border-r-transparent border-b-squid-pink drop-shadow-[0_0_10px_rgba(255,0,91,0.5)]"></div>
                  <div className="w-8 h-8 md:w-10 md:h-10 border-[3px] border-squid-pink shadow-[0_0_10px_rgba(255,0,91,0.5)]"></div>
                </div>
                <span className="text-xl md:text-2xl font-cyber text-white tracking-widest">SYSTEM <span className="text-squid-teal">ONLINE</span></span>
                <p className="text-xs md:text-sm mt-3 text-gray-500 font-mono animate-pulse">AWAITING_FURTHER_DIRECTIVES...</p>
              </div>
            </div>

            {/* Event Details List */}
            <div className="space-y-6">
              {/* Date */}
              <div className="flex items-start group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-squid-pink/10 border border-squid-pink/30 flex items-center justify-center mr-4 group-hover:bg-squid-pink/20 group-hover:border-squid-pink/60 transition-all">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-squid-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-cyber text-sm md:text-lg tracking-wide text-white mb-1">DATE & TIME</h3>
                  <p className="text-sm md:text-base text-gray-400">24th and 25th April 2026 <br className="sm:hidden" /> <span className="hidden sm:inline">|</span> 9:00 AM - 9:00 AM</p>
                </div>
              </div>
              
              {/* Venue */}
              <div className="flex items-start group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-squid-teal/10 border border-squid-teal/30 flex items-center justify-center mr-4 group-hover:bg-squid-teal/20 group-hover:border-squid-teal/60 transition-all">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-squid-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <a href="https://maps.app.goo.gl/bWyLk1W3xV9Wxv438" target="_blank" rel="noopener noreferrer" className="block group-hover:text-squid-teal transition-colors">
                    <h3 className="font-cyber text-sm md:text-lg tracking-wide text-white mb-1">VENUE</h3>
                    <p className="text-sm md:text-base text-gray-400 group-hover:text-squid-teal/80 transition-colors">KSIT Campus, Bengaluru</p>
                  </a>
                </div>
              </div>
              
              {/* Team Size */}
              <div className="flex items-start group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-squid-pink/10 border border-squid-pink/30 flex items-center justify-center mr-4 group-hover:bg-squid-pink/20 group-hover:border-squid-pink/60 transition-all">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-squid-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-cyber text-sm md:text-lg tracking-wide text-white mb-1">TEAM SIZE</h3>
                  <p className="text-sm md:text-base text-gray-400">2-4 members per team</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;