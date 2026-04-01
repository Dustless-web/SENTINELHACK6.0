
import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShieldCheck, Cloud, Bot } from 'lucide-react';

const tracks = [
  {
    title: "Data Science",
    subtitle: "Analytics & ML Solutions",
    description: "Develop data-driven solutions using machine learning, AI, and advanced analytics to solve real-world problems.",
    icon: <Database className="h-8 w-8 text-squid-pink" />,
    color: 'squid-pink'
  },
  {
    title: "Cybersecurity & Blockchain",
    subtitle: "Digital Defense & Trust",
    description: "Build secure systems, implement blockchain solutions, and create tools to protect digital assets and ensure data integrity.",
    icon: <ShieldCheck className="h-8 w-8 text-squid-teal" />,
    color: 'squid-teal'
  },
  {
    title: "Cloud Computing",
    subtitle: "Scalable Infrastructure",
    description: "Create cloud-native applications, serverless solutions, and scalable architectures that leverage modern cloud platforms.",
    icon: <Cloud className="h-8 w-8 text-squid-pink" />,
    color: 'squid-pink'
  },
  {
    title: "Agentic AI",
    subtitle: "Autonomous Intelligence",
    description: "Build autonomous AI agents, multi-agent systems, and intelligent automation solutions that can reason and act independently.",
    icon: <Bot className="h-8 w-8 text-squid-teal" />,
    color: 'squid-teal'
  }
];

const TracksSection = () => {
  return (
    <section id="tracks" className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-16 h-16 md:w-24 md:h-24 border-3 border-squid-pink/20 rounded-full squid-shape-float squid-shape-pulse"></div>
        <div className="absolute bottom-[20%] left-[3%] w-12 h-12 md:w-16 md:h-16 border-2 border-squid-teal/25 squid-shape-spin squid-shape-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-[40%] left-[8%] squid-shape-drift-left squid-shape-pulse" style={{animationDelay: '2s'}}>
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] md:border-l-[30px] md:border-r-[30px] md:border-b-[52px] border-l-transparent border-r-transparent border-b-squid-pink/20"></div>
        </div>
        <div className="absolute bottom-[40%] right-[6%] w-14 h-14 md:w-20 md:h-20 border-3 border-squid-teal/20 rounded-full squid-shape-float-reverse squid-shape-pulse" style={{animationDelay: '3s'}}></div>
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
            <span className="neon-text-pink">HACKATHON</span> <span className="neon-text-teal">TRACKS</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-gray-300">
            Choose your domain and showcase your skills in the tech arena that excites you the most.
          </p>
          
          {/* Squid Game Shapes */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-4 h-4 border-2 border-squid-pink rounded-full"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-squid-pink"></div>
            <div className="w-4 h-4 border-2 border-squid-pink rotate-45"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="squid-card p-4 sm:p-5 md:p-6 rounded-lg border border-squid-pink/30 hover:border-squid-pink/60 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 sm:mb-4">{track.icon}</div>
                <h3 className={`text-lg sm:text-xl md:text-xl font-cyber mb-1 sm:mb-2 text-${track.color}`}>{track.title}</h3>
                <h4 className="text-sm sm:text-base text-gray-400 mb-2 sm:mb-3 italic">{track.subtitle}</h4>
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">{track.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
