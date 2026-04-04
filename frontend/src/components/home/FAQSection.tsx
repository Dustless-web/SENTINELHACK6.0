
import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
          className="underline text-squid-teal hover:text-squid-teal/80 transition"
        >
          Click here for the map.
        </a>{" "}
        Don't be late - the giant doll might be watching!
      </>
    ),
        icon: <MapPin className="h-4 w-4 text-squid-teal" />
  },
  {
    question: 'How much will it cost?',
    answer: "The participation cost is ₹250 per head. Remember, in this game, the real prize is the innovation you build - and the bragging rights!",
    icon: <DollarSign className="h-4 w-4 text-squid-teal" />
  },
  {
    question: 'Duration?',
    answer: "You will have 24 hours to build your product - just like the players in the game who had to survive against all odds. A detailed schedule will be released closer to the event. Stay alert!",
    icon: <Clock className="h-4 w-4 text-squid-teal" />
  },
  {
    question: 'Food?',
    answer: "We will provide free grub to keep you hacking for 24 hours straight. There will also be stalls for your convenience. Because even players need energy to survive the games!",
    icon: <Coffee className="h-4 w-4 text-squid-teal" />
  },
  {
    question: 'How do teams work?',
    answer: "Teams can have 2-4 members. Cross-college teams are allowed - just like how players from different backgrounds had to work together. Choose your allies wisely!",
    icon: <Users className="h-4 w-4 text-squid-teal" />
  },
  {
    question: 'How does registration work?',
    answer: "Registration is now open! Click the 'Register Now' button and fill out the Google Form. Remember, spots are limited - don't get eliminated before the games even begin!",
    icon: <ClipboardCheck className="h-4 w-4 text-squid-teal" />
  },
  {
    question: 'What if this is my first hackathon?',
    answer: "Don't worry – there will be mentors to help you navigate the challenges. Plus, we have fun surprises for newcomers. Just like the players who started with nothing and became legends!",
    icon: <HelpCircle className="h-4 w-4 text-squid-teal" />
  },
  {
    question: 'What should I bring?',
    answer: "Bring your college ID, laptop, charger, and spike busters. Think of it as your survival kit for the 24-hour challenge. Leave your comfort zone behind!",
    icon: <Laptop className="h-4 w-4 text-squid-teal" />
  },
  {
    question: 'Anything else?',
    answer: "Feel free to email us at sentinelhack@ksit.edu.in or reach out on Instagram if you have any questions. Remember: In this game, collaboration is key - but only the best ideas survive!",
    icon: <MessageCircle className="h-4 w-4 text-squid-teal" />
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Shapes */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[12%] left-[5%] w-14 h-14 md:w-20 md:h-20 border-3 border-squid-teal/20 rounded-full"></div>
          <div className="absolute bottom-[20%] right-[6%]">
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] md:border-l-[28px] md:border-r-[28px] md:border-b-[48px] border-l-transparent border-r-transparent border-b-squid-pink/20"></div>
          </div>
          <div className="absolute top-[50%] right-[3%] w-12 h-12 md:w-16 md:h-16 border-2 border-squid-teal/25"></div>
          <div className="absolute bottom-[40%] left-[4%] w-10 h-10 md:w-14 md:h-14 border-2 border-squid-pink/20 rounded-full"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10 squid-section-frame">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber mb-3 sm:mb-4 md:mb-6">
            FREQUENTLY <span className="neon-text-teal">ASKED QUESTIONS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            Everything you need to know about Sentinel Hack 6.0. Can't find the answer you're looking for? Contact our team.
          </p>
          
          {/* Squid Game Shapes */}
          <div className="squid-symbol-divider" aria-hidden="true">
            <div className="w-4 h-4 border-2 border-squid-pink rounded-full"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
            <div className="w-4 h-4 border-2 border-squid-pink rotate-45"></div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left squid-card p-3 sm:p-4 md:p-5 rounded-lg border ${
                  activeIndex === index ? 'border-squid-pink' : 'border-squid-pink/30'
                } transition-all duration-300`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    {faq.icon}
                    <h3 className="font-cyber text-sm sm:text-base md:text-lg pr-3">{faq.question}</h3>
                  </div>
                  <ChevronDown 
                    className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-transform ${
                      activeIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </div>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 sm:mt-4 text-gray-300 text-xs sm:text-sm md:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
