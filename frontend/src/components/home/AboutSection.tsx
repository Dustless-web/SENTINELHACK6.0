
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[2%] w-14 h-14 md:w-20 md:h-20 border-3 border-squid-teal/25 rounded-full squid-shape-drift-right squid-shape-pulse"></div>
        <div className="absolute bottom-[25%] right-[4%] squid-shape-float squid-shape-pulse" style={{animationDelay: '1.5s'}}>
          <div className="w-0 h-0 border-l-[18px] border-r-[18px] border-b-[31px] md:border-l-[25px] md:border-r-[25px] md:border-b-[43px] border-l-transparent border-r-transparent border-b-squid-pink/20"></div>
        </div>
        <div className="absolute top-[60%] right-[8%] w-12 h-12 md:w-16 md:h-16 border-2 border-squid-teal/20 squid-shape-spin-reverse squid-shape-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute bottom-[10%] left-[6%] w-10 h-10 md:w-14 md:h-14 border-2 border-squid-pink/25 rounded-full squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '3.5s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-3 sm:mb-4 md:mb-6">
              ABOUT <span className="neon-text-pink">SENTINEL HACK 6.0</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-6">
              Sentinel Hack 6.0 is a premier 24-hour state level hackathon designed to bring together the brightest minds
              and innovative thinkers. This event offers participants
              the chance to collaborate, create, and solve real-world challenges through technology.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-4 md:mb-6">
              With mentorship from industry experts, workshops on cutting-edge technologies, and 
              opportunities to network with tech leaders, Sentinel Hack 6.0 is the perfect platform to showcase
              your skills and push the boundaries of what's possible. Let the games begin!
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-6 md:mt-8">
              <div className="squid-card p-2 sm:p-3 md:p-4 text-center border border-squid-pink/30">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber neon-text-teal mb-0.5 md:mb-1">500+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">PARTICIPANTS</div>
              </div>
              <div className="squid-card p-2 sm:p-3 md:p-4 text-center border border-squid-pink/30">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber neon-text-pink mb-0.5 md:mb-1">24</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">HOURS</div>
              </div>
              <div className="squid-card p-2 sm:p-3 md:p-4 text-center border border-squid-pink/30">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-cyber neon-text-teal mb-0.5 md:mb-1">₹50K+</div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400">PRIZES</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="squid-card p-4 md:p-6 border border-squid-pink/30 rounded-lg mt-6 lg:mt-0"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4 sm:mb-6">
              <div className="w-full h-full bg-black/50 flex items-center justify-center rounded-lg border border-squid-teal/30">
                <div className="text-center p-4">
                  {/* Squid Game Shapes */}
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-10 h-10 border-3 border-squid-pink rounded-full"></div>
                    <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
                    <div className="w-10 h-10 border-3 border-squid-pink rotate-45"></div>
                  </div>
                  <span className="text-lg sm:text-xl md:text-2xl font-cyber neon-text-pink">SENTINEL HACK</span>
                  <p className="text-xs sm:text-sm md:text-base mt-2 text-gray-300">
                    Details coming soon
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-squid-pink flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-base sm:text-lg md:text-xl">📅</span>
                </div>
                <div>
                  <h3 className="font-cyber text-sm sm:text-base md:text-lg">Date & Time</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">To be announced</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-squid-teal flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-base sm:text-lg md:text-xl">📍</span>
                </div>
                <div>
                  <a href="https://maps.app.goo.gl/bWyLk1W3xV9Wxv438" target="_blank" rel="noopener noreferrer" className="underline text-squid-teal hover:text-squid-teal/80 transition">
                  <h3 className="font-cyber text-sm sm:text-base md:text-lg">Venue</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">KSIT Campus, Bengaluru</p>
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-squid-pink flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-base sm:text-lg md:text-xl">👥</span>
                </div>
                <div>
                  <h3 className="font-cyber text-sm sm:text-base md:text-lg">Team Size</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">2-4 members per team</p>
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
