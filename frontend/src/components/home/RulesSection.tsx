import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, TerminalSquare, ShieldX } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const RulesSection = () => {
  const isMobile = useIsMobile();
  
  const restrictions = [
    "Participants must bring their own laptops, chargers, extension boards/spike busters, and any additional hardware required for development.",
    "A valid college ID card is mandatory for entry and verification.",
    "Team leaders will receive a Registration Confirmation email once the team registration is successfully completed.",
    "Snacks and beverages will be provided during the event.",
    "Registration fee: 250/- per head.",
    "Each team must consist of a minimum of 2 and a maximum of 4 members."
  ];

  const regulations = [
    "Participants are required to strictly follow all instructions provided by the organizing committee.",
    "Participants are not allowed to leave the venue during the event duration unless permitted by the organizers.",
    "Use of pre-built templates or downloading complete project templates during the event is strictly prohibited and may lead to disqualification.",
    "All decisions made by the judging panel will be final and binding.",
    "Teams cannot withdraw from the competition once registration is confirmed.",
    "Any form of malpractice, plagiarism, or misconduct will result in immediate disqualification.",
    "Organizers reserve the right to modify rules or take necessary actions in unforeseen circumstances."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="rules" className="py-8 md:py-24 relative overflow-hidden bg-[#020202]">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-20 mix-blend-screen"></div>
        {/* Subtle center glow to draw the eye */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-squid-pink/5 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative max-w-6xl">
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-cyber tracking-widest mb-4">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">SYSTEM</span> <span className="text-squid-pink drop-shadow-[0_0_15px_rgba(255,0,91,0.6)]">DIRECTIVES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light tracking-wide">
            Accessing operational guidelines. All participants must comply.
          </p>
          
          {/* Minimalist Divider */}
          <div className="flex items-center justify-center gap-3 mt-8 opacity-60">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-squid-pink"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-squid-pink"></div>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10"
        >
          {/* Restrictions Panel */}
          <motion.div variants={itemVariants} className="relative group">
            {/* Ambient hover glow */}
            <div className="absolute -inset-[1px] bg-gradient-to-b from-squid-pink/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            
            <div className="relative h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-squid-pink/20 rounded-xl p-4 md:p-8 overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-squid-pink to-transparent opacity-50"></div>
              
              <h3 className="text-2xl md:text-3xl font-cyber font-bold mb-6 flex items-center gap-3 text-white tracking-wide">
                <TerminalSquare className="h-6 w-6 md:h-8 md:w-8 text-squid-pink drop-shadow-[0_0_8px_rgba(255,0,91,0.8)]" />
                RESTRICTIONS
              </h3>
              
              <div className="space-y-4">
                {restrictions.map((restriction, index) => (
                  <div key={index} className="flex gap-4 items-start group/item">
                    {/* Numbered Index */}
                    <div className="flex-shrink-0 font-cyber text-sm md:text-base text-squid-pink/60 group-hover/item:text-squid-pink transition-colors mt-0.5">
                      {String(index + 1).padStart(2, '0')}.
                    </div>
                    <p className="text-gray-400 group-hover/item:text-gray-200 transition-colors text-sm md:text-base leading-relaxed">
                      {restriction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regulations Panel */}
          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -inset-[1px] bg-gradient-to-b from-squid-teal/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            
            <div className="relative h-full bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-squid-teal/20 rounded-xl p-4 md:p-8 overflow-hidden">
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-squid-teal to-transparent opacity-50"></div>
              
              <h3 className="text-2xl md:text-3xl font-cyber font-bold mb-6 flex items-center gap-3 text-white tracking-wide">
                <ShieldAlert className="h-6 w-6 md:h-8 md:w-8 text-squid-teal drop-shadow-[0_0_8px_rgba(0,191,165,0.8)]" />
                REGULATIONS
              </h3>
              
              <div className="space-y-4">
                {regulations.map((regulation, index) => (
                  <div key={index} className="flex gap-4 items-start group/item">
                     {/* Numbered Index */}
                     <div className="flex-shrink-0 font-cyber text-sm md:text-base text-squid-teal/60 group-hover/item:text-squid-teal transition-colors mt-0.5">
                      {String(index + 1).padStart(2, '0')}.
                    </div>
                    <p className="text-gray-400 group-hover/item:text-gray-200 transition-colors text-sm md:text-base leading-relaxed">
                      {regulation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Elimination Warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 relative"
        >
          {/* Animated red pulse behind the warning */}
          <div className="absolute inset-0 bg-[#ff0000]/10 rounded-xl animate-pulse blur-xl"></div>
          
          <div className="relative p-6 md:p-8 rounded-xl bg-[#0a0202] border border-[#ff0000]/40 shadow-[0_0_30px_rgba(255,0,0,0.15)] flex flex-col items-center text-center">
            
            <ShieldX className="w-10 h-10 md:w-12 md:h-12 text-[#ff0000] mb-4 drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
            
            <h3 className="text-2xl md:text-3xl font-cyber font-bold mb-3 text-[#ff0000] tracking-[0.2em] uppercase">
              Critical Warning
            </h3>
            
            <p className="text-gray-300 text-sm md:text-base max-w-3xl leading-relaxed">
              Failure to comply with these directives will result in <span className="text-[#ff0000] font-bold border-b border-[#ff0000]/50 pb-0.5">IMMEDIATE ELIMINATION</span> from the competition. The Front Man's decisions are final and binding on all matters.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default RulesSection;