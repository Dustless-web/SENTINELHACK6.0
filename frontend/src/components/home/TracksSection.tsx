import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShieldCheck, Cloud, Bot } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const tracks = [
  {
    id: "01",
    title: "Data Science",
    subtitle: "Analytics & ML Solutions",
    description: "Develop data-driven solutions using machine learning, AI, and advanced analytics to solve real-world problems. Only the sharpest algorithms will survive.",
    icon: <Database className="h-8 w-8" />,
    theme: "pink"
  },
  {
    id: "02",
    title: "Blockchain & Cybersecurity",
    subtitle: "Digital Defense & Trust",
    description: "Build secure systems, implement blockchain solutions, and create tools to protect digital assets. Guard your code like your life depends on it.",
    icon: <ShieldCheck className="h-8 w-8" />,
    theme: "red"
  },
  {
    id: "03",
    title: "Cloud Computing",
    subtitle: "Scalable Infrastructure",
    description: "Create cloud-native applications, serverless solutions, and scalable architectures. Build systems that can handle the ultimate test.",
    icon: <Cloud className="h-8 w-8" />,
    theme: "teal"
  },
  {
    id: "04",
    title: "Agentic AI",
    subtitle: "Autonomous Intelligence",
    description: "Build autonomous AI agents, multi-agent systems, and intelligent automation. Create entities that think, learn, and conquer.",
    icon: <Bot className="h-8 w-8" />,
    theme: "pink"
  }
];

const TracksSection = () => {
  const isMobile = useIsMobile();

  // Parallax animation for background environment
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

  // Helper to map themes to specific tailwind classes
  const getThemeStyles = (theme: string) => {
    switch (theme) {
      case 'red':
        return {
          text: 'text-[#ff3a6a]',
          border: 'group-hover:border-[#ff3a6a]/50',
          shadow: 'group-hover:shadow-[0_0_30px_rgba(255,58,106,0.15)]',
          glow: 'from-[#ff3a6a]/10',
          accent: 'bg-gradient-to-r from-transparent via-[#ff3a6a] to-transparent',
          iconBg: 'bg-[#ff3a6a]/10 border-[#ff3a6a]/30'
        };
      case 'teal':
        return {
          text: 'text-squid-teal',
          border: 'group-hover:border-squid-teal/50',
          shadow: 'group-hover:shadow-[0_0_30px_rgba(0,191,165,0.15)]',
          glow: 'from-squid-teal/10',
          accent: 'bg-gradient-to-r from-transparent via-squid-teal to-transparent',
          iconBg: 'bg-squid-teal/10 border-squid-teal/30'
        };
      case 'pink':
      default:
        return {
          text: 'text-squid-pink',
          border: 'group-hover:border-squid-pink/50',
          shadow: 'group-hover:shadow-[0_0_30px_rgba(255,0,91,0.15)]',
          glow: 'from-squid-pink/10',
          accent: 'bg-gradient-to-r from-transparent via-squid-pink to-transparent',
          iconBg: 'bg-squid-pink/10 border-squid-pink/30'
        };
    }
  };

  return (
    <section id="tracks" className="py-8 md:py-28 relative overflow-hidden bg-[#020202]">
      
      {/* Immersive Environment Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-20 mix-blend-screen"></div>
        {/* Deep background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-squid-teal/5 rounded-full blur-[120px]"></div>
      </div>
      
      {/* Animated Background Shapes */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            custom={{ yOffset: -40, rotation: 180, duration: 20 }}
            animate="animate"
            variants={floatingVariant}
            className="absolute top-[15%] right-[8%] w-16 md:w-24 opacity-10"
          >
            <svg viewBox="0 0 100 100" className="text-squid-pink overflow-visible">
              <polygon points="50,10 95,90 5,90" fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          
          <motion.div 
            custom={{ yOffset: 50, rotation: -90, duration: 25 }}
            animate="animate"
            variants={floatingVariant}
            className="absolute bottom-[20%] left-[5%] w-20 md:w-32 opacity-10 blur-[2px]"
          >
            <svg viewBox="0 0 100 100" className="text-squid-teal overflow-visible">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="3" rx="4"/>
            </svg>
          </motion.div>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-cyber tracking-widest mb-4">
            <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">BATTLE</span><span className="text-squid-teal drop-shadow-[0_0_15px_rgba(0,191,165,0.6)]">GROUNDS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 font-light tracking-wide leading-relaxed">
            Choose your arena and prove your worth in the ultimate tech survival challenge. Only the most robust architectures will emerge victorious.
          </p>
          
          {/* Minimalist Divider */}
          <div className="flex items-center justify-center gap-3 mt-8 opacity-60">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-squid-teal"></div>
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-squid-teal"></div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-squid-teal"></div>
          </div>
        </motion.div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {tracks.map((track, index) => {
            const styles = getThemeStyles(track.theme);
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full"
              >
                <div className={`relative group h-full bg-[#050505] rounded-xl border border-white/10 ${styles.border} ${styles.shadow} transition-all duration-500 overflow-hidden flex flex-col p-4 md:p-8 hover:-translate-y-1`}>
                  
                  {/* Top Accent Line */}
                  <div className={`absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.accent}`}></div>
                  
                  {/* Internal ambient hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${styles.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                  
                  {/* Track ID Marker */}
                  <div className="absolute top-4 right-6 font-code text-xs text-white/20 tracking-widest group-hover:text-white/40 transition-colors">
                    TRACK_{track.id}
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className={`w-16 h-16 rounded-lg border flex items-center justify-center mb-4 transition-colors duration-500 ${styles.iconBg} ${styles.text}`}>
                      <div className="transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {track.icon}
                      </div>
                    </div>
                    
                    {/* Typography */}
                    <h3 className="text-xl md:text-2xl font-cyber mb-1 text-white group-hover:text-white transition-colors duration-300 tracking-wide">
                      {track.title}
                    </h3>
                    <h4 className={`text-sm md:text-base font-cyber mb-3 tracking-widest uppercase opacity-80 ${styles.text}`}>
                      {track.subtitle}
                    </h4>
                    
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-auto group-hover:text-gray-300 transition-colors">
                      {track.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;