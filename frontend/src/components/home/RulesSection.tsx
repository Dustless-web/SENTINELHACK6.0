
import React from 'react';
import { motion } from 'framer-motion';
import { Ban, BookCheck, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const RulesSection = () => {
  const restrictions = [
    "Participants should bring their own laptops, chargers, spike busters, and any additional hardware needed.",
    "Participants need to bring their college ID cards.",
    "Team leaders will receive a Registration Confirmation Mail upon entry finalization.",
    "Snacks and Beverages will be provided.",
    "Registration fee details will be announced soon.",
    "Teams must have between 2 to 4 members."
  ];

  const regulations = [
    "Participants must follow instructions from the organizing committee.",
    "Once inside the venue, participants are not permitted to leave until the event ends.",
    "Downloading entire templates during the event will lead to disqualification.",
    "Judges' decisions are final.",
    "Teams cannot withdraw once registered.",
    "Terms and conditions apply."
  ];

  return (
    <section id="rules" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 cyber-grid opacity-30"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[8%] right-[10%] w-16 h-16 md:w-24 md:h-24 border-3 border-squid-pink/20 rounded-full squid-shape-float squid-shape-pulse"></div>
        <div className="absolute bottom-[15%] left-[5%] squid-shape-drift-right squid-shape-pulse" style={{animationDelay: '1s'}}>
          <div className="w-0 h-0 border-l-[22px] border-r-[22px] border-b-[38px] md:border-l-[30px] md:border-r-[30px] md:border-b-[52px] border-l-transparent border-r-transparent border-b-squid-teal/20"></div>
        </div>
        <div className="absolute top-[45%] left-[3%] w-14 h-14 md:w-18 md:h-18 border-3 border-squid-pink/25 squid-shape-spin squid-shape-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-[35%] right-[4%] w-12 h-12 md:w-16 md:h-16 border-2 border-squid-teal/25 rounded-full squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-4">
            <span className="neon-text-pink">RULES &</span> <span className="text-white">REGULATIONS</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Please review all guidelines carefully before participating
          </p>
          
          {/* Squid Game Shapes */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-4 h-4 border-2 border-squid-pink rounded-full"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
            <div className="w-4 h-4 border-2 border-squid-pink rotate-45"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/30 border border-squid-pink/30 p-6 rounded-lg squid-card"
          >
            <h3 className="text-2xl font-cyber font-bold mb-6 flex items-center gap-2 neon-text-pink">
              <Ban className="h-6 w-6" />
              Restrictions
            </h3>
            <div className="space-y-4">
              {restrictions.map((restriction, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-squid-pink shrink-0 mt-1" />
                  <p className="text-gray-300">{restriction}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black/30 border border-squid-teal/30 p-6 rounded-lg squid-card"
          >
            <h3 className="text-2xl font-cyber font-bold mb-6 flex items-center gap-2 neon-text-teal">
              <BookCheck className="h-6 w-6" />
              Regulations
            </h3>
            <div className="space-y-4">
              {regulations.map((regulation, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <AlertTriangle className="h-5 w-5 text-squid-teal shrink-0 mt-1" />
                  <p className="text-gray-300">{regulation}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-lg bg-black/30 border border-squid-pink/30 squid-card"
        >
          <h3 className="text-2xl font-cyber font-bold mb-4 text-center neon-text-pink">Note</h3>
          <p className="text-gray-300 text-center">
            Failure to comply with these rules may result in disqualification from the competition.
            The judges' decisions are final on all matters relating to the hackathon.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesSection;
