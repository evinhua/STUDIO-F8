import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #0a192f, #112240);
  padding: 0 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  z-index: 2;
`;

const Greeting = styled(motion.p)`
  color: #64ffda;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-family: 'Roboto Mono', monospace;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: #ccd6f6;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 600;
  color: #8892b0;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled(motion.p)`
  color: #8892b0;
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const CallToAction = styled(motion.a)`
  display: inline-block;
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const BackgroundElement = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.05);
  filter: blur(80px);
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <BackgroundElement
        initial={{ x: -200, y: -200 }}
        animate={{
          x: [-200, 200, -200],
          y: [-200, 200, -200],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        style={{ top: '20%', left: '10%' }}
      />
      <BackgroundElement
        initial={{ x: 200, y: 200 }}
        animate={{
          x: [200, -200, 200],
          y: [200, -200, 200],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        style={{ bottom: '20%', right: '10%' }}
      />
      
      <HeroContent>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to
        </Greeting>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Studio F8
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Creative Solutions for Modern Businesses
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          We are a full-service creative studio specializing in video production, 
          motion graphics, and digital content creation. Our team of experts brings 
          your vision to life with cutting-edge technology and innovative storytelling.
        </Description>
        <CallToAction
          href="#contact"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </CallToAction>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
