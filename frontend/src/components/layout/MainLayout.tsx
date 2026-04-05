import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#020202] relative overflow-hidden font-sans">
      
      {/* 1. Base Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#020202] z-0"></div>

      {/* 2. Cyber Grid Layer */}
      <div className="absolute inset-0 cyber-grid opacity-20 z-0 mix-blend-screen"></div>

      {/* 3. Breathing Ambient Lights (Squid Pink & Teal) */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-squid-pink/20 rounded-full blur-[120px] pointer-events-none z-0"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-squid-teal/20 rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* 4. Film Grain / Noise Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      {/* 5. Animated CRT Scanline */}
      <motion.div 
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[8px] bg-gradient-to-b from-transparent via-squid-pink/20 to-transparent z-0 pointer-events-none"
      />

      {/* 6. Static CRT Horizontal Lines */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>

      {/* 7. Cinematic Vignette (Dark edges) */}
      <div className="absolute inset-0 pointer-events-none z-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]"></div>

      {/* --- CONTENT WAPPER --- */}
      <div className="relative z-50 flex flex-col min-h-screen">
        <Navbar />
        
        {/* Page Content with Premium Entry Transition */}
        <motion.main 
          className="flex-grow flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Snappy bezier curve
        >
          {children}
        </motion.main>
        
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;