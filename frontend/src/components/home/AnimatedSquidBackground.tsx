import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface AnimatedSquidBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const AnimatedSquidBackground: React.FC<AnimatedSquidBackgroundProps> = ({ 
  density = 'medium',
  className = ''
}) => {
  // Balanced count for visibility without overwhelming
  const elementCount = density === 'low' ? 8 : density === 'high' ? 16 : 12;

  const elementsData = useMemo(() => {
    return Array.from({ length: elementCount }).map((_, i) => {
      // 50/50 split between Guards and Floating Shapes
      const isGuard = i % 2 === 0; 
      const type = Math.floor(Math.random() * 3); // 0: Circle, 1: Triangle, 2: Square
      
      // Moderate sizes (70px to 130px) for good visibility
      const size = Math.floor(Math.random() * 60) + 70; 
      
      // Balanced opacity (0.15 to 0.30)
      const opacity = Math.random() * 0.15 + 0.15; 
      
      // Light blur for depth
      const blur = Math.random() > 0.6 ? 'blur(2px)' : 'none'; 
      
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      
      // Slower, more gentle movements
      const duration = Math.random() * 20 + 20; 
      const delay = Math.random() * 4;
      
      // Moderate drift paths
      const xOffset = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 50 + 25); 
      const yOffset = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 50 + 25); 

      // Brand colors
      const colors = ['#FF005B', '#00BFA5', '#ffffff', '#ff3a6a', '#067b7b'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return { id: i, isGuard, type, size, opacity, blur, top, left, duration, delay, xOffset, yOffset, color };
    });
  }, [elementCount]);

  // Gentle, subtle floating animation
  const floatVariant = {
    animate: (custom: any) => ({
      x: [0, custom.xOffset, 0],
      y: [0, custom.yOffset, 0],
      opacity: [custom.opacity, custom.opacity * 1.3, custom.opacity],
      rotate: custom.isGuard ? 0 : [0, 180, 360], // Gentle rotation for shapes
      scale: [1, 1.05, 1], // Subtle scaling
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "easeInOut", 
        delay: custom.delay
      }
    })
  };

  const renderElement = (data: any) => {
    if (data.isGuard) {
      // Render 2D Pink Guard
      return (
        <svg width={data.size} height={data.size * 1.2} viewBox="0 0 100 120" className="overflow-visible">
          {/* Guard Body / Jumpsuit */}
          <path d="M 15 120 C 15 70, 30 60, 50 60 C 70 60, 85 70, 85 120 Z" fill="#FF005B" />
          <circle cx="50" cy="40" r="32" fill="#FF005B" />
          <ellipse cx="50" cy="40" rx="22" ry="26" fill="#050505" />
          {/* Masks */}
          {data.type === 0 && <circle cx="50" cy="40" r="10" fill="none" stroke="#ffffff" strokeWidth="2.5" />}
          {data.type === 1 && <polygon points="50,28 62,48 38,48" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round" />}
          {data.type === 2 && <rect x="41" y="31" width="18" height="18" fill="none" stroke="#ffffff" strokeWidth="2.5" />}
        </svg>
      );
    } else {
      // Render Hollow Geometric Shape
      return (
        <svg width={data.size} height={data.size} viewBox="0 0 100 100" className="overflow-visible">
          {data.type === 0 && <circle cx="50" cy="50" r="40" fill="none" stroke={data.color} strokeWidth="6" />}
          {data.type === 1 && <polygon points="50,15 90,85 10,85" fill="none" stroke={data.color} strokeWidth="6" strokeLinejoin="round" />}
          {data.type === 2 && <rect x="15" y="15" width="70" height="70" fill="none" stroke={data.color} strokeWidth="6" rx="4" />}
        </svg>
      );
    }
  };

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      {elementsData.map((data) => (
        <motion.div
          key={data.id}
          custom={data}
          variants={floatVariant}
          initial={{ opacity: 0 }}
          animate="animate"
          className="absolute"
          style={{
            top: `${data.top}%`,
            left: `${data.left}%`,
            // Subtle glowing shadow for gentle visibility
            filter: `drop-shadow(0px 0px 10px ${data.isGuard ? 'rgba(255,0,91,0.3)' : data.color + '50'}) ${data.blur}`, 
          }}
        >
          {renderElement(data)}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSquidBackground;