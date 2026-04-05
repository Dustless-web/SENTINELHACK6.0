import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, DollarSign, Clock, Coffee, Users, ClipboardCheck, HelpCircle, Laptop, MessageCircle } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const faqs = [
  {
    question: 'When and Where?',
    answer: (
      <>
        Sentinel Hack 6.0 will take place at K.S Institute of Technology, 14, Kanakapura Main Road, Municipal Corporation Layout, Raghuvanahalli, Bengaluru, Karnataka 560109 on 24th and 25th April 2026 from 9:00AM to 9:00AM.{" "}
        <a
          href="https://maps.app.goo.gl/bWyLk1W3xV9Wxv438"
          target="_blank"
          rel="noopener noreferrer"
          className="text-squid-teal hover:text-squid-teal/80 underline decoration-squid-teal/50 underline-offset-4 transition-colors font-medium"
        >
          Click here for the map.
        </a>{" "}
        Don't be late - the giant doll might be watching!
      </>
    ),
    icon: <MapPin className="h-4 w-4 text-squid-teal" />,
    color: 'teal'
  },
  {
    question: 'How much will it cost?',
    answer: "The participation cost is ₹250 per head. Remember, in this game, the real prize is the innovation you build - and the bragging rights!",
    icon: <DollarSign className="h-4 w-4 text-squid-pink" />,
    color: 'pink'
  },
  {
    question: 'Duration?',
    answer: "You will have 24 hours to build your product - just like the players in the game who had to survive against all odds. A detailed schedule will be released closer to the event. Stay alert!",
    icon: <Clock className="h-4 w-4 text-squid-teal" />,
    color: 'teal'
  },
  {
    question: 'Food?',
    answer: "We will provide free grub to keep you hacking for 24 hours straight. There will also be stalls for your convenience. Because even players need energy to survive the games!",
    icon: <Coffee className="h-4 w-4 text-squid-pink" />,
    color: 'pink'
  },
  {
    question: 'How do teams work?',
    answer: "Teams can have 2-4 members. Cross-college teams are allowed - just like how players from different backgrounds had to work together. Choose your allies wisely!",
    icon: <Users className="h-4 w-4 text-squid-teal" />,
    color: 'teal'
  },
  {
    question: 'How does registration work?',
    answer: "Registration is now open! Click the 'Register Now' button and fill out the Google Form. Remember, spots are limited - don't get eliminated before the games even begin!",
    icon: <ClipboardCheck className="h-4 w-4 text-squid-pink" />,
    color: 'pink'
  },
  {
    question: 'What if this is my first hackathon?',
    answer: "Don't worry – there will be mentors to help you navigate the challenges. Plus, we have fun surprises for newcomers. Just like the players who started with nothing and became legends!",
    icon: <HelpCircle className="h-4 w-4 text-squid-teal" />,
    color: 'teal'
  },
  {
    question: 'What should I bring?',
    answer: "Bring your college ID, laptop, charger, and spike busters. Think of it as your survival kit for the 24-hour challenge. Leave your comfort zone behind!",
    icon: <Laptop className="h-4 w-4 text-squid-pink" />,
    color: 'pink'
  },
  {
    question: 'Anything else?',
    answer: "Feel free to email us at sentinelhack@ksit.edu.in or reach out on Instagram if you have any questions. Remember: In this game, collaboration is key - but only the best ideas survive!",
    icon: <MessageCircle className="h-4 w-4 text-squid-teal" />,
    color: 'teal'
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Parallax animation variants for background shapes
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
    <section id="faqs" className="py-8 md:py-24 relative overflow-hidden bg-[#020202]">
      
      {/* Animated Background Shapes */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Subtle Grid */}
          <div className="absolute inset-0 cyber-grid opacity-[0.03] mix-blend-screen"></div>
          
          <motion.div 
            custom={{ yOffset: 30, rotation: 15, duration: 12 }}
            animate="animate"
            variants={floatingVariant}
            className="absolute top-[12%] left-[5%] w-16 md:w-24 opacity-10"
          >
            <svg viewBox="0 0 100 100" className="text-squid-teal overflow-visible">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="4"/>
            </svg>
          </motion.div>
          
          <motion.div 
            custom={{ yOffset: -40, rotation: -20, duration: 15 }}
            animate="animate"
            variants={floatingVariant}
            className="absolute bottom-[20%] right-[6%] w-20 md:w-32 opacity-10 blur-[2px]"
          >
            <svg viewBox="0 0 100 100" className="text-squid-pink overflow-visible">
              <polygon points="50,10 95,90 5,90" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cyber mb-4 md:mb-6 tracking-wide text-white">
            SYSTEM <span className="text-squid-teal drop-shadow-[0_0_15px_rgba(0,191,165,0.5)]">DATABASE</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 font-light">
            Accessing frequently asked questions for Sentinel Hack 6.0. <br className="hidden md:block" />
            Can't find your directive? Contact the administrators.
          </p>
          
          {/* Minimalist Divider */}
          <div className="flex items-center justify-center gap-3 mt-8 opacity-50">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-squid-teal"></div>
            <div className="w-2 h-2 border border-squid-teal rounded-full transform rotate-45"></div>
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-squid-teal"></div>
          </div>
        </motion.div>

        <div className="space-y-2 md:space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            const isPink = faq.color === 'pink';
            const activeBorder = isPink ? 'border-squid-pink shadow-[0_0_15px_rgba(255,0,91,0.15)]' : 'border-squid-teal shadow-[0_0_15px_rgba(0,191,165,0.1)]';
            const iconBg = isPink ? 'bg-squid-pink/10 border-squid-pink/30' : 'bg-squid-teal/10 border-squid-teal/30';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div 
                  className={`group relative overflow-hidden bg-[#050505] rounded-lg border transition-all duration-300 ${
                    isActive ? activeBorder : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  {/* Subtle inner gradient when active */}
                  <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${
                    isActive ? 'opacity-100' : ''
                  } ${isPink ? 'bg-gradient-to-b from-squid-pink/5 to-transparent' : 'bg-gradient-to-b from-squid-teal/5 to-transparent'}`}></div>

                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-3 md:p-5 relative z-10 flex justify-between items-center focus:outline-none"
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center space-x-4">
                      {/* Geometric Icon Container */}
                      <div className={`w-8 h-8 md:w-10 md:h-10 rounded flex items-center justify-center border flex-shrink-0 transition-colors duration-300 ${iconBg} ${isActive ? (isPink ? 'border-squid-pink' : 'border-squid-teal') : ''}`}>
                        {faq.icon}
                      </div>
                      <h3 className={`font-cyber tracking-wide text-sm sm:text-base md:text-lg pr-4 transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    
                    {/* Animated Chevron */}
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full border transition-all duration-300 flex-shrink-0 ${
                      isActive 
                        ? (isPink ? 'border-squid-pink bg-squid-pink/20 text-squid-pink' : 'border-squid-teal bg-squid-teal/20 text-squid-teal') 
                        : 'border-transparent text-gray-500 group-hover:text-gray-300 group-hover:border-white/20'
                    }`}>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isActive ? 'transform rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {/* Buttery Smooth Height Animation */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="p-3 md:p-5 pt-0 md:pt-0 text-gray-400 text-sm md:text-base leading-relaxed pl-12 md:pl-18 border-t border-white/5 mx-3 md:mx-5 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;