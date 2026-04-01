import React from 'react';

interface AnimatedSquidBackgroundProps {
  density?: 'low' | 'medium' | 'high';
  className?: string;
}

const AnimatedSquidBackground: React.FC<AnimatedSquidBackgroundProps> = ({ 
  density = 'medium',
  className = ''
}) => {
  const shapes = density === 'low' ? 6 : density === 'high' ? 15 : 10;
  
  const generateShapes = () => {
    const elements = [];
    
    for (let i = 0; i < shapes; i++) {
      const type = i % 3; // 0: circle, 1: triangle, 2: square
      const isPink = i % 2 === 0;
      const color = isPink ? 'squid-pink' : 'squid-teal';
      const opacity = 15 + (i % 3) * 10; // 15, 25, or 35
      const size = 8 + (i % 4) * 4; // 8, 12, 16, or 20
      const top = (i * 17) % 90;
      const left = (i * 23 + 10) % 95;
      const delay = (i * 0.7) % 5;
      
      const animations = [
        'squid-shape-float',
        'squid-shape-float-reverse',
        'squid-shape-drift-left',
        'squid-shape-drift-right',
        'squid-shape-spin',
        'squid-shape-spin-reverse'
      ];
      const animation = animations[i % animations.length];
      
      if (type === 0) {
        // Circle
        elements.push(
          <div
            key={`circle-${i}`}
            className={`absolute w-${size} h-${size} md:w-${size + 4} md:h-${size + 4} border-2 md:border-3 border-${color}/${opacity} rounded-full ${animation} squid-shape-pulse`}
            style={{ 
              top: `${top}%`, 
              left: `${left}%`,
              animationDelay: `${delay}s`,
              width: `${size * 4}px`,
              height: `${size * 4}px`
            }}
          />
        );
      } else if (type === 1) {
        // Triangle
        const triSize = size * 1.5;
        elements.push(
          <div
            key={`triangle-${i}`}
            className={`absolute ${animation} squid-shape-pulse`}
            style={{ 
              top: `${top}%`, 
              left: `${left}%`,
              animationDelay: `${delay}s`
            }}
          >
            <div 
              className={`w-0 h-0`}
              style={{
                borderLeft: `${triSize}px solid transparent`,
                borderRight: `${triSize}px solid transparent`,
                borderBottom: `${triSize * 1.7}px solid`,
                borderBottomColor: isPink ? 'rgba(237, 27, 118, 0.' + (opacity / 100).toFixed(1).slice(2) + ')' : 'rgba(6, 123, 123, 0.' + (opacity / 100).toFixed(1).slice(2) + ')'
              }}
            />
          </div>
        );
      } else {
        // Square
        elements.push(
          <div
            key={`square-${i}`}
            className={`absolute border-2 md:border-3 border-${color}/${opacity} ${animation} squid-shape-pulse`}
            style={{ 
              top: `${top}%`, 
              left: `${left}%`,
              animationDelay: `${delay}s`,
              width: `${size * 3.5}px`,
              height: `${size * 3.5}px`
            }}
          />
        );
      }
    }
    
    return elements;
  };

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}>
      {generateShapes()}
    </div>
  );
};

export default AnimatedSquidBackground;
