import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Cursor = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.3);
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

const CursorRing = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 50px;
  height: 50px;
  border: 2px solid rgba(100, 255, 218, 0.5);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate(-50%, -50%);
`;

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    
    const handleLinkHover = () => setCursorVariant('hover');
    const handleLinkLeave = () => setCursorVariant('default');
    
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 0.8,
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.5,
    },
  };
  
  const ringVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    click: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.5,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 2,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  };

  return (
    <>
      <Cursor
        variants={variants}
        animate={cursorVariant}
      />
      <CursorRing
        variants={ringVariants}
        animate={cursorVariant}
      />
    </>
  );
};

export default MouseFollower;
