
import React from 'react';
import { motion } from 'framer-motion';
import { Ban, BookCheck, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useIsMobile } from '../../hooks/use-mobile';

const RulesSection = () => {
  const isMobile = useIsMobile();
  const restrictions = [
  "Participants must bring their own laptops, chargers, extension boards/spike busters, and any additional hardware required for development.",
  "A valid college ID card is mandatory for entry and verification.",
  "Team leaders will receive a Registration Confirmation email once the team registration is successfully completed.",
  "Snacks and beverages will be provided during the event.",
  "Registration fee : 250/- per head",
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
  return (
    <section id="rules" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 cyber-grid opacity-30"></div>
      
      {/* Animated Background Shapes - Only on desktop */}
      {!isMobile && (
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Static shapes for visual effect only */}
        <div className="absolute top-[8%] right-[10%] w-16 h-16 md:w-24 md:h-24 border-3 border-squid-pink/20 rounded-full"></div>
        <div className="absolute bottom-[15%] left-[5%] w-14 h-14 md:w-18 md:h-18 border-3 border-squid-pink/25"></div>
        <div className="absolute top-[45%] left-[3%] w-12 h-12 md:w-16 md:h-16 border-2 border-squid-teal/25 rounded-full"></div>
        <div className="absolute bottom-[35%] right-[4%] w-10 h-10 md:w-14 md:h-14 border-2 border-squid-pink/20 rounded-full"></div>
      </div>
      )}
      
      <div className="container mx-auto px-4 z-10 relative squid-section-frame">
        <div
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cyber font-bold mb-4">
            <span className="neon-text-pink">RULES &</span> <span className="neon-text-red">REGULATIONS</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Please review all guidelines carefully before participating
          </p>
          
          {/* Squid Game Shapes */}
          <div className="squid-symbol-divider" aria-hidden="true">
            <div className="w-4 h-4 border-2 border-squid-pink rounded-full"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
            <div className="w-4 h-4 border-2 border-squid-pink rotate-45"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div
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
          </div>

          <div
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
          </div>
        </div>

        <div
          className="mt-12 p-6 rounded-lg bg-black/30 border border-squid-pink/30 squid-card squid-game-alert"
        >
          <h3 className="text-2xl font-cyber font-bold mb-4 text-center squid-elimination-text">WARNING</h3>
          <p className="text-gray-300 text-center">
            Failure to comply with these rules may result in <span className="squid-elimination-text font-bold">IMMEDIATE ELIMINATION</span> from the competition.
            The judges' decisions are final and binding on all matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
