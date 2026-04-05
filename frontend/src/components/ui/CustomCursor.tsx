import React, { useEffect, useState } from 'react';
import { useIsMobile } from '../../hooks/use-mobile';

const CustomCursor = () => {
  const isMobile = useIsMobile();
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(true);

  if (isMobile) {
    return null;
  }

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${visible ? '' : 'custom-cursor--hidden'}`}
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    >
      <span className="custom-cursor__outer" />
      <span className="custom-cursor__inner" />
    </div>
  );
};

export default CustomCursor;
